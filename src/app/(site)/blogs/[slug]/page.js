import SiteShell from '@/components/SiteShell';
import { FALLBACK_BLOGS, getFallbackBlogBySlug } from '@/lib/blogs';
import { buildMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import { withBase } from '@/lib/paths';

export function generateStaticParams() {
  return FALLBACK_BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const blog = getFallbackBlogBySlug(params.slug);
  if (!blog) return {};
  const title = blog.seo?.metaTitle || `${blog.title} | Swastam Interiors Kochi`;
  return buildMetadata({
    title,
    description:
      blog.seo?.metaDescription ||
      blog.excerpt ||
      `${blog.title} — interior design insights from Swastam Interiors, Kochi.`,
    path: `/blogs/${blog.slug}`,
    image: blog.seo?.ogImage || blog.coverImage?.url,
    keywords: [
      ...(blog.tags || []),
      'Swastam Interiors',
      'interior designers in Kochi',
      'best interior designers in Kochi',
    ],
  });
}

export default function BlogDetailPage({ params }) {
  const blog = getFallbackBlogBySlug(params.slug);
  if (!blog) notFound();

  return (
    <SiteShell>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{
            backgroundImage: `url('${blog.coverImage?.url || withBase('/images/projects/jpg/project-03.jpg')}')`,
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <h1 style={{ color: 'white' }}>{blog.title}</h1>
                <p>{blog.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-8"
              dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.excerpt || ''}</p>` }}
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
