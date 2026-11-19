import { withBase } from '@/lib/paths';

const ENV_URL = String(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '').trim();

let resolvedUrl = ENV_URL.includes('script.google.com') ? ENV_URL : '';
let resolvePromise = null;

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

function isValidScriptUrl(url) {
  return Boolean(url && String(url).includes('script.google.com') && String(url).includes('/exec'));
}

/** Load URL from public/form-config.json when build-time env was missing. */
async function resolveScriptUrl() {
  if (isValidScriptUrl(resolvedUrl)) return resolvedUrl;

  if (!resolvePromise) {
    resolvePromise = (async () => {
      try {
        const res = await fetch(withBase('/form-config.json'), { cache: 'no-store' });
        if (!res.ok) return '';
        const data = await res.json();
        const url = String(data?.googleScriptUrl || '').trim();
        return isValidScriptUrl(url) ? url : '';
      } catch {
        return '';
      }
    })().then((url) => {
      if (url) resolvedUrl = url;
      return resolvedUrl;
    });
  }

  return resolvePromise;
}

export function isGoogleFormsConfigured() {
  return isValidScriptUrl(resolvedUrl) || isValidScriptUrl(ENV_URL);
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Could not read CV file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Submit form payload to Google Apps Script web app.
 * @param {'contact'|'careers'|'subscribe'} formType
 * @param {Record<string, unknown>} fields
 * @param {{ cvFile?: File }} [options]
 */
export async function submitToGoogleSheet(formType, fields, options = {}) {
  const scriptUrl = await resolveScriptUrl();

  if (!isValidScriptUrl(scriptUrl)) {
    throw new Error(
      'Google form endpoint is not configured. Hard-refresh the page, or set NEXT_PUBLIC_GOOGLE_SCRIPT_URL and redeploy.'
    );
  }

  const payload = {
    formType,
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    ...fields,
  };

  if (formType === 'careers' && options.cvFile) {
    const file = options.cvFile;
    if (file.size > MAX_CV_BYTES) {
      throw new Error('CV must be 5 MB or smaller');
    }
    if (file.type && !ALLOWED_CV_TYPES.includes(file.type)) {
      throw new Error('CV must be a PDF or Word document (.pdf, .doc, .docx)');
    }
    payload.cvFileName = file.name;
    payload.cvMimeType = file.type || 'application/pdf';
    payload.cvBase64 = await fileToBase64(file);
  }

  // text/plain avoids CORS preflight with Apps Script
  const res = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'follow',
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('Unexpected response from Google Sheets. Check Apps Script deployment.');
  }

  if (!res.ok || data.ok === false) {
    throw new Error(data.error || 'Submission failed. Please try again.');
  }

  return data;
}
