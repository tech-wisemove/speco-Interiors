import { FALLBACK_BLOGS } from '@/lib/blogs';
import { getAllCategorySlugs } from '@/lib/projects';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/gallery',
    '/contact',
    '/careers',
    '/blogs',
    '/faq',
    '/testimonials',
    '/terms',
    '/privacy',
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '' ? 1 : path === '/contact' || path === '/services' ? 0.9 : 0.75,
    })),
    ...getAllCategorySlugs().map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...FALLBACK_BLOGS.map((b) => ({
      url: `${SITE_URL}/blogs/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
