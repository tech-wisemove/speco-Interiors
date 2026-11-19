import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import LegacyPageNav from '@/components/LegacyPageNav';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';
import SiteFooter from '@/components/SiteFooter';

export default function ProjectCategoryPage({ category }) {
  return (
    <div className="site-wrap project-category-page" id="home-section">

      <LegacyPageNav pathname="/projects" />

      <div className="ftco-blocks-cover-1">
        <div className="ftco-cover-1" style={{ backgroundImage: `url('${category.cover}')` }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <p className="project-cat-hero__caption">{category.caption}</p>
                <h1 style={{ color: 'white' }}>{category.title}</h1>
                <p>{category.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="project-cat-back mb-4">
            <Link href="/projects" className="more-39291">
              ← All project categories
            </Link>
          </div>

          <div className="project-cat-stack">
            {category.projects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="row align-items-start project-card__top">
                  <div className="col-lg-7 mb-4 mb-lg-0">
                    <ProjectImageCarousel images={project.images} alt={project.title} />
                  </div>

                  <div className="col-lg-5">
                    <h2 className="heading-39291 project-card__title">{project.title}</h2>
                    <p className="project-card__desc">{project.description}</p>

                    <dl className="project-card__meta">
                      <div>
                        <dt>Location</dt>
                        <dd>{project.location}</dd>
                      </div>
                      <div>
                        <dt>Client</dt>
                        <dd>{project.owner}</dd>
                      </div>
                      <div>
                        <dt>Area</dt>
                        <dd>{project.squareFeet}</dd>
                      </div>
                      <div>
                        <dt>Duration</dt>
                        <dd>{project.duration}</dd>
                      </div>
                      <div>
                        <dt>Year</dt>
                        <dd>{project.year}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="project-card__ba">
                  <p className="project-card__ba-label">Before &amp; After</p>
                  <BeforeAfterSlider
                    beforeSrc={project.before}
                    afterSrc={project.after}
                    alt={`${project.title} before and after`}
                  />
                  <p className="project-card__ba-hint">Drag the slider left and right to compare</p>
                </div>

                {index < category.projects.length - 1 ? (
                  <div className="project-card__divider" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
