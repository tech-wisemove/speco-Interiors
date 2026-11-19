import JsonLd from '@/components/JsonLd';
import SiteShell from '@/components/SiteShell';
import { FALLBACK_FAQS } from '@/lib/faqs';
import { faqJsonLd, pageMetadata } from '@/lib/seo';
import { withBase } from '@/lib/paths';

export const metadata = pageMetadata('faq');

export default function FaqPage() {
  const faqs = FALLBACK_FAQS;

  return (
    <SiteShell>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-06.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>FAQ</h1>
                <p>Answers to common questions about our interiors and process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              {faqs.map((faq) => (
                <div className="mb-4 home-faq" key={faq._id || faq.question}>
                  <h3 className="heading-39291 home-faq__q" style={{ fontSize: '1.35rem' }}>
                    {faq.question}
                  </h3>
                  <p className="home-faq__a">{faq.answer}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
