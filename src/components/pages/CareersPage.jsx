'use client';

import { withBase } from '@/lib/paths';
import LegacyPageNav from '@/components/LegacyPageNav';
import SiteFooter from '@/components/SiteFooter';
import CareerForm from '@/components/forms/CareerForm';

/* Auto-converted from careers.html — ditto markup match */
export default function CareersPage() {
  return (
    <div className="site-wrap" id="home-section">
      <LegacyPageNav pathname="/careers" />
      <div className="ftco-blocks-cover-1">
        <div className="ftco-cover-1" style={{backgroundImage: `url('${withBase('/images/projects/jpg/project-13.jpg')}')`}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center text-white">
                <h1 style={{color: 'white'}}>
                  Careers
                </h1>
                <p>
                  
                                    Join Swastam Interiors LLP — craft beautiful spaces with a team
                                    rooted in care and built on trust. Explore open roles in design,
                                    manufacturing, and operations.
                                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="col-12 d-flex justify-content-between">
            <h4>
              Interior Designer
            </h4>
            <h4>
              Kochi
            </h4>
          </div>
          <hr />
          <div className="col-12 d-flex justify-content-between">
            <h4>
              CNC Operator
            </h4>
            <h4>
              Kochi
            </h4>
          </div>
          <hr />
          <div className="col-12 d-flex justify-content-between">
            <h4>
              Accountant
            </h4>
            <h4>
              Kochi
            </h4>
          </div>
          <hr />
          <div className="col-12 d-flex justify-content-between">
            <h4>
              Site Supervisor
            </h4>
            <h4>
              Kochi
            </h4>
          </div>
          <hr />
          <div className="col-12 d-flex justify-content-between">
            <h4>
              Marketing Manager
            </h4>
            <h4>
              Kochi
            </h4>
          </div>
          <hr />
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 mx-5">
              <CareerForm />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
