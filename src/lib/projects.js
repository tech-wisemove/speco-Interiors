import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

/*
  Image map
  01-10  -> Drishya, Kaloor, Kochi
  11-20  -> Unni, Pathanamthitta

  01 TV jali wall        02 L-sofa lounge        03 Shelf + bench corner
  04 Grey-blue bedroom   05 Wood wardrobe + desk 06 Dressing passage
  07 Brown wall bedroom  08 Bench + ceiling view 09 Desk + wardrobe corridor
  10 White wardrobe
  11 Rattan wardrobe     12 Rattan headboard bed 13 Green sofa living
  14 TV wall + prayer    15 Navy wardrobe/vanity 16 Navy study desk
  17 Navy bed view       18 Utility sink         19 Sage U-kitchen
  20 Kitchen bar shelf

  NOTE: values marked (guess) are placeholders - replace with real data.
*/

export const PROJECT_CATEGORIES = [
  {
    slug: 'living-room-interiors',
    caption: 'Living Rooms',
    title: 'Living Room Interiors',
    body: 'Thoughtfully designed living rooms that balance comfort, elegance, and everyday function — crafted with quality materials and lasting finishes for your home.',
    cover: img(13),
    reverse: false,
    projects: [
      {
        id: 'lr-1',
        title: 'Kaloor Jali Wall Living',
        description:
          'A warm living room featuring a terracotta jali feature wall with open display shelves, a floating TV unit, and a cosy L-shaped sofa corner with wooden blinds.',
        location: 'Kaloor, Kochi',
        owner: 'Drishya',
        squareFeet: '420 sq.ft', // guess
        duration: '6 weeks', // guess
        year: '2025', // guess
        images: [img(1), img(2), img(3)],
        before: null,
        after: img(1),
      },
      {
        id: 'lr-2',
        title: 'Pathanamthitta Emerald Living',
        description:
          'A rich emerald-green sectional paired with a fluted TV wall, wood-and-LED cove lighting, a prayer nook, and a marble-finish floor for a refined family space.',
        location: 'Pathanamthitta',
        owner: 'Unni',
        squareFeet: '480 sq.ft', // guess
        duration: '8 weeks', // guess
        year: '2025', // guess
        images: [img(13), img(14)],
        before: null,
        after: img(13),
      },
    ],
  },
  {
    slug: 'modular-kitchens',
    caption: 'Modular Kitchens',
    title: 'Modular Kitchens',
    body: 'Precision-built modular kitchens designed for efficiency and style — manufactured in-house with CNC cutting, edge banding, and quality craftsmanship you can trust.',
    cover: img(19),
    reverse: true,
    projects: [
      {
        id: 'mk-1',
        title: 'Pathanamthitta Sage Green Kitchen',
        description:
          'A U-shaped sage-green modular kitchen with marble-look backsplash, under-cabinet LED lighting, a plant-and-bar display divider, and a separate utility wash area.',
        location: 'Pathanamthitta',
        owner: 'Unni',
        squareFeet: '130 sq.ft', // guess
        duration: '5 weeks', // guess
        year: '2025', // guess
        images: [img(19), img(20), img(18)],
        before: null,
        after: img(19),
      },
    ],
  },
  {
    slug: 'bedroom-interiors',
    caption: 'Bedrooms',
    title: 'Bedroom Interiors',
    body: 'Serene bedrooms with custom wardrobes, study nooks, and warm finishes — designed for rest and everyday ease.',
    cover: img(17),
    reverse: false,
    projects: [
      {
        id: 'br-1',
        title: 'Kaloor Grey-Blue Master Bedroom',
        description:
          'A calm grey-blue bedroom with an upholstered headboard, glowing bedside units, a full-height wooden wardrobe, and a dressing nook tucked into the passage.',
        location: 'Kaloor, Kochi',
        owner: 'Drishya',
        squareFeet: '240 sq.ft', // guess
        duration: '5 weeks', // guess
        year: '2025', // guess
        images: [img(4), img(5), img(6)],
        before: null,
        after: img(4),
      },
      {
        id: 'br-2',
        title: 'Kaloor Warm Earth Bedroom',
        description:
          'A cosy bedroom with a deep brown feature wall, brass sconces, a cove-lit ceiling, a window bench, a study desk, and a walk-through wardrobe corridor.',
        location: 'Kaloor, Kochi',
        owner: 'Drishya',
        squareFeet: '280 sq.ft', // guess
        duration: '6 weeks', // guess
        year: '2025', // guess
        images: [img(7), img(8), img(9), img(10)],
        before: null,
        after: img(7),
      },
      {
        id: 'br-3',
        title: 'Pathanamthitta Rattan Bedroom',
        description:
          'A light, tropical-themed bedroom with a rattan headboard, botanical feature wallpaper, pendant lights, a rattan-door wardrobe, and a built-in study desk.',
        location: 'Pathanamthitta',
        owner: 'Unni',
        squareFeet: '220 sq.ft', // guess
        duration: '5 weeks', // guess
        year: '2025', // guess
        images: [img(12), img(11)],
        before: null,
        after: img(12),
      },
      {
        id: 'br-4',
        title: 'Pathanamthitta Navy Master Suite',
        description:
          'A bold navy-and-cream master bedroom with a floating bed, full-wall wardrobe, round LED-mirror dressing unit, study desk, and backlit floating shelves.',
        location: 'Pathanamthitta',
        owner: 'Unni',
        squareFeet: '300 sq.ft', // guess
        duration: '7 weeks', // guess
        year: '2025', // guess
        images: [img(17), img(15), img(16)],
        before: null,
        after: img(17),
      },
    ],
  },
  {
    slug: 'wardrobes-dressing-units',
    caption: 'Wardrobes',
    title: 'Wardrobes & Dressing Units',
    body: 'Custom wardrobes and dressing units built to the millimetre — from floor-to-ceiling storage to backlit vanities, designed, manufactured and installed under one roof.',
    cover: img(10),
    reverse: true,
    projects: [
      {
        id: 'wd-1',
        title: 'Kaloor Floor-to-Ceiling Wardrobes',
        description:
          'Tall wardrobes with loft storage in natural wood and high-gloss white finishes, with sleek black handles and a dressing unit with LED edge-lit mirror.',
        location: 'Kaloor, Kochi',
        owner: 'Drishya',
        squareFeet: '90 sq.ft', // guess
        duration: '3 weeks', // guess
        year: '2025', // guess
        images: [img(10), img(5), img(6)],
        before: null,
        after: img(10),
      },
      {
        id: 'wd-2',
        title: 'Pathanamthitta Navy Wardrobe & Vanity',
        description:
          'A full-wall navy wardrobe with brass-toned handles and cream drawers, paired with a curved vanity, arched display shelves, and a glowing round mirror.',
        location: 'Pathanamthitta',
        owner: 'Unni',
        squareFeet: '110 sq.ft', // guess
        duration: '4 weeks', // guess
        year: '2025', // guess
        images: [img(15), img(16), img(11)],
        before: null,
        after: img(15),
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return PROJECT_CATEGORIES.find((c) => c.slug === slug) || null;
}

export function getAllCategorySlugs() {
  return PROJECT_CATEGORIES.map((c) => c.slug);
}
