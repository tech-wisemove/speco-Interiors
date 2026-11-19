'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Before and after comparison',
}) {
  const wrapRef = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    function onMove(e) {
      if (!dragging.current) return;
      if (e.cancelable && e.type === 'touchmove') e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromClientX]);

  function startDrag(e) {
    dragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromClientX(clientX);
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 3));
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 3));
    }
  }

  return (
    <div
      className="ba-slider"
      ref={wrapRef}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      role="slider"
      aria-label={alt}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba-slider__img" src={beforeSrc} alt={`${alt} — before`} draggable={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ba-slider__img ba-slider__img--after"
        src={afterSrc}
        alt={`${alt} — after`}
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="ba-slider__tag ba-slider__tag--after">{afterLabel}</span>
      <span className="ba-slider__tag ba-slider__tag--before">{beforeLabel}</span>
      <div className="ba-slider__handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="ba-slider__line" />
        <span className="ba-slider__knob">
          <span aria-hidden="true">‹ ›</span>
        </span>
      </div>
    </div>
  );
}
