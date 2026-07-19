import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Quote } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Ledger from '@/components/Ledger';
import CtaBand from '@/components/CtaBand';
import LevelBadge from '@/components/LevelBadge';
import SectionLabel from '@/components/SectionLabel';
import Accordion from '@/components/Accordion';
import CourseCard from '@/components/CourseCard';
import StarRating from '@/components/StarRating';
import SealBadge from '@/components/SealBadge';
import { bundles, getBundle } from '@/data/bundles';
import { getCourse } from '@/data/courses';
import { SITE } from '@/data/site';
import { faqs } from '@/data/faq';
import type { FaqItem } from '@/data/faq';
import { testimonials } from '@/data/testimonials';

/* ── Static params ─────────────────────────────────────────────────── */
export function generateStaticParams() {
  return bundles.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bundle = getBundle(slug);
  if (!bundle) return {};
  return {
    title: bundle.title,
    description: bundle.summary,
  };
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default async function BundlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bundle = getBundle(slug);
  if (!bundle) notFound();

  const includedCourses = bundle.includes.map((s) => getCourse(s)).filter(Boolean);
  const enquireHref = `/contact?interest=${encodeURIComponent(bundle.title)}`;
  const testimonial = testimonials[0];
  const alsoIncludes = bundle.alsoIncludes ?? [];
  const qualificationCount = includedCourses.length + alsoIncludes.length;
  const otherBundle = bundles.find((b) => b.slug !== bundle.slug);

  /* Bundle-relevant FAQs: tag first, pull 5 most relevant */
  const bundleFaqs: FaqItem[] = faqs
    .filter((f) => f.bundleRelevant)
    .slice(0, 5);

  /* Ledger entries for sidebar */
  const ledgerEntries = [
    { label: 'CIMSPA points', value: String(bundle.cimspaPoints) },
    { label: 'Total study hours', value: String(bundle.hours) },
    { label: 'Qualifications', value: String(qualificationCount) },
    { label: 'Online from', value: bundle.priceOnline },
    { label: 'Hybrid from', value: bundle.priceHybrid },
  ];

  /* Topic highlights per included course (top 3 learn items) */
  const courseTopicsMap = includedCourses.reduce<Record<string, string[]>>((acc, course) => {
    if (course) acc[course.slug] = course.learn.slice(0, 3);
    return acc;
  }, {});

  return (
    <main className="relative">
      <Nav />

      {/* ── BundleHero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg">
        {/* ambient grid + glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full animate-slow-pulse"
          style={{
            background:
              'radial-gradient(circle, rgb(var(--brand) / 0.14) 0%, transparent 62%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgb(var(--moss) / 0.09) 0%, transparent 65%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand">
                {bundle.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="max-w-3xl text-balance font-heading text-[clamp(2.1rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-gradient-brand">
              {bundle.title}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {bundle.heroSubtitle}
            </p>
          </Reveal>

          {/* Trust badges */}
          <Reveal delay={180} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              'OFQUAL Regulated',
              'CIMSPA Endorsed',
              `${bundle.hours} Study Hours`,
              `${qualificationCount} Qualifications`,
            ].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-[0.6rem] font-bold text-brand">
                  ✓
                </span>
                {badge}
              </span>
            ))}
          </Reveal>

          {/* Hero CTAs */}
          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={enquireHref} className="btn btn-primary btn-lg">
              Enquire About This Bundle
            </a>
            <a href="/pricing" className="btn btn-ghost-ink btn-lg">
              Compare All Pricing
            </a>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-6 border-t border-line pt-8 sm:gap-10">
            <div className="flex items-center gap-3">
              <StarRating size={14} className="text-brand" />
              <span className="text-sm font-medium text-muted">Rated by students</span>
            </div>
            <div className="flex items-center gap-3">
              {SITE.accreditations.map((body, i) => (
                <SealBadge key={body} label={body} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Ribbon ─────────────────────────────────────────────── */}
      <Reveal>
        {/* border-t grounds the ribbon against the hero section above */}
        <section className="border-t border-line bg-bg-secondary" data-tour="bundle-stats">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-5">
            {[
              { value: String(bundle.hours), label: 'Study Hours' },
              { value: String(bundle.cimspaPoints), label: 'CIMSPA Points' },
              { value: String(qualificationCount), label: 'Qualifications' },
              { value: bundle.priceOnline, label: 'Online From' },
              { value: bundle.priceHybrid, label: 'Hybrid From' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-8 text-center">
                <p className="font-serif text-3xl italic text-brand sm:text-[2.1rem]">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Main Content: two-column layout ─────────────────────────── */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* ── Left column ─────────────────────────────────────────── */}
          <div>
            {/* Body copy */}
            <Reveal>
              <p className="mb-6 text-lg leading-relaxed text-muted">
                {bundle.summary}
              </p>
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {bundle.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Best for / Value props */}
            <Reveal delay={100} className="mt-12">
              <SectionLabel label="Why this bundle" tone="brand" />
              <h2 className="mb-2 font-heading text-xl font-semibold text-ink">
                Best for
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {bundle.bestFor}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {bundle.valueProps.map((vp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-line bg-card p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-[0.6rem] font-bold text-brand">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{vp}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* What's included */}
            <Reveal delay={150} className="mt-12">
              <SectionLabel label="Included" />
              <h2 className="mb-6 font-heading text-xl font-semibold text-ink">
                What&rsquo;s included
              </h2>

              {/* Course cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {includedCourses.map((course) => (
                  <CourseCard key={course!.slug} course={course!} />
                ))}
              </div>

              {/* Topic highlights per course */}
              {includedCourses.length > 0 && (
                <div className="mt-6 space-y-4">
                  {includedCourses.map((course) => {
                    const topics = courseTopicsMap[course!.slug] ?? [];
                    if (topics.length === 0) return null;
                    return (
                      <div
                        key={course!.slug}
                        className="rounded-xl border border-line bg-card p-5"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <LevelBadge
                            level={course!.level}
                            label={course!.levelLabel}
                            size="sm"
                          />
                          <span className="font-heading text-sm font-medium text-ink">
                            {course!.title} — Key topics
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-md bg-bg-secondary px-2.5 py-1 font-mono text-[0.65rem] font-medium text-muted"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Also-includes (specialism cards) */}
              {alsoIncludes.length > 0 && (
                <div className="mt-6 space-y-3">
                  {alsoIncludes.map((title) => (
                    <div
                      key={title}
                      className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center rounded-full border border-moss/60 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-moss">
                          Specialism
                        </span>
                        <span className="font-heading text-base font-medium text-ink">
                          {title}
                        </span>
                      </div>
                      <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                        Bundle exclusive
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Bundle value callout */}
            <Reveal delay={200} className="mt-12">
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-7">
                <div>
                  <p className="mb-2 font-heading text-base font-semibold text-ink">
                    Better value in a bundle
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Buying these qualifications together costs less than enrolling
                    separately — and you get the same cohort, the same mentors, and a
                    continuous pathway from your first day to the day you&rsquo;re
                    qualified.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Other bundle compare */}
            {otherBundle && (
              <Reveal delay={250} className="mt-12">
                <div className="rounded-2xl border border-line bg-card p-6 sm:p-7">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Considering the other pathway?
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-muted">
                    The <strong className="text-ink">{otherBundle.title}</strong>{' '}
                    covers{' '}
                    {otherBundle.includes.length +
                      (otherBundle.alsoIncludes?.length ?? 0)}{' '}
                    qualifications across {otherBundle.hours} study hours.
                  </p>
                  <a
                    href={`/bundles/${otherBundle.slug}`}
                    className="text-sm font-semibold text-brand"
                  >
                    Compare {otherBundle.title} →
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          {/* ── Sidebar: Sticky pricing card ────────────────────────── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="right">
              <Ledger
                title="Bundle record"
                entries={ledgerEntries}
                accreditations={[...SITE.accreditations]}
              />

              <a
                href={enquireHref}
                className="btn btn-primary btn-lg mt-5 w-full"
              >
                Enquire About This Bundle
              </a>
              <a href={SITE.phoneHref} className="btn btn-ghost-ink btn-md mt-3 w-full">
                Or call {SITE.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonial — editorial pull-quote, consistent with the home
             and testimonials pages. One real story, given real weight,
             rather than a lone card stranded in a grid. ─────────────── */}
      <section className="bg-bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel label="Student Stories" tone="brand" />
            <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              What our students say
            </h2>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-muted">
              Real words from a student who trained with Sakina and went on to
              build her own career in the industry.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="relative max-w-3xl rounded-2xl bg-dusk p-8 sm:p-12">
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
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel label="Common Questions" />
            <h2 className="mb-10 font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-ink">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={bundleFaqs} />
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <CtaBand
        eyebrow="Stop scrolling, start qualifying"
        title="Your PT career won't build itself."
        subtitle="Book a free call. We'll map the bundle, format and timeline that fit your life — no pressure, no hard sell, just a clear next step."
        primaryLabel="Enquire Now"
        primaryHref={enquireHref}
        secondaryLabel="See All Pricing"
        secondaryHref="/pricing"
      />

      <Footer />
    </main>
  );
}
