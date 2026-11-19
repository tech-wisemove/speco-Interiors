import GalleryPage from '@/components/pages/GalleryPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('gallery');

export default function Page() {
  return <GalleryPage />;
}
