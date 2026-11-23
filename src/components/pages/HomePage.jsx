import { withBase } from '@/lib/paths';
import Link from "next/link";
import FeaturedYoutube from '@/components/FeaturedYoutube';
import HomeBelowProjects from '@/components/HomeBelowProjects';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';

/* Auto-converted from index.html — ditto markup match */
export default function HomePage() {
  return (
    <div className="site-wrap home-page" id="home-section">
      <LegacyPageNav pathname="/" className="home-navbar" />

      <div className="owl-carousel owl-1 home-hero">
        <div className="ftco-blocks-cover-1">
          <div className="ftco-cover-1 home-hero__slide" style={{backgroundImage: `url('${withBase('/images/projects/jpg/project.jpeg')}')`}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 home-hero__content">
                  <h1 className = "mt-2">
                     Every Space Has a Story. Let's Make Yours Unforgettable.
                  </h1>
                  <p className="home-hero__tagline">
                    Interiors where style, comfort and function sit in quiet balance. A decade of craft, shaped around the way you live.
                  </p>
                  <p>
                     Thoughtfully Designed. Beautifully Crafted.
                  </p>
                  <div className="hero-buttons">
  <Link href="/gallery" className="hero-btn hero-btn-primary">
    View Our Work 
  </Link>

  <Link href="/contact" className="hero-btn hero-btn-outline">
    Begin Your Project
  </Link>
</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="heading-39291">
                Ten Years of Design. One Belief: Spaces Should Feel Like You.
              </h2>
              <p className="mb-5">
                
             For a decade, SPECO has brought creativity, technical insight and hands-on craftsmanship to homes and businesses across Kerala. We design around people: how you live, how you work, and how you want a room to make you feel.
              </p>
              <p className="mb-5">
                
              With over a decade of industry experience, a customer-first approach, and advanced in-house manufacturing, we turn thoughtfully designed concepts into lasting spaces — built on honesty, quality, and trust.
              </p>
              <p>
                <a href={withBase("/about")} className="more-39291">
                  More About Us
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ml-auto">
              <aside className="home-legacy" data-aos="fade-up" aria-label="10 years of experience">
                <h1 className="heading-aboutus">
               Our Vision
              </h1>
              <p className="mb-5">
              To create spaces that are as beautiful as they are effortless to live in.
              </p>
              <h1 className="heading-aboutus">
               Our Mission
              </h1>
              <p className="mb-5">
               To deliver exceptional interiors through considered design and uncompromising craftsmanship.
              </p>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-7">
        <h2 className="heading-39291">Spaces Designed Around You.</h2>
        <p>
          From residential interiors and modular kitchens to commercial spaces and turnkey solutions, we design, manufacture, and install with care.
        </p>
        <p className="my-5">
          <a href={withBase("/services")} className="more-39291">
            Learn More
          </a>
        </p>
      </div>
    </div>

    <div className="row">

      {/* 1. Residential */}
      <div className="col-md-6" data-aos="fade-up" data-aos-delay>
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-13.jpg")}
            alt="Residential Interiors"
            title="Residential Interiors"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Residential</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

      {/* 2. Modular Kitchens */}
      <div className="col-md-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-19.jpg")}
            alt="Modular Kitchens"
            title="Modular Kitchens"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Modular Kitchens</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Living Rooms (was "Living & Dining" - no dining photos yet) */}
      <div className="col-md-6" data-aos="fade-up" data-aos-delay>
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-14.jpg")}
            alt="Living Room Interiors"
            title="Living Room Interiors"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Living Rooms</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bedrooms */}
      <div className="col-md-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-17.jpg")}
            alt="Bedroom Interiors"
            title="Bedroom Interiors"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Bedrooms</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

      {/* 5. Wardrobes */}
      <div className="col-md-6" data-aos="fade-up" data-aos-delay>
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-15.jpg")}
            alt="Custom Wardrobes"
            title="Custom Wardrobes"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Wardrobes</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

      {/* 6. Commercial - PLACEHOLDER image, replace with a real commercial photo */}
      <div className="col-md-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="media-92812">
          <img
            src={withBase("/images/projects/jpg/project-09.jpg")}
            alt="Commercial Interiors"
            title="Commercial Interiors"
            className="img-fluid"
          />
          <div className="text">
            <span className="caption">Commercial</span>
            <p className="my-5">
              <a href={withBase("/projects")} className="more-39291">Learn More</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
      </div>


      <div className="site-section">

        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-7">
              <h2 className="heading-39291">
                Latest 
                <br />
                Projects
              </h2>
            </div>
            <div className="col-md-5 text-right">
              <p>
                <a href={withBase("/projects")} className="more-39291">
                  View All Projects
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="media-29191">
          <div className="owl-2 owl-carousel">
            {/* <img src={withBase("/images/projects/jpg/project-03.jpg")} alt="Living Rooms" title="Living Rooms" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-04.jpg")} alt="Modular Kitchens" title="Modular Kitchens" className="img-fluid" /> */}
            <img src={withBase("/images/projects/jpg/project-13.jpg")} alt="Bedrooms" title="Bedrooms" className="img-fluid" />
            {/* <img src={withBase("/images/projects/jpg/project-01.jpg")} alt="Dining Areas" title="Dining Areas" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-07.jpg")} alt="Wardrobes" title="Wardrobes" className="img-fluid" /> */}
            <img src={withBase("/images/projects/jpg/project-11.jpg")} alt="Office Interiors" title="Office Interiors" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="text">
                  <span className="caption mb-1 d-block">
                    Our Projects
                  </span>
                  <h3 className="mb-3">
                    <a href={withBase("/projects")}>
                      Spaces Crafted with Care
                    </a>
                  </h3>
                  <p>
                    Explore our work across living rooms, modular kitchens, bedrooms, dining areas, wardrobes, and office interiors — each project reflecting quality craftsmanship and thoughtful design.
                  </p>
                  <p className="my-5">
                    <a href={withBase("/projects")} className="more-39291">
                      View Projects
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

  

<section className="speco-craft-section">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT CONTENT */}

      <div className="col-lg-6 speco-craft-content">

        <span className="speco-eyebrow">OUR CRAFT</span>

        <h2 className="speco-section-title">
          Where Design Meets
          <br />
          <span>Precision.</span>
        </h2>

        <p className="speco-section-description">
          A great design is only as good as its making. Our in-house
          production is built on accuracy, consistency and finish,
          so what we draw is exactly what you receive.
        </p>

        <div className="row g-3 speco-craft-features">

          <div className="col-sm-6">
            <div className="speco-craft-item">
              <span className="speco-craft-icon">
                <i className="bi bi-bounding-box"></i>
              </span>

              <div>
                <h4>CNC Panel Processing</h4>
                <p>Exact cuts, repeated flawlessly.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-craft-item">
              <span className="speco-craft-icon">
                <i className="bi bi-layers"></i>
              </span>

              <div>
                <h4>Edge Finishing</h4>
                <p>Clean, seamless edges that feel as good as they look.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-craft-item">
              <span className="speco-craft-icon">
                <i className="bi bi-crosshair"></i>
              </span>

              <div>
                <h4>Precision Boring</h4>
                <p>Perfect alignment, built for a lasting fit.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-craft-item">
              <span className="speco-craft-icon">
                <i className="bi bi-columns-gap"></i>
              </span>

              <div>
                <h4>Panel Pressing</h4>
                <p>Uniform strength and a flawless surface.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}

      <div className="col-lg-6 speco-craft-image-column">
        <div className="speco-image-wrapper speco-craft-image">

          <img
            src={withBase("/images/projects/jpg/speco-01.jpeg")}
            alt="SPECO precision craftsmanship"
            className="img-fluid"
          />

          <div className="speco-image-caption">
            
            <p>Precision in every detail.</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


<section className="speco-process-section">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT IMAGE */}

      <div className="col-lg-5 speco-process-image-column">

        <div className="speco-image-wrapper speco-process-image">

          <img
            src={withBase("/images/projects/jpg/speco-02.jpeg")}
            alt="SPECO interior design process"
            className="img-fluid"
          />

          <div className="speco-image-caption">
           
            <p>From vision to reality.</p>
          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div className="col-lg-7 speco-process-content">

        <span className="speco-eyebrow">OUR PROCESS</span>

        <h2 className="speco-section-title">
          Four Steps. One Beautiful
          <br />
          <span>Transformation.</span>
        </h2>

        <p className="speco-section-description">
          From the first conversation to the final installation,
          we make your interior journey simple and seamless.
        </p>

        <div className="speco-process-list">

          <div className="speco-process-item">
            <span className="speco-process-number">01</span>

            <div className="speco-process-details">
              <h4>Discover</h4>
              <p>
                We listen first. Your vision, your needs, your budget.
              </p>
            </div>

            <i className="bi bi-arrow-up-right speco-process-arrow"></i>
          </div>

          <div className="speco-process-item">
            <span className="speco-process-number">02</span>

            <div className="speco-process-details">
              <h4>Design</h4>
              <p>
                Concepts, layouts and materials, shaped until they feel right.
              </p>
            </div>

            <i className="bi bi-arrow-up-right speco-process-arrow"></i>
          </div>

          <div className="speco-process-item">
            <span className="speco-process-number">03</span>

            <div className="speco-process-details">
              <h4>Create</h4>
              <p>
                Approved designs are crafted into precise, finished components.
              </p>
            </div>

            <i className="bi bi-arrow-up-right speco-process-arrow"></i>
          </div>

          <div className="speco-process-item">
            <span className="speco-process-number">04</span>

            <div className="speco-process-details">
              <h4>Deliver</h4>
              <p>
                Installation and finishing, handled with care until
                the space is ready to live in.
              </p>
            </div>

            <i className="bi bi-arrow-up-right speco-process-arrow"></i>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>


<section className="speco-why-section">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT CONTENT */}

      <div className="col-lg-7 speco-why-content">

        <span className="speco-eyebrow">WHY SPECO</span>

        <h2 className="speco-section-title">
          Experience You Can Trust.
          <br />
          <span>Details You Can See.</span>
        </h2>

        <p className="speco-section-description">
          Every space deserves thoughtful design and exceptional
          execution. Here's what makes SPECO different.
        </p>

        <div className="row g-3 speco-why-grid">

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-award"></i>
              </span>

              <div>
                <h4>10 Years of Experience</h4>
                <p>A decade of refined judgment.</p>
              </div>

            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-palette"></i>
              </span>

              <div>
                <h4>Personalised Design</h4>
                <p>No templates, only your story.</p>
              </div>

            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-grid"></i>
              </span>

              <div>
                <h4>Smart Space Planning</h4>
                <p>Every inch considered and put to work.</p>
              </div>

            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-gem"></i>
              </span>

              <div>
                <h4>Selected Materials</h4>
                <p>Chosen for beauty, durability and feel.</p>
              </div>

            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-tools"></i>
              </span>

              <div>
                <h4>Precision Craftsmanship</h4>
                <p>Made in-house to exacting standards.</p>
              </div>

            </div>
          </div>

          <div className="col-sm-6">
            <div className="speco-why-card">

              <span className="speco-why-icon">
                <i className="bi bi-heart"></i>
              </span>

              <div>
                <h4>A Client-First Approach</h4>
                <p>Clear communication and care at every stage.</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="col-lg-5 speco-why-image-column">

        <div className="speco-image-wrapper speco-why-image">

          <img
            src={withBase("/images/projects/jpg/speco-03.jpeg")}
            alt="SPECO interior design and craftsmanship"
            className="img-fluid"
          />

          <div className="speco-image-caption">
            
            <p>Designed around you.</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>
      </div>

      <HomeBelowProjects />

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="heading-39291">
                 Good Design Is Felt, Not Just Seen.
              </h2>
              <p>
                A beautiful space should do more than look good. It should feel right, work effortlessly and make everyday life a little better.
                </p>
                <p style={{ color: '#897c66'}}>
                We don't just shape spaces. We shape experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
