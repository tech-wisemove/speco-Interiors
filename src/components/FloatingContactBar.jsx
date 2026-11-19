'use client';

import { withBase } from '@/lib/paths';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SharePanel from '@/components/SharePanel';

const LINKS = {
  quote: withBase('/contact'),
  brochure: withBase('/brochures/SPECO-catalogue-2026.pdf'),
  whatsapp: 'https://wa.me/919895443222',
  instagram: 'https://www.instagram.com/SPECOinteriors/',
  call: 'tel:+919895443222',
};

function isPastHero() {
  if (typeof window === 'undefined') return false;
  const hero =
    document.querySelector('.home-hero') ||
    document.querySelector('.ftco-blocks-cover-1') ||
    document.querySelector('.ftco-cover-1');

  if (!hero) {
    // No hero on page — show after a short scroll past the top
    return window.scrollY > 120;
  }

  // Show once the hero bottom has scrolled above the navbar area
  return hero.getBoundingClientRect().bottom <= 96;
}

export default function FloatingContactBar() {
  const pathname = usePathname();
  const [shareOpen, setShareOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;

    function update() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPastHero(isPastHero());
        setShowTop(window.scrollY > 420);
      });
    }

    // Recheck after route paint (hero may mount slightly later)
    setPastHero(false);
    setShowTop(false);
    update();
    const t = window.setTimeout(update, 120);

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <aside className="float-contact-bar" aria-label="Quick contact">
        <div
          className={`float-contact-bar__tabs${pastHero ? ' is-visible' : ''}`}
          aria-hidden={!pastHero}
        >
          <a
            href={LINKS.quote}
            className="float-contact-bar__quote"
            title="Get a Free Quote"
            tabIndex={pastHero ? 0 : -1}
          >
            <span>GET A FREE QUOTE</span>
          </a>

          <a
            href={LINKS.brochure}
            className="float-contact-bar__quote float-contact-bar__brochure"
            download="SPECO-Catalogue-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Brochure"
            tabIndex={pastHero ? 0 : -1}
          >
            <span>DOWNLOAD BROCHURE</span>
          </a>
        </div>

        <div className="float-contact-bar__icons">
          <button
            type="button"
            className={`float-contact-bar__btn float-contact-bar__btn--share${shareOpen ? ' is-active' : ''}`}
            aria-label="Share this page"
            title="Share"
            aria-expanded={shareOpen}
            onClick={() => setShareOpen(true)}
          >
            <i className="fas fa-share-alt" aria-hidden="true" />
          </button>
          <a
            href={LINKS.whatsapp}
            className="float-contact-bar__btn float-contact-bar__btn--wa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
          </a>
          <a
            href={LINKS.instagram}
            className="float-contact-bar__btn float-contact-bar__btn--ig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>
          <a
            href={LINKS.call}
            className="float-contact-bar__btn float-contact-bar__btn--call"
            aria-label="Call us"
            title="Call us"
          >
            <i className="fas fa-phone" aria-hidden="true" />
          </a>
          <button
            type="button"
            className={`float-contact-bar__btn float-contact-bar__btn--top${showTop ? ' is-visible' : ''}`}
            aria-label="Scroll to top"
            title="Back to top"
            tabIndex={showTop ? 0 : -1}
            aria-hidden={!showTop}
            onClick={scrollToTop}
          >
            <i className="fas fa-chevron-up" aria-hidden="true" />
          </button>
        </div>
      </aside>

      <SharePanel open={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}
