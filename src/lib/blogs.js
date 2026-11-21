import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

export const FALLBACK_BLOGS = [
  {
    _id: 'blog-1',
    slug: 'designing-spaces-that-feel-like-home',
    title: 'Designing Spaces That Feel Like Home',
    excerpt:
      'Warm woods, layered lighting, and relaxed seating that turn a house into a place you want to come back to.',
    author: 'SPECO Interiors',
    coverImage: { url: img(2) }, // L-sofa lounge with wooden blinds
    content:
      '<p>A home should feel calm the moment you walk in. At SPECO Interiors, we begin with how you live: morning routines, family evenings, the corner where you read. Every layout decision comes from those moments.</p><p>Natural wood tones, soft upholstery, and warm lighting do most of the work. Add a display shelf with a few plants and books, and the room starts to feel personal rather than staged.</p><p>The goal is simple: a space that looks good in photos and feels even better to live in.</p>',
    tags: ['residential', 'design'],
  },
  {
    _id: 'blog-2',
    slug: 'why-in-house-manufacturing-matters',
    title: 'Why In-House Manufacturing Matters',
    excerpt:
      'When design and production sit under one roof, finish quality and delivery timelines improve.',
    author: 'SPECO Interiors',
    coverImage: { url: img(10) }, // gloss white wardrobe close-up
    content:
      '<p>Fewer handoffs mean fewer mistakes. Our Kochi facility handles CNC cutting, pressing, edge banding, and boring in-house, so every panel is made to the approved drawing.</p><p>You can see the difference in the details: even gaps between shutters, clean edges, and handles that line up. These are small things that decide whether a wardrobe looks custom-built or merely assembled.</p><p>Because we control production, we can also give clearer timelines and fix issues quickly instead of waiting on outside vendors.</p>',
    tags: ['manufacturing', 'quality'],
  },
  {
    _id: 'blog-3',
    slug: 'modular-kitchens-built-for-real-life',
    title: 'Modular Kitchens Built for Real Life',
    excerpt:
      'Smart layouts, easy-clean surfaces, and under-cabinet lighting that make daily cooking easier.',
    author: 'SPECO Interiors',
    coverImage: { url: img(19) }, // sage green U-shaped kitchen
    content:
      '<p>The kitchen is the hardest-working room in the house. We plan the layout around the cooking triangle of prep, cook, and clean, so nothing you need is ever far away.</p><p>Soft-close drawers, tall pantry units, and a backsplash that wipes clean in seconds keep daily routines smooth. Under-cabinet LED strips light the counter exactly where you chop and cook.</p><p>Finishes are chosen for Kerala conditions, so they handle steam, oil, and humidity without fading or swelling.</p>',
    tags: ['kitchen', 'modular'],
  },
  {
    _id: 'blog-4',
    slug: 'wardrobe-solutions-for-small-and-large-homes',
    title: 'Wardrobe Solutions for Small and Large Homes',
    excerpt:
      'From slim hinged units to full-height storage, wardrobes planned around how you actually dress.',
    author: 'SPECO Interiors',
    coverImage: { url: img(5) }, // wooden floor-to-ceiling wardrobe with loft
    content:
      '<p>A good wardrobe starts inside. We plan hanging lengths, shelves, drawers, and loft storage around what you own, not a standard template.</p><p>In smaller rooms, a floor-to-ceiling unit with loft storage frees up floor space. In larger rooms, a walk-in or wall-long wardrobe with a dressing corner makes mornings easier.</p><p>Finishes range from natural wood to high-gloss white, with slim handles that keep the front clean and modern.</p>',
    tags: ['wardrobe', 'storage'],
  },
  {
    _id: 'blog-5',
    slug: 'living-rooms-that-balance-comfort-and-style',
    title: 'Living Rooms That Balance Comfort and Style',
    excerpt:
      'Rich colours, fluted panels, and cove lighting that make a living room work for guests and family alike.',
    author: 'SPECO Interiors',
    coverImage: { url: img(13) }, // emerald green sofa living room
    content:
      '<p>A living room has to host everything: movie nights, festival gatherings, and quiet afternoons. We balance bold elements, like a deep green sofa, with calm backdrops of white walls and warm wood.</p><p>Fluted wall panels, a floating TV unit, and LED cove lighting add depth without clutter. Small touches such as a prayer nook or display niche make the room feel truly yours.</p><p>Durable flooring and washable finishes keep it looking fresh through years of use.</p>',
    tags: ['living-room', 'residential'],
  },
  {
    _id: 'blog-6',
    slug: 'bedroom-interiors-for-restful-nights',
    title: 'Bedroom Interiors for Restful Nights',
    excerpt:
      'Soft textures, natural materials, and gentle lighting for a bedroom that helps you switch off.',
    author: 'SPECO Interiors',
    coverImage: { url: img(12) }, // rattan headboard bedroom with pendants
    content:
      '<p>A bedroom should slow you down. We use a quiet palette, natural textures like rattan and wood, and pendant or wall lights placed at bedside height to create a soft glow in the evening.</p><p>A feature wall behind the bed adds character without crowding the room, while a wardrobe and study desk are built in so floor space stays open.</p><p>Layered lighting lets you move from bright mornings to a calm night-time mood with one switch.</p>',
    tags: ['bedroom', 'residential'],
  },
  {
    _id: 'blog-7',
    slug: 'office-interiors-that-boost-productivity',
    title: 'Office Interiors That Boost Productivity',
    excerpt:
      'Well-planned workstations and storage that keep a workspace tidy, durable, and professional.',
    author: 'SPECO Interiors',
    coverImage: { url: img(16) }, // study desk with floating shelves (placeholder until office photo)
    content:
      '<p>Whether it is a home office or a commercial floor, a good workspace starts with the desk. We design workstations with proper depth, cable management, and drawers within easy reach.</p><p>Floating shelves with task lighting free up the desk surface, and durable laminates stand up to daily wear. Colour choices keep the space focused without feeling cold.</p><p>For showrooms and offices, we design, manufacture, and install under one roof so your space opens on schedule.</p>',
    tags: ['commercial', 'office'],
  },
  {
    _id: 'blog-8',
    slug: 'choosing-materials-for-kerala-homes',
    title: 'Choosing Materials for Kerala Homes',
    excerpt:
      'Laminates, hardware, and natural accents that handle humidity while ageing gracefully.',
    author: 'SPECO Interiors',
    coverImage: { url: img(1) }, // terracotta jali wall
    content:
      '<p>Kerala\u2019s humidity is tough on interiors. Choosing the right materials from the start saves repairs later. We use moisture-resistant boards, sealed edges, and corrosion-resistant hardware for kitchens and wardrobes.</p><p>Natural materials still have a place. Terracotta jali, wood veneers, and cane add warmth and texture, and they suit the climate when they are properly finished.</p><p>Ask us for material samples before you decide. Seeing and touching them makes the choice much easier.</p>',
    tags: ['materials', 'tips'],
  },
  {
    _id: 'blog-9',
    slug: 'the-turnkey-advantage-explained',
    title: 'The Turnkey Advantage, Explained',
    excerpt:
      'One team from concept to handover means aligned decisions and one point of accountability.',
    author: 'SPECO Interiors',
    coverImage: { url: img(17) }, // finished navy master bedroom
    content:
      '<p>Turnkey means we take care of design, planning, manufacturing, installation, and finishing. You deal with one team instead of coordinating designers, carpenters, and electricians separately.</p><p>A finished room like a bedroom with built-in wardrobes, a dressing unit, lighting, and furnishing comes together because every detail was planned together from day one.</p><p>The result is fewer delays, clearer costs, and a handover you can walk into with confidence.</p>',
    tags: ['turnkey', 'process'],
  },
  {
    _id: 'blog-10',
    slug: 'how-to-prepare-for-your-interior-consultation',
    title: 'How to Prepare for Your Interior Consultation',
    excerpt:
      'A few simple things to gather before we meet, so we can design faster and closer to your needs.',
    author: 'SPECO Interiors',
    coverImage: { url: img(8) }, // bedroom with bench, desk and ceiling detail
    content:
      '<p>You do not need a finished plan. Bring floor plans if you have them, photos of the rooms, and a rough budget range.</p><p>Make a short list of must-haves, such as a study corner, extra storage, or a window bench, and a few photos of styles you like. Also note what frustrates you about your current space.</p><p>With that, we can suggest layouts and materials in the very first meeting.</p>',
    tags: ['tips', 'consultation'],
  },
];

export function getFallbackBlogBySlug(slug) {
  return FALLBACK_BLOGS.find((b) => b.slug === slug) || null;
}
