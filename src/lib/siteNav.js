/** Desktop: 4 links left of logo, 4 links right of logo */
export const LEFT_NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Project' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
];

export const RIGHT_NAV = [
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
];

export const ALL_NAV = [...LEFT_NAV, ...RIGHT_NAV];
