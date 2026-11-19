import { withBase } from '@/lib/paths';
export const PRIVACY_FALLBACK = {
  title: 'Privacy Policy',
  content: `
    <p><em>Last updated: July 2026</em></p>
    <p><strong>SPECO Interiors</strong> (“we”, “us”) respects your privacy. This policy explains how we handle information you share through our website and enquiries.</p>

    <h3>1. Information we collect</h3>
    <p>When you contact us or subscribe, we may collect your name, phone number, email address, project details, and any message you send.</p>

    <h3>2. How we use information</h3>
    <p>We use your details to respond to enquiries, provide quotes, deliver services, and send updates you have requested (such as newsletter subscription).</p>

    <h3>3. Sharing</h3>
    <p>We do not sell personal information. We may share data with service providers who help us operate the website or communicate with you, only as needed to perform those services.</p>

    <h3>4. Data security</h3>
    <p>We take reasonable steps to protect information against unauthorized access or misuse.</p>

    <h3>5. Your choices</h3>
    <p>You may ask us to update or remove your contact details by reaching out via our <a href="${withBase('/contact')}">Contact</a> page.</p>

    <h3>6. Contact</h3>
    <p>SPECO Interiors, Edayar Industrial Area, Kochi – 683110. Questions about this policy: use the Contact page or call +91 98954 43222.</p>
  `.trim(),
  seo: {
    metaTitle: 'Privacy Policy | SPECO Interiors',
    metaDescription: 'Privacy Policy for SPECO Interiors — how we handle contact details and enquiries.',
  },
};
