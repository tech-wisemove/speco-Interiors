/**
 * Prefix absolute site paths in the static export so project Pages
 * (https://user.github.io/repo/) can load /css, /images, etc.
 *
 * Next.js already prefixes its own assets (/_next, Link hrefs) when basePath
 * is set — this script must NOT double-prefix those.
 */
import fs from 'fs';
import path from 'path';

const base = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
if (!base) {
  console.log('prefix-static-paths: no NEXT_PUBLIC_BASE_PATH — skip');
  process.exit(0);
}

const root = path.resolve('dist');
if (!fs.existsSync(root)) {
  console.error('prefix-static-paths: dist/ not found');
  process.exit(1);
}

const exts = new Set(['.html', '.css', '.js', '.txt', '.xml', '.webmanifest', '.json']);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (exts.has(path.extname(name))) files.push(full);
  }
  return files;
}

function alreadyPrefixed(absPath) {
  return absPath === base || absPath.startsWith(`${base}/`);
}

function rewrite(content) {
  // href="/x", src="/x", action="/x", content="/x"  (skip //cdn and already-prefixed)
  let out = content.replace(
    /\b(href|src|action|content)=(["'])(\/[^"']*)/g,
    (match, attr, quote, absPath) => {
      if (absPath.startsWith('//')) return match;
      if (alreadyPrefixed(absPath)) return match;
      return `${attr}=${quote}${base}${absPath}`;
    }
  );

  // url(/x), url('/x'), url("/x")
  out = out.replace(/url\(\s*(['"]?)(\/[^'")\s]*)/g, (match, quote, absPath) => {
    if (absPath.startsWith('//')) return match;
    if (alreadyPrefixed(absPath)) return match;
    return `url(${quote}${base}${absPath}`;
  });

  // @import "/x"
  out = out.replace(/@import\s+(['"])(\/[^'"]*)/g, (match, quote, absPath) => {
    if (absPath.startsWith('//')) return match;
    if (alreadyPrefixed(absPath)) return match;
    return `@import ${quote}${base}${absPath}`;
  });

  return out;
}

let count = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, 'utf8');
  const after = rewrite(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    count += 1;
  }
}

console.log(`prefix-static-paths: updated ${count} files with base ${base}`);
