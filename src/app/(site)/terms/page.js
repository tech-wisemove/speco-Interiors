import SiteShell from '@/components/SiteShell';
import { pageMetadata } from '@/lib/seo';
import { TERMS_FALLBACK } from '@/lib/termsContent';
import { withBase } from '@/lib/paths';

export const metadata = pageMetadata('terms', {
  title: TERMS_FALLBACK.seo?.metaTitle,
  description: TERMS_FALLBACK.seo?.metaDescription,
});

export default function TermsPage() {
  const doc = TERMS_FALLBACK;
  return (
    <SiteShell>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-01.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>{doc.title}</h1>
                <p>Please read these terms before using our website and services.</p>
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
