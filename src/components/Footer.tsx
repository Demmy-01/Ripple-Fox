import footerLogo from '../assets/Icon_footer.png';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#about' },
  { label: 'Who we work with', href: '#clients' },
];

const contactItems = [
  { label: 'Phone number:', value: '+234 904 431 9888' },
  { label: 'Email:', value: 'info@ripplefox.co' },
  { label: 'Address:', value: 'Pinnock Beach Estate' },
];

export default function Footer() {
  return (
    <footer
      className="px-6 py-14 md:px-16 lg:px-24"
      style={{ background: '#000924' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">

          {/* Col 1: Logo */}
          <div className="flex items-start">
            <img
              src={footerLogo}
              alt="Ripple Fox Limited"
              className="h-20 object-contain"
            />
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3
              className="text-base font-semibold text-white mb-6"
              style={{ fontFamily: 'inherit' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              className="text-base font-semibold text-white mb-6"
              style={{ fontFamily: 'inherit' }}
            >
              Contact us
            </h3>
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ label, value }) => (
                <li
                  key={label}
                  className="text-sm text-white/60"
                >
                  <span className="text-white/80">{label}</span>{' '}
                  {label === 'Phone number:' ? (
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{value}</span>
                  ) : value}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom divider + copyright */}
        <div
          className="mt-14 pt-6 border-t border-white/10 text-xs text-white/30 text-center"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          © {new Date().getFullYear()} Ripple Fox Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
