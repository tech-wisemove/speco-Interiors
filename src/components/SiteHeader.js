'use client';

import { withBase } from '@/lib/paths';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ALL_NAV, LEFT_NAV, RIGHT_NAV } from '@/lib/siteNav';

export default function SiteHeader({ settings }) {
  const pathname = usePathname();
  const logo = settings?.logoUrl || withBase('/images/logo-light.png');
  const brand = settings?.brandName || 'SPECO Interiors';
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('offcanvas-menu', open);
    return () => document.body.classList.remove('offcanvas-menu');
  }, [open]);

  return (
    <>
      <div className={`site-mobile-menu site-navbar-target${open ? ' is-open' : ''}`}>
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <button
              type="button"
              className="site-mobile-menu-close-btn"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span className="icon-close2" />
            </button>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            {ALL_NAV.map((item) => (
              <li key={item.href} className={isActive(item.href) ? 'active' : ''}>
                <Link href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-4">
              <nav className="site-navigation text-right ml-auto" role="navigation">
                <ul className="site-menu main-menu d-none d-lg-block">
                  {LEFT_NAV.map((item) => (
                    <li key={item.href} className={isActive(item.href) ? 'active' : ''}>
                      <Link href={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-lg-4 text-center">
              <div className="site-logo">
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt={brand} title={brand} />
                </Link>
              </div>
              <div className="ml-auto toggle-button d-inline-block d-lg-none">
                <button
                  type="button"
                  className={`site-menu-toggle text-white${open ? ' active' : ''}`}
                  aria-label="Open menu"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                >
                  <span className="icon-menu h3 text-white" />
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <nav className="site-navigation text-left mr-auto" role="navigation">
                <ul className="site-menu main-menu d-none d-lg-block">
                  {RIGHT_NAV.map((item) => (
                    <li key={item.href} className={isActive(item.href) ? 'active' : ''}>
                      <Link href={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
