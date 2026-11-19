import { withBase } from '@/lib/paths';
import Link from 'next/link';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';
import { PROJECT_CATEGORIES } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <div className="site-wrap projects-page" id="home-section">

      <LegacyPageNav pathname="/projects" />

      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-13.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>Our Projects</h1>
                <p>Crafting Beautiful Spaces with Precision and Care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          {PROJECT_CATEGORIES.map((project) => (
            <div
              className={`row projects-row align-items-center${project.reverse ? ' projects-row--reverse' : ''}`}
              key={project.slug}
            >
              <div className="col-12 col-lg-8 projects-row__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.cover} alt={project.title} title={project.title} />
              </div>
              <div className="col-12 col-lg-4 projects-row__content">
                <span className="caption">{project.caption}</span>
                <h2 className="heading-39291">{project.title}</h2>
                <p>{project.body}</p>
                <Link href={`/projects/${project.slug}`} className="more-39291 projects-row__more">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
