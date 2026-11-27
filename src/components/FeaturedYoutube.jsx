'use client';

import { withBase } from '@/lib/paths';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const VIDEO_SRC = withBase('/videos/features.mp4');
const POSTER = withBase('/images/projects/jpg/project-09.jpg');

export default function FeaturedYoutube() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setActive(true);
          setMuted(true);
        } else if (!entry.isIntersecting && entry.intersectionRatio < 0.15) {
          setActive(false);
        }
      },
      { threshold: [0, 0.15, 0.4, 0.6] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video || !active) return undefined;
    video.muted = muted;
    const play = video.play();
    if (play && typeof play.catch === 'function') {
      play.catch(() => {});
    }
    return undefined;
  }, [active, muted]);

  function playWithSound(e) {
    e?.preventDefault?.();
    setMuted(false);
    setActive(true);
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
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
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={POSTER}
              autoPlay
              muted={muted}
              playsInline
              loop
              controls
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
