'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import SealMark from './SealMark';
import { SITE } from '@/data/site';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Homepage hero — the one orchestrated motion moment the brief calls for.
 * Each headline line rises out of a mask (not a bare opacity fade), a
 * saffron underline draws itself beneath the final word like a pen stroke,
 * and then the wax-seal "stamp" settles into place with a soft ink ripple —
 * a qualification being awarded. Everything renders in its final state
 * immediately under prefers-reduced-motion.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const lines: React.ReactNode[] = [
    'Qualified by women.',
    'Built for women',
    <span key="lead" className="relative inline-block">
      ready to{' '}
      <span className="relative inline-block text-brand">
        lead.
        <motion.svg
          viewBox="0 0 120 10"
          className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
          aria-hidden
          focusable="false"
        >
          <motion.path
            d="M3 7 C 32 2.5, 68 2.5, 117 5.5"
            fill="none"
            stroke="rgb(var(--brand))"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reduceMotion ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 0.65, ease: 'easeInOut' }}
          />
        </motion.svg>
      </span>
    </span>,
  ];

  return (
    <section className="relative overflow-hidden bg-dusk">
      {/* Hero background photo — coaching/teaching shot */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hfa-02-pt-coaching.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={80}
        />
        {/* Dark overlay to preserve text readability and blend with dusk palette */}
        <div className="absolute inset-0 bg-dusk/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-dusk/40 via-dusk/70 to-dusk/95" />
      </div>
      {/* Ambient grid + saffron glow — epic treatment */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full animate-slow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--brand) / 0.16) 0%, transparent 62%)',
        }}
      />
      {/* Layered texture: ruled ledger feint + warm saffron / moss glows. */}
      <div aria-hidden className="bg-ledger-lines-dusk pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--moss) / 0.14) 0%, transparent 70%)' }}
      />
      {/* Ghost seal watermark — visual weight where a photo would sit. */}
      <SealMark
        id="hero"
        className="pointer-events-none absolute -bottom-24 -right-20 hidden h-[460px] w-[460px] text-mist opacity-[0.05] lg:block"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand"
          >
            OFQUAL-regulated &middot; CIMSPA &middot; Active IQ &middot; REPs accredited
          </motion.p>

          <h1 className="max-w-2xl font-serif text-[clamp(2.4rem,6vw,4.2rem)] font-normal leading-[1.08] text-mist">
            {lines.map((line, i) => (
              /* Outer span is the mask; slight padding keeps italic
                 descenders from clipping once the line has landed. */
              <span
                key={i}
                className="block overflow-hidden pb-[0.14em] pr-[0.08em] [margin-bottom:-0.14em]"
              >
                <motion.span
                  initial={reduceMotion ? undefined : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, delay: 0.18 + i * 0.13, ease: EASE_OUT }}
                  className="block italic"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE_OUT }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-dusk sm:text-lg"
          >
            Health Fitness Academy trains women in Prestwich and online across the UK to become
            gym instructors, personal trainers, and Pilates and cycling instructors — accredited
            qualifications, taught by women who&rsquo;ve built the same career themselves.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/courses" className="btn btn-primary btn-lg">
              Explore Courses
            </Link>
            <Link href="/contact" className="btn btn-ghost-dusk btn-lg">
              Book a Free Call
            </Link>
          </motion.div>
        </div>

        {/* The stamp: a saffron seal that settles into place after the copy
            lands, with a soft ink ripple on impact. On mobile it reads as a
            signature row rather than a floating badge. */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 1.6, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.9, delay: 1.25, ease: [0.2, 0.9, 0.3, 1] }
          }
          className="flex items-center gap-5 lg:block"
        >
          <span className="relative block shrink-0">
            {!reduceMotion && (
              <motion.span
                aria-hidden
                initial={{ opacity: 0.55, scale: 0.9 }}
                animate={{ opacity: 0, scale: 1.45 }}
                transition={{ delay: 1.75, duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-brand"
              />
            )}
            <span className="ledger-seal relative flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-brand bg-dusk text-center sm:h-32 sm:w-32 lg:h-36 lg:w-36">
              <span
                aria-hidden
                className="absolute inset-1.5 rounded-full border border-dashed border-brand/50"
              />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-brand">
                Est. Prestwich
              </span>
              <span className="my-1 font-serif text-2xl italic text-mist">HFA</span>
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-brand">
                OFQUAL Reg.
              </span>
            </span>
          </span>
          <span className="block max-w-[190px] font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.18em] text-muted-dusk lg:hidden">
            Prestwich, Manchester
            <br />
            &amp; online across the UK
          </span>
        </motion.div>
      </div>

      <p className="sr-only">{SITE.legalName}, Company No. {SITE.companyNumber}</p>
    </section>
  );
}
