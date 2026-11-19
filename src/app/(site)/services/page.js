import ServicesPage from '@/components/pages/ServicesPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('services');

export default function Page() {
  return <ServicesPage />;
}
