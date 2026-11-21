import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';

const PILLARS = [
  '10 years of experience',
  'Personalised design, no templates',
  'Smart space planning',
  'Carefully selected materials',
  'Precision in-house craftsmanship',
];


const WHY_US = [
  { title: '10 Years of Experience', body: 'A decade of refined judgment.' },
  { title: 'Personalised Design', body: 'No templates, only your story.' },
  { title: 'Smart Space Planning', body: 'Every inch considered and put to work.' },
  { title: 'Selected Materials', body: 'Chosen for beauty, durability and feel.' },
  { title: 'Precision Craftsmanship', body: 'Made in-house to exacting standards.' },
  { title: 'A Client-First Approach', body: 'Clear communication and care at every stage.' },
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
                <p>We don't just shape spaces. We shape experiences.</p>
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
            src={withBase("/images/projects/jpg/project-15.jpg")}
            alt="Custom navy wardrobe and vanity by SPECO Interiors"
            loading="lazy"
          />
        </figure>
        <figure className="about-story__figure about-story__figure--side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase("/images/projects/jpg/project-10.jpg")}
            alt="Precision-finished wardrobe from our in-house manufacturing"
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
                To create spaces that are as beautiful as they are effortless to live in.
              </p>
            </blockquote>
            <blockquote className="about-vm__panel about-vm__panel--accent">
              <p className="about-eyebrow about-eyebrow--on-dark">Mission</p>
              <p className="about-vm__quote">
                To deliver exceptional interiors through considered design and uncompromising craftsmanship.
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
            <p>Experience You Can Trust. Details You Can See.</p>
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
    style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-05.jpg')}')` }}
  />
  <div className="container">
    <div className="about-facility__content">
      <p className="about-eyebrow about-eyebrow--on-dark">Our facility</p>
      <h2 className="heading-39291">Advanced in-house manufacturing</h2>
      <p>
        Pressing, CNC cutting, edge banding, and boring, precision stages that keep quality
        consistent from drawing to delivery.
      </p>
      <div className="about-facility__meta">
        <span>Mattakuzhi, Ernakulam</span>
        <span>, Kerala, India</span>
      </div>
      <a href={withBase("/services")} className="about-facility__link">
        Explore our services →
      </a>
    </div>
  </div>
</section>

{/* Our promise + CTA (company statement, not a client quote) */}
<section className="about-voice site-section">
  <div className="container">
    <div className="about-voice__panel">
      <span className="about-voice__mark" aria-hidden="true">
        ”
      </span>
      <blockquote>
        <p>
          Every space we build is designed with care, made with precision in our own facility,
          and installed by one accountable team, from first sketch to final handover.
        </p>
        <cite>The SPECO Interiors promise</cite>
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
