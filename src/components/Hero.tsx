'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/data/site';

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Homepage hero — the one orchestrated motion moment the brief calls for:
 * the founder's-story line reveals word-group by word-group, then a small
 * saffron "stamp" settles into place, like a qualification being awarded.
 * Everything renders in its final state immediately under
 * prefers-reduced-motion.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dusk">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.16) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--moss) / 0.14) 0%, transparent 70%)' }}
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
            {['Qualified by women.', 'Built for women', 'ready to lead.'].map((line, i) => (
              <motion.span
                key={line}
                custom={i}
                initial={reduceMotion ? undefined : 'hidden'}
                animate="visible"
                variants={LINE_VARIANTS}
                className="block italic"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-dusk"
          >
            Health Fitness Academy trains women in Prestwich and online across the UK to become
            gym instructors, personal trainers, and Pilates and cycling instructors — accredited
            qualifications, taught by women who&rsquo;ve built the same career themselves.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/courses"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-mist/25 px-8 text-sm font-semibold text-mist transition-colors hover:border-mist/50"
            >
              Book a Free Call
            </a>
          </motion.div>
        </div>

        {/* The stamp: a small saffron seal that settles into place after the
            copy lands, evoking a qualification being awarded. */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 1.6, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.9, delay: 1.05, ease: [0.2, 0.9, 0.3, 1] }
          }
          className="ledger-seal mx-auto flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-4 border-brand bg-dusk text-center sm:h-36 sm:w-36"
        >
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-brand">
            Est. Prestwich
          </span>
          <span className="my-1 font-serif text-2xl italic text-mist">HFA</span>
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-brand">
            OFQUAL Reg.
          </span>
        </motion.div>
      </div>

      <p className="sr-only">{SITE.legalName}, Company No. {SITE.companyNumber}</p>
    </section>
  );
}
