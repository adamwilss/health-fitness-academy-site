'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Homepage hero — full-bleed energetic photo with a strong gradient for text.
 * Inspired by premium fitness/education brand homepages: big image, big type, clear CTAs.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="relative isolate flex min-h-[92vh] items-end sm:items-center overflow-hidden bg-dusk">
      {/* Full-bleed group-class photo */}
      <Image
        src="/images/hfa-03-group-class.jpg"
        alt="Women training together in a Health Fitness Academy group exercise class"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        quality={90}
      />

      {/* Gradient scrim: denser bottom-left for text, lighter top-right for energy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgb(var(--dusk) / 0.92) 0%, rgb(var(--dusk) / 0.62) 45%, rgb(var(--dusk) / 0.18) 72%, transparent 100%)',
        }}
      />

      {/* Subtle animated orange glow on top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[460px] w-[460px] rounded-full animate-slow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--brand) / 0.16) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:pb-32">
        {/* Top micro-label */}
        <motion.p {...fadeUp(0.2)} className="mb-5 inline-block rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-brand">
          OFQUAL regulated · CIMSPA · Active IQ · REPs
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="max-w-3xl font-serif text-[clamp(2.5rem,7vw,5rem)] font-normal leading-[1.05] text-mist"
        >
          Qualified by women.{' '}
          <span className="orange-gradient-text">Built for women</span> ready to lead.
        </motion.h1>

        <motion.p {...fadeUp(0.5)} className="mt-6 max-w-xl text-base leading-relaxed text-muted-dusk sm:text-lg">
          Train to become a certified gym instructor, personal trainer, Pilates or cycling
          instructor. In Prestwich, Manchester and online across the UK.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/courses" className="btn btn-primary btn-lg">
            Explore Courses
          </Link>
          <Link href="/contact" className="btn btn-ghost-dusk btn-lg">
            Book a Free Call
          </Link>
        </motion.div>

        {/* Trust stats strip */}
        <motion.div {...fadeUp(0.8)} className="mt-12 flex flex-wrap items-center gap-6 sm:gap-10">
          {[
            { label: 'Graduate success', value: '100%' },
            { label: 'Employment rate', value: '100%' },
            { label: 'Years experience', value: '20+' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-serif text-2xl italic text-brand sm:text-3xl">{stat.value}</span>
              <span className="max-w-[4.5rem] text-[0.65rem] font-medium uppercase leading-tight tracking-[0.12em] text-muted-dusk">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
