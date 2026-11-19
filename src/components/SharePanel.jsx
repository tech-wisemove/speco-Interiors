'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

const BRAND = 'SPECO Interiors';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function buildBrandedQrCard(pageUrl) {
  const qrDataUrl = await QRCode.toDataURL(pageUrl, {
    width: 420,
    margin: 1,
    color: { dark: '#1a1a1a', light: '#ffffff' },
    errorCorrectionLevel: 'M',
  });

  const canvas = document.createElement('canvas');
  const w = 640;
  const h = 760;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  // Background
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#2a2622');
  grad.addColorStop(0.55, '#1a1a1a');
  grad.addColorStop(1, '#3a342e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Gold top accent
  const accent = ctx.createLinearGradient(0, 0, w, 0);
  accent.addColorStop(0, 'transparent');
  accent.addColorStop(0.2, '#aca18f');
  accent.addColorStop(0.5, '#d9d0c3');
  accent.addColorStop(0.8, '#aca18f');
  accent.addColorStop(1, 'transparent');
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, w, 6);

  // Soft card panel
  ctx.fillStyle = '#f7f4ef';
  roundRect(ctx, 48, 48, w - 96, h - 96, 12);
  ctx.fill();

  // Brand name
  ctx.fillStyle = '#1a1a1a';
  ctx.font = '700 28px "DM Sans", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(BRAND, w / 2, 120);

  // Scan now
  ctx.fillStyle = '#aca18f';
  ctx.font = '700 16px "DM Sans", Arial, sans-serif';
  ctx.fillText('SCAN NOW', w / 2, 158);

  // QR white frame
  const qrSize = 360;
  const qrX = (w - qrSize) / 2;
  const qrY = 200;
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, qrX - 16, qrY - 16, qrSize + 32, qrSize + 32, 8);
  ctx.fill();
  ctx.strokeStyle = 'rgba(172, 161, 143, 0.55)';
  ctx.lineWidth = 2;
  roundRect(ctx, qrX - 16, qrY - 16, qrSize + 32, qrSize + 32, 8);
  ctx.stroke();

  const qrImg = await loadImage(qrDataUrl);
  ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

  // Footer line on card
  ctx.fillStyle = '#7a7268';
  ctx.font = '400 14px "DM Sans", Arial, sans-serif';
  ctx.fillText('Rooted in Care. Built on Trust.', w / 2, h - 78);

  return canvas.toDataURL('image/png');
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

export default function SharePanel({ open, onClose }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [qrCard, setQrCard] = useState('');
  const [qrLoading, setQrLoading] = useState(false);
  const [view, setView] = useState('menu'); // menu | social | qr
  const panelRef = useRef(null);

  const refreshUrl = useCallback(() => {
    if (typeof window !== 'undefined') setUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    refreshUrl();
    setView('menu');
    setCopied(false);
    setQrCard('');

    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.classList.add('share-panel-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('share-panel-open');
    };
  }, [open, onClose, refreshUrl]);

  useEffect(() => {
    if (!open || view !== 'qr' || !url) return undefined;
    let cancelled = false;
    setQrLoading(true);
    buildBrandedQrCard(url)
      .then((data) => {
        if (!cancelled) setQrCard(data);
      })
      .catch(() => {
        if (!cancelled) setQrCard('');
      })
      .finally(() => {
        if (!cancelled) setQrLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [open, view, url]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function shareNative() {
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {});
    } else {
      setView('social');
    }
  }

  function downloadQr() {
    if (!qrCard) return;
    const a = document.createElement('a');
    a.href = qrCard;
    a.download = 'SPECO-share-qr.png';
    a.click();
  }

  const encoded = encodeURIComponent(url);
  const title = encodeURIComponent(typeof document !== 'undefined' ? document.title : BRAND);

  if (!open) return null;

  return (
    <div className="share-overlay" role="presentation" onClick={onClose}>
      <div
        className="share-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Share this page"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="share-panel__head">
          <div>
            <p className="share-panel__eyebrow">Share</p>
            <h3 className="share-panel__title">
              {view === 'qr' ? 'QR Code' : view === 'social' ? 'Share on Social' : 'Share this page'}
            </h3>
          </div>
          <button type="button" className="share-panel__close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>

        {view === 'menu' ? (
          <div className="share-panel__actions">
            <button type="button" className="share-action" onClick={copyLink}>
              <span className="share-action__icon">
                <i className="fas fa-link" aria-hidden="true" />
              </span>
              <span className="share-action__text">
                <strong>{copied ? 'Link copied' : 'Copy link'}</strong>
                <small>Copy the current page URL</small>
              </span>
            </button>

            <button type="button" className="share-action" onClick={shareNative}>
              <span className="share-action__icon">
                <i className="fas fa-share-nodes" aria-hidden="true" />
              </span>
              <span className="share-action__text">
                <strong>Share on social</strong>
                <small>WhatsApp, Facebook, X, LinkedIn & more</small>
              </span>
            </button>

            <button type="button" className="share-action" onClick={() => setView('qr')}>
              <span className="share-action__icon">
                <i className="fas fa-qrcode" aria-hidden="true" />
              </span>
              <span className="share-action__text">
                <strong>Share QR code</strong>
                <small>Generate & download a branded QR</small>
              </span>
            </button>
          </div>
        ) : null}

        {view === 'social' ? (
          <div className="share-social">
            <button type="button" className="share-back" onClick={() => setView('menu')}>
              ← Back
            </button>
            <div className="share-social__grid">
              <a
                className="share-social__btn share-social__btn--wa"
                href={`https://wa.me/?text=${title}%20${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                className="share-social__btn share-social__btn--fb"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" aria-hidden="true" />
                Facebook
              </a>
              <a
                className="share-social__btn share-social__btn--x"
                href={`https://twitter.com/intent/tweet?url=${encoded}&text=${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter" aria-hidden="true" />
                X
              </a>
              <a
                className="share-social__btn share-social__btn--li"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        ) : null}

        {view === 'qr' ? (
          <div className="share-qr">
            <button type="button" className="share-back" onClick={() => setView('menu')}>
              ← Back
            </button>

            <div className="share-qr__card">
              {qrLoading ? (
                <div className="share-qr__placeholder">
                  <p className="share-qr__brand">{BRAND}</p>
                  <p className="share-qr__scan">Scan Now</p>
                  <div className="share-qr__skeleton" aria-hidden="true" />
                  <p className="share-qr__loading">Generating QR…</p>
                </div>
              ) : qrCard ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrCard} alt={`${BRAND} QR code — Scan Now`} className="share-qr__preview" />
              ) : (
                <div className="share-qr__placeholder">
                  <p className="share-qr__brand">{BRAND}</p>
                  <p className="share-qr__scan">Scan Now</p>
                  <p className="share-qr__loading">Could not generate QR. Try again.</p>
                </div>
              )}
            </div>

            <p className="share-qr__url" title={url}>
              {url}
            </p>

            <button
              type="button"
              className="share-qr__download"
              onClick={downloadQr}
              disabled={!qrCard || qrLoading}
            >
              <i className="fas fa-download" aria-hidden="true" /> Download QR
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
