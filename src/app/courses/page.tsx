import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import SectionLabel from '@/components/SectionLabel';
import BundleCard from '@/components/BundleCard';
import CtaBand from '@/components/CtaBand';
import CourseFilter from '@/components/CourseFilter';
import { courses } from '@/data/courses';
import { bundles } from '@/data/bundles';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'Courses & Bundles',
  description:
    'Ten OFQUAL-regulated fitness qualifications and two bundle pathways - from Level 2 Gym Instructor through Level 3 Personal Trainer, Pilates, cycling, and CPD specialisms.',
};

export default function CoursesIndexPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Courses & bundles"
        title="Ten courses, two bundles, one continuous pathway."
        subtitle="Filter by level to find your starting point — every course leads somewhere real."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
          <CourseFilter courses={courses} />
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary" id="bundles">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Bundles" tone="brand" />
            <h2 className="mb-4 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Prefer one enrolment, one continuous pathway?
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
              Our two bundles combine several qualifications at a lower cost than enrolling
              separately, with the same cohort and mentorship throughout.
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

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Tell us your goal, we'll point you at the right course."
        subtitle="A short call is often faster than reading ten course pages — book one whenever suits."
        showGlitch
      />

      <Footer />
    </main>
  );
}
