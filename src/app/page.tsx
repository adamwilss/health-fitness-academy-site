import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import LevelBadge from '@/components/LevelBadge';
import BundleCard from '@/components/BundleCard';
import CtaBand from '@/components/CtaBand';
import SealBadge from '@/components/SealBadge';
import { courses } from '@/data/courses';
import { bundles } from '@/data/bundles';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'OFQUAL-Regulated Fitness Qualifications for Women — Prestwich & Online',
  description:
    'Health Fitness Academy trains women in Prestwich, Manchester and online across the UK to become gym instructors, personal trainers, and Pilates and cycling instructors. OFQUAL-regulated, CIMSPA, Active IQ and REPs accredited.',
};

const levelGroups: { level: 'L2' | 'L3' | 'CPD'; label: string; blurb: string }[] = [
  {
    level: 'L2',
    label: 'Level 2',
    blurb: 'Your starting point — no fitness background required.',
  },
  {
    level: 'L3',
    label: 'Level 3',
    blurb: 'Specialise and step into personal training or Pilates.',
  },
  {
    level: 'CPD',
    label: 'CPD',
    blurb: 'Short add-ons for instructors already qualified.',
  },
];

export default function HomePage() {
  const featuredCourses = courses.filter((c) => ['L2', 'L3'].includes(c.level)).slice(0, 3);
  const testimonial = testimonials[0];
  const post = blogPosts[0];

  return (
    <main className="relative">
      <Nav />
      <Hero />

      {/* Trust bar */}
      <section className="border-b border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-between">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Regulated &amp; accredited by
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SITE.accreditations.map((body, i) => (
                <SealBadge key={body} label={body} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder story teaser */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left">
            <SectionLabel label="The founder" />
            <h2 className="mb-6 font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Sakina didn&rsquo;t come from fitness. That&rsquo;s exactly why this Academy exists.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted">
              At 34, facing redundancy, medical obesity and her own mental health struggles while
              raising four children, Sakina found fitness by accident — and found it changed
              everything. She went on to qualify Level 2, 3 and 4 herself, ran women-only boot
              camps in her community, and eventually built the female-centred space she wished had
              existed when she started.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Read Sakina&rsquo;s full story
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <blockquote className="relative rounded-2xl bg-dusk p-8 sm:p-10">
              <Quote size={28} strokeWidth={1.5} className="mb-4 text-brand" aria-hidden />
              <p className="font-serif text-xl italic leading-relaxed text-mist sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-dusk">
                {testimonial.name} &middot; {testimonial.role}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Level wayfinding */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Your pathway" />
            <h2 className="mb-4 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Levels are a real qualification sequence, not decoration.
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
              Every course sits at a genuine level — L2, L3, or a CPD specialism for instructors
              already qualified. Start wherever fits your goals.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {levelGroups.map((group, i) => (
              <div
                key={group.level}
                className="scroll-reveal rounded-2xl border border-line bg-card p-7"
                style={{ '--sr-delay': `${i * 100}ms` } as CSSProperties}
              >
                <LevelBadge level={group.level} label={group.label} />
                <p className="mt-4 text-sm leading-relaxed text-muted">{group.blurb}</p>
              </div>
            ))}
          </RevealGroup>
          <Reveal delay={150} className="mt-10">
            <a
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              See every course by level
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Featured courses */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Popular courses" />
            <h2 className="mb-12 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Start from the ground up, or build on what you&rsquo;ve got.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {featuredCourses.map((course, i) => (
              <a
                key={course.slug}
                href={`/courses/${course.slug}`}
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
                className="scroll-reveal group card-lift flex flex-col rounded-2xl border border-line bg-card p-7 hover:border-brand/50"
              >
                <div className="mb-4">
                  <LevelBadge level={course.level} label={course.levelLabel} size="sm" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold leading-snug text-ink">
                  {course.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{course.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View course
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-bg-secondary" id="bundles">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Bundles" />
            <h2 className="mb-4 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              The fastest, best-value route to fully qualified.
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
              Bundles combine qualifications on one continuous pathway, at a lower cost than
              enrolling separately.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {bundles.map((bundle, i) => (
              <div
                key={bundle.slug}
                className="scroll-reveal"
                style={{ '--sr-delay': `${i * 100}ms` } as CSSProperties}
              >
                <BundleCard bundle={bundle} />
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Our commitment" />
            <h2 className="mb-12 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Courses created by women, for women.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SITE.values.map((value, i) => (
              <div
                key={value.name}
                className="scroll-reveal"
                style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
              >
                <p className="mb-2 font-heading text-base font-semibold text-ink">{value.name}</p>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </RevealGroup>
          <Reveal delay={150} className="mt-10">
            <a
              href="/our-commitment"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Read our full commitment
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="From the academy" />
            <a
              href={`/blog/${post.slug}`}
              className="group card-lift grid grid-cols-1 gap-8 rounded-2xl border border-line bg-card p-8 hover:border-brand/40 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"
            >
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {post.displayDate} &middot; {post.readingTime}
                </p>
                <h3 className="mb-3 font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {post.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">{post.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 justify-self-start text-sm font-semibold text-brand lg:justify-self-end">
                Read the article
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Your qualification starts with one conversation."
        subtitle="Tell us where you're starting from and what you want to become — we'll help you choose the right course or bundle."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="Browse All Courses"
        secondaryHref="/courses"
        showGlitch
      />

      <Footer />
    </main>
  );
}
