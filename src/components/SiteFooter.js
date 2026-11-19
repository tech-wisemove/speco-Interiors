'use client';

import { withBase } from '@/lib/paths';
import Link from 'next/link';
import { useState } from 'react';
import FooterSocial from '@/components/FooterSocial';
import { submitToGoogleSheet } from '@/lib/googleForms';

const FOOTER_LINKS_LEFT = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Project' },
  { href: '/services', label: 'Service' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
];

const FOOTER_LINKS_RIGHT = [
  { href: '/careers', label: 'Careers' },
  { href: '/blogs', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter({ settings }) {
  const logo = settings?.logoUrl || withBase('/images/logo-tr.png');
  const brand = settings?.brandName || 'Swastam Interiors LLP';
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubscribe(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDone(false);
    const form = e.currentTarget;
    const email = String(new FormData(form).get('email') || '').trim();

    try {
      await submitToGoogleSheet('subscribe', { email });
      form.reset();
      setDone(true);
    } catch (err) {
      setError(err.message || 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-theme-line" aria-hidden="true" />
      <div className="container">
        <div className="footer-brand-row">
          <Link href="/" className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={brand} title={brand} />
          </Link>
        </div>

        <div className="row footer-main-row align-items-start">
          <div className="col-lg-4 col-md-6 footer-col">
            <h2 className="footer-heading">About Us</h2>
            <p className="footer-about-text">
              Swastam Interiors LLP creates elegant, functional, and timeless residential and
              commercial interiors through innovative design and advanced manufacturing.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 footer-col">
            <h2 className="footer-heading">Features</h2>
            <div className="footer-links-grid">
              <ul className="list-unstyled footer-links">
                {FOOTER_LINKS_LEFT.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled footer-links">
                {FOOTER_LINKS_RIGHT.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-col">
            <FooterSocial social={settings?.social} />
            <div className="footer-legal-cta">
              <Link href="/terms" className="btn btn-primary text-white footer-terms-btn">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-col">
            {done ? (
              <div className="alert alert-success text-center">Thank you for subscribing!</div>
            ) : null}
            {error ? (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            ) : null}
            <h2 className="footer-heading">Subscribe</h2>
            <form onSubmit={onSubscribe} className="footer-suscribe-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control border-secondary text-white bg-transparent"
                  placeholder="Enter email"
                  required
                  disabled={loading}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary text-white" type="submit" disabled={loading}>
                    {loading ? '…' : 'Go'}
                  </button>
                </div>
              </div>
              <p className="newsletter_text mb-0">
                {loading ? 'Submitting…' : 'Get updates from Swastam.'}
              </p>
            </form>
          </div>
        </div>

        <div className="row footer-copy-row text-center">
          <div className="col-md-12">
            <div className="border-top">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This website is
                designed and developed by{' '}
                <a href="https://auxxweb.in" target="_blank" rel="noreferrer">
                  Auxxweb Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
