/** Public URL prefix for GitHub project Pages (e.g. `/swastam`). Empty on localhost / custom domain root. */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

/** Prefix a root-absolute site path (`/images/x`) for the current basePath. */
export function withBase(path = '/') {
  if (!path) return BASE_PATH || '/';
  if (/^(https?:|data:|mailto:|tel:|#)/i.test(path)) return path;
  if (!path.startsWith('/')) return `${BASE_PATH}/${path}`;
  if (!BASE_PATH) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
