'use client';

import { useState } from 'react';
import { submitToGoogleSheet } from '@/lib/googleForms';

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

    try {
      await submitToGoogleSheet('contact', {
        name: String(data.get('name') || '').trim(),
        email: String(data.get('email') || '').trim(),
        phoneNumber: String(data.get('phoneNumber') || '').trim(),
        message: String(data.get('message') || '').trim(),
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
              <input
                className="form-control valid"
                name="name"
                type="text"
                required
                disabled={loading}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="email"
                required
                type="email"
                disabled={loading}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                name="phoneNumber"
                required
                type="tel"
                disabled={loading}
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="message"
                cols={30}
                rows={9}
                required
                disabled={loading}
                placeholder="Enter Message"
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
