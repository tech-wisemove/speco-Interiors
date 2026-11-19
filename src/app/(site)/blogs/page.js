import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { FALLBACK_BLOGS } from '@/lib/blogs';
import { pageMetadata } from '@/lib/seo';
import { withBase } from '@/lib/paths';

export const metadata = pageMetadata('blogs');

export default function BlogsPage() {
  const blogs = FALLBACK_BLOGS;

  return (
    <SiteShell>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-03.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>Blog</h1>
                <p>Ideas rooted in care, built on trust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row blog-grid">
            {blogs.map((blog) => (
              <div className="col-md-6 col-lg-4 mb-4" key={blog._id || blog.slug}>
                <article className="home-news-card">
                  <Link href={`/blogs/${blog.slug}`} className="home-news-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.coverImage?.url || '/images/projects/jpg/project-01.jpg'}
                      alt={blog.title}
                    />
                  </Link>
                  <div className="home-news-card__body">
                    <span className="home-news-card__meta">{blog.author || 'Blog'}</span>
                    <h3>
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p>{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.slug}`} className="more-39291">
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
