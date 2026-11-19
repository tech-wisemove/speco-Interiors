import SiteShell from '@/components/SiteShell';
import { TESTIMONIALS } from '@/lib/testimonials';
import { pageMetadata } from '@/lib/seo';
import { withBase } from '@/lib/paths';

export const metadata = pageMetadata('testimonials');

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-11.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>Customer Testimonials</h1>
                <p>Real homes, real spaces, real stories from our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section testimonials-page">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8">
              <h2 className="heading-39291">
                Voices of
                <br />
                Our Clients
              </h2>
              <p>
                Browse every review below — project photos, client names, and their words about working
                with SPECO Interiors.
              </p>
            </div>
          </div>

          <div className="testimonials-stack">
            {TESTIMONIALS.map((t, index) => (
              <article
                className={`testimonial-entry${index % 2 === 1 ? ' testimonial-entry--alt' : ''}`}
                key={t.name}
              >
                <div className="testimonial-entry__gallery" aria-label={`Photos from ${t.name}'s project`}>
                  {t.images.map((src, i) => (
                    <figure className="testimonial-entry__figure" key={`${t.name}-${src}-${i}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`${t.name} project photo ${i + 1}`} loading="lazy" />
                    </figure>
                  ))}
                </div>

                <div className="testimonial-entry__body">
                  <div className="testimonial-entry__quote-mark" aria-hidden="true">
                    ”
                  </div>
                  <blockquote className="testimonial-entry__quote">
                    <p>{t.quote}</p>
                  </blockquote>
                  <footer className="testimonial-entry__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
