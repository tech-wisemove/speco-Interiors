'use client';

import { useEffect, useState } from 'react';

export default function ProjectImageCarousel({ images = [], alt = 'Project' }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3500);
    return () => clearInterval(id);
  }, [total]);

  if (!total) return null;

  return (
    <div className="proj-carousel">
      <div className="proj-carousel__track">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`${alt} photo ${i + 1}`}
            className={`proj-carousel__img${i === index ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      {total > 1 ? (
        <div className="proj-carousel__dots" role="tablist" aria-label="Project images">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`proj-carousel__dot${i === index ? ' is-active' : ''}`}
              aria-label={`Show image ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
