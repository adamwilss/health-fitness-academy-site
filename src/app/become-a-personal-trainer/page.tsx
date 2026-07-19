import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Check, Phone, Quote, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import Ticker from '@/components/Ticker';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import SectionLabel from '@/components/SectionLabel';
import SealBadge from '@/components/SealBadge';
import StarRating from '@/components/StarRating';
import Accordion from '@/components/Accordion';
import LandingLeadForm from '@/components/LandingLeadForm';
import { getCourse } from '@/data/courses';
import { getBundle } from '@/data/bundles';
import { testimonials } from '@/data/testimonials';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Become a Personal Trainer — Women-Only Courses from £699',
  description:
    'Qualify as a gym instructor or personal trainer with OFQUAL-regulated, women-only courses — online or in Manchester. From £699 with payment plans. 100% graduate success rate.',
};

/* Objection-first FAQ, written for cold paid traffic. */
const LANDING_FAQS = [
  {
    question: 'I have no fitness background. Can I really do this?',
    answer:
      'Yes — Level 2 Gym Instructor has no entry requirements and is built for complete beginners. Sakina, our founder, started with no fitness background at 34 while raising four children. Most students join with more determination than experience.',
  },
  {
    question: 'How quickly can I be qualified and earning?',
    answer:
      'The fast-track route qualifies you as a Level 2 Gym Instructor in one week. Online, most students finish in 4–6 weeks studying around work and family. Personal trainers typically earn £35,000–£50,000 a year once qualified.',
  },
  {
    question: 'Can I spread the cost?',
    answer:
      'Yes. Flexible payment plans — including interest-free options — are available on every course and bundle, with monthly repayments built around your budget.',
  },
  {
    question: 'Is the qualification actually recognised?',
    answer:
      'Every course is OFQUAL-regulated and accredited by CIMSPA, Active IQ (part of NCFE) and REPs — the bodies UK gyms and employers actually check for. These are real, portable, nationally recognised qualifications.',
  },
];

export default function BecomeAPersonalTrainerPage() {
  const l2 = getCourse('level-2-gym-instructor')!;
  const bundle = getBundle('foundational-fitness-bundle')!;
  const testimonial = testimonials[0];

  const steps = [
    {
      title: 'Tell us your goal',
      copy: 'Fill in the form and we’ll come back within one working day with dates, pricing and the right starting point for you.',
    },
    {
      title: 'Train with women, around your life',
      copy: 'Study online at your own pace, blended, or fast-track in a week — taught and assessed by women who’ve built this career themselves.',
    },
    {
      title: 'Qualify and start earning',
      copy: 'Leave with a nationally recognised qualification, ongoing mentorship, and a career path to £35,000–£50,000 as a personal trainer.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: LANDING_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <main className="relative pb-20 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Slim conversion header — logo and phone only, no nav to leak through. */}
      <header className="absolute top-0 z-40 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" aria-label={`${SITE.name} home`} className="flex items-center">
            <Logo dusk />
          </a>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-mist transition-colors hover:text-brand"
          >
            <Phone size={15} strokeWidth={2} className="text-brand" />
            <span className="hidden sm:inline">{SITE.phone}</span>
            <span className="sm:hidden">Call us</span>
          </a>
        </div>
      </header>

      {/* ── Hero with lead form ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dusk">
        {/* Hero background photo */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hfa-07.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-dusk/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-dusk/20 via-transparent to-dusk/40" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
        <div aria-hidden className="bg-ledger-lines-dusk pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full animate-slow-pulse"
          style={{
            background: 'radial-gradient(circle, rgb(var(--brand) / 0.16) 0%, transparent 62%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-24">
          <div>
            <Reveal>
              <p className="mb-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand">
                OFQUAL-regulated &middot; women-only cohorts &middot; Manchester &amp; online
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="max-w-xl font-serif text-[clamp(2.2rem,5.2vw,3.6rem)] italic leading-[1.08] text-mist">
                Become a qualified personal trainer — taught by women, for women.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-dusk sm:text-lg">
                Nationally recognised gym instructor and PT qualifications from{' '}
                <strong className="font-semibold text-mist">{l2.priceOnline}</strong> — online at
                your own pace, or fast-tracked in a single week. No fitness background needed.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-7 space-y-2.5">
                {[
                  `100% graduate success rate, 100% employment rate`,
                  'Flexible payment plans — interest-free options available',
                  'Qualify in as little as 1 week (fast-track) or 4–6 weeks online',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-dusk sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 font-mono text-[0.6rem] font-bold text-brand">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-5">
              <StarRating size={14} className="text-brand" />
              <div className="flex flex-wrap items-center gap-3">
                {SITE.accreditations.map((body, i) => (
                  <SealBadge key={body} label={body} index={i} />
                ))}
              </div>
            </Reveal>
          </div>

          <div id="lead-form" className="scroll-mt-24">
            <Reveal variant="right" delay={150}>
              <LandingLeadForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ribbon ────────────────────────────────────────────── */}
      <section className="border-b border-line bg-bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: SITE.stats.successRate, label: 'Graduate success rate' },
            { value: SITE.stats.employmentRate, label: 'Employment rate' },
            { value: '£35–50k', label: 'Typical PT earnings' },
            { value: l2.priceOnline, label: 'Courses from' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-8 text-center">
              <p className="font-serif text-3xl italic text-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="How it works" tone="brand" />
            <h2 className="mb-12 max-w-2xl font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              From no experience to qualified, in three steps.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="scroll-reveal rounded-2xl border border-line bg-card p-7"
                style={{ '--sr-delay': `${i * 100}ms` } as CSSProperties}
              >
                <p className="mb-4 font-mono text-3xl font-semibold text-brand">0{i + 1}</p>
                <p className="mb-2 font-heading text-base font-semibold text-ink">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted">{step.copy}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Two routes, priced ──────────────────────────────────────── */}
      <section className="border-t border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="Your route" tone="brand" />
            <h2 className="mb-3 max-w-2xl font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              Two ways in — both fully priced, on the page.
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              Start with the gym floor qualification, or commit to the full personal trainer
              pathway and save against enrolling separately.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Route 1 — L2 alone */}
            <div className="scroll-reveal card-lift flex flex-col rounded-2xl border border-line bg-card p-7 sm:p-8">
              <p className="mb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Start here
              </p>
              <h3 className="mb-2 font-heading text-xl font-semibold text-ink">{l2.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                The foundation qualification that gets you onto a gym floor, running sessions —
                in as little as one week.
              </p>
              <ul className="mb-6 space-y-2">
                {['No entry requirements', '4–6 weeks online, or 1-week fast-track', 'Earn £24,000–£28,000 as a gym instructor'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-moss" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="mb-6 mt-auto font-mono text-2xl font-semibold text-ink">
                {l2.priceOnline}{' '}
                <span className="text-sm font-medium text-muted">online</span>
              </p>
              <a href="#lead-form" className="btn btn-ghost-ink btn-md w-full">
                Ask About This Course
              </a>
            </div>

            {/* Route 2 — bundle */}
            <div className="scroll-reveal card-lift relative flex flex-col rounded-2xl border-2 border-brand/50 bg-card p-7 sm:p-8">
              <span className="absolute -top-3.5 left-7 rounded-full bg-brand px-3.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-on-brand">
                Most popular
              </span>
              <p className="mb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
                The full pathway
              </p>
              <h3 className="mb-2 font-heading text-xl font-semibold text-ink">{bundle.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                Level 2 Gym Instructor and Level 3 Personal Trainer in one continuous pathway —
                zero to fully qualified PT, one enrolment.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  'Two nationally recognised qualifications',
                  'Save £298 vs enrolling separately (online route)',
                  'Same mentor and cohort from day one to qualified',
                  'Earn £35,000–£50,000 as a personal trainer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-moss" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-6 mt-auto font-mono text-2xl font-semibold text-ink">
                {bundle.priceOnline}{' '}
                <span className="text-sm font-medium text-muted">online</span>
              </p>
              <a href="#lead-form" className="btn btn-primary btn-md w-full">
                Get Bundle Details
              </a>
            </div>
          </RevealGroup>
          <Reveal delay={150} className="mt-8 text-center">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              See every course price
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────────────────────────────── */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <blockquote className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-dusk p-8 sm:p-12">
              {/* Background photo — subtle atmosphere */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hfa-08.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 768px"
                  quality={50}
                />
                <div className="absolute inset-0 bg-dusk/25" />
              </div>
              <Quote size={36} strokeWidth={1.25} className="mb-5 text-brand" aria-hidden />
              <p className="font-serif text-xl italic leading-relaxed text-mist sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-7 flex flex-col gap-1.5 border-t border-mist/10 pt-6">
                <StarRating size={14} className="mb-1 text-brand" />
                <p className="font-mono text-sm font-semibold tracking-[0.03em] text-mist">
                  {testimonial.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-dusk">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel label="Before you ask" tone="brand" />
            <h2 className="mb-10 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              The four questions everyone asks first
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={LANDING_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <Ticker />
      <section className="relative overflow-hidden bg-dusk">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -bottom-32 h-[420px] w-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand">
            One form. One call. Your decision.
          </p>
          <h2 className="mb-5 text-balance font-serif text-[clamp(1.9rem,4.4vw,2.75rem)] italic leading-[1.15] text-mist">
            The women teaching these courses started exactly where you are.
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-muted-dusk">
            Get your course details, dates and payment plan options — then decide in your own
            time. No pressure, no hard sell.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#lead-form" className="btn btn-primary btn-lg w-full sm:w-auto">
              Get My Course Details
            </a>
            <a href={SITE.phoneHref} className="btn btn-ghost-dusk btn-lg w-full sm:w-auto">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Slim legal footer */}
      <footer className="bg-footer">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-dusk sm:flex-row sm:px-8">
          <p>
            {SITE.legalName} &middot; Company No. {SITE.companyNumber} &middot;{' '}
            {SITE.addressShort}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy" className="transition-colors hover:text-mist">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-mist">
              Terms
            </a>
            <a href="/" className="transition-colors hover:text-mist">
              Full website
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA — always one thumb-tap from converting. */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="btn btn-ghost-ink btn-md shrink-0 !px-4"
          >
            <Phone size={18} strokeWidth={1.75} />
          </a>
          <a href="#lead-form" className="btn btn-primary btn-md w-full">
            Get Course Details
          </a>
        </div>
      </div>
    </main>
  );
}
