import { withBase } from '@/lib/paths';
export const TERMS_FALLBACK = {
  title: 'Terms & Conditions',
  content: `
    <p><em>Last updated: July 2026</em></p>
    <p>Welcome to the website of <strong>Swastam Interiors LLP</strong> (“Swastam”, “we”, “us”, or “our”). By accessing or using this website, you agree to these Terms &amp; Conditions. If you do not agree, please do not use the site.</p>

    <h3>1. About us</h3>
    <p>Swastam Interiors LLP provides interior design, manufacturing, and installation services for residential and commercial projects. Our facility is located at Edayar Industrial Area, Kochi – 683110.</p>

    <h3>2. Use of this website</h3>
    <p>You may browse this website for information about our services, projects, and company. You agree to use the site only for lawful purposes and not to attempt to disrupt, scrape, or misuse our content, forms, or systems.</p>

    <h3>3. Enquiries and project discussions</h3>
    <p>Submitting a contact form, quote request, or message does not create a binding contract. Project scope, pricing, timelines, and deliverables are confirmed only through a written quotation, work order, or agreement issued by Swastam Interiors LLP.</p>

    <h3>4. Intellectual property</h3>
    <p>All designs, drawings, photographs, logos, text, and other materials on this website are owned by or licensed to Swastam Interiors LLP unless otherwise stated. You may not copy, reproduce, distribute, or use them for commercial purposes without our prior written consent.</p>

    <h3>5. Project images and portfolio</h3>
    <p>Project photos and descriptions are for illustration. Actual materials, finishes, and layouts for your project will be as agreed in your approved design and quotation. We may showcase completed work in our portfolio and marketing unless a client agreement states otherwise.</p>

    <h3>6. Accuracy of information</h3>
    <p>We aim to keep website content accurate and up to date, but we do not warrant that all information is complete or error-free. Service details, availability, and offerings may change without notice.</p>

    <h3>7. Third-party links</h3>
    <p>This website may link to third-party sites (for example social media or maps). We are not responsible for the content, policies, or practices of those sites.</p>

    <h3>8. Limitation of liability</h3>
    <p>To the fullest extent permitted by law, Swastam Interiors LLP is not liable for any indirect, incidental, or consequential loss arising from your use of this website. Nothing in these terms limits liability that cannot be excluded under applicable law.</p>

    <h3>9. Privacy</h3>
    <p>Personal information you share through forms or communications is handled as described in our <a href="${withBase('/privacy')}">Privacy Policy</a>.</p>

    <h3>10. Changes to these terms</h3>
    <p>We may update these Terms &amp; Conditions from time to time. The revised version will be posted on this page with an updated date. Continued use of the website after changes means you accept the updated terms.</p>

    <h3>11. Contact</h3>
    <p>For questions about these terms, contact us via the <a href="${withBase('/contact')}">Contact</a> page or at our Kochi facility: Edayar Industrial Area, Kochi – 683110.</p>
  `.trim(),
  seo: {
    metaTitle: 'Terms & Conditions | Swastam Interiors LLP',
    metaDescription:
      'Terms & Conditions for using the Swastam Interiors LLP website and engaging our interior design services.',
  },
};
