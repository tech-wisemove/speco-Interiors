import JsonLd from '@/components/JsonLd';
import ProjectCategoryPage from '@/components/pages/ProjectCategoryPage';
import { getAllCategorySlugs, getCategoryBySlug } from '@/lib/projects';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return pageMetadata('projects');
  return pageMetadata({
    title: `${category.title} in Kochi | SPECO Interiors`,
    description: `${category.body} Explore ${category.title.toLowerCase()} by SPECO Interiors — best interior designers in Kochi.`,
    path: `/projects/${category.slug}`,
    keywords: [
      category.title,
      `${category.title} Kochi`,
      'SPECO Interiors',
      'best interior designers in Kochi',
      'interior design Kochi',
    ],
  });
}

export default function Page({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: category.title, path: `/projects/${category.slug}` },
  ]);

  return (
    <>
      <JsonLd data={crumbs} />
      <ProjectCategoryPage category={category} />
    </>
  );
}
