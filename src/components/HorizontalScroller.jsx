'use client';

import { useRef } from 'react';

export default function HorizontalScroller({ children, label = 'Carousel' }) {
  const trackRef = useRef(null);

  function scrollByDir(dir) {
    const el = trackRef.current;
    if (!el) return;
    const item = el.querySelector('.h-scroll__item');
    const gap = 20;
    const step = item ? item.getBoundingClientRect().width + gap : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  return (
    <div className="h-scroll" aria-label={label}>
      <button
        type="button"
        className="h-scroll__btn h-scroll__btn--prev"
        aria-label={`Previous ${label}`}
        onClick={() => scrollByDir(-1)}
      >
        ‹
      </button>
      <div className="h-scroll__track" ref={trackRef}>
        {children}
      </div>
      <button
        type="button"
        className="h-scroll__btn h-scroll__btn--next"
        aria-label={`Next ${label}`}
        onClick={() => scrollByDir(1)}
      >
        ›
      </button>
    </div>
  );
}
