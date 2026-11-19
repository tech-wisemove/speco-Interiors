export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const BRAND_NAME = 'Swastam Interiors LLP';
export const BRAND_SHORT = 'Swastam Interiors';
export const TAGLINE = 'Rooted in Care. Built on Trust.';
export const LOGO_PATH = '/images/logo-tr.png';
/** Social share / Open Graph thumbnail (WhatsApp, Facebook, LinkedIn, etc.) */
export const OG_IMAGE_PATH = '/images/og-share.jpg';

/** Primary GEO / local SEO focus */
export const GEO = {
  region: 'IN-KL',
  placename: 'Kochi',
  position: '10.0159;76.3419',
  latitude: 10.0159,
  longitude: 76.3419,
  postalCode: '683110',
  streetAddress: 'Edayar Industrial Area',
  addressLocality: 'Kochi',
  addressRegion: 'Kerala',
  addressCountry: 'IN',
  phone: '+919895443222',
  email: 'info@swastaminteriors.com',
};

export const DEFAULT_KEYWORDS = [
  'Swastam Interiors',
  'Swastam Interiors LLP',
  'best interior designers in Kochi',
  'interior designers in Kochi',
  'interior design Kochi',
  'modular kitchen Kochi',
  'wardrobe Kochi',
  'turnkey interiors Kochi',
  'commercial interiors Kochi',
  'home interiors Kerala',
  'in-house manufacturing interiors',
  'office interiors Kochi',
  BRAND_SHORT,
];

export const DEFAULT_DESCRIPTION =
  'Swastam Interiors — best interior designers in Kochi. Elegant residential & commercial interiors, modular kitchens, wardrobes, and turnkey design–manufacture–install from Edayar Industrial Area, Kochi.';

/**
 * Central page SEO for titles, descriptions, and AEO-friendly phrasing.
 */
export const PAGE_SEO = {
  home: {
    title: 'Swastam Interiors | Best Interior Designers in Kochi',
    description: DEFAULT_DESCRIPTION,
    path: '/',
    keywords: DEFAULT_KEYWORDS,
  },
  about: {
    title: 'About Swastam Interiors | Interior Designers in Kochi',
    description:
      'About Swastam Interiors LLP — over a decade of experience as trusted interior designers in Kochi. Customer-first design, quality craftsmanship, and advanced in-house manufacturing.',
    path: '/about',
  },
  services: {
    title: 'Interior Design Services in Kochi | Swastam Interiors',
    description:
      'Residential interiors, modular kitchens, wardrobes, commercial offices, and turnkey solutions from Swastam Interiors — best interior designers in Kochi with in-house manufacturing.',
    path: '/services',
    keywords: [
      ...DEFAULT_KEYWORDS,
      'residential interiors Kochi',
      'modular kitchens Kochi',
      'office interiors Kochi',
    ],
  },
  projects: {
    title: 'Interior Design Projects in Kochi | Swastam Interiors',
    description:
      'Explore living rooms, modular kitchens, bedrooms, dining spaces, wardrobes, and office interiors crafted by Swastam Interiors — leading interior designers in Kochi.',
    path: '/projects',
  },
  gallery: {
    title: 'Interior Design Gallery Kochi | Swastam Interiors',
    description:
      'Browse the Swastam Interiors gallery — spaces crafted with precision and care by one of the best interior design teams in Kochi.',
    path: '/gallery',
  },
  contact: {
    title: 'Contact Swastam Interiors Kochi | Free Design Quote',
    description:
      'Contact Swastam Interiors LLP in Kochi for residential or commercial interiors. Call +91 98954 43222 or visit Edayar Industrial Area for a free consultation.',
    path: '/contact',
  },
  careers: {
    title: 'Careers at Swastam Interiors Kochi | Join Our Team',
    description:
      'Join Swastam Interiors LLP in Kochi. Careers in interior design, manufacturing, and project delivery with a customer-first team.',
    path: '/careers',
  },
  blogs: {
    title: 'Interior Design Blog Kochi | Swastam Interiors Tips',
    description:
      'Ideas and insights on modular kitchens, materials for Kerala homes, and turnkey interiors from Swastam Interiors — Kochi’s trusted design & manufacturing team.',
    path: '/blogs',
  },
  faq: {
    title: 'FAQ | Swastam Interiors Kochi — Interior Design Questions',
    description:
      'Frequently asked questions about Swastam Interiors services, timelines, manufacturing, and how to start your interior project in Kochi.',
    path: '/faq',
  },
  testimonials: {
    title: 'Client Testimonials | Swastam Interiors Kochi',
    description:
      'Read client reviews of Swastam Interiors LLP — real homes and workplaces designed and built by trusted interior designers in Kochi.',
    path: '/testimonials',
  },
  terms: {
    title: 'Terms & Conditions | Swastam Interiors LLP',
    description:
      'Terms & Conditions for using the Swastam Interiors LLP website and engaging our interior design services in Kochi.',
    path: '/terms',
  },
  privacy: {
    title: 'Privacy Policy | Swastam Interiors LLP',
    description:
      'Privacy Policy for Swastam Interiors LLP — how we handle contact details and enquiries from clients in Kochi and beyond.',
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
        { url: '/images/logo-swastam.png', type: 'image/png' },
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
          alt: `${BRAND_SHORT} — Rooted in Care. Built on Trust.`,
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
    other: {
      'geo.region': geo.geoRegion || GEO.region,
      'geo.placename': geo.geoPlacename || GEO.placename,
      'geo.position': geo.geoPosition || GEO.position,
      ICBM: (geo.geoPosition || GEO.position).replace(';', ', '),
      'og:locale:alternate': 'ml_IN',
    },
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
    social.instagramUrl || 'https://www.instagram.com/swastaminteriors/',
    social.facebookUrl,
    social.linkedinUrl,
    social.youtubeUrl,
    social.twitterUrl,
    social.pinterestUrl,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: brand,
    alternateName: [BRAND_SHORT, 'Swastam Interiors Kochi'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: settings?.logoUrl ? absoluteUrl(settings.logoUrl) : logoUrl(),
    },
    image: absoluteUrl(OG_IMAGE_PATH),
    description: DEFAULT_DESCRIPTION,
    email: settings?.contact?.email || GEO.email,
    telephone: settings?.contact?.phones?.[0] || GEO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings?.contact?.address || GEO.streetAddress,
      addressLocality: GEO.addressLocality,
      addressRegion: GEO.addressRegion,
      postalCode: GEO.postalCode,
      addressCountry: GEO.addressCountry,
    },
    sameAs,
  };
}

export function localBusinessJsonLd(settings) {
  const brand = settings?.brandName || BRAND_NAME;
  const contact = settings?.contact || {};
  const org = organizationJsonLd(settings);

  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: brand,
    alternateName: BRAND_SHORT,
    description:
      settings?.seoDefaults?.metaDescription ||
      'Best interior designers in Kochi offering residential & commercial interiors, modular kitchens, and turnkey manufacturing.',
    url: SITE_URL,
    image: [absoluteUrl(OG_IMAGE_PATH), logoUrl()],
    logo: logoUrl(),
    telephone: contact.phones?.[0] || GEO.phone,
    email: contact.email || GEO.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    address: org.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}`,
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'AdministrativeArea', name: 'Ernakulam' },
      { '@type': 'State', name: 'Kerala' },
    ],
    knowsAbout: [
      'Interior design',
      'Modular kitchens',
      'Custom wardrobes',
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
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    alternateName: ['Swastam Interiors', 'Best Interior Designers in Kochi'],
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
    name: 'Interior Design & Manufacturing — Kochi',
    serviceType: 'Interior design',
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: { '@type': 'City', name: 'Kochi' },
    description:
      'Full-service interior design, modular kitchens, wardrobes, commercial fit-outs, and turnkey installation by Swastam Interiors in Kochi.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Swastam Interiors Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modular Kitchens' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Turnkey Solutions' } },
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
