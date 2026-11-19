import JsonLd from '@/components/JsonLd';
import { siteGraphJsonLd } from '@/lib/seo';

/** Sitewide Organization / LocalBusiness / WebSite JSON-LD for SEO, AEO & GEO */
export default function SiteSeo({ settings }) {
  return <JsonLd data={siteGraphJsonLd(settings)} />;
}
