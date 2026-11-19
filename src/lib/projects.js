import { withBase } from '@/lib/paths';

const img = (n) =>
  withBase(`/images/projects/jpg/project-${String(n).padStart(2, '0')}.jpg`);

export const PROJECT_CATEGORIES = [
  {
    slug: 'living-room-interiors',
    caption: 'Living Rooms',
    title: 'Living Room Interiors',
    body: 'Thoughtfully designed living rooms that balance comfort, elegance, and everyday function — crafted with quality materials and lasting finishes for your home.',
    cover: img(3),
    reverse: false,
    projects: [
      {
        id: 'lr-1',
        title: 'Panampilly Family Living',
        description:
          'An open living room with custom TV unit, soft seating zones, and warm lighting designed for everyday family gatherings.',
        location: 'Panampilly Nagar, Kochi',
        owner: 'Ananya Menon',
        squareFeet: '480 sq.ft',
        duration: '6 weeks',
        year: '2024',
        images: [img(3), img(4), img(16)],
        before: img(8),
        after: img(3),
      },
      {
        id: 'lr-2',
        title: 'Marine Drive Apartment Lounge',
        description:
          'A compact lounge refreshed with storage-rich media wall, calm neutrals, and finishes suited to coastal living.',
        location: 'Marine Drive, Kochi',
        owner: 'Rahul Krishnan',
        squareFeet: '320 sq.ft',
        duration: '4 weeks',
        year: '2025',
        images: [img(4), img(2), img(1)],
        before: img(13),
        after: img(4),
      },
      {
        id: 'lr-3',
        title: 'Vyttila Villa Hall',
        description:
          'A double-height living hall with layered lighting, custom joinery, and a welcoming seating layout for guests.',
        location: 'Vyttila, Kochi',
        owner: 'Priya Nair',
        squareFeet: '720 sq.ft',
        duration: '8 weeks',
        year: '2023',
        images: [img(16), img(3), img(14)],
        before: img(10),
        after: img(16),
      },
    ],
  },
  {
    slug: 'modular-kitchens',
    caption: 'Modular Kitchens',
    title: 'Modular Kitchens',
    body: 'Precision-built modular kitchens designed for efficiency and style — manufactured in-house with CNC cutting, edge banding, and quality craftsmanship you can trust.',
    cover: img(9),
    reverse: true,
    projects: [
      {
        id: 'mk-1',
        title: 'Kakkanad Parallel Kitchen',
        description:
          'A parallel modular kitchen with soft-close drawers, durable laminates, and a clean workflow for busy weeknights.',
        location: 'Kakkanad, Kochi',
        owner: 'Meera Joseph',
        squareFeet: '110 sq.ft',
        duration: '5 weeks',
        year: '2024',
        images: [img(9), img(8), img(7)],
        before: img(12),
        after: img(9),
      },
      {
        id: 'mk-2',
        title: 'Edappally L-Shaped Kitchen',
        description:
          'L-shaped layout with tall pantry unit, under-cabinet lighting, and easy-clean surfaces for family cooking.',
        location: 'Edappally, Kochi',
        owner: 'Vivek Thomas',
        squareFeet: '145 sq.ft',
        duration: '6 weeks',
        year: '2025',
        images: [img(8), img(9), img(6)],
        before: img(11),
        after: img(8),
      },
    ],
  },
  {
    slug: 'bedrooms-dining-areas',
    caption: 'Bedrooms & Dining',
    title: 'Bedrooms & Dining Areas',
    body: 'From calm bedroom interiors to welcoming dining spaces — we create rooms that feel personal, practical, and built to last, with careful attention to storage, layout, and finish.',
    cover: img(11),
    reverse: false,
    projects: [
      {
        id: 'bd-1',
        title: 'Fort Kochi Suite & Dining',
        description:
          'Connected bedroom and dining zones with cohesive finishes, wardrobe storage, and a dining nook for four.',
        location: 'Fort Kochi',
        owner: 'Arjun R.',
        squareFeet: '540 sq.ft',
        duration: '7 weeks',
        year: '2024',
        images: [img(11), img(5), img(15)],
        before: img(1),
        after: img(11),
      },
      {
        id: 'bd-2',
        title: 'Aluva Twin Bedroom Set',
        description:
          'Two bedrooms sharing a design language — calm palettes, study corners, and maximized storage.',
        location: 'Aluva, Kochi',
        owner: 'Nikhil S.',
        squareFeet: '380 sq.ft',
        duration: '5 weeks',
        year: '2023',
        images: [img(5), img(14), img(11)],
        before: img(2),
        after: img(5),
      },
    ],
  },
  {
    slug: 'wardrobes-office-interiors',
    caption: 'Wardrobes & Offices',
    title: 'Wardrobes & Office Interiors',
    body: 'Custom wardrobes and commercial office interiors — including showrooms, retail spaces, and workstations — delivered through design, manufacturing, and installation under one roof.',
    cover: img(7),
    reverse: true,
    projects: [
      {
        id: 'wo-1',
        title: 'Palarivattom Walk-in Wardrobe',
        description:
          'Floor-to-ceiling wardrobe with hanging, drawers, and accessory trays finished for humid Kerala conditions.',
        location: 'Palarivattom, Kochi',
        owner: 'Megna Philip',
        squareFeet: '90 sq.ft',
        duration: '3 weeks',
        year: '2025',
        images: [img(7), img(6), img(12)],
        before: img(15),
        after: img(7),
      },
      {
        id: 'wo-2',
        title: 'Infopark Workstation Floor',
        description:
          'Open office workstations with cable management, durable laminates, and a clean professional look.',
        location: 'Infopark, Kochi',
        owner: 'Nova Tech Pvt Ltd',
        squareFeet: '1,800 sq.ft',
        duration: '10 weeks',
        year: '2024',
        images: [img(13), img(11), img(12)],
        before: img(16),
        after: img(13),
      },
    ],
  },
  {
    slug: 'bedroom-interiors',
    caption: 'Bedrooms',
    title: 'Bedroom Interiors',
    body: 'Serene bedrooms with custom wardrobes, study nooks, and warm finishes — designed for rest and everyday ease.',
    cover: img(5),
    reverse: false,
    projects: [
      {
        id: 'br-1',
        title: 'Thrikkakara Master Bedroom',
        description:
          'A restful master suite with soft lighting, upholstered headboard wall, and integrated wardrobe storage.',
        location: 'Thrikkakara, Kochi',
        owner: 'Sneha & Ajay',
        squareFeet: '260 sq.ft',
        duration: '5 weeks',
        year: '2024',
        images: [img(5), img(14), img(4)],
        before: img(9),
        after: img(5),
      },
      {
        id: 'br-2',
        title: 'Kadavanthra Kids Bedroom',
        description:
          'Playful yet practical kids room with study desk, loft storage, and durable finishes for growing years.',
        location: 'Kadavanthra, Kochi',
        owner: 'The George Family',
        squareFeet: '180 sq.ft',
        duration: '4 weeks',
        year: '2025',
        images: [img(14), img(5), img(2)],
        before: img(6),
        after: img(14),
      },
    ],
  },
  {
    slug: 'dining-spaces',
    caption: 'Dining Areas',
    title: 'Dining Spaces',
    body: 'Inviting dining areas that bring family and guests together — crafted with quality materials and thoughtful detail.',
    cover: img(15),
    reverse: true,
    projects: [
      {
        id: 'ds-1',
        title: 'Kaloor Formal Dining',
        description:
          'A formal dining space for eight with feature wall paneling, ambient lighting, and easy-maintain surfaces.',
        location: 'Kaloor, Kochi',
        owner: 'Joseph Family',
        squareFeet: '210 sq.ft',
        duration: '4 weeks',
        year: '2024',
        images: [img(15), img(1), img(3)],
        before: img(7),
        after: img(15),
      },
      {
        id: 'ds-2',
        title: 'Ernakulam Compact Dining Nook',
        description:
          'Space-efficient dining nook with built-in bench seating and storage tucked under the window line.',
        location: 'Ernakulam, Kochi',
        owner: 'Lakshmi R.',
        squareFeet: '95 sq.ft',
        duration: '3 weeks',
        year: '2023',
        images: [img(1), img(15), img(16)],
        before: img(4),
        after: img(1),
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
