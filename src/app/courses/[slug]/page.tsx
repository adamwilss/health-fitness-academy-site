import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
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
    title: course.title,
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

  const entries = [
    { label: 'Level', value: course.levelLabel },
    { label: 'Format', value: course.format.join(' / ') },
    { label: 'Duration', value: course.duration },
    ...(course.prerequisite ? [{ label: 'Prerequisite', value: course.prerequisite }] : []),
    ...(course.salary ? [{ label: 'Typical salary path', value: course.salary }] : []),
  ];

  return (
    <main className="relative">
      <Nav />
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
                {course.levelLabel} — OFQUAL regulated
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

            {bundle && (
              <Reveal delay={200} className="mt-10">
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
              <Ledger title="Course record" entries={entries} accreditations={course.accreditations} />
              <a
                href="/contact"
                className="btn btn-primary btn-lg mt-5 w-full"
              >
                Enquire About This Course
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
        showGlitch
      />

      <Footer />
    </main>
  );
}
