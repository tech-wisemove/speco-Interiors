const SOCIAL = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/SPECOinteriors/',
    icon: 'fab fa-instagram',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'fab fa-facebook-f',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: 'fab fa-youtube',
  },
];

export default function FooterSocial({ social } = {}) {
  const links = SOCIAL.map((item) => {
    const fromSettings =
      social?.[`${item.key}Url`] ||
      (item.key === 'instagram' ? social?.instagramUrl : null);
    return { ...item, href: fromSettings || item.href };
  });

  return (
    <div className="footer-social">
      <h2 className="footer-heading mb-3">Follow Us</h2>
      <ul className="footer-social__list">
        {links.map((item) => (
          <li key={item.key}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}>
              <i className={item.icon} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
