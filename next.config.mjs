/** @type {import('next').NextConfig} */

// Optional: only for project pages like https://user.github.io/repo-name
// Leave empty when using a custom domain (SPECOinteriors.com) or user.github.io root site.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

const nextConfig = {
  // Static HTML export for GitHub Pages
  output: 'export',
  // Creates /about/index.html — works reliably on GitHub Pages
  trailingSlash: true,
  // next/image optimizer needs a server; disable for static hosting
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: '**' },
    ],
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
