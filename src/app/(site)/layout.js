import FloatingContactBar from '@/components/FloatingContactBar';
import LegacyScripts from '@/components/LegacyScripts';
import SiteSeo from '@/components/SiteSeo';
import { withBase } from '@/lib/paths';

/**
 * Loads the exact CSS/JS from the original HTML site.
 * Each page component already includes header + footer markup ditto from HTML.
 *
 * Inline <style> order: 1) CSS rules  2) @keyframes  3) @media queries
 * Palette: Sage #B0B098 | Olive #606850 | Dark Olive #454D3D | Ivory #F7F3EC | Beige #E8E3D9
 */
export default function SiteLayout({ children }) {
  return (
    <>
      <SiteSeo />
      <link href="https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href={withBase('/fonts/icomoon/style.css')} />
      <link rel="stylesheet" href={withBase('/css/bootstrap.min.css')} />
      <link rel="stylesheet" href={withBase('/css/animate.min.css')} />
      <link rel="stylesheet" href={withBase('/css/jquery.fancybox.min.css')} />
      <link rel="stylesheet" href={withBase('/css/owl.carousel.min.css')} />
      <link rel="stylesheet" href={withBase('/css/owl.theme.default.min.css')} />
      <link rel="stylesheet" href={withBase('/fonts/flaticon/font/flaticon.css')} />
      <link rel="stylesheet" href={withBase('/css/aos.css')} />
      <link rel="stylesheet" href={withBase('/css/style.css')} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <style>{`
        /* =====================================================================
           1. CSS RULES
           ===================================================================== */

        /* Palette tokens (same values as style.css, repeated as a safety net) */
        :root {
          --sage: #B0B098;
          --olive: #606850;
          --olive-dark: #454D3D;
          --ivory: #F7F3EC;
          --beige: #E8E3D9;
          --white: #FFFFFF;
          --muted: rgba(69, 77, 61, 0.74);
          --line: rgba(96, 104, 80, 0.25);
        }

        /* Owl hides until JS; keep first slide visible for SSR / slow script load */
        .owl-carousel:not(.owl-loaded) {
          display: block !important;
        }
        .owl-carousel:not(.owl-loaded) > *:not(:first-child) {
          display: none;
        }

        /* ---------- Navbar + hero contrast (all pages) ---------- */
        .site-navbar {
          background: linear-gradient(
            to bottom,
            rgba(69, 77, 61, 0.78) 0%,
            rgba(69, 77, 61, 0.38) 55%,
            rgba(69, 77, 61, 0) 100%
          );
        }
        .site-navbar .site-menu > li > a {
          color: var(--white) !important;
          text-shadow: 0 1px 4px rgba(69, 77, 61, 0.8);
        }
        .site-navbar .site-menu > li.active > a,
        .site-navbar .site-menu > li > a:hover {
          color: var(--sage) !important;
        }
        .site-navbar .site-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .site-navbar .site-logo a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .site-navbar .site-logo img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          background: transparent;
          filter: drop-shadow(0 2px 8px rgba(69, 77, 61, 0.4));
        }
        .site-navbar .site-menu-toggle .icon-menu {
          color: var(--white) !important;
          text-shadow: 0 1px 4px rgba(69, 77, 61, 0.8);
        }
        .ftco-cover-1 {
          position: relative;
        }
        .ftco-cover-1::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(69, 77, 61, 0.58) 0%,
            rgba(69, 77, 61, 0.45) 45%,
            rgba(69, 77, 61, 0.62) 100%
          );
        }
        .ftco-cover-1 > .container {
          position: relative;
          z-index: 2;
        }
        .ftco-cover-1 h1,
        .ftco-cover-1 .text-white h1 {
          color: var(--white) !important;
          text-shadow: 0 2px 16px rgba(69, 77, 61, 0.7);
        }
        .ftco-cover-1 p,
        .ftco-cover-1 .text-white p {
          color: var(--ivory) !important;
          text-shadow: 0 2px 12px rgba(69, 77, 61, 0.65);
        }
        .home-hero__content {
          text-align: center;
        }
        .home-hero__content .home-hero__tagline {
          font-style: italic;
        }

        /* ---------- Featured services YouTube block ---------- */
        .featured-video {
          width: 100%;
        }
        .featured-video__frame {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          background: var(--olive-dark);
          box-shadow: 0 18px 40px rgba(69, 77, 61, 0.2);
          border: 1px solid rgba(176, 176, 152, 0.5);
        }
        .featured-video__accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: var(--sage);
          z-index: 3;
        }
        .featured-video__poster {
          position: relative;
          display: block;
          width: 100%;
          min-height: 260px;
          height: clamp(260px, 48vw, 480px);
          border: 0;
          padding: 0;
          cursor: pointer;
          background-size: cover;
          background-position: center;
          text-align: left;
        }
        .featured-video__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(69, 77, 61, 0.75) 0%,
            rgba(69, 77, 61, 0.38) 55%,
            rgba(176, 176, 152, 0.3) 100%
          );
        }
        .featured-video__play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--olive);
          color: var(--white);
          font-size: 26px;
          box-shadow: 0 10px 28px rgba(69, 77, 61, 0.4);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .featured-video__play i {
          margin-left: 3px;
        }
        .featured-video__poster:hover .featured-video__play {
          transform: translate(-50%, -50%) scale(1.06);
          background: var(--sage);
          color: var(--olive-dark);
        }
        .featured-video__label {
          position: absolute;
          left: 28px;
          bottom: 24px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: var(--white);
        }
        .featured-video__eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 700;
        }
        .featured-video__title {
          font-size: 1.35rem;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(69, 77, 61, 0.5);
        }
        .featured-video__player {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--olive-dark);
        }
        .featured-video__player video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          object-fit: cover;
          background: var(--olive-dark);
        }
        .featured-video__unmute {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 10px 14px;
          background: rgba(69, 77, 61, 0.78);
          color: var(--ivory);
          font-size: 0.85rem;
          cursor: pointer;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(176, 176, 152, 0.6);
        }
        .featured-video__unmute:hover {
          background: var(--sage);
          color: var(--olive-dark);
        }

        /* ---------- About page: editorial brand story ---------- */
        .about-page .about-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 0.65rem;
        }
        .about-page .about-eyebrow--on-dark {
          color: var(--beige);
        }
        .about-page .about-story {
          padding: clamp(2.75rem, 6vw, 4rem) 0 clamp(2rem, 4vw, 3rem);
        }
        .about-page .about-story__grid {
          display: grid;
          gap: 2.5rem;
          align-items: center;
        }
        .about-page .about-story__copy p {
          color: var(--muted);
          line-height: 1.75;
        }
        .about-page .about-pillars {
          list-style: none;
          margin: 1.75rem 0 0;
          padding: 0;
        }
        .about-page .about-pillars li {
          position: relative;
          padding: 0.65rem 0 0.65rem 1.35rem;
          border-top: 1px solid var(--line);
          color: var(--olive-dark);
          font-weight: 500;
        }
        .about-page .about-pillars li:last-child {
          border-bottom: 1px solid var(--line);
        }
        .about-page .about-pillars li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1.05rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--olive);
        }
        .about-page .about-story__visual {
          position: relative;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 0.85rem;
          min-height: 320px;
        }
        .about-page .about-story__figure {
          margin: 0;
          overflow: hidden;
          border-radius: 4px;
          background: var(--beige);
        }
        .about-page .about-story__figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-page .about-story__figure--main {
          grid-row: 1 / span 2;
          min-height: 360px;
        }
        .about-page .about-story__figure--side {
          min-height: 170px;
          margin-top: 2.5rem;
        }
        .about-page .about-story__badge {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          background: var(--olive);
          color: var(--white);
          padding: 1rem 1.15rem;
          min-width: 120px;
          box-shadow: 0 12px 28px rgba(69, 77, 61, 0.28);
        }
        .about-page .about-story__badge strong {
          display: block;
          font-size: 1.75rem;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .about-page .about-story__badge span {
          display: block;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .about-page .about-vm {
          padding: 0 0 3.5rem;
        }
        .about-page .about-vm__row {
          display: grid;
          gap: 1rem;
        }
        .about-page .about-vm__panel {
          margin: 0;
          padding: 2.25rem 1.75rem;
          background: var(--ivory);
          border-left: 4px solid var(--sage);
        }
        .about-page .about-vm__panel--accent {
          background: var(--olive-dark);
          border-left-color: var(--sage);
        }
        .about-page .about-vm__quote {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.55;
          color: var(--olive-dark);
          font-weight: 500;
        }
        .about-page .about-vm__panel--accent .about-vm__quote {
          color: var(--ivory);
        }

        .about-page .about-why {
          padding-top: 1rem;
        }
        .about-page .about-why__head {
          max-width: 520px;
          margin-bottom: 2rem;
        }
        .about-page .about-why__head p:last-child {
          color: var(--muted);
          margin-bottom: 0;
        }
        .about-page .about-why__grid {
          display: grid;
          gap: 1.25rem;
        }
        .about-page .about-why__item {
          padding: 1.25rem 0;
          border-top: 2px solid var(--sage);
        }
        .about-page .about-why__num {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 0.65rem;
        }
        .about-page .about-why__item h3 {
          font-size: 1.1rem;
          color: var(--olive-dark);
          margin-bottom: 0.45rem;
        }
        .about-page .about-why__item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .about-page .about-facility {
          position: relative;
          min-height: clamp(320px, 50vw, 380px);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .about-page .about-facility__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }
        .about-page .about-facility__bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(69, 77, 61, 0.92) 0%,
            rgba(69, 77, 61, 0.76) 48%,
            rgba(69, 77, 61, 0.4) 100%
          );
        }
        .about-page .about-facility .container {
          position: relative;
          z-index: 1;
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
        }
        .about-page .about-facility__content {
          max-width: 480px;
          color: var(--ivory);
        }
        .about-page .about-facility__content .heading-39291 {
          color: var(--white);
        }
        .about-page .about-facility__content > p {
          color: rgba(247, 243, 236, 0.85);
          line-height: 1.7;
        }
        .about-page .about-facility__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
          margin: 1.25rem 0 1.5rem;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--beige);
        }
        .about-page .about-facility__link {
          color: var(--sage);
          font-weight: 600;
          text-decoration: none;
        }
        .about-page .about-facility__link:hover {
          color: var(--white);
        }

        .about-page .about-voice__panel {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          padding: 2.5rem 1.25rem;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .about-page .about-voice__mark {
          display: block;
          font-size: 3rem;
          line-height: 1;
          color: var(--olive);
          font-family: Georgia, 'Times New Roman', serif;
          margin-bottom: 0.5rem;
        }
        .about-page .about-voice__panel blockquote {
          margin: 0 0 1.5rem;
          border: 0;
          padding: 0;
        }
        .about-page .about-voice__panel blockquote p {
          font-size: clamp(1.05rem, 2.2vw, 1.2rem);
          line-height: 1.7;
          color: var(--olive-dark);
          margin-bottom: 1rem;
        }
        .about-page .about-voice__panel cite {
          font-style: normal;
          color: var(--muted);
          font-size: 0.9rem;
        }
        .about-page .about-voice__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
          justify-content: center;
          align-items: center;
        }
        .about-page .about-voice__btn {
          background: var(--olive) !important;
          border-color: var(--olive) !important;
          color: var(--white) !important;
          padding: 0.65rem 1.35rem;
        }
        .about-page .about-voice__btn:hover {
          background: var(--olive-dark) !important;
          border-color: var(--olive-dark) !important;
          color: var(--white) !important;
        }

        /* ---------- Services page: mosaic / process showcase ---------- */
        .services-page .svc-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 0.65rem;
        }
        .services-page .svc-eyebrow--light {
          color: var(--beige);
        }
        .services-page .svc-intro {
          padding-bottom: 2rem;
        }
        .services-page .svc-intro__lead {
          color: var(--muted);
          line-height: 1.75;
          font-size: clamp(1rem, 1.6vw, 1.05rem);
        }
        .services-page .svc-band {
          padding: 3.5rem 0;
        }
        .services-page .svc-band--soft {
          background: linear-gradient(180deg, var(--ivory) 0%, var(--white) 100%);
        }
        .services-page .svc-band--ink {
          background:
            linear-gradient(160deg, rgba(69, 77, 61, 0.95), rgba(54, 61, 48, 0.97)),
            url('${withBase('/images/projects/jpg/project-10.jpg')}') center/cover;
          color: var(--ivory);
        }
        .services-page .svc-band--ink .heading-39291 {
          color: var(--white);
        }
        .services-page .svc-band--ink p {
          color: rgba(247, 243, 236, 0.8);
        }
        .services-page .svc-band__head {
          max-width: 560px;
          margin-bottom: 2rem;
        }
        .services-page .svc-band__head--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .services-page .svc-band__head p:last-child {
          margin-bottom: 0;
          color: var(--muted);
        }
        .services-page .svc-mosaic {
          display: grid;
          gap: 0.85rem;
        }
        .services-page .svc-mosaic--six {
          grid-template-columns: 1fr;
        }
        .services-page .svc-mosaic--four {
          grid-template-columns: 1fr;
        }
        .services-page .svc-tile {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          aspect-ratio: 4 / 3;
          background: var(--beige);
        }
        .services-page .svc-tile--tall {
          aspect-ratio: 3 / 4;
        }
        .services-page .svc-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s ease;
        }
        .services-page .svc-tile:hover img {
          transform: scale(1.05);
        }
        .services-page .svc-tile__label {
          position: absolute;
          inset: auto 0 0 0;
          padding: 2.5rem 1rem 1rem;
          background: linear-gradient(to top, rgba(69, 77, 61, 0.8), transparent);
        }
        .services-page .svc-tile__label span {
          color: var(--white);
          font-weight: 600;
          font-size: 1rem;
          text-shadow: 0 1px 8px rgba(69, 77, 61, 0.5);
        }
        .services-page .svc-turnkey {
          display: grid;
          gap: 1.5rem;
        }
        .services-page .svc-turnkey__item {
          position: relative;
          padding: 1.5rem 1.25rem 1.25rem;
          border-top: 3px solid var(--sage);
          background: var(--white);
        }
        .services-page .svc-band:not(.svc-band--soft) .svc-turnkey__item {
          background: var(--ivory);
        }
        .services-page .svc-turnkey__num {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 0.75rem;
        }
        .services-page .svc-turnkey__item h3 {
          font-size: 1.35rem;
          margin-bottom: 0.65rem;
          color: var(--olive-dark);
        }
        .services-page .svc-turnkey__item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }
        .services-page .svc-turnkey__arrow {
          display: none;
        }
        .services-page .svc-mfg {
          display: grid;
          gap: 1.25rem;
        }
        .services-page .svc-mfg__step {
          padding: 1.25rem 0;
          border-top: 1px solid rgba(232, 227, 217, 0.35);
        }
        .services-page .svc-mfg__index {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          color: var(--sage);
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        .services-page .svc-mfg__step h3 {
          color: var(--white);
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }
        .services-page .svc-mfg__step p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .services-page .svc-journey {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          display: grid;
          gap: 0;
          max-width: 760px;
        }
        .services-page .svc-journey__step {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 1rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--line);
        }
        .services-page .svc-journey__step:last-child {
          border-bottom: 0;
        }
        .services-page .svc-journey__marker {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--olive);
          color: var(--olive-dark);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          background: var(--white);
        }
        .services-page .svc-journey__body h3 {
          font-size: 1.15rem;
          margin-bottom: 0.35rem;
          color: var(--olive-dark);
        }
        .services-page .svc-journey__body p {
          margin: 0;
          color: var(--muted);
        }
        .services-page .svc-close {
          padding-top: 1rem;
        }
        .services-page .svc-close__panel {
          text-align: center;
          padding: 3rem 1.5rem;
          background: linear-gradient(135deg, var(--ivory) 0%, var(--white) 55%, var(--beige) 100%);
          border-top: 3px solid var(--olive);
        }
        .services-page .svc-close__panel p {
          max-width: 520px;
          margin: 0 auto 1.5rem;
          color: var(--muted);
        }
        .services-page .svc-close__btn {
          background: var(--olive) !important;
          border-color: var(--olive) !important;
          color: var(--white) !important;
          padding: 0.75rem 1.5rem;
        }
        .services-page .svc-close__btn:hover {
          background: var(--olive-dark) !important;
          border-color: var(--olive-dark) !important;
          color: var(--white) !important;
        }

        /* ---------- Project category detail + before/after slider ---------- */
        .projects-row__more {
          display: inline-block;
          margin-top: 1.25rem;
        }
        .project-cat-hero__caption {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          color: var(--beige) !important;
          margin-bottom: 0.5rem;
        }
        .project-cat-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .project-card {
          padding-bottom: 0;
        }
        .project-card__top {
          margin-bottom: 0;
        }
        .project-card__title {
          margin-bottom: 0.85rem;
        }
        .project-card__desc {
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .project-card__meta {
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.25rem;
        }
        .project-card__meta dt {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--olive);
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .project-card__meta dd {
          margin: 0;
          color: var(--olive-dark);
          font-weight: 500;
        }
        .project-card__ba {
          width: 100%;
          margin-top: 1.75rem;
        }
        .project-card__ba-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 0.75rem;
        }
        .project-card__ba-hint {
          font-size: 0.85rem;
          color: var(--muted);
          margin: 0.75rem 0 0;
        }
        .project-card__divider {
          height: 2px;
          width: 100%;
          margin: 2.75rem 0;
          border: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(176, 176, 152, 0.4) 12%,
            var(--olive) 50%,
            rgba(176, 176, 152, 0.4) 88%,
            transparent 100%
          );
        }
        .project-category-page .ba-slider {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 21 / 9;
        }

        .proj-carousel {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          background: var(--beige);
          aspect-ratio: 16 / 10;
        }
        .proj-carousel__track {
          position: absolute;
          inset: 0;
        }
        .proj-carousel__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .proj-carousel__img.is-active {
          opacity: 1;
        }
        .proj-carousel__dots {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 12px;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 2;
        }
        .proj-carousel__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 0;
          padding: 0;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }
        .proj-carousel__dot.is-active {
          background: var(--sage);
        }

        .ba-slider {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 4px;
          border: 2px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 12px 36px rgba(69, 77, 61, 0.22);
          cursor: ew-resize;
          user-select: none;
          touch-action: none;
          background: var(--olive-dark);
        }
        .ba-slider:focus {
          outline: 2px solid var(--olive);
          outline-offset: 3px;
        }
        .ba-slider__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .ba-slider__img--after {
          z-index: 1;
        }
        .ba-slider__tag {
          position: absolute;
          top: 12px;
          z-index: 3;
          padding: 4px 10px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--white);
          background: rgba(69, 77, 61, 0.65);
          pointer-events: none;
        }
        .ba-slider__tag--after {
          left: 12px;
        }
        .ba-slider__tag--before {
          right: 12px;
        }
        .ba-slider__handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 0;
          z-index: 4;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .ba-slider__line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          transform: translateX(-50%);
          background: var(--white);
          box-shadow: 0 0 8px rgba(69, 77, 61, 0.4);
        }
        .ba-slider__knob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--olive);
          border: 3px solid var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 14px rgba(69, 77, 61, 0.4);
        }

        /* ---------- Projects page: rows ---------- */
        .projects-page .ftco-cover-1,
        .projects-page .ftco-cover-1 .container > .row {
          min-height: 380px;
        }
        .projects-row {
          margin-bottom: 4rem;
        }
        .projects-row:last-child {
          margin-bottom: 0;
        }
        .projects-row__media {
          margin-bottom: 1.25rem;
        }
        .projects-row__media img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
        .projects-row__content {
          padding: 0.5rem 1.25rem 0.25rem;
        }
        .projects-row__content .caption {
          display: block;
          font-weight: 700;
          color: var(--olive);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 0.8rem;
        }
        .projects-row__content .heading-39291 {
          margin-bottom: 1rem;
        }
        .projects-row__content p {
          margin-bottom: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        /* ---------- Full testimonials page ---------- */
        .testimonials-stack {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        .testimonial-entry {
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--line);
        }
        .testimonial-entry:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
        .testimonial-entry__gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .testimonial-entry__figure {
          margin: 0;
          overflow: hidden;
          border-radius: 4px;
          background: var(--beige);
          aspect-ratio: 4 / 3;
        }
        .testimonial-entry__figure img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .testimonial-entry__body {
          max-width: 720px;
          padding: 0 0.25rem;
        }
        .testimonial-entry--alt .testimonial-entry__body {
          margin-left: auto;
        }
        .testimonial-entry__quote-mark {
          font-size: 2.75rem;
          line-height: 1;
          color: var(--olive);
          font-family: Georgia, 'Times New Roman', serif;
          margin-bottom: 0.35rem;
        }
        .testimonial-entry__quote {
          margin: 0 0 1.25rem;
          border: 0;
          padding: 0;
        }
        .testimonial-entry__quote p {
          margin: 0;
          color: var(--olive-dark);
          font-size: 1.1rem;
          line-height: 1.75;
        }
        .testimonial-entry__author strong {
          display: block;
          color: var(--olive-dark);
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }
        .testimonial-entry__author span {
          display: block;
          font-size: 0.9rem;
          color: var(--muted);
        }

        /* ---------- Home: testimonials / FAQ / news ---------- */
        .home-band--soft {
          background: linear-gradient(180deg, var(--ivory) 0%, var(--white) 100%);
        }
        .home-card {
          height: 100%;
          min-height: 260px;
          padding: 24px 22px;
          background: var(--white);
          border: 1px solid var(--line);
          border-top: 4px solid var(--olive);
          box-shadow: 0 10px 28px rgba(69, 77, 61, 0.08);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .home-card__quote-mark {
          font-size: 2.25rem;
          line-height: 1;
          color: var(--olive);
          font-family: Georgia, serif;
          margin-bottom: 6px;
        }
        .home-card__quote {
          color: var(--muted);
          margin-bottom: 16px;
          flex: 1 1 auto;
          font-size: 0.98rem;
          line-height: 1.55;
        }
        .home-card__author {
          margin-top: auto;
        }
        .home-card__author strong {
          display: block;
          color: var(--olive-dark);
        }
        .home-card__author span {
          display: block;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .home-faq {
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }
        .home-faq:last-child {
          border-bottom: 0;
        }
        .home-faq__q {
          font-size: 1.15rem;
          color: var(--olive-dark);
          margin-bottom: 8px;
        }
        .home-faq__a {
          margin-bottom: 0;
          color: var(--muted);
        }

        .blog-grid > [class*='col-'] {
          display: flex;
        }
        .blog-grid .home-news-card {
          width: 100%;
        }
        .home-news-card {
          height: 100%;
          background: var(--white);
          border: 1px solid var(--line);
          border-top: 4px solid var(--olive);
          box-shadow: 0 10px 28px rgba(69, 77, 61, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .home-news-card__media {
          display: block;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: var(--beige);
          flex: 0 0 200px;
        }
        .home-news-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .home-news-card__body {
          padding: 18px 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-height: 200px;
        }
        .home-news-card__meta {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--olive);
          margin-bottom: 8px;
          font-weight: 700;
        }
        .home-news-card__body h3 {
          font-size: 1.05rem;
          line-height: 1.35;
          margin: 0 0 10px;
          min-height: 2.7em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .home-news-card__body h3 a {
          color: var(--olive-dark);
          text-decoration: none;
        }
        .home-news-card__body h3 a:hover {
          color: var(--olive);
        }
        .home-news-card__body p {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.5;
          margin: 0 0 14px;
          min-height: 4.5em;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .home-news-card__body .more-39291 {
          margin-top: auto;
          align-self: flex-start;
        }
        .h-scroll__item .home-news-card {
          width: 100%;
        }

        /* ---------- Horizontal scrollers (testimonials / blogs) ---------- */
        .h-scroll {
          position: relative;
          padding: 0 48px;
        }
        .h-scroll__track {
          display: flex;
          align-items: stretch;
          gap: 20px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          padding: 8px 2px 20px;
          scrollbar-width: none;
        }
        .h-scroll__track::-webkit-scrollbar {
          display: none;
        }
        .h-scroll__item {
          flex: 0 0 320px;
          width: 320px;
          max-width: 320px;
          scroll-snap-align: start;
          display: flex;
        }
        .h-scroll__item > * {
          width: 100%;
        }
        .h-scroll__btn {
          position: absolute;
          top: calc(50% - 10px);
          transform: translateY(-50%);
          z-index: 2;
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 50%;
          background: var(--olive);
          color: var(--white);
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(69, 77, 61, 0.2);
        }
        .h-scroll__btn:hover {
          background: var(--olive-dark);
          color: var(--white);
        }
        .h-scroll__btn--prev { left: 0; }
        .h-scroll__btn--next { right: 0; }

        /* ---------- Footer ---------- */
        .footer-theme-line {
          height: 3px;
          width: 100%;
          margin: 0 0 2rem;
          border: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--sage) 20%,
            var(--olive) 50%,
            var(--sage) 80%,
            transparent 100%
          );
        }
        .site-footer {
          position: relative;
        }
        .footer-terms-btn {
          display: inline-block;
          background: var(--olive) !important;
          border-color: var(--olive) !important;
          color: var(--white) !important;
          padding: 0.65rem 1.25rem;
          font-size: 0.9rem;
          border-radius: 4px;
        }
        .footer-terms-btn:hover {
          background: var(--olive-dark) !important;
          border-color: var(--olive-dark) !important;
          color: var(--white) !important;
        }
        .legal-content h3 {
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          font-size: 1.2rem;
          color: var(--olive-dark);
        }
        .legal-content p {
          color: var(--muted);
          line-height: 1.75;
        }
        .legal-content a {
          color: var(--olive);
          text-decoration: underline;
        }
        .site-footer .footer-brand-row {
          margin-bottom: 1.5rem;
        }
        .site-footer .footer-logo {
          display: inline-block;
          margin: 0;
        }
        .site-footer .footer-heading {
          margin-top: 0 !important;
          margin-bottom: 1rem !important;
        }
        .site-footer .footer-about-text {
          margin-bottom: 0;
          max-width: 36ch;
        }
        .site-footer .footer-main-row {
          margin-bottom: 1rem;
        }
        .site-footer .footer-links-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          column-gap: 1.5rem;
          align-items: start;
          width: 100%;
        }
        .site-footer .footer-links {
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: left;
        }
        .site-footer .footer-links li {
          margin: 0 0 0.55rem;
          padding: 0;
          line-height: 1.4;
        }
        .site-footer .footer-links li:last-child {
          margin-bottom: 0;
        }
        .site-footer .footer-links a {
          display: inline-block;
        }
        .site-footer .footer-legal-cta {
          margin-top: 1.25rem;
        }
        .site-footer .footer-copy-row .border-top {
          padding-top: 1.5rem;
          margin-top: 1rem;
        }
        .footer-social__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-social__list a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--olive);
          color: var(--white) !important;
          font-size: 16px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .footer-social__list a:hover {
          background: var(--olive-dark);
          color: var(--white) !important;
          transform: translateY(-2px);
        }

        /* ---------- Form submit loaders ---------- */
        .form-submit-btn {
          background-color: var(--olive) !important;
          color: var(--white) !important;
          border: none !important;
          padding: 10px 20px !important;
          border-radius: 5px !important;
          font-size: 16px !important;
          display: inline-flex !important;
          align-items: center;
          gap: 0.6rem;
          min-width: 140px;
          justify-content: center;
        }
        .form-submit-btn:hover:not(:disabled) {
          background-color: var(--olive-dark) !important;
        }
        .form-submit-btn--full {
          width: 100%;
        }
        .form-submit-btn:disabled {
          opacity: 0.75;
          cursor: wait;
        }
        .form-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: var(--white);
          border-radius: 50%;
          display: inline-block;
          animation: form-spin 0.7s linear infinite;
        }
        .form-feedback {
          margin-bottom: 1rem;
        }
        .form-file-label,
        .form-field-label {
          display: block;
          margin-bottom: 0.4rem;
          font-size: 0.9rem;
          color: var(--muted);
        }
        select.form-control {
          height: 55px;
          min-height: 48px;
        }

        /* ---------- React mobile menu (panel is white) ---------- */
        .site-menu-toggle,
        .site-mobile-menu-close-btn {
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
          line-height: 1;
        }
        .site-mobile-menu-close-btn {
          color: var(--olive-dark);
          font-size: 1.5rem;
          min-width: 44px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .site-mobile-menu .site-nav-wrap {
          list-style: none;
          padding: 20px;
          margin: 0;
        }
        .site-mobile-menu .site-nav-wrap li {
          margin-bottom: 0;
        }
        .site-mobile-menu .site-nav-wrap a {
          display: block;
          padding: 12px 0;
          color: var(--olive-dark) !important;
          font-size: 1.05rem;
          text-decoration: none;
          text-shadow: none;
        }
        .site-mobile-menu .site-nav-wrap li.active > a,
        .site-mobile-menu .site-nav-wrap a:hover {
          color: var(--olive) !important;
        }

        /* ---------- Gallery lightbox ---------- */
        .gallery-thumb {
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: zoom-in;
        }
        .gallery-thumb img {
          width: 100%;
          display: block;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .gallery-thumb:hover img {
          opacity: 0.92;
          transform: scale(1.01);
        }
        .gallery-title-btn {
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
        }
        .gallery-title-btn h2 { margin: 0; }
        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 64px;
          background: rgba(69, 77, 61, 0.92);
        }
        .gallery-lightbox__figure {
          margin: 0;
          max-width: min(1100px, 92vw);
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gallery-lightbox__figure img {
          display: block;
          max-width: 100%;
          max-height: calc(88vh - 64px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          background: var(--olive-dark);
        }
        .gallery-lightbox__figure figcaption {
          margin-top: 14px;
          color: var(--ivory);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .gallery-lightbox__figure figcaption strong { font-size: 1.05rem; }
        .gallery-lightbox__figure figcaption span { font-size: 0.85rem; opacity: 0.8; }
        .gallery-lightbox__close {
          position: absolute;
          top: 16px;
          right: 18px;
          z-index: 10001;
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          color: var(--white);
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-lightbox__close:hover { background: rgba(255, 255, 255, 0.3); }
        .gallery-lightbox__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10001;
          width: 48px;
          height: 48px;
          border: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          color: var(--white);
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-lightbox__nav:hover { background: rgba(255, 255, 255, 0.3); }
        .gallery-lightbox__nav--prev { left: 16px; }
        .gallery-lightbox__nav--next { right: 16px; }

        /* ---------- Fixed right contact bar (overlay only, no layout shift) ---------- */
        .float-contact-bar {
          position: fixed;
          top: 50%;
          right: 0;
          z-index: 9999;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 48px;
          gap: 12px;
          pointer-events: none;
        }
        .float-contact-bar a,
        .float-contact-bar button {
          pointer-events: auto;
        }
        .float-contact-bar__tabs {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateX(110%);
          transition:
            opacity 0.28s ease,
            transform 0.28s ease,
            visibility 0.28s ease;
        }
        .float-contact-bar__tabs.is-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(0);
        }
        .float-contact-bar__quote {
          position: relative;
          display: block;
          width: 40px;
          height: 170px;
          background: var(--olive-dark);
          color: var(--white);
          text-decoration: none;
          border-radius: 6px 0 0 6px;
          box-shadow: -2px 2px 10px rgba(69, 77, 61, 0.25);
          transition: background 0.2s ease;
          overflow: hidden;
        }
        .float-contact-bar__quote span {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 170px;
          margin: 0;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          line-height: 40px;
          text-align: center;
          white-space: nowrap;
          color: inherit;
          transform: translate(-50%, -50%) rotate(-90deg);
          transform-origin: center center;
        }
        .float-contact-bar__quote:hover {
          background: var(--olive);
          color: var(--white);
        }
        .float-contact-bar__brochure {
          background: var(--olive);
          color: var(--white);
          height: 190px;
        }
        .float-contact-bar__brochure span {
          width: 190px;
          line-height: 40px;
          color: inherit;
        }
        .float-contact-bar__brochure:hover {
          background: var(--sage);
          color: var(--olive-dark);
        }
        .float-contact-bar__icons {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 10px;
          padding: 0;
          margin: 0;
        }
        .float-contact-bar__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 0;
          padding: 0;
          cursor: pointer;
          color: var(--white) !important;
          text-decoration: none;
          font-size: 20px;
          line-height: 1;
          box-shadow: 0 4px 12px rgba(69, 77, 61, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .float-contact-bar__btn i {
          display: block;
          line-height: 1;
        }
        .float-contact-bar__btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(69, 77, 61, 0.3);
          color: var(--white) !important;
        }
        .float-contact-bar__btn--share { background: var(--olive); }
        .float-contact-bar__btn--share.is-active,
        .float-contact-bar__btn--share:hover { background: var(--olive-dark); color: var(--white) !important; }
        /* Third-party brand colours kept as-is (WhatsApp, Instagram) */
        .float-contact-bar__btn--wa { background: #25d366; }
        .float-contact-bar__btn--ig {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }
        .float-contact-bar__btn--call { background: var(--olive); }
        .float-contact-bar__btn--top {
          background: var(--olive-dark);
          color: var(--sage) !important;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease, box-shadow 0.2s ease;
        }
        .float-contact-bar__btn--top.is-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }
        .float-contact-bar__btn--top:hover {
          background: var(--sage);
          color: var(--olive-dark) !important;
          transform: scale(1.08);
        }

        /* ---------- Share panel ---------- */
        .share-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(69, 77, 61, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
        }
        .share-panel {
          width: min(420px, 100%);
          max-height: min(90vh, 820px);
          overflow: auto;
          background: var(--white);
          border-top: 4px solid var(--olive);
          border-radius: 6px;
          box-shadow: 0 24px 60px rgba(69, 77, 61, 0.35);
          padding: 1.25rem 1.25rem 1.5rem;
        }
        .share-panel__head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.15rem;
        }
        .share-panel__eyebrow {
          margin: 0 0 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--olive);
        }
        .share-panel__title {
          margin: 0;
          font-size: 1.25rem;
          color: var(--olive-dark);
        }
        .share-panel__close {
          border: 0;
          background: transparent;
          font-size: 1.75rem;
          line-height: 1;
          color: var(--muted);
          cursor: pointer;
          padding: 0 0.2rem;
        }
        .share-panel__close:hover { color: var(--olive-dark); }
        .share-panel__actions {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .share-action {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          width: 100%;
          text-align: left;
          border: 1px solid var(--line);
          background: var(--ivory);
          border-radius: 6px;
          padding: 0.85rem 0.95rem;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .share-action:hover {
          border-color: var(--olive);
          background: var(--white);
        }
        .share-action__icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--olive);
          color: var(--white);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .share-action__text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .share-action__text strong {
          color: var(--olive-dark);
          font-size: 0.98rem;
        }
        .share-action__text small {
          color: var(--muted);
          font-size: 0.8rem;
        }
        .share-back {
          border: 0;
          background: transparent;
          color: var(--olive);
          font-weight: 600;
          padding: 0;
          margin-bottom: 0.85rem;
          cursor: pointer;
        }
        .share-social__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .share-social__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 0.6rem;
          border-radius: 6px;
          color: var(--white) !important;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }
        /* Third-party brand colours kept as-is */
        .share-social__btn--wa { background: #25d366; }
        .share-social__btn--fb { background: #1877f2; }
        .share-social__btn--x { background: #111; }
        .share-social__btn--li { background: #0a66c2; }
        .share-qr__card {
          background: linear-gradient(160deg, #454D3D, #3b4234 55%, #4f5846);
          border-radius: 8px;
          padding: 1rem;
          border-top: 3px solid var(--sage);
        }
        .share-qr__preview {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .share-qr__placeholder {
          background: var(--ivory);
          border-radius: 6px;
          padding: 1.5rem 1rem;
          text-align: center;
        }
        .share-qr__brand {
          margin: 0 0 0.35rem;
          font-weight: 700;
          color: var(--olive-dark);
          font-size: 1.05rem;
        }
        .share-qr__scan {
          margin: 0 0 1rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--olive);
        }
        .share-qr__skeleton {
          width: min(220px, 70%);
          aspect-ratio: 1;
          margin: 0 auto 0.85rem;
          border-radius: 6px;
          background: linear-gradient(90deg, var(--beige) 25%, var(--ivory) 50%, var(--beige) 75%);
          background-size: 200% 100%;
          animation: share-qr-shimmer 1.2s linear infinite;
          border: 2px solid var(--line);
        }
        .share-qr__loading {
          margin: 0;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .share-qr__url {
          margin: 0.85rem 0 1rem;
          font-size: 0.78rem;
          color: var(--muted);
          word-break: break-all;
          text-align: center;
        }
        .share-qr__download {
          width: 100%;
          border: 0;
          border-radius: 4px;
          background: var(--olive);
          color: var(--white);
          font-weight: 700;
          padding: 0.8rem 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .share-qr__download:hover:not(:disabled) {
          background: var(--olive-dark);
          color: var(--white);
        }
        .share-qr__download:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* =====================================================================
           2. KEYFRAMES
           ===================================================================== */

        @keyframes form-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes share-qr-shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        /* =====================================================================
           3. MEDIA QUERIES
           min-width first (ascending), then max-width (descending), so
           smaller screens always override larger ones.
           ===================================================================== */

        /* ---------- >= 576px ---------- */
        @media (min-width: 576px) {
          .about-page .about-why__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-page .svc-mosaic--six,
          .services-page .svc-mosaic--four {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-entry__gallery {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        /* ---------- >= 768px ---------- */
        @media (min-width: 768px) {
          .about-page .about-vm__row {
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .services-page .svc-turnkey {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          .services-page .svc-turnkey__arrow {
            display: block;
            position: absolute;
            right: -1.15rem;
            top: 42%;
            color: var(--olive);
            font-size: 1.25rem;
            z-index: 1;
          }
          .services-page .svc-mfg {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        /* ---------- >= 992px ---------- */
        @media (min-width: 992px) {
          /* Fit 4 desktop links on each side of the logo */
          .site-navbar .site-navigation .site-menu > li > a {
            margin-left: 8px;
            margin-right: 8px;
            font-size: 0.92rem;
            letter-spacing: 0.02em;
          }
          .site-navbar .container > .row > [class*='col-']:nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        /* ---------- 992px to 1199px: keep all eight links on one line ---------- */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .site-navbar .site-navigation .site-menu {
            white-space: nowrap;
          }
          .site-navbar .site-navigation .site-menu > li > a {
            margin-left: 5px;
            margin-right: 5px;
            padding-top: 12px;
            padding-bottom: 12px;
            font-size: 0.78rem;
            letter-spacing: 0;
          }
          .site-navbar .site-logo img {
            height: auto;
            max-height: 100px;
            max-width: min(200px, 100%);
          }
        }

        /* ---------- >= 992px (desktop layouts) ---------- */
        @media (min-width: 992px) {
          .about-page .about-story__grid {
            grid-template-columns: 1.05fr 0.95fr;
            gap: 3.5rem;
          }
          .about-page .about-why__grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem;
          }

          .services-page .svc-mosaic--six {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.1rem;
          }
          .services-page .svc-mosaic--four {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.1rem;
          }

          .projects-page .ftco-cover-1,
          .projects-page .ftco-cover-1 .container > .row {
            min-height: 560px;
          }
          .projects-row {
            margin-bottom: 5.5rem;
          }
          .projects-row__media {
            margin-bottom: 0;
          }
          .projects-row--reverse {
            flex-direction: row-reverse;
          }
          .projects-row__content,
          .projects-row--reverse .projects-row__content {
            padding: 1rem 1.75rem;
          }

          .footer-theme-line {
            margin: 0 0 2.75rem;
          }
          .site-footer .footer-brand-row {
            margin-bottom: 2rem;
            text-align: left;
          }
          .site-footer .footer-main-row > [class*='col-'] {
            margin-bottom: 0;
            text-align: left;
          }
          .site-footer .footer-heading {
            margin-bottom: 1.15rem !important;
            min-height: 1.5em;
          }
          .site-footer .footer-links-grid {
            column-gap: 2.25rem;
          }
          .site-footer .footer-links li {
            margin-bottom: 0.7rem;
          }
          .site-footer .footer-social__list {
            justify-content: flex-start;
          }
          .site-footer .footer-copy-row .border-top {
            padding-top: 2rem;
            margin-top: 2rem;
          }
        }

        /* ---------- 768px to 991.98px (tablet only) ---------- */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .footer-theme-line {
            margin: 0 0 2.25rem;
          }
          .site-footer .footer-main-row > [class*='col-'] {
            margin-bottom: 2rem;
            text-align: left;
          }
        }

        /* ---------- <= 991.98px (tablet and below) ---------- */
        @media (max-width: 991.98px) {
          .site-navbar .container > .row > [class*='col-']:nth-child(2) {
            justify-content: center;
            text-align: center !important;
            padding-left: 8px !important;
            padding-right: 60px !important;
          }
          .site-navbar .site-logo,
          .site-navbar .site-logo a {
            width: auto;
            max-width: 100%;
          }
          .site-navbar .site-logo img {
            width: auto;
            max-width: 100%;
            height: auto;
            max-height: clamp(64px, 20vw, 112px);
          }
          .site-navbar .toggle-button {
            position: absolute !important;
            right: 4px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
          }

          .services-page .svc-tile--tall {
            aspect-ratio: 4 / 3;
          }

          .project-category-page .ba-slider {
            aspect-ratio: 16 / 10;
          }

          .projects-page .site-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          .projects-row {
            margin-bottom: 2.75rem;
          }
          .projects-row__content {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          .projects-row__content .heading-39291 {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
          }

          .about-page .about-story__visual {
            min-height: 280px;
          }
        }

        /* ---------- <= 767.98px (large phone) ---------- */
        @media (max-width: 767.98px) {
          .h-scroll {
            padding: 0 40px;
          }
          .h-scroll__item {
            flex-basis: 280px;
            width: 280px;
            max-width: 280px;
          }
          .home-card {
            min-height: 240px;
          }
          .home-news-card__media {
            height: 170px;
            flex-basis: 170px;
          }
          .home-news-card__body {
            min-height: 180px;
          }

          /* Footer centred on mobile */
          .site-footer .footer-main-row,
          .site-footer .footer-col,
          .site-footer .footer-social,
          .site-footer .footer-suscribe-form {
            text-align: center !important;
          }
          .site-footer .footer-brand-row {
            text-align: center;
          }
          .site-footer .footer-logo {
            display: inline-block !important;
          }
          .site-footer .footer-social__list {
            justify-content: center;
          }
          .site-footer .footer-links-grid {
            max-width: 340px;
            margin-left: auto;
            margin-right: auto;
          }
          .site-footer .footer-links {
            padding-left: 0;
            text-align: left;
          }
          .site-footer .footer-about-text {
            margin-left: auto;
            margin-right: auto;
          }
          .site-footer .input-group {
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
          }
          .site-footer .footer-col {
            margin-bottom: 2rem;
          }
          .site-footer .footer-legal-cta {
            text-align: center;
          }

          .gallery-lightbox {
            padding: 56px 12px 24px;
          }
          .gallery-lightbox__nav {
            width: 40px;
            height: 40px;
            font-size: 28px;
          }
          .gallery-lightbox__nav--prev {
            left: 8px;
          }
          .gallery-lightbox__nav--next {
            right: 8px;
          }

          .about-page .about-facility .container {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
        }

        /* ---------- <= 575.98px (phone) ---------- */
        @media (max-width: 575.98px) {
          .featured-video__play {
            width: 64px;
            height: 64px;
            font-size: 22px;
          }
          .featured-video__title {
            font-size: 1.1rem;
          }
          .featured-video__label {
            left: 18px;
            bottom: 16px;
          }
          .featured-video__unmute {
            right: 10px;
            bottom: 10px;
            padding: 8px 12px;
            font-size: 0.78rem;
          }

          .about-page .about-story__figure--main {
            min-height: 240px;
          }
          .about-page .about-story__figure--side {
            margin-top: 1.25rem;
            min-height: 120px;
          }
          .about-page .about-vm__quote {
            font-size: 1.1rem;
          }
          .about-page .about-vm__panel {
            padding: 1.75rem 1.25rem;
          }

          .services-page .svc-band {
            padding: 2.5rem 0;
          }
          .services-page .svc-tile__label span {
            font-size: 0.95rem;
          }
          .services-page .svc-journey__step {
            grid-template-columns: 40px 1fr;
            gap: 0.75rem;
          }

          .project-card__ba {
            margin-top: 1.35rem;
          }
          .project-card__divider {
            margin: 2rem 0;
          }
          .project-card__meta {
            grid-template-columns: 1fr;
          }
          .ba-slider__knob {
            width: 38px;
            height: 38px;
            font-size: 0.9rem;
          }

          .projects-page .ftco-cover-1,
          .projects-page .ftco-cover-1 .container > .row {
            min-height: 300px;
          }
          .projects-page .ftco-cover-1 h1 {
            font-size: 1.75rem;
          }
          .projects-row__media img {
            max-height: 260px;
            object-fit: cover;
          }
          .projects-row__content {
            padding-left: 1.1rem;
            padding-right: 1.1rem;
          }

          .about-page .about-story__visual {
            grid-template-columns: 1fr;
          }
          .about-page .about-story__figure--main {
            grid-row: auto;
          }
          .about-page .about-story__figure--side {
            margin-top: 0;
          }
          .about-page .about-story__badge {
            position: static;
            margin-top: 0.85rem;
          }

          .testimonials-stack {
            gap: 2.5rem;
          }
          .testimonial-entry {
            padding-bottom: 2.5rem;
          }
          .testimonial-entry__gallery {
            gap: 0.5rem;
          }
          .testimonial-entry__quote p {
            font-size: 1rem;
          }

          .h-scroll {
            padding: 0 38px;
          }
          .h-scroll__item {
            flex-basis: 78vw;
            width: 78vw;
            max-width: 78vw;
          }
          .h-scroll__btn {
            width: 34px;
            height: 34px;
            font-size: 22px;
          }

          .share-panel {
            width: 100%;
          }
          .share-social__grid {
            grid-template-columns: 1fr;
          }

          .float-contact-bar {
            width: 40px;
            gap: 10px;
          }
          .float-contact-bar__quote {
            width: 34px;
            height: 145px;
          }
          .float-contact-bar__brochure {
            height: 160px;
          }
          .float-contact-bar__quote span {
            width: 145px;
            font-size: 9px;
            letter-spacing: 0.12em;
            line-height: 34px;
          }
          .float-contact-bar__brochure span {
            width: 160px;
            line-height: 34px;
          }
          .float-contact-bar__btn {
            width: 36px;
            height: 36px;
            font-size: 17px;
          }
          .float-contact-bar__icons {
            gap: 8px;
          }
        }

        /* ---------- <= 400px (small phone) ---------- */
        @media (max-width: 400px) {
          .about-page .about-story__visual {
            grid-template-columns: 1fr;
          }
          .about-page .about-story__figure--main {
            grid-row: auto;
          }
          .about-page .about-story__figure--side {
            margin-top: 0;
          }
          .about-page .about-story__badge {
            position: static;
            margin-top: 0.85rem;
          }
        }

        /* ---------- Touch devices: no hover-only effects ---------- */
        @media (hover: none) {
          .services-page .svc-tile:hover img,
          .gallery-thumb:hover img {
            transform: none;
          }
        }

        /* ---------- Reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .h-scroll__track {
            scroll-behavior: auto;
          }
          .proj-carousel__img,
          .services-page .svc-tile img,
          .float-contact-bar__tabs,
          .float-contact-bar__btn,
          .featured-video__play {
            transition: none !important;
          }
          .share-qr__skeleton {
            animation: none;
          }
        }
      `}</style>

      {children}
      <FloatingContactBar />
      <LegacyScripts />
    </>
  );
}
