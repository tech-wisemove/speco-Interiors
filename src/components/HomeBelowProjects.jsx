import { withBase } from '@/lib/paths';
import Link from 'next/link';
import { FALLBACK_BLOGS } from '@/lib/blogs';
import { FALLBACK_FAQS } from '@/lib/faqs';
import { TESTIMONIALS } from '@/lib/testimonials';
import HorizontalScroller from '@/components/HorizontalScroller';

export default function HomeBelowProjects() {
  const homeFaqs = FALLBACK_FAQS.slice(0, 3);
  const blogs = FALLBACK_BLOGS.slice(0, 6);

  return (
    <>
      {/* Testimonials — horizontal scroll */}
      <div className="site-section home-band home-band--soft">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-md-8">
              <h2 className="heading-39291">
                Customer
                <br />
                Testimonials
              </h2>
              <p>Words from clients who trusted us to craft their spaces.</p>
            </div>
          </div>

          <HorizontalScroller label="testimonials">
            {TESTIMONIALS.map((t) => (
              <div className="h-scroll__item" key={t.name}>
                <div className="home-card">
                  <div className="home-card__quote-mark" aria-hidden="true">
                    ”
                  </div>
                  <p className="home-card__quote">{t.quote}</p>
                  <div className="home-card__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroller>

          <div className="row">
            <div className="col-12 text-center mt-4">
              <Link href="/testimonials" className="more-39291">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <h2 className="heading-39291">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p>Quick answers about our services and process.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              {homeFaqs.map((faq) => (
                <div className="home-faq" key={faq._id || faq.question}>
                  <h3 className="home-faq__q">{faq.question}</h3>
                  <p className="home-faq__a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center mt-4">
              <Link href="/faq" className="more-39291">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest news / blogs */}
      <div className="site-section home-band home-band--soft">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-md-8">
              <h2 className="heading-39291">
                Latest
                <br />
                News
              </h2>
              <p>Ideas and updates from the SPECO studio.</p>
            </div>
          </div>

          <HorizontalScroller label="latest news">
            {blogs.map((blog) => {
              const href = `/blogs/${blog.slug}`;
              return (
                <div className="h-scroll__item" key={blog._id || blog.slug}>
                  <article className="home-news-card">
                    <Link href={href} className="home-news-card__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={blog.coverImage?.url || withBase('/images/projects/jpg/project-01.jpg')}
                        alt={blog.title}
                      />
                    </Link>
                    <div className="home-news-card__body">
                      <span className="home-news-card__meta">{blog.author || 'Blog'}</span>
                      <h3>
                        <Link href={href}>{blog.title}</Link>
                      </h3>
                      <p>{blog.excerpt}</p>
                      <Link href={href} className="more-39291">
                        Read More
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </HorizontalScroller>

          <div className="row">
            <div className="col-12 text-center mt-4">
              <Link href="/blogs" className="more-39291">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
