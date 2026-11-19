'use client';

import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/forms/ContactForm';

/* Auto-converted from contact.html — ditto markup match */
export default function ContactPage() {
  return (
    <div className="site-wrap" id="home-section">
      <LegacyPageNav pathname="/contact" />
      <div className="ftco-blocks-cover-1">
        <div className="ftco-cover-1" style={{backgroundImage: `url('${withBase('/images/projects/jpg/project-13.jpg')}')`}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{color: 'white'}}>
                  Contact Now
                </h1>
                <p>
                  
                                    Get in touch with Swastam Interiors LLP for inquiries about
                                    residential or commercial interiors, manufacturing, or turnkey
                                    solutions. Rooted in Care. Built on Trust.
                                
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
                <h3 className="text-black mb-4">
                  Contact Info
                </h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      Brand:
                    </span>
                    <span>
                      Swastam Interiors LLP
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      Address:
                    </span>
                    <span>
                      Edayar Industrial Area, Kochi – 683110
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      Phone:
                    </span>
                    <span>
                      +91 98954 43222
                      <br />
                      +91 97453 32274
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      Email:
                    </span>
                    <span>
                      <a href="mailto:info@swastaminteriors.com">
                        info@swastaminteriors.com
                      </a>
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      Instagram:
                    </span>
                    <span>
                      <a href="https://www.instagram.com/swastaminteriors/" target="_blank" rel="noopener">
                        @swastaminteriors
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
            src="https://maps.google.com/maps?q=Edayar+Industrial+Area,+Kochi,+Kerala+683110&z=15&output=embed"
            width="80%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Swastam Interiors LLP location map"
          />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
