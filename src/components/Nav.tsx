'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/data/site';

const LINKS = [
  { label: 'Courses', href: '/courses' },
  { label: 'Bundles', href: '/courses#bundles' },
  { label: 'About', href: '/about' },
  { label: 'Our Commitment', href: '/our-commitment' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let state = false;
    function onScroll() {
      const y = window.scrollY;
      if (!state && y > 24) {
        state = true;
        setScrolled(true);
      } else if (state && y < 6) {
        state = false;
        setScrolled(false);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-bg/90 shadow-[0_1px_20px_-8px_rgba(36,27,27,0.18)] backdrop-blur-md'
          : 'border-transparent bg-bg/0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/" aria-label={`${SITE.name} home`} className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden min-h-10 items-center rounded-lg bg-brand px-5 text-sm font-bold text-on-brand transition-transform hover:scale-[1.02] active:scale-[0.98] lg:inline-flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? <X size={19} strokeWidth={1.75} /> : <Menu size={19} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-bg px-5 py-5 sm:px-8 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-base text-ink"
            >
              Contact
            </a>
          </nav>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand px-5 text-sm font-bold text-on-brand"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
