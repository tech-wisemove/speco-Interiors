import ProjectsPage from '@/components/pages/ProjectsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('projects');

export default function Page() {
  return <ProjectsPage />;
}
