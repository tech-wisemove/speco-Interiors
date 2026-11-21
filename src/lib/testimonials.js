import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

export const TESTIMONIALS = [
  {
    name: 'Drishya',
    role: 'Homeowner, Kaloor, Kochi',
    quote: 'Every corner of our home feels thoughtfully designed. The living room and bedrooms turned out even more beautiful than we imagined. We absolutely love the warmth and elegance of the spaces.', 
    images: [img(1), img(4), img(7)], // jali living wall, grey-blue bedroom, warm bedroom
  },
  {
    name: 'Unni',
    role: 'Homeowner, Pathanamthitta',
    quote: 'We wanted a home that reflected our style while feeling comfortable and welcoming. The final design exceeded our expectations. From the kitchen to the bedrooms, every detail feels just right.', 
    images: [img(13), img(19), img(17)], // emerald living room, sage kitchen, navy bedroom
  },
  {
    name: 'Lakshmi',
    role: 'Apartment Owner, Kakkanad',
    quote:
      'Efficient layouts, soft-close drawers, easy-clean surfaces, and under-cabinet lighting. Every kitchen is planned around how you cook and built to handle Kerala\u2019s humid climate.',
    images: [img(3), img(4), img(5)],
  },
  {
    name: 'Amal M',
    role: 'Commercial Client',
    quote:
      'Floor-to-ceiling storage planned around what you own, with hanging space, drawers, and loft units in finishes from natural wood and rattan to gloss white and navy.',
    images: [img(11), img(12), img(13)],
  },
  {
    name: 'Pooja Krishna',
    role: 'Family Home Client',
    quote:
      'Comfortable seating zones, TV units, display niches, and layered lighting that make a living room work for family evenings and guests alike.',
    images: [img(9), img(8), img(7)],
  },
  {
    name: 'Alvin Lijo',
    role: 'Bedroom Interiors',
    quote:
      'Calm palettes, feature walls, bedside lighting, and built-in wardrobes and study desks, designed so the room feels restful and the floor space stays open.',
    images: [img(1), img(2), img(6)],
  },
  {
    name: 'Maria Varghese',
    role: 'First-Time Home Buyer',
    quote:
      'Custom-made TV units, dressing tables with LED mirrors, and study desks with floating shelves, built to fit your room to the millimetre.',
    images: [img(14), img(15), img(16)],
  },
  {
    name: 'Arjun S',
    role: 'Residential Client',
    quote:
      'One team for design, planning, in-house manufacturing, installation, and finishing, so you get aligned decisions and a single point of accountability from concept to handover.',
    images: [img(10), img(11), img(1)],
  },
];
