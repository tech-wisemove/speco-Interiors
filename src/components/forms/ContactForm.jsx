'use client';

import { useState } from 'react';
import { submitToGoogleSheet } from '@/lib/googleForms';

const PROJECT_TYPES = [
  'Residential Interiors',
  'Modular Kitchen',
  'Wardrobes',
  'Living Room',
  'Bedroom',
  'Commercial Interiors',
  'Turnkey Solution',
  'Other',
];

const BUDGET_RANGES = [
  'Under ₹5 lakh',
  '₹5 – 10 lakh',
  '₹10 – 20 lakh',
  '₹20 – 40 lakh',
  '₹40 lakh and above',
  'Not sure yet',
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const message = String(data.get('message') || '').trim();

    try {
      await submitToGoogleSheet('contact', {
        name: String(data.get('name') || '').trim(),
        phoneNumber: String(data.get('phoneNumber') || '').trim(),
        email: String(data.get('email') || '').trim(),
        projectLocation: String(data.get('projectLocation') || '').trim(),
        projectType: String(data.get('projectType') || '').trim(),
        budgetRange: String(data.get('budgetRange') || '').trim(),
        message,
      });
      form.reset();
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {success ? (
        <div className="alert alert-success text-center form-feedback">
          Thank you! Your message has been successfully sent. We will get back to you soon.
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger text-center form-feedback" role="alert">
          {error}
        </div>
      ) : null}

      <form className="form-contact contact_form" id="contactform" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className="form-control"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={loading}
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                className="form-control"
                name="phoneNumber"
                type="tel"
                required
                autoComplete="tel"
                disabled={loading}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="form-control"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={loading}
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-location">Project Location</label>
              <input
                id="contact-location"
                className="form-control"
                name="projectLocation"
                type="text"
                required
                disabled={loading}
                placeholder="City or area"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-type">Type of Project</label>
              <select
                id="contact-type"
                className="form-control"
                name="projectType"
                required
                defaultValue=""
                disabled={loading}
              >
                <option value="" disabled>Select a project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-budget">Budget Range</label>
              <select
                id="contact-budget"
                className="form-control"
                name="budgetRange"
                required
                defaultValue=""
                disabled={loading}
              >
                <option value="" disabled>Select a budget range</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-field-label" htmlFor="contact-message">Tell Us About Your Project</label>
              <textarea
                id="contact-message"
                className="form-control w-100"
                name="message"
                rows={6}
                required
                disabled={loading}
                placeholder="Share the rooms, timeline, and anything else we should know"
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="button button-contactForm boxed-btn form-submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="form-spinner" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </form>
    </>
  );
}
