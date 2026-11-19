import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

/** Shared chrome for CMS-driven pages (blogs, FAQ, legal) — same header/footer as HTML. */
export default function SiteShell({ children, settings }) {
  return (
    <div className="site-wrap" id="home-section">
      <SiteHeader settings={settings} />
      {children}
      <SiteFooter settings={settings} />
    </div>
  );
}
