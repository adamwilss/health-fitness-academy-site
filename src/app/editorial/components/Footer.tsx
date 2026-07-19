const cols = [
  {
    title: 'Courses',
    links: [
      { label: 'Level 2 Courses', href: '/courses/level-2' },
      { label: 'Level 3 Courses', href: '/courses/level-3' },
      { label: 'CPD Courses', href: '/courses/cpd' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Choose Us', href: '/why-us' },
      { label: 'Our Tutors', href: '/tutors' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Student Support', href: '/student-support' },
      { label: 'Funding Options', href: '/funding' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const socials = [
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
  },
  {
    name: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'TikTok',
    href: '#',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.69z',
  },
  {
    name: 'YouTube',
    href: '#',
    path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.68.55 9.38.55 9.38.55s7.7 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#141618] text-white/65 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_repeat(3,1fr)_1.2fr] gap-10 lg:gap-12 mb-14 lg:mb-16">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-3 text-white mb-5">
              <div className="w-8 h-8 rounded-full bg-[#C45A2E] grid place-items-center font-serif text-[0.75rem] font-semibold">HFA</div>
              <div className="text-[0.85rem] font-medium leading-tight">
                Health Fitness Academy
                <span className="block text-[0.5rem] font-normal tracking-[0.14em] uppercase opacity-70 mt-0.5">Prestwich, Manchester</span>
              </div>
            </div>
            <p className="text-[0.8rem] leading-relaxed text-white/50 mb-5">
              OFQUAL-regulated fitness qualifications for women, taught by women who have built careers in fitness themselves.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} className="w-[34px] h-[34px] rounded-full border border-white/15 grid place-items-center hover:bg-white/8 hover:border-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white/65">
                    {s.path.split(' ').map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[0.52rem] sm:text-[0.55rem] font-medium uppercase tracking-[0.14em] text-white/95 mb-4">
                {c.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.75rem] sm:text-[0.8rem] text-white/55 hover:text-white/90 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-[0.52rem] sm:text-[0.55rem] font-medium uppercase tracking-[0.14em] text-white/95 mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-[0.75rem] sm:text-[0.8rem] text-white/55 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#C45A2E] mt-1 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.28 12.28 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.28 12.28 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                0161 799 9913
              </div>
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#C45A2E] mt-1 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@healthfitnessacademy.co.uk
              </div>
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#C45A2E] mt-1 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Prestwich, Manchester and online across the UK
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[0.68rem] text-white/40">
          <span>© 2026 Health Fitness Academy Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-white/75 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/75 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
