import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import LevelBadge from '@/components/LevelBadge';
import BundleCard from '@/components/BundleCard';
import CourseCard from '@/components/CourseCard';
import CtaBand from '@/components/CtaBand';
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

      {/* The ledger in motion — real credentials on a slow conveyor */}
      <Ticker />

      {/* Proof ribbon — the numbers behind the promise */}
      <section data-tour="proof-ribbon" className="border-b border-line bg-bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: SITE.stats.successRate, label: 'Graduate success rate' },
            { value: SITE.stats.employmentRate, label: 'Employment rate' },
            { value: SITE.stats.yearsExperience, label: 'Years in the industry' },
            { value: '£300', label: 'Courses from' },
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

      {/* Full-bleed photo strip — practical training in action */}
      <Reveal>
        <section className="relative overflow-hidden" style={{ height: 'clamp(280px, 36vw, 440px)' }}>
          <Image
            src="/images/hfa-03-group-class.jpg"
            alt="Students taking part in a group functional training class with kettlebells and battle ropes"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
          {/* Subtle edge gradients — just enough for text legibility, photo stays vivid */}
          <div className="absolute inset-0 bg-gradient-to-b from-dusk/20 via-transparent to-dusk/40" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-5 sm:px-8">
            <p className="max-w-md font-serif text-2xl italic leading-snug text-mist sm:text-3xl">
              Real qualifications. Real training. Real confidence.
            </p>
          </div>
        </section>
      </Reveal>

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
              <a
                key={group.level}
                href="/courses"
                className="scroll-reveal card-lift group relative flex min-h-[168px] flex-col overflow-hidden rounded-2xl border border-line bg-card p-7 hover:border-brand/50"
                style={{ '--sr-delay': `${i * 100}ms` } as CSSProperties}
              >
                {/* Ghost glyph — the level itself, stamped large and faint */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-9 -right-2 select-none font-serif text-[7rem] italic leading-none text-ink/[0.06] transition-colors duration-500 group-hover:text-brand/[0.12]"
                >
                  {group.label === 'CPD' ? 'CPD' : group.level}
                </span>
                <LevelBadge level={group.level} label={group.label} />
                <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-muted">{group.blurb}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
                  Browse {group.label} courses
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
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
              <div
                key={course.slug}
                className="scroll-reveal h-full"
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Photo gallery — real training, no overlays, images as content */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Reveal>
            <SectionLabel label="Inside the Academy" />
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { src: '/images/hfa-06.jpg', alt: 'Personal trainer coaching a client with a kettlebell in the gym' },
              { src: '/images/hfa-10.jpg', alt: 'Student performing a dumbbell shoulder press during a strength training session' },
              { src: '/images/hfa-08.jpg', alt: 'Two students high-fiving after completing a training exercise together' },
              { src: '/images/hfa-05.jpg', alt: 'Student following an online training session with dumbbells at home' },
            ].map((img, i) => (
              <div
                key={img.src}
                className="scroll-reveal group relative overflow-hidden rounded-xl"
                style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
              >
                <div className="relative" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    quality={80}
                  />
                </div>
              </div>
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
          <Reveal delay={150} className="mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Compare every course and bundle price
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Values — a dusk interlude, each value signed like a ledger entry */}
      <section className="relative overflow-hidden bg-dusk">
        <div aria-hidden className="bg-ledger-lines-dusk pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full animate-slow-pulse"
          style={{
            background: 'radial-gradient(circle, rgb(var(--brand) / 0.13) 0%, transparent 65%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Our commitment" tone="dusk" />
            <h2 className="mb-12 max-w-2xl font-serif text-[clamp(1.9rem,4vw,2.75rem)] italic leading-[1.15] text-mist">
              Courses created by women, for women.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {SITE.values.map((value, i) => (
              <div
                key={value.name}
                className="scroll-reveal border-t border-mist/15 pt-5"
                style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
              >
                <p className="mb-2.5 flex items-center gap-2.5 font-heading text-base font-semibold text-mist">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {value.name}
                </p>
                <p className="text-sm leading-relaxed text-muted-dusk">{value.description}</p>
              </div>
            ))}
          </RevealGroup>
          <Reveal delay={150} className="mt-12">
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
        secondaryLabel="See Course Pricing"
        secondaryHref="/pricing"
        showGlitch
      />

      <Footer />
    </main>
  );
}
