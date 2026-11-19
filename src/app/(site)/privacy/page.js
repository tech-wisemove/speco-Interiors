import SiteShell from '@/components/SiteShell';
import { PRIVACY_FALLBACK } from '@/lib/privacyContent';
import { pageMetadata } from '@/lib/seo';
import { withBase } from '@/lib/paths';

export const metadata = pageMetadata('privacy', {
  title: PRIVACY_FALLBACK.seo?.metaTitle,
  description: PRIVACY_FALLBACK.seo?.metaDescription,
});

export default function PrivacyPage() {
  const doc = PRIVACY_FALLBACK;
  return (
    <SiteShell>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-02.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>{doc.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-8 legal-content"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
