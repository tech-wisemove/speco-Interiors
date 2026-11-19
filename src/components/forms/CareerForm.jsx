'use client';

import { useState } from 'react';
import { submitToGoogleSheet } from '@/lib/googleForms';

const DESIGNATIONS = [
  'Interior Designer',
  'CNC Operator',
  'Accountant',
  'Site Supervisor',
  'Marketing Manager',
];

export default function CareerForm() {
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
    const cvFile = data.get('cv');

    if (!(cvFile instanceof File) || !cvFile.size) {
      setError('Please upload your CV.');
      setLoading(false);
      return;
    }

    try {
      await submitToGoogleSheet(
        'careers',
        {
          name: String(data.get('name') || '').trim(),
          email: String(data.get('email') || '').trim(),
          phoneNumber: String(data.get('phoneNumber') || '').trim(),
          age: String(data.get('age') || '').trim(),
          designation: String(data.get('designation') || '').trim(),
          experience: String(data.get('experience') || '').trim(),
          qualification: String(data.get('qualification') || '').trim(),
          location: String(data.get('location') || '').trim(),
        },
        { cvFile }
      );
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
          Thank you! Your application has been submitted. We will get back to you soon.
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger text-center form-feedback" role="alert">
          {error}
        </div>
      ) : null}

      <form className="form-contact contact_form" id="careersForm" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control" name="name" type="text" required disabled={loading} placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control" name="email" type="email" required disabled={loading} placeholder="Email" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input className="form-control" name="phoneNumber" type="tel" required disabled={loading} placeholder="Enter Phone Number" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input className="form-control" name="age" type="text" required disabled={loading} placeholder="Enter Age" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <select className="form-control" name="designation" required disabled={loading} defaultValue="Interior Designer">
                {DESIGNATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input className="form-control" name="experience" type="text" required disabled={loading} placeholder="Enter Experience" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input className="form-control" name="qualification" type="text" required disabled={loading} placeholder="Enter Qualification" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <select className="form-control" name="location" required disabled={loading} defaultValue="Kochi">
                <option value="Kochi">Kochi</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-file-label" htmlFor="cv">
                Upload CV (PDF / DOC / DOCX, max 5 MB)
              </label>
              <input
                className="form-control"
                name="cv"
                id="cv"
                type="file"
                required
                disabled={loading}
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <button
            type="submit"
            className="button button-contactForm boxed-btn form-submit-btn form-submit-btn--full"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="form-spinner" aria-hidden="true" />
                Uploading CV &amp; submitting…
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </>
  );
}
