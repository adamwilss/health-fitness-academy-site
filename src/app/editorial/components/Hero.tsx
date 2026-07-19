'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#141618]">
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
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-40 sm:py-52 lg:py-60">
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
