import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';

const RESIDENTIAL = [
  { label: 'Modular Kitchens', img: withBase('/images/projects/jpg/project-09.jpg') },
  { label: 'Wardrobes', img: withBase('/images/projects/jpg/project-07.jpg') },
  { label: 'TV Units', img: withBase('/images/projects/jpg/project-04.jpg') },
  { label: 'Living Room Interiors', img: withBase('/images/projects/jpg/project-03.jpg') },
  { label: 'Bedroom Interiors', img: withBase('/images/projects/jpg/project-05.jpg') },
  { label: 'Dining Spaces', img: withBase('/images/projects/jpg/project-15.jpg') },
];

const COMMERCIAL = [
  { label: 'Office Interiors', img: withBase('/images/projects/jpg/project-11.jpg') },
  { label: 'Showrooms', img: withBase('/images/projects/jpg/project-01.jpg') },
  { label: 'Retail Spaces', img: withBase('/images/projects/jpg/project-12.jpg') },
  { label: 'Workstations', img: withBase('/images/projects/jpg/project-13.jpg') },
];

const TURNKEY = [
  {
    step: '01',
    title: 'Design',
    body: 'Concept layouts, material direction, and detailed drawings shaped around how you live or work.',
  },
  {
    step: '02',
    title: 'Manufacturing',
    body: 'Precision build in our Kochi facility — pressing, CNC, edge banding, and boring under one roof.',
  },
  {
    step: '03',
    title: 'Installation',
    body: 'On-site fitting with careful finishing so every unit sits true, clean, and ready for daily use.',
  },
];

const MANUFACTURING = [
  { title: 'Pressing', body: 'Stable laminates and surfaces bonded for lasting flatness and finish.' },
  { title: 'CNC Cutting', body: 'Accurate panel profiles cut to plan for clean joins and fit.' },
  { title: 'Edge Banding', body: 'Sealed edges that look refined and stand up to everyday wear.' },
  { title: 'Boring', body: 'Precise hardware holes so hinges, slides, and fittings align perfectly.' },
];

const PROCESS = [
  { title: 'Consultation', body: 'We listen to your space, needs, and budget.' },
  { title: 'Concept & Design', body: 'Layouts and finishes that feel personal and practical.' },
  { title: 'Planning & Estimation', body: 'Clear scope, materials, and transparent costing.' },
  { title: 'Manufacturing', body: 'Built in-house with quality checks at every stage.' },
  { title: 'Delivery & Installation', body: 'Coordinated on-site fit-out and finishing.' },
  { title: 'After-Sales Support', body: 'We’re here after handover when you need us.' },
];

export default function ServicesPage() {
  return (
    <div className="site-wrap services-page" id="home-section">

      <LegacyPageNav pathname="/services" />

      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-09.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 text-center">
                <h1 style={{ color: 'white' }}>Our Services</h1>
                <p style={{ color: 'white' }}>
                  From modular kitchens to turnkey offices, design, manufacture, and install under one
                  roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="site-section svc-intro">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <p className="svc-eyebrow">What we craft</p>
              <h2 className="heading-39291">
                Design &amp; manufacturing
                <br />
                that elevates everyday living
              </h2>
            </div>
            <div className="col-lg-5">
              <p className="svc-intro__lead mb-0">
                Residential and commercial interiors with quality craftsmanship, advanced in-house
                manufacturing, and a customer-first approach, elegant, functional, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential — image mosaic */}
      <section className="svc-band ">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Homes</p>
            <h2 className="heading-39291">Residential Interiors</h2>
            <p>Homes composed around your lifestyle, personal and enduring.</p>
          </div>
          <div className="svc-mosaic svc-mosaic--six">
            {RESIDENTIAL.map((item) => (
              <article className="svc-tile" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section className="svc-band">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Workplaces</p>
            <h2 className="heading-39291">Custom Wardrobes</h2>
            <p>Tailored storage that fits your space and disappears into its design.
</p>
          </div>
          <div className="svc-mosaic svc-mosaic--four">
            {COMMERCIAL.map((item) => (
              <article className="svc-tile svc-tile--tall" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-band ">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Homes</p>
            <h2 className="heading-39291">Modular Kitchens</h2>
            <p>Intelligent layouts, refined finishes, and kitchens made for daily living.
</p>
          </div>
          <div className="svc-mosaic svc-mosaic--six">
            {RESIDENTIAL.map((item) => (
              <article className="svc-tile" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-band">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Workplaces</p>
            <h2 className="heading-39291">Living & Bedroom Interiors</h2>
            <p>Rooms of comfort and character, resolved down to the last detail.
</p>
          </div>
          <div className="svc-mosaic svc-mosaic--four">
            {COMMERCIAL.map((item) => (
              <article className="svc-tile svc-tile--tall" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-band ">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Homes</p>
            <h2 className="heading-39291">Complete Interior Solutions</h2>
            <p> One team from concept to installation. Design, planning, production and finish, all under one roof.
</p>
          </div>
          <div className="svc-mosaic svc-mosaic--six">
            {RESIDENTIAL.map((item) => (
              <article className="svc-tile" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      

      {/* Commercial — wider tiles */}
      <section className="svc-band">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow">Workplaces</p>
            <h2 className="heading-39291">Commercial Interiors</h2>
            <p>Workspaces and showrooms that carry your brand with presence.</p>
          </div>
          <div className="svc-mosaic svc-mosaic--four">
            {COMMERCIAL.map((item) => (
              <article className="svc-tile svc-tile--tall" key={item.label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="svc-tile__label">
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey */}
      {/* <section className="svc-band">
        <div className="container">
          <div className="svc-band__head svc-band__head--center">
            <p className="svc-eyebrow">End to end</p>
            <h2 className="heading-39291">Turnkey Solutions</h2>
            <p>One team. One standard. From first sketch to final install.</p>
          </div>
          <div className="svc-turnkey">
            {TURNKEY.map((item, i) => (
              <div className="svc-turnkey__item" key={item.title}>
                <span className="svc-turnkey__num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {i < TURNKEY.length - 1 ? (
                  <span className="svc-turnkey__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Manufacturing Process */}
      {/* <section className="svc-band svc-band--ink">
        <div className="container">
          <div className="svc-band__head">
            <p className="svc-eyebrow svc-eyebrow--light">Workshop</p>
            <h2 className="heading-39291">Manufacturing Process</h2>
            <p>Precision stages inside our facility — the reason our finishes stay consistent.</p>
          </div>
          <div className="svc-mfg">
            {MANUFACTURING.map((item, i) => (
              <div className="svc-mfg__step" key={item.title}>
                <span className="svc-mfg__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Process — journey */}
      {/* <section className="svc-band">
        <div className="container">
          <div className="svc-band__head svc-band__head--center">
            <p className="svc-eyebrow">How we work</p>
            <h2 className="heading-39291">Our Process</h2>
            <p>A clear path from first conversation to lasting support.</p>
          </div>
          <ol className="svc-journey">
            {PROCESS.map((item, i) => (
              <li className="svc-journey__step" key={item.title}>
                <span className="svc-journey__marker">{i + 1}</span>
                <div className="svc-journey__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      {/* Closing CTA */}
      {/* <section className="site-section svc-close">
        <div className="container">
          <div className="svc-close__panel">
            <h2 className="heading-39291">Rooted in Care. Built on Trust.</h2>
            <p>
              Ready to transform your home or workplace? Tell us about your space — we’ll guide the
              next step.
            </p>
            <a href={withBase("/contact")} className="btn btn-primary text-white svc-close__btn">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section> */}

      <SiteFooter />
    </div>
  );
}
