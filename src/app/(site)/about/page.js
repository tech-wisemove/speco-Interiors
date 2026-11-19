import AboutPage from '@/components/pages/AboutPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('about');

export default function Page() {
  return <AboutPage />;
}
