'use client';

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#141618]">
      {/* Header — shared across hero */}
      <header className="fixed top-0 left-0 right-0 z-[100] py-4 sm:py-5 bg-gradient-to-b from-[#141618]/70 to-transparent data-[scrolled]:bg-[#141618]/92 data-[scrolled]:backdrop-blur-md transition-colors duration-300" id="main-header">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 text-white">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C45A2E] grid place-items-center font-serif text-[0.75rem] sm:text-[0.85rem] font-semibold leading-none">H</span>
            <span className="text-[0.8rem] sm:text-[0.9rem] font-medium leading-tight tracking-[-0.01em]">
              Health Fitness Academy
              <span className="hidden sm:block text-[0.5rem] font-normal tracking-[0.14em] uppercase opacity-70 mt-0.5">Prestwich, Manchester</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">Courses</a>
            <a href="#how" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">How It Works</a>
            <a href="#why" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">Why Us</a>
            <a href="#stories" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">Success Stories</a>
            <a href="#about" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">About</a>
            <a href="#resources" className="text-[0.78rem] font-medium text-white/80 hover:text-white transition-colors">Resources</a>
            <a href="#contact" className="btn-editorial btn-editorial-orange">Enquire Now</a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden group relative w-10 h-10 rounded-full border border-white/20 bg-white/5 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-white/10"
            aria-label="Open menu"
            onClick={() => document.body.classList.add('menu-open')}
          >
            <span className="block w-5 h-px bg-white transition-transform origin-center group-hover:bg-[#C45A2E]" />
            <span className="block w-5 h-px bg-white transition-opacity group-hover:bg-[#C45A2E]" />
            <span className="block w-5 h-px bg-white transition-transform origin-center group-hover:bg-[#C45A2E]" />
          </button>
        </div>

        {/* Mobile full-screen menu */}
        <div className="mobile-menu fixed inset-0 z-[110] bg-[#141618]/98 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden">
          <button
            className="absolute top-4 right-6 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/35 transition-colors"
            aria-label="Close menu"
            onClick={() => document.body.classList.remove('menu-open')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <nav className="flex flex-col gap-5">
            {[
              { label: 'Courses', href: '#courses' },
              { label: 'How It Works', href: '#how' },
              { label: 'Why Us', href: '#why' },
              { label: 'Success Stories', href: '#stories' },
              { label: 'About', href: '#about' },
              { label: 'Resources', href: '#resources' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => document.body.classList.remove('menu-open')}
                className="font-serif text-[2rem] sm:text-[2.4rem] font-medium text-white/90 hover:text-[#C45A2E] transition-colors leading-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={() => document.body.classList.remove('menu-open')} className="btn-editorial btn-editorial-orange mt-10 w-full max-w-xs">Enquire Now</a>
        </div>
      </header>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hfa-03-group-class.jpg"
          alt="Women training together in a Health Fitness Academy group class"
          fill
          priority
          quality={90}
          className="object-cover object-[center_25%] brightness-[0.62] saturate-[0.85]"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(100deg, rgba(20,22,24,0.95) 0%, rgba(20,22,24,0.78) 40%, rgba(20,22,24,0.42) 68%, rgba(20,22,24,0.2) 100%)',
        }}
      />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24 sm:pt-48 sm:pb-36 lg:pt-60 lg:pb-48">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-7 block font-mono text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#F2EEE6]/75"
        >
          OFQUAL regulated &middot; CIMSPA &middot; Active IQ &middot; REPs accredited
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[720px] font-serif text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[1.05] text-white"
        >
          <span className="block">Qualified by women.</span>
          <span className="block">Built for women.</span>
          <span className="block">
            Ready to{' '}
            <span className="relative inline-block text-[#C45A2E]">
              lead.
              <svg
                viewBox="0 0 120 14"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -left-1 -right-2 -bottom-1 h-[14px] w-[calc(100%+12px)]"
              >
                <path
                  d="M3 9 C 35 3, 70 4, 117 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 max-w-[580px] text-base sm:text-[1.05rem] leading-relaxed text-white/84"
        >
          Health Fitness Academy trains women in Prestwich and online across the UK to become gym instructors, personal trainers, and Pilates and cycling instructors, with accredited qualifications taught by women who have built the same career themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <Link href="/courses" className="btn-editorial btn-editorial-orange">Explore Courses</Link>
          <Link href="/contact" className="btn-editorial btn-editorial-ghost">Book a Free Call</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
        >
          {['CIMSPA Accredited', 'Active IQ Approved', 'Women Only Cohorts', 'Ofqual Regulated'].map((t) => (
            <span key={t} className="flex items-center gap-2 text-[0.65rem] sm:text-[0.68rem] font-medium uppercase tracking-[0.08em] text-white/78">
              <i className="h-[5px] w-[5px] rounded-full bg-[#C45A2E]" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
