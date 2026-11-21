'use client';

import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="site-wrap" id="home-section">
      <LegacyPageNav pathname="/contact" />
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1"
          style={{ backgroundImage: `url('${withBase('/images/projects/jpg/project-13.jpg')}')` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{ color: 'white' }}>Let&apos;s Create Something Beautiful.</h1>
                <p>
                  Have a project in mind? Tell us about it. We&apos;d love to hear your story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <ContactForm />
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Brand:</span>
                    <span>
                      SPECO INTERIORS
                      <br />
                      Spaces That Speak Your Style
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>Mattakuzhi, Ernakulam, Kerala, India</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Call:</span>
                    <span>
                      <a href="tel:+919061104584">9061104584</a>
                      <br />
                      <a href="tel:+919400104541">9400104541</a>
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Email:</span>
                    <span>
                      <a href="mailto:info@SPECOinteriors.com">info@SPECOinteriors.com</a>
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Instagram:</span>
                    <span>
                      <a
                        href="https://www.instagram.com/SPECOinteriors/"
                        target="_blank"
                        rel="noopener"
                      >
                        @SPECOinteriors
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-wrapper">
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=Mattakuzhi,+Ernakulam,+Kerala&z=15&output=embed"
            width="80%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SPECO Interiors location map"
          />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
