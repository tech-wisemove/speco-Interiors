import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

export const TESTIMONIALS = [
  {
    name: 'Ananya Menon',
    role: 'Homeowner, Kochi',
    quote:
      'SPECO transformed our apartment into a warm, functional home. The team listened carefully and delivered quality we can feel every day. From the first consultation to the final handover, every detail was handled with care.',
    images: [img(3), img(4), img(5)],
  },
  {
    name: 'Rahul Krishnan',
    role: 'Business Owner',
    quote:
      'Our office interiors were completed on time with excellent finish. Professional, transparent, and truly rooted in care. The workspace now feels premium and productive for our entire team.',
    images: [img(11), img(12), img(13)],
  },
  {
    name: 'Priya Nair',
    role: 'Villa Project',
    quote:
      'From modular kitchen to wardrobes, every detail was thoughtfully crafted. We recommend SPECO without hesitation. Their in-house manufacturing gave us confidence in both quality and timelines.',
    images: [img(9), img(8), img(7)],
  },
  {
    name: 'Vivek Thomas',
    role: 'Showroom Client',
    quote:
      'Turnkey delivery made the process stress-free. Design, manufacturing, and installation were seamless end to end. Clients walking into our showroom always notice the finishes first.',
    images: [img(1), img(2), img(6)],
  },
  {
    name: 'Meera Joseph',
    role: 'Residential Client',
    quote:
      'Beautiful spaces, honest communication, and lasting quality. SPECO lived up to their promise — built on trust. Our living areas feel elegant yet practical for everyday family life.',
    images: [img(14), img(15), img(16)],
  },
  {
    name: 'Arjun R.',
    role: 'Commercial Fit-out',
    quote:
      'In-house manufacturing made a clear difference in precision and timelines. Outstanding craftsmanship throughout. We appreciated the clear updates and the care taken with every material choice.',
    images: [img(10), img(11), img(1)],
  },
];
