import ContactPage from '@/components/pages/ContactPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('contact');

export default function Page() {
  return <ContactPage />;
}
