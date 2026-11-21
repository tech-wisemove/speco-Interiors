
import { withBase } from '@/lib/paths';

const ENV_URL = String(
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
).trim();

let resolvedUrl = ENV_URL.includes('script.google.com')
  ? ENV_URL
  : '';

let resolvePromise = null;

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

/**
 * Submit form data to Google Apps Script.
 *
 * Supported forms:
 * contact
 * careers
 * subscribe
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
  // Resolve Google Script URL
  const scriptUrl = await resolveScriptUrl();

  if (!isValidScriptUrl(scriptUrl)) {
    throw new Error(
      'Google Apps Script URL is not configured. Check form-config.json.'
    );
  }

  // Prepare payload
  const payload = {
    formType,
    submittedAt: new Date().toISOString(),

    pageUrl:
      typeof window !== 'undefined'
        ? window.location.href
        : '',

    ...fields,
  };

  // Career CV upload
  if (formType === 'careers') {
    const file = options.cvFile;

    if (!(file instanceof File) || !file.size) {
      throw new Error('Please upload your CV.');
    }

    if (file.size > MAX_CV_BYTES) {
      throw new Error('CV must be 5 MB or smaller.');
    }

    if (!ALLOWED_CV_TYPES.includes(file.type)) {
      throw new Error(
        'CV must be a PDF or Word document (.pdf, .doc, .docx).'
      );
    }

    payload.cvFileName = file.name;
    payload.cvMimeType = file.type;
    payload.cvBase64 = await fileToBase64(file);
  }

  // Send data to Google Apps Script
  const res = await fetch(scriptUrl, {
    method: 'POST',

    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },

    body: JSON.stringify(payload),

    redirect: 'follow',
  });

  // Read response
  const responseText = await res.text();

  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error(
      'Unexpected response from Google Apps Script. Check deployment.'
    );
  }

  // Handle errors
  if (!res.ok || data.ok === false) {
    throw new Error(
      data.error || 'Submission failed. Please try again.'
    );
  }

  // Return successful response
  return data;
}
