import './globals.css';
import { BRAND_SHORT, DEFAULT_DESCRIPTION, LOGO_PATH, PAGE_SEO, pageMetadata } from '@/lib/seo';

export const metadata = {
  ...pageMetadata('home'),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${BRAND_SHORT}`,
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [
      { url: LOGO_PATH, type: 'image/png' },
      { url: '/images/logo-swastam.png', type: 'image/png' },
    ],
    shortcut: LOGO_PATH,
    apple: [{ url: LOGO_PATH, type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#ACA18F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
