import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { ArrowRight, Check, PiggyBank, CalendarClock, Percent } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Ticker from '@/components/Ticker';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import SectionLabel from '@/components/SectionLabel';
import LevelBadge from '@/components/LevelBadge';
import CtaBand from '@/components/CtaBand';
import SealBadge from '@/components/SealBadge';
import { courses, type Course } from '@/data/courses';
import { bundles } from '@/data/bundles';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Course Pricing — Every Price, On the Page',
  description:
    'Full, transparent pricing for every Health Fitness Academy course and bundle — Level 2 from £300, Level 3 from £799, CPD from £150. Flexible payment plans and interest-free options available.',
};

/** "£1,099" -> 1099 */
const gbp = (s: string) => parseInt(s.replace(/[£,]/g, ''), 10);
const fmt = (n: number) => `£${n.toLocaleString('en-GB')}`;

function PriceTable({ rows, showFastTrack }: { rows: Course[]; showFastTrack: boolean }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-card">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th className="px-5 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted sm:px-6">
              Course
            </th>
            <th className="px-4 py-4 text-right font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Online
            </th>
            <th className="px-4 py-4 text-right font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Blended
            </th>
            {showFastTrack && (
              <th className="px-4 py-4 text-right font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Fast-track
              </th>
            )}
            <th className="px-4 py-4 sm:px-6" aria-label="View course" />
          </tr>
        </thead>
        <tbody>
          {rows.map((course) => (
            <tr
              key={course.slug}
              className="group border-b border-line transition-colors last:border-b-0 hover:bg-bg-secondary/50"
            >
              <td className="px-5 py-4 sm:px-6">
                <a href={`/courses/${course.slug}`} className="flex items-center gap-3">
                  <LevelBadge level={course.level} label={course.levelLabel} size="sm" />
                  <span className="text-sm font-semibold leading-snug text-ink">
                    {course.title}
                  </span>
                </a>
              </td>
              <td className="px-4 py-4 text-right font-mono text-base font-semibold text-ink">
                {course.priceOnline}
              </td>
              <td className="px-4 py-4 text-right font-mono text-base font-medium text-muted">
                {course.priceBlended}
              </td>
              {showFastTrack && (
                <td className="px-4 py-4 text-right font-mono text-base font-medium text-muted">
                  {course.priceFastTrack ?? '—'}
                </td>
              )}
              <td className="px-4 py-4 text-right sm:px-6">
                <a
                  href={`/courses/${course.slug}`}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-brand"
                  aria-label={`View ${course.title}`}
                >
                  View
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  const qualifications = courses.filter((c) => !c.cpd);
  const cpdCourses = courses.filter((c) => c.cpd);

  const paymentCards = [
    {
      icon: CalendarClock,
      title: 'Flexible payment plans',
      copy: 'Tailored financing through leading providers, with flexible or fixed monthly repayments built around your budget.',
    },
    {
      icon: Percent,
      title: 'Interest-free options',
      copy: 'Interest-free plans are available, so spreading the cost doesn’t mean paying more for the same qualification.',
    },
    {
      icon: PiggyBank,
      title: 'Spread the cost',
      copy: 'Start studying now and pay monthly — tell us your situation and we’ll match a plan to it before you commit to anything.',
    },
  ];

  return (
    <main className="relative">
      <Nav />
      <PageHeader
        epic
        eyebrow="Pricing"
        title="Every price, on the page."
        subtitle="No hidden fees, no 'enquire for pricing', no PDF to dig through. Here is exactly what every course and bundle costs — and how to spread the cost if you need to."
      />

      {/* Trust strip */}
      <section className="border-b border-t border-line bg-bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: SITE.stats.successRate, label: 'Graduate success rate' },
            { value: SITE.stats.employmentRate, label: 'Employment rate' },
            { value: SITE.stats.yearsExperience, label: 'Years in the industry' },
            { value: '0%', label: 'Interest options available' },
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

      {/* Qualifications table */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="Qualifications" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              Nationally recognised qualifications
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
              Every course is OFQUAL-regulated and awarded by Transcend Awards or Active IQ (part
              of NCFE). Online is your lowest price; blended adds in-person practical days;
              fast-track gets you qualified in as little as a week.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div data-tour="price-table">
              <PriceTable rows={qualifications} showFastTrack />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bundles with savings math */}
      <section className="border-t border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="Bundles" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              Bundles: the same qualifications, for less
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              The savings below aren&rsquo;t marketing — they&rsquo;re the difference between the
              bundle price and what the included courses cost if you enrolled on each separately.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {bundles.map((bundle, i) => {
              const included = bundle.includes
                .map((slug) => courses.find((c) => c.slug === slug))
                .filter((c): c is Course => Boolean(c));
              const separateOnline = included.reduce((sum, c) => sum + gbp(c.priceOnline), 0);
              const separateHybrid = included.reduce((sum, c) => sum + gbp(c.priceBlended), 0);
              const saveOnline = separateOnline - gbp(bundle.priceOnline);
              const saveHybrid = separateHybrid - gbp(bundle.priceHybrid);
              const extras = bundle.alsoIncludes ?? [];

              return (
                <div
                  key={bundle.slug}
                  className="scroll-reveal card-lift flex flex-col rounded-2xl border border-line bg-card p-7 sm:p-8"
                  style={{ '--sr-delay': `${i * 100}ms` } as CSSProperties}
                >
                  <p className="mb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
                    {bundle.eyebrow}
                  </p>
                  <h3 className="mb-4 font-heading text-xl font-semibold text-ink">
                    {bundle.title}
                  </h3>

                  <ul className="mb-6 space-y-2">
                    {included.map((c) => (
                      <li key={c.slug} className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2 text-muted">
                          <Check size={15} strokeWidth={2} className="shrink-0 text-moss" />
                          {c.title}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {c.priceOnline} alone
                        </span>
                      </li>
                    ))}
                    {extras.map((title) => (
                      <li key={title} className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2 text-muted">
                          <Check size={15} strokeWidth={2} className="shrink-0 text-moss" />
                          {title}
                        </span>
                        <span className="font-mono text-xs text-brand">bundle exclusive</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line">
                    <div className="bg-bg px-5 py-4">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                        Online
                      </p>
                      <p className="font-mono text-xl font-semibold text-ink">
                        {bundle.priceOnline}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-moss">
                        Save {fmt(saveOnline)} vs separate
                      </p>
                    </div>
                    <div className="bg-bg px-5 py-4">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                        Hybrid
                      </p>
                      <p className="font-mono text-xl font-semibold text-ink">
                        {bundle.priceHybrid}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-moss">
                        Save {fmt(saveHybrid)} vs separate
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <a href={`/bundles/${bundle.slug}`} className="btn btn-primary btn-md flex-1">
                      View This Bundle
                    </a>
                    <a
                      href={`/contact?interest=${encodeURIComponent(bundle.title)}`}
                      className="btn btn-ghost-ink btn-md flex-1"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* CPD table */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="CPD specialisms" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              CPD add-ons for qualified instructors
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
              Short 2–3 week specialisms that sit alongside an existing Level 2 or Level 3
              qualification — each worth 8–10 CIMSPA CPD points.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PriceTable rows={cpdCourses} showFastTrack={false} />
          </Reveal>
        </div>
      </section>

      {/* Payment options */}
      <section className="border-t border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="Payment options" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              Your career shouldn&rsquo;t wait for a lump sum.
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              We partner with leading finance providers to keep payment simple and built around
              your budget — many of our students qualify while raising families or between jobs.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {paymentCards.map((card, i) => (
              <div
                key={card.title}
                className="scroll-reveal rounded-2xl border border-line bg-card p-7"
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
              >
                <card.icon size={22} strokeWidth={1.75} className="mb-4 text-brand" />
                <p className="mb-2 font-heading text-base font-semibold text-ink">{card.title}</p>
                <p className="text-sm leading-relaxed text-muted">{card.copy}</p>
              </div>
            ))}
          </RevealGroup>
          <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Regulated &amp; accredited by
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SITE.accreditations.map((body, i) => (
                <SealBadge key={body} label={body} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      <CtaBand
        eyebrow="Found your course?"
        title="Lock in your place — or just ask us anything."
        subtitle="Tell us which course or bundle you're looking at and we'll confirm dates, payment plans and your starting point — usually within one working day."
        primaryLabel="Enquire Now"
        primaryHref="/contact"
        secondaryLabel="Browse All Courses"
        secondaryHref="/courses"
        showGlitch
      />

      <Footer />
    </main>
  );
}
