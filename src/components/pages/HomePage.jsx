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
          <div className="ftco-cover-1 home-hero__slide" style={{backgroundImage: `url('${withBase('/images/projects/jpg/project-03.jpg')}')`}}>
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
              <h2 className="heading-39291">
                Our Featured 
                <br />
                 Services
              </h2>
              <p>
                From residential interiors and modular kitchens to commercial spaces and turnkey solutions — we design, manufacture, and install with care.
              </p>
              <p className="my-5">
                <a href={withBase("/services")} className="more-39291">
                  Learn More
                </a>
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <FeaturedYoutube />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay>
              <div className="media-92812">
                <img src={withBase("/images/projects/jpg/project-15.jpg")} alt="Residential Interiors" title="Residential Interiors" className="img-fluid" />
                <div className="text">
                  <span className="caption">
                    Residential Interiors
                  </span>
                  <h3>
                    <a href={withBase("/services")}>
                      Modular Kitchens, Wardrobes & Living Spaces
                    </a>
                  </h3>
                  <p className="my-5">
                    <a href={withBase("/projects")} className="more-39291">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="media-92812">
                <img src={withBase("/images/projects/jpg/project-06.jpg")} alt="Commercial Interiors" title="Commercial Interiors" className="img-fluid" />
                <div className="text">
                  <span className="caption">
                    Commercial Interiors
                  </span>
                  <h3>
                    <a href={withBase("/services")}>
                      Offices, Showrooms & Retail Spaces
                    </a>
                  </h3>
                  <p className="my-5">
                    <a href={withBase("/projects")} className="more-39291">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay>
              <div className="media-92812">
                <img src={withBase("/images/projects/jpg/project-05.jpg")} alt="Turnkey Interior Solutions" title="Turnkey Interior Solutions" className="img-fluid" />
                <div className="text">
                  <span className="caption">
                    Turnkey Solutions
                  </span>
                  <h3>
                    <a href={withBase("/services")}>
                      Design, Manufacturing & Installation
                    </a>
                  </h3>
                  <p className="my-5">
                    <a href={withBase("/projects")} className="more-39291">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="media-92812">
                <img src={withBase("/images/projects/jpg/project-10.jpg")} alt="In-House Manufacturing" title="In-House Manufacturing" className="img-fluid" />
                <div className="text">
                  <span className="caption">
                    In-House Manufacturing
                  </span>
                  <h3>
                    <a href={withBase("/services")}>
                      Pressing, CNC, Edge Banding & Boring
                    </a>
                  </h3>
                  <p className="my-5">
                    <a href={withBase("/projects")} className="more-39291">
                      Learn More
                    </a>
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
            <img src={withBase("/images/projects/jpg/project-03.jpg")} alt="Living Rooms" title="Living Rooms" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-04.jpg")} alt="Modular Kitchens" title="Modular Kitchens" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-13.jpg")} alt="Bedrooms" title="Bedrooms" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-01.jpg")} alt="Dining Areas" title="Dining Areas" className="img-fluid" />
            <img src={withBase("/images/projects/jpg/project-07.jpg")} alt="Wardrobes" title="Wardrobes" className="img-fluid" />
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
      </div>

      <HomeBelowProjects />

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="heading-39291">
                Rooted in Care. Built on Trust.
              </h2>
              <p>
                Our vision is to create thoughtfully designed spaces that inspire better living. Our mission is to deliver beautifully crafted interiors with honesty, quality, and lasting value — for homes and businesses across Kochi and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
