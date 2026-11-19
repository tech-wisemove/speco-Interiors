import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';

const PILLARS = [
  'Over a decade of industry experience',
  'Customer-first approach',
  'Innovative designs',
  'Quality craftsmanship',
  'Advanced in-house manufacturing',
];

const WHY_US = [
  { title: 'Quality Craftsmanship', body: 'Details, joins, and finishes built to last daily use.' },
  { title: 'Trust & Transparency', body: 'Clear communication from estimate through handover.' },
  { title: 'Customer-Centric', body: 'Designs shaped around how you actually live and work.' },
  { title: 'On-Time Delivery', body: 'Coordinated manufacturing and install schedules you can plan around.' },
  { title: 'Long-Term Relationships', body: 'Support after installation — not just a one-time handoff.' },
  { title: 'In-House Manufacturing', body: 'Pressing, CNC, edge banding, and boring under one roof.' },
];

export default function AboutPage() {
  return (
    <div className="site-wrap about-page" id="home-section">

      <LegacyPageNav pathname="/about" />

      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-15.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 text-center text-white">
                <h1 style={{ color: 'white' }}>About Us</h1>
                <p>Rooted in Care. Built on Trust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand story — editorial split */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__copy">
              <p className="about-eyebrow">Our story</p>
              <h2 className="heading-39291">
                Crafting spaces
                <br />
                with care &amp; precision
              </h2>
              <p>
                SPECO Interiors creates elegant, functional, and timeless residential and
                commercial interiors — delivering quality craftsmanship through innovative design and
                advanced manufacturing in Kochi.
              </p>
              <p>
                From modular kitchens to turnkey offices, we keep design, production, and installation
                aligned so every project feels considered, honest, and built to last.
              </p>
              <ul className="about-pillars">
                {PILLARS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-story__visual">
              <figure className="about-story__figure about-story__figure--main">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/images/projects/jpg/project-01.jpg")}
                  alt="SPECO Interiors craftsmanship"
                  loading="lazy"
                />
              </figure>
              <figure className="about-story__figure about-story__figure--side">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/images/projects/jpg/project-10.jpg")}
                  alt="In-house manufacturing"
                  loading="lazy"
                />
              </figure>
              <div className="about-story__badge" aria-hidden="true">
                <strong>10+</strong>
                <span>Years of experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission — quote panels */}
      <section className="about-vm">
        <div className="container">
          <div className="about-vm__row">
            <blockquote className="about-vm__panel">
              <p className="about-eyebrow">Vision</p>
              <p className="about-vm__quote">
                To create thoughtfully designed spaces that inspire better living.
              </p>
            </blockquote>
            <blockquote className="about-vm__panel about-vm__panel--accent">
              <p className="about-eyebrow about-eyebrow--on-dark">Mission</p>
              <p className="about-vm__quote">
                To deliver beautifully crafted interiors with honesty, quality, and lasting value.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why choose — numbered values */}
      <section className="about-why site-section">
        <div className="container">
          <div className="about-why__head">
            <p className="about-eyebrow">What sets us apart</p>
            <h2 className="heading-39291">Why Choose Us</h2>
            <p>Principles we bring into every home and workplace we craft.</p>
          </div>
          <div className="about-why__grid">
            {WHY_US.map((item, i) => (
              <article className="about-why__item" key={item.title}>
                <span className="about-why__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facility strip */}
      <section className="about-facility">
        <div
          className="about-facility__bg"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-06.jpg')}')` }}
        />
        <div className="container">
          <div className="about-facility__content">
            <p className="about-eyebrow about-eyebrow--on-dark">Our facility</p>
            <h2 className="heading-39291">Advanced in-house manufacturing</h2>
            <p>
              Pressing, CNC cutting, edge banding, and boring — precision stages that keep quality
              consistent from drawing to delivery.
            </p>
            <div className="about-facility__meta">
              <span>Edayar Industrial Area</span>
              <span>Kochi – 683110</span>
            </div>
            <a href={withBase("/services")} className="about-facility__link">
              Explore our services →
            </a>
          </div>
        </div>
      </section>

      {/* Featured voice + CTA */}
      <section className="about-voice site-section">
        <div className="container">
          <div className="about-voice__panel">
            <span className="about-voice__mark" aria-hidden="true">
              ”
            </span>
            <blockquote>
              <p>
                SPECO Interiors transformed our space with craftsmanship and a transparent process
                from start to finish — quality you can feel every day.
              </p>
              <cite>A SPECO client</cite>
            </blockquote>
            <div className="about-voice__actions">
              <a href={withBase("/testimonials")} className="more-39291">
                Read testimonials
              </a>
              <a href={withBase("/contact")} className="btn btn-primary text-white about-voice__btn">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
