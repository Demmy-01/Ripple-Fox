import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Who we work with', href: '#clients' },
  { label: 'Contact us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      ref={menuRef}
      style={{
        background: scrolled || menuOpen
          ? 'rgba(6, 13, 31, 0.35)'
          : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(8px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Ripple Fox Limited" className="h-7 w-auto object-contain" />
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden p-1 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className="block h-0.5 w-6 bg-white transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col px-8 pb-6 pt-2 gap-5" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white cursor-pointer border-b border-white/10 pb-3 last:border-0 last:pb-0"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
