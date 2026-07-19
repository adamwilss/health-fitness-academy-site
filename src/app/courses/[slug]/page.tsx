import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check, BadgeCheck, Briefcase } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Ledger from '@/components/Ledger';
import LevelBadge from '@/components/LevelBadge';
import CourseCard from '@/components/CourseCard';
import CtaBand from '@/components/CtaBand';
import StarRating from '@/components/StarRating';
import SealBadge from '@/components/SealBadge';
import { courses, getCourse } from '@/data/courses';
import { getBundle } from '@/data/bundles';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} — from ${course.priceOnline}`,
    description: course.summary,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const bundle = course.bundleSlug ? getBundle(course.bundleSlug) : undefined;
  const bundleOthers = bundle
    ? bundle.includes.length + (bundle.alsoIncludes?.length ?? 0) - 1
    : 0;
  const related = courses.filter((c) => c.slug !== course.slug && c.level === course.level).slice(0, 3);
  const enquireHref = `/contact?interest=${encodeURIComponent(course.title)}`;

  const entries = [
    { label: 'Level', value: course.levelLabel },
    { label: 'Format', value: course.format.join(' / ') },
    { label: 'Duration', value: course.duration },
    ...(course.prerequisite ? [{ label: 'Prerequisite', value: course.prerequisite }] : []),
    ...(course.salary ? [{ label: 'Typical salary path', value: course.salary }] : []),
    ...(course.ucasPoints ? [{ label: 'UCAS points', value: course.ucasPoints }] : []),
    ...(course.cpdPoints ? [{ label: 'CPD points', value: String(course.cpdPoints) }] : []),
  ];

  const fees = [
    { label: 'Online', value: course.priceOnline },
    { label: 'Blended face-to-face', value: course.priceBlended },
    ...(course.priceFastTrack
      ? [{ label: 'Fast-track intensive', value: course.priceFastTrack }]
      : []),
  ];

  /* Course JSON-LD with offers, so search engines can surface price and
     provider as a rich result. */
  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.summary,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    offers: fees.map((f) => ({
      '@type': 'Offer',
      category: f.label,
      price: f.value.replace(/[£,]/g, ''),
      priceCurrency: 'GBP',
    })),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.format.join(', '),
      courseWorkload: course.duration,
    },
  };

  return (
    <main className="relative">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <PageHeader
        eyebrow={course.cpd ? 'CPD add-on' : `${course.levelLabel} qualification`}
        title={course.title}
        subtitle={course.tagline}
      />

      {/* Trust line — consistent with bundle pages */}
      <section className="border-b border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <StarRating size={14} className="text-brand" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                {course.cpd ? `${course.cpdPoints} CPD points` : `${course.levelLabel} — OFQUAL regulated`}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {course.accreditations.map((body, i) => (
                <SealBadge key={body} label={body} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-6 text-lg leading-relaxed text-muted">{course.summary}</p>
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {course.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <h2 className="mb-4 font-heading text-xl font-semibold text-ink">Who this is for</h2>
              <p className="text-base leading-relaxed text-muted">{course.whoFor}</p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <h2 className="mb-4 font-heading text-xl font-semibold text-ink">What you&rsquo;ll learn</h2>
              <ul className="space-y-3">
                {course.learn.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                    <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-moss" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Full syllabus — every unit from the official brochure, on the
                page instead of buried in a PDF. */}
            <Reveal delay={175} className="mt-10">
              <h2 className="mb-2 font-heading text-xl font-semibold text-ink">
                The full syllabus
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {course.units.length} units, assessed practically as well as in writing.
              </p>
              <ol className="space-y-0 overflow-hidden rounded-2xl border border-line bg-card">
                {course.units.map((unit, i) => (
                  <li
                    key={unit}
                    className="flex items-baseline gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:px-6"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      Unit {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{unit}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Qualification awarded */}
            <Reveal delay={200} className="mt-10">
              <h2 className="mb-4 font-heading text-xl font-semibold text-ink">
                What you&rsquo;ll walk away with
              </h2>
              <div className="space-y-3">
                {course.awards.map((award) => (
                  <div
                    key={award}
                    className="flex items-start gap-3 rounded-xl border border-line bg-card p-4"
                  >
                    <BadgeCheck size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-sm font-medium leading-relaxed text-ink">{award}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Career outcomes */}
            <Reveal delay={225} className="mt-10">
              <h2 className="mb-4 font-heading text-xl font-semibold text-ink">
                Where it can take you
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {course.careers.map((career) => (
                  <span
                    key={career}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm text-muted"
                  >
                    <Briefcase size={14} strokeWidth={1.75} className="text-brand" />
                    {career}
                  </span>
                ))}
              </div>
              {course.salary && (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Typical earnings: <strong className="text-ink">{course.salary.replace(/^£/, '£')}</strong>
                </p>
              )}
            </Reveal>

            {bundle && (
              <Reveal delay={250} className="mt-10">
                <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-7">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    Better value as a bundle
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-muted">
                    This course is included in the <strong className="text-ink">{bundle.title}</strong>, alongside{' '}
                    {bundleOthers} other qualification{bundleOthers === 1 ? '' : 's'}, for less than
                    enrolling separately.
                  </p>
                  <a href={`/bundles/${bundle.slug}`} className="text-sm font-semibold text-brand">
                    View {bundle.title} &rarr;
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="right">
              <div className="mb-4">
                <LevelBadge level={course.level} label={course.levelLabel} />
              </div>

              {/* Course fees — transparent pricing from the official brochure */}
              <div className="mb-5 rounded-2xl border border-brand/25 bg-card p-6 sm:p-7">
                <p className="mb-5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
                  Course fees
                </p>
                <dl className="space-y-4">
                  {fees.map((fee) => (
                    <div key={fee.label} className="flex items-baseline justify-between gap-4">
                      <dt className="text-sm text-muted">{fee.label}</dt>
                      <dd className="font-mono text-lg font-semibold text-ink">{fee.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                  Flexible payment plans and interest-free options available —{' '}
                  <a href="/pricing" className="font-semibold text-brand">
                    see all pricing
                  </a>
                  .
                </p>
              </div>

              <Ledger title="Course record" entries={entries} accreditations={course.accreditations} />
              <a
                href={enquireHref}
                className="btn btn-primary btn-lg mt-5 w-full"
              >
                Enquire About This Course
              </a>
              <a href={SITE.phoneHref} className="btn btn-ghost-ink btn-md mt-3 w-full">
                Or call {SITE.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-bg-secondary">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <h2 className="mb-10 font-heading text-2xl font-semibold text-ink">
              Other {course.levelLabel} courses
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Ready to enrol?"
        title="Speak to us before you commit."
        subtitle="We'll help you decide between this course, a bundle, or a different starting point entirely."
        primaryLabel="Enquire Now"
        primaryHref={enquireHref}
        secondaryLabel="See All Pricing"
        secondaryHref="/pricing"
        showGlitch
      />

      <Footer />
    </main>
  );
}
