'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/data/site';

const LINKS: { label: string; href: string; match?: string[] }[] = [
  { label: 'Courses', href: '/courses' },
  { label: 'Bundles', href: '/courses#bundles', match: ['/bundles'] },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Our Commitment', href: '/our-commitment' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

function isActive(pathname: string, link: (typeof LINKS)[number]) {
  const prefixes = link.match ?? (link.href.includes('#') ? [] : [link.href]);
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function Nav() {
  const pathname = usePathname();
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

  // Close the menu whenever navigation happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-bg/92 shadow-[0_1px_16px_-6px_rgba(45,50,58,0.12)] backdrop-blur-md'
          : 'border-transparent bg-bg/0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label={`${SITE.name} home`} className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {LINKS.map((link) => {
            const active = isActive(pathname, link);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`nav-link whitespace-nowrap text-sm transition-colors ${
                  active ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary btn-sm hidden lg:inline-flex">
            Enquire Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-bg-secondary hover:text-brand lg:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-in max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-bg px-5 pb-8 pt-5 shadow-[0_24px_40px_-24px_rgba(45,50,58,0.3)] sm:px-8 lg:hidden">
          <nav className="flex flex-col">
            {[...LINKS, { label: 'Contact', href: '/contact' }].map((link, i) => {
              const active = 'match' in link ? isActive(pathname, link) : pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  style={{ '--mi-delay': `${40 + i * 35}ms` } as CSSProperties}
                  className={`menu-item flex items-center justify-between border-b border-line/60 py-3.5 font-heading text-lg font-medium ${
                    active ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ '--mi-delay': '340ms' } as CSSProperties}
            className="btn btn-primary btn-md menu-item mt-6 w-full"
          >
            Enquire Now
          </Link>

          <div
            style={{ '--mi-delay': '400ms' } as CSSProperties}
            className="menu-item mt-6 flex flex-col gap-2.5"
          >
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <Phone size={15} strokeWidth={1.75} className="text-brand" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail size={15} strokeWidth={1.75} className="text-brand" />
              {SITE.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
