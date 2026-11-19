import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

export const FALLBACK_BLOGS = [
  {
    _id: 'blog-1',
    slug: 'designing-spaces-that-feel-like-home',
    title: 'Designing Spaces That Feel Like Home',
    excerpt: 'Thoughtful layouts and warm materials that bring comfort into everyday living.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(3) },
    content:
      '<p>A home should feel calm the moment you walk in. At Swastam Interiors, we begin with how you live — morning routines, family gatherings, quiet corners — and shape layouts that support those moments.</p><p>Warm materials, balanced lighting, and practical storage turn beautiful rooms into spaces you actually use every day.</p>',
    tags: ['residential', 'design'],
  },
  {
    _id: 'blog-2',
    slug: 'why-in-house-manufacturing-matters',
    title: 'Why In-House Manufacturing Matters',
    excerpt: 'Precision, timelines, and finish quality improve when craft stays under one roof.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(10) },
    content:
      '<p>When design and manufacturing happen together, fewer details get lost in translation. Our Kochi facility uses CNC, edge banding, and careful quality checks so every cabinet and panel matches the approved plan.</p><p>That control means clearer timelines and finishes you can trust.</p>',
    tags: ['manufacturing', 'quality'],
  },
  {
    _id: 'blog-3',
    slug: 'modular-kitchens-built-for-real-life',
    title: 'Modular Kitchens Built for Real Life',
    excerpt: 'Practical storage, clean lines, and durable materials for Kochi homes.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(9) },
    content:
      '<p>A kitchen works hardest in the home. We design modular layouts around workflow — prep, cook, clean — with storage that keeps counters clear and materials that stand up to daily use in Kerala’s climate.</p>',
    tags: ['kitchen', 'modular'],
  },
  {
    _id: 'blog-4',
    slug: 'wardrobe-solutions-for-small-and-large-homes',
    title: 'Wardrobe Solutions for Small and Large Homes',
    excerpt: 'Custom storage that looks seamless and works harder for your clothes and essentials.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(7) },
    content:
      '<p>From slim sliding wardrobes to walk-in storage, we tailor internal layouts — hanging, shelves, drawers — so every inch earns its place without crowding the room.</p>',
    tags: ['wardrobe', 'storage'],
  },
  {
    _id: 'blog-5',
    slug: 'living-rooms-that-balance-comfort-and-style',
    title: 'Living Rooms That Balance Comfort and Style',
    excerpt: 'Elegant seating zones, TV units, and finishes that welcome guests and daily life.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(4) },
    content:
      '<p>Living rooms should photograph well and live well. We combine soft seating flow, media units, and durable finishes so the space feels inviting for both quiet evenings and celebrations.</p>',
    tags: ['living-room', 'residential'],
  },
  {
    _id: 'blog-6',
    slug: 'bedroom-interiors-for-restful-nights',
    title: 'Bedroom Interiors for Restful Nights',
    excerpt: 'Calm palettes, smart storage, and lighting that support better sleep.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(5) },
    content:
      '<p>Bedrooms deserve quiet clarity. Soft tones, clutter-free surfaces, and wardrobe integration help the room feel restful — with lighting layers for wind-down and morning routines.</p>',
    tags: ['bedroom', 'residential'],
  },
  {
    _id: 'blog-7',
    slug: 'office-interiors-that-boost-productivity',
    title: 'Office Interiors That Boost Productivity',
    excerpt: 'Workstations, meeting zones, and finishes that look professional and function daily.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(11) },
    content:
      '<p>Commercial spaces need durability and clarity. We design offices and workstations with efficient layouts, durable surfaces, and a polished look that supports focus and client meetings.</p>',
    tags: ['commercial', 'office'],
  },
  {
    _id: 'blog-8',
    slug: 'choosing-materials-for-kerala-homes',
    title: 'Choosing Materials for Kerala Homes',
    excerpt: 'Finishes and hardware that handle humidity while staying beautiful for years.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(12) },
    content:
      '<p>Humidity and coastal air matter. We recommend laminates, seals, and hardware suited to local conditions so kitchens and wardrobes stay stable, easy to clean, and long-lasting.</p>',
    tags: ['materials', 'tips'],
  },
  {
    _id: 'blog-9',
    slug: 'the-turnkey-advantage-explained',
    title: 'The Turnkey Advantage, Explained',
    excerpt: 'One team for design, manufacturing, and installation — less stress, clearer accountability.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(1) },
    content:
      '<p>Turnkey means fewer handoffs. When Swastam owns design through installation, you get aligned decisions, coordinated schedules, and a single point of accountability from first sketch to final handover.</p>',
    tags: ['turnkey', 'process'],
  },
  {
    _id: 'blog-10',
    slug: 'how-to-prepare-for-your-interior-consultation',
    title: 'How to Prepare for Your Interior Consultation',
    excerpt: 'Simple steps that help us design faster and closer to what you want.',
    author: 'Swastam Interiors LLP',
    coverImage: { url: img(15) },
    content:
      '<p>Bring floor plans if you have them, photos of the space, and a sense of budget and must-haves. Note how each room is used today — and what frustrates you. That clarity helps us propose solutions that fit real life.</p>',
    tags: ['tips', 'consultation'],
  },
];

export function getFallbackBlogBySlug(slug) {
  return FALLBACK_BLOGS.find((b) => b.slug === slug) || null;
}
