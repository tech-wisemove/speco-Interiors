'use client';

import { withBase } from '@/lib/paths';
import { useEffect, useRef, useState } from 'react';

/** Set NEXT_PUBLIC_FEATURED_YOUTUBE_ID in .env.local / GitHub vars to override */
const VIDEO_ID =
  process.env.NEXT_PUBLIC_FEATURED_YOUTUBE_ID || 'vf5LaUHFUGc';

const POSTER = withBase('/images/projects/jpg/project-09.jpg');

function embedSrc({ autoplay, mute }) {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: mute ? '1' : '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    controls: '1',
    enablejsapi: '1',
  });
  return `https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`;
}

export default function FeaturedYoutube() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setInView(true);
          setActive(true);
          setMuted(true);
        } else if (!entry.isIntersecting && entry.intersectionRatio < 0.15) {
          // Pause by unloading autoplay when leaving viewport
          setInView(false);
          setActive(false);
        }
      },
      { threshold: [0, 0.15, 0.4, 0.6] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function playWithSound(e) {
    e?.preventDefault?.();
    setMuted(false);
    setActive(true);
  }

  return (
    <div className="featured-video" ref={sectionRef}>
      <div className="featured-video__frame">
        <div className="featured-video__accent" aria-hidden="true" />

        {!active ? (
          <button
            type="button"
            className="featured-video__poster"
            onClick={playWithSound}
            aria-label="Play featured video"
            style={{ backgroundImage: `url('${POSTER}')` }}
          >
            <span className="featured-video__overlay" />
            <span className="featured-video__play">
              <i className="fas fa-play" aria-hidden="true" />
            </span>
            <span className="featured-video__label">
              <span className="featured-video__eyebrow">Watch</span>
              <span className="featured-video__title">Our Craft in Motion</span>
            </span>
          </button>
        ) : (
          <div className="featured-video__player">
            <iframe
              key={`${muted ? 'm' : 'u'}-${inView}`}
              src={embedSrc({ autoplay: true, mute: muted })}
              title="SPECO Interiors featured video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            {muted ? (
              <button
                type="button"
                className="featured-video__unmute"
                onClick={playWithSound}
                aria-label="Unmute video"
              >
                <i className="fas fa-volume-mute" aria-hidden="true" />
                <span>Tap for sound</span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
