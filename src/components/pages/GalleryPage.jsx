'use client';

import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';

import { useEffect, useState } from 'react';

const GALLERY = [
  { src: withBase('/images/projects/jpg/project-01.jpg'), meta: 'Moments Captured', title: 'Beauty in every frame' },
  { src: withBase('/images/projects/jpg/project-02.jpg'), meta: 'Visual Stories', title: 'Fuel your imagination' },
  { src: withBase('/images/projects/jpg/project-03.jpg'), meta: 'Art in Focus', title: 'Creativity unveiled.' },
  { src: withBase('/images/projects/jpg/project-04.jpg'), meta: 'Ideas and Inspirations', title: 'Building dreams.' },
  { src: withBase('/images/projects/jpg/project-05.jpg'), meta: 'Framed Memories', title: 'Cherished moments' },
  { src: withBase('/images/projects/jpg/project-06.jpg'), meta: 'Design into Reality', title: 'Innovative interiors' },
  { src: withBase('/images/projects/jpg/project-07.jpg'), meta: 'Snapshots of Inspiration', title: 'Ignite your creativity' },
  { src: withBase('/images/projects/jpg/project-08.jpg'), meta: 'Colors of Life', title: 'Celebrate diversity' },
  { src: withBase('/images/projects/jpg/project-09.jpg'), meta: 'Premium Quality', title: 'Living exhanced' },
  { src: withBase('/images/projects/jpg/project-10.jpg'), meta: 'Timeless Expressions', title: 'Art that speaks' },
  { src: withBase('/images/projects/jpg/project-11.jpg'), meta: 'Lens on Creativity', title: 'Imagination in focus' },
  { src: withBase('/images/projects/jpg/project-12.jpg'), meta: 'Vanity Spaces', title: 'Clean lines, lasting finish' },
  { src: withBase('/images/projects/jpg/project-13.jpg'), meta: 'Open Living', title: 'Connected living spaces' },
  { src: withBase('/images/projects/jpg/project-14.jpg'), meta: 'Bedrooms', title: 'Calm, crafted retreats' },
  { src: withBase('/images/projects/jpg/project-15.jpg'), meta: 'Dining Areas', title: 'Gather in style' },
  { src: withBase('/images/projects/jpg/project-16.jpg'), meta: 'Outdoor Vanity', title: 'Designed for everyday living' },
];

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;

    function onKey(e) {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') {
        setActive((i) => (i === null ? i : (i + 1) % GALLERY.length));
      }
      if (e.key === 'ArrowLeft') {
        setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
      }
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  const item = active !== null ? GALLERY[active] : null;

  return (
    <div className="site-wrap" id="home-section">
      <LegacyPageNav pathname="/gallery" />

      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-13.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>Gallery</h1>
                <p>Spaces crafted with precision and care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch">
            {GALLERY.map((g, index) => (
              <div className="col-lg-3 col-md-6 mb-5" key={g.src}>
                <div className="post-entry-1 h-100">
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={() => setActive(index)}
                    aria-label={`Open ${g.title}`}
                  >
                    <img src={g.src} alt={g.title} title={g.title} className="img-fluid" />
                  </button>
                  <div className="post-entry-1-contents">
                    <span className="meta">{g.meta}</span>
                    <button type="button" className="gallery-title-btn" onClick={() => setActive(index)}>
                      <h2>{g.title}</h2>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {item ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close image"
            onClick={() => setActive(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length);
            }}
          >
            ‹
          </button>
          <figure className="gallery-lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.title} />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i + 1) % GALLERY.length);
            }}
          >
            ›
          </button>
        </div>
      ) : null}

      <SiteFooter />

    </div>
  );
}
