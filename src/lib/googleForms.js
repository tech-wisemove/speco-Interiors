
import { withBase } from '@/lib/paths';

const ENV_URL = String(
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
).trim();

let resolvedUrl = ENV_URL.includes('script.google.com')
  ? ENV_URL
  : '';

let resolvePromise = null;

/** One in-flight request per form so a double click cannot submit twice. */
const inFlight = new Set();

// CV validation
const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// Validate Google Apps Script URL
function isValidScriptUrl(url) {
  return Boolean(
    url &&
    String(url).includes('script.google.com') &&
    String(url).includes('/exec')
  );
}

// Resolve Google Script URL
async function resolveScriptUrl() {
  if (isValidScriptUrl(resolvedUrl)) {
    return resolvedUrl;
  }

  if (!resolvePromise) {
    resolvePromise = (async () => {
      try {
        const res = await fetch(
          withBase('/form-config.json'),
          { cache: 'no-store' }
        );

        if (!res.ok) return '';

        const data = await res.json();

        const url = String(
          data?.googleScriptUrl || ''
        ).trim();

        return isValidScriptUrl(url) ? url : '';

      } catch {
        return '';
      }
    })().then((url) => {
      if (url) resolvedUrl = url;
      return resolvedUrl;
    }).catch(() => {
      resolvePromise = null;
      return '';
    });
  }

  return resolvePromise;
}

// Check configuration
export function isGoogleFormsConfigured() {
  return (
    isValidScriptUrl(resolvedUrl) ||
    isValidScriptUrl(ENV_URL)
  );
}

// Convert CV file to Base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || '');

      const base64 = result.includes(',')
        ? result.split(',')[1]
        : result;

      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error('Could not read CV file'));
    };

    reader.readAsDataURL(file);
  });
}

function cvMimeType(file) {
  if (ALLOWED_CV_TYPES.includes(file.type)) return file.type;
  const ext = String(file.name || '').split('.').pop().toLowerCase();
  if (ext === 'pdf') return 'application/pdf';
  if (ext === 'doc') return 'application/msword';
  if (ext === 'docx') {
    return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  }
  return '';
}

/**
 * Submit Contact, Careers, or Subscribe to the same Apps Script web app.
 * The script stores every submission on the spreadsheet tab named Submissions.
 *
 * @param {'contact'|'careers'|'subscribe'} formType
 * @param {Record<string, unknown>} fields
 * @param {{ cvFile?: File }} options
 */

export async function submitToGoogleSheet(
  formType,
  fields,
  options = {}
) {
  if (inFlight.has(formType)) {
    throw new Error('A submission is already in progress. Please wait.');
  }

  inFlight.add(formType);

  try {
    const scriptUrl = await resolveScriptUrl();

    if (!isValidScriptUrl(scriptUrl)) {
      throw new Error(
        'Google Apps Script URL is not configured. Check form-config.json.'
      );
    }

    // formType and pageUrl are applied after fields so a form cannot override them.
    const payload = {
      submittedAt: new Date().toISOString(),
      ...fields,
      formType,
      pageUrl:
        typeof window !== 'undefined'
          ? window.location.href
          : '',
    };

    if (formType === 'careers') {
      const file = options.cvFile;

      if (!(file instanceof File) || !file.size) {
        throw new Error('Please upload your CV.');
      }

      if (file.size > MAX_CV_BYTES) {
        throw new Error('CV must be 5 MB or smaller.');
      }

      const mimeType = cvMimeType(file);
      if (!mimeType) {
        throw new Error(
          'CV must be a PDF or Word document (.pdf, .doc, .docx).'
        );
      }

      payload.cvFileName = file.name;
      payload.cvMimeType = mimeType;
      payload.cvBase64 = await fileToBase64(file);
    }

    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const responseText = await res.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      throw new Error(
        'Unexpected response from Google Apps Script. Check deployment.'
      );
    }

    if (!res.ok || !data || data.ok !== true) {
      throw new Error(
        (data && data.error) || 'Submission failed. Please try again.'
      );
    }

    return data;
  } finally {
    inFlight.delete(formType);
  }
}
