
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const BRAND_NAME = 'SPECO Interiors';
export const BRAND_SHORT = 'SPECO Interiors';
export const TAGLINE = 'Spaces That Speak Your Style.';
export const LOGO_PATH = '/images/logo-tr.png';
/** Social share / Open Graph thumbnail (WhatsApp, Facebook, LinkedIn, etc.) */
export const OG_IMAGE_PATH = '/images/og-share.jpg';
 
/**
 * Primary GEO / local SEO focus.
 * TODO: add the real postalCode, latitude and longitude for Mattakuzhi.
 * They are left empty on purpose: wrong coordinates hurt local SEO more than
 * none. Empty values are skipped automatically in meta tags and JSON-LD.
 */
export const GEO = {
  region: 'IN-KL',
  placename: 'Ernakulam',
  position: '9.9616375;76.3581094', // 'lat;long' once known, e.g. '10.0000;76.0000'
  latitude: null,
  longitude: null,
  postalCode: '682309', 
  streetAddress: 'Mattakuzhi',
  addressLocality: 'Ernakulam',
  addressRegion: 'Kerala',
  addressCountry: 'IN',
  phone: '+919061104584',
  phones: ['+919061104584', '+919400104541'],
  email: 'info@SPECOinteriors.com',
};
 
const hasCoords = (g) => typeof g.latitude === 'number' && typeof g.longitude === 'number';
 
export const DEFAULT_KEYWORDS = [
  'SPECO Interiors',
  'best interior designers in Kochi',
  'interior designers in Kochi',
  'interior designers in Ernakulam',
  'interior design Kochi',
  'modular kitchen Kochi',
  'wardrobe Kochi',
  'turnkey interiors Kochi',
  'commercial interiors Kochi',
  'home interiors Kerala',
  'in-house manufacturing interiors',
  'office interiors Kochi',
];
 
export const DEFAULT_DESCRIPTION =
  'SPECO Interiors designs residential and commercial interiors, modular kitchens, and custom wardrobes in Kochi and Ernakulam. Design, in-house manufacturing, and installation under one roof from Mattakuzhi, Ernakulam.';
 
/**
 * Central page SEO for titles, descriptions, and AEO-friendly phrasing.
 */
export const PAGE_SEO = {
  home: {
    title: 'SPECO Interiors | Interior Designers in Kochi & Ernakulam',
    description: DEFAULT_DESCRIPTION,
    path: '/',
    keywords: DEFAULT_KEYWORDS,
  },
  about: {
    title: 'About SPECO Interiors | Ten Years of Design in Kerala',
    description:
      'For a decade, SPECO Interiors has brought creativity, technical insight, and hands-on craftsmanship to homes and businesses. Personalised design with advanced in-house manufacturing.',
    path: '/about',
  },
  services: {
    title: 'Interior Design Services in Kochi | SPECO Interiors',
    description:
      'Residential interiors, commercial interiors, modular kitchens, custom wardrobes, living and bedroom interiors, and complete interior solutions from SPECO Interiors.',
    path: '/services',
    keywords: [
      ...DEFAULT_KEYWORDS,
      'residential interiors Kochi',
      'modular kitchens Kochi',
      'custom wardrobes Kochi',
      'office interiors Kochi',
    ],
  },
  projects: {
    title: 'Interior Design Projects in Kerala | SPECO Interiors',
    description:
      'Explore living rooms, modular kitchens, bedrooms, and wardrobes crafted by SPECO Interiors. Ideas imagined, spaces realised.',
    path: '/projects',
  },
  gallery: {
    title: 'Interior Design Gallery | SPECO Interiors',
    description:
      'Browse the SPECO Interiors gallery: homes and spaces crafted with precision and care.',
    path: '/gallery',
  },
  contact: {
    title: 'Contact SPECO Interiors | Free Design Consultation',
    description:
      'Have a project in mind? Call SPECO Interiors on +91 90611 04584 or +91 94001 04541, or send an enquiry. Based in Mattakuzhi, Ernakulam.',
    path: '/contact',
  },
  careers: {
    title: 'Careers at SPECO Interiors | Join Our Team',
    description:
      'Join SPECO Interiors. Careers in interior design, site execution, manufacturing, and sales with a client-first team.',
    path: '/careers',
  },
  blogs: {
    title: 'Interior Design Blog | SPECO Interiors Tips & Ideas',
    description:
      'Ideas and insights on modular kitchens, wardrobes, living rooms, materials for Kerala homes, and turnkey interiors from the SPECO Interiors team.',
    path: '/blogs',
  },
  faq: {
    title: 'FAQ | SPECO Interiors Interior Design Questions',
    description:
      'Answers about SPECO Interiors services, timelines, in-house manufacturing, and how to start your interior project.',
    path: '/faq',
  },
  testimonials: {
    title: 'Client Testimonials | SPECO Interiors',
    description:
      'What clients say about homes and workplaces designed and built by SPECO Interiors.',
    path: '/testimonials',
  },
  terms: {
    title: 'Terms & Conditions | SPECO Interiors',
    description:
      'Terms & Conditions for using the SPECO Interiors website and engaging our interior design, modular kitchen, and wardrobe services.',
    path: '/terms',
  },
  privacy: {
    title: 'Privacy Policy | SPECO Interiors',
    description:
      'Privacy Policy for SPECO Interiors: how we handle contact details and enquiries from clients.',
    path: '/privacy',
  },
};
 
export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
 
export function logoUrl() {
  return absoluteUrl(LOGO_PATH);
}
 
export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  settings,
  keywords = [],
  noIndex = false,
} = {}) {
  const brand = settings?.brandName || BRAND_NAME;
  const metaTitle = title || settings?.seoDefaults?.metaTitle || PAGE_SEO.home.title;
  const metaDescription =
    description ||
    settings?.seoDefaults?.metaDescription ||
    settings?.tagline ||
    DEFAULT_DESCRIPTION;
  const ogImage = absoluteUrl(
    image || settings?.seoDefaults?.ogImage || settings?.logoUrl || OG_IMAGE_PATH
  );
  const geo = settings?.seoDefaults || {};
  const kw =
    keywords.length > 0
      ? keywords
      : settings?.seoDefaults?.keywords?.length
        ? settings.seoDefaults.keywords
        : DEFAULT_KEYWORDS;
 
  const geoPosition = geo.geoPosition || GEO.position;
  const other = {
    'geo.region': geo.geoRegion || GEO.region,
    'geo.placename': geo.geoPlacename || GEO.placename,
    'og:locale:alternate': 'ml_IN',
  };
  if (geoPosition) {
    other['geo.position'] = geoPosition;
    other.ICBM = geoPosition.replace(';', ', ');
  }
 
  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: kw,
    authors: [{ name: brand }],
    creator: brand,
    publisher: brand,
    category: 'Interior Design',
    applicationName: brand,
    referrer: 'origin-when-cross-origin',
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: absoluteUrl(path) },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    icons: {
      icon: [
        { url: LOGO_PATH, type: 'image/png' },
        { url: '/images/logo-SPECO.png', type: 'image/png' },
      ],
      shortcut: LOGO_PATH,
      apple: [{ url: LOGO_PATH, type: 'image/png' }],
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl(path),
      siteName: brand,
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 1024,
          type: 'image/jpeg',
          alt: `${BRAND_SHORT} — ${TAGLINE}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    other,
  };
}
 
/** Page metadata without title template doubling — pass absolute title string */
export function pageMetadata(keyOrConfig, overrides = {}) {
  const base = typeof keyOrConfig === 'string' ? PAGE_SEO[keyOrConfig] : keyOrConfig;
  if (!base) return buildMetadata(overrides);
 
  const title = overrides.title || base.title;
  const meta = buildMetadata({
    ...base,
    ...overrides,
    title,
    description: overrides.description || base.description,
    path: overrides.path || base.path,
    keywords: overrides.keywords || base.keywords || DEFAULT_KEYWORDS,
  });
 
  // Absolute title — avoid template doubling on brand-complete titles
  meta.title = { absolute: title };
  return meta;
}
 
export function organizationJsonLd(settings) {
  const brand = settings?.brandName || BRAND_NAME;
  const social = settings?.social || {};
  const sameAs = [
    social.instagramUrl || 'https://www.instagram.com/SPECOinteriors/',
    social.facebookUrl,
    social.linkedinUrl,
    social.youtubeUrl,
    social.twitterUrl,
    social.pinterestUrl,
  ].filter(Boolean);
 
  const phones = settings?.contact?.phones?.length ? settings.contact.phones : GEO.phones;
 
  const address = {
    '@type': 'PostalAddress',
    streetAddress: settings?.contact?.address || GEO.streetAddress,
    addressLocality: GEO.addressLocality,
    addressRegion: GEO.addressRegion,
    addressCountry: GEO.addressCountry,
  };
  if (GEO.postalCode) address.postalCode = GEO.postalCode;
 
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: brand,
    alternateName: [BRAND_SHORT, 'SPECO Interiors Kochi'],
    url: SITE_URL,
    slogan: TAGLINE,
    logo: {
      '@type': 'ImageObject',
      url: settings?.logoUrl ? absoluteUrl(settings.logoUrl) : logoUrl(),
    },
    image: absoluteUrl(OG_IMAGE_PATH),
    description: DEFAULT_DESCRIPTION,
    email: settings?.contact?.email || GEO.email,
    telephone: phones[0],
    contactPoint: phones.map((telephone) => ({
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam'],
    })),
    address,
    sameAs,
  };
}
 
export function localBusinessJsonLd(settings) {
  const brand = settings?.brandName || BRAND_NAME;
  const contact = settings?.contact || {};
  const org = organizationJsonLd(settings);
 
  const business = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: brand,
    alternateName: BRAND_SHORT,
    description:
      settings?.seoDefaults?.metaDescription ||
      'Interior designers in Kochi and Ernakulam offering residential and commercial interiors, modular kitchens, custom wardrobes, and turnkey manufacturing.',
    url: SITE_URL,
    image: [absoluteUrl(OG_IMAGE_PATH), logoUrl()],
    logo: logoUrl(),
    telephone: contact.phones?.[0] || GEO.phone,
    email: contact.email || GEO.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    address: org.address,
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'AdministrativeArea', name: 'Ernakulam' },
      { '@type': 'State', name: 'Kerala' },
    ],
    knowsAbout: [
      'Interior design',
      'Modular kitchens',
      'Custom wardrobes',
      'Living room and bedroom interiors',
      'Commercial interiors',
      'Turnkey interiors',
      'In-house furniture manufacturing',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:30',
      },
    ],
    sameAs: org.sameAs,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
 
  if (hasCoords(GEO)) {
    business.geo = {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    };
    business.hasMap = `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}`;
  } else {
    business.hasMap = `https://www.google.com/maps?q=${encodeURIComponent(
      `${GEO.streetAddress}, ${GEO.addressLocality}, ${GEO.addressRegion}, India`
    )}`;
  }
 
  return business;
}
 
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    alternateName: ['SPECO Interiors', 'SPECO Interiors Kochi'],
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blogs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
 
export function faqJsonLd(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
 
export function breadcrumbJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
 
export function serviceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Interior Design & Manufacturing — Kochi & Ernakulam',
    serviceType: 'Interior design',
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'AdministrativeArea', name: 'Ernakulam' },
    ],
    description:
      'Full-service interior design, modular kitchens, custom wardrobes, living and bedroom interiors, commercial interiors, and complete turnkey installation by SPECO Interiors.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SPECO Interiors Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modular Kitchens' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Wardrobes' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living & Bedroom Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete Interior Solutions' } },
      ],
    },
  };
}
 
export function siteGraphJsonLd(settings) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(settings),
      localBusinessJsonLd(settings),
      websiteJsonLd(),
      serviceJsonLd(),
    ],
  };
}