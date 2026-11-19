'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { withBase } from '@/lib/paths';

const SCRIPT_PATHS = [
  '/js/jquery-3.3.1.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.min.js',
  '/js/owl.carousel.min.js',
  '/js/jquery.sticky.js',
  '/js/jquery.waypoints.min.js',
  '/js/jquery.animateNumber.min.js',
  '/js/jquery.fancybox.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/aos.js',
  '/js/main.js',
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-legacy="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.legacy = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function destroyCarousels() {
  if (!window.jQuery) return;
  const $ = window.jQuery;
  $('.owl-carousel').each(function destroyOwl() {
    const $el = $(this);
    if ($el.data('owl.carousel')) {
      $el.trigger('destroy.owl.carousel');
      $el.removeClass('owl-loaded owl-drag owl-grab');
      $el.find('.owl-stage-outer').children().unwrap();
      $el.find('.owl-stage').children().unwrap();
      $el.find('.owl-item').children().unwrap();
      $el.find('.owl-nav, .owl-dots').remove();
    }
  });
}

function reinitSite() {
  destroyCarousels();
  document.querySelectorAll('.site-mobile-menu-body').forEach((el) => {
    if (!el.querySelector('a.nav-link[href]')) el.innerHTML = '';
  });
  const mainSrc = withBase('/js/main.js');
  document.querySelectorAll(`script[data-legacy="${mainSrc}"]`).forEach((n) => n.remove());
  return loadScript(mainSrc).then(() => {
    if (window.AOS) {
      if (typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
      else window.AOS.init();
    }
  });
}

export default function LegacyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    const scripts = SCRIPT_PATHS.map((p) => withBase(p));
    const jquerySrc = scripts[0];

    async function boot() {
      try {
        const already = document.querySelector(`script[data-legacy="${jquerySrc}"]`);
        if (!already) {
          for (const src of scripts) {
            if (cancelled) return;
            await loadScript(src);
          }
        } else if (!cancelled) {
          await reinitSite();
        }
        if (!cancelled && window.AOS) window.AOS.init();
      } catch (err) {
        console.error('Legacy script load failed', err);
      }
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
