import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Ledger from '@/components/Ledger';
import CtaBand from '@/components/CtaBand';
import LevelBadge from '@/components/LevelBadge';
import { bundles, getBundle } from '@/data/bundles';
import { getCourse } from '@/data/courses';
import { SITE } from '@/data/site';

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

export default async function BundlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bundle = getBundle(slug);
  if (!bundle) notFound();

  const includedCourses = bundle.includes.map((s) => getCourse(s)).filter(Boolean);
  const alsoIncludes = bundle.alsoIncludes ?? [];
  const qualificationCount = includedCourses.length + alsoIncludes.length;
  const otherBundle = bundles.find((b) => b.slug !== bundle.slug);
  const otherBundleCount = otherBundle
    ? otherBundle.includes.length + (otherBundle.alsoIncludes?.length ?? 0)
    : 0;

  const entries = [
    { label: 'CIMSPA points', value: String(bundle.cimspaPoints) },
    { label: 'Total study hours', value: String(bundle.hours) },
    { label: 'Price, online', value: bundle.priceOnline },
    { label: 'Price, hybrid', value: bundle.priceHybrid },
    { label: 'Qualifications included', value: String(qualificationCount) },
  ];

  return (
    <main className="relative">
      <Nav />
      <PageHeader eyebrow="Bundle" title={bundle.title} subtitle={bundle.tagline} />

      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-6 text-lg leading-relaxed text-muted">{bundle.summary}</p>
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {bundle.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <h2 className="mb-4 font-heading text-xl font-semibold text-ink">Best for</h2>
              <p className="text-base leading-relaxed text-muted">{bundle.bestFor}</p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <h2 className="mb-5 font-heading text-xl font-semibold text-ink">
                What&rsquo;s included
              </h2>
              <div className="space-y-4">
                {includedCourses.map((course) => (
                  <a
                    key={course!.slug}
                    href={`/courses/${course!.slug}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-5 transition-colors hover:border-brand/50"
                  >
                    <div className="flex items-center gap-4">
                      <LevelBadge level={course!.level} label={course!.levelLabel} size="sm" />
                      <span className="font-heading text-base font-medium text-ink">
                        {course!.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-brand">View &rarr;</span>
                  </a>
                ))}
                {alsoIncludes.map((title) => (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center rounded-full border border-moss/60 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-moss">
                        Specialism
                      </span>
                      <span className="font-heading text-base font-medium text-ink">{title}</span>
                    </div>
                    <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                      Bundle exclusive
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {otherBundle && (
              <Reveal delay={200} className="mt-10">
                <div className="rounded-2xl border border-line bg-card p-6 sm:p-7">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Considering the other pathway?
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-muted">
                    The <strong className="text-ink">{otherBundle.title}</strong> covers{' '}
                    {otherBundleCount} qualifications across {otherBundle.hours} study
                    hours — {otherBundle.bestFor.toLowerCase()}
                  </p>
                  <a href={`/bundles/${otherBundle.slug}`} className="text-sm font-semibold text-brand">
                    Compare {otherBundle.title} &rarr;
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="right">
              <Ledger title="Bundle record" entries={entries} accreditations={[...SITE.accreditations]} />
              <a
                href="/contact"
                className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Enquire About This Bundle
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to enrol?"
        title="Let’s make sure this is the right pathway for you."
        subtitle="A short call helps us confirm the bundle, format and timeline that fit your life."
      />

      <Footer />
    </main>
  );
}
