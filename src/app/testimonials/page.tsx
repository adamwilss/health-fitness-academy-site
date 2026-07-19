import type { Metadata } from 'next';
import { Quote, ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import StarRating from '@/components/StarRating';
import CtaBand from '@/components/CtaBand';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Student Stories',
  description:
    'What students say about training with Health Fitness Academy — including Samantha, who went on to build her own career in the fitness industry.',
};

export default function TestimonialsPage() {
  const testimonial = testimonials[0];

  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Student stories"
        title="What our students say"
        subtitle="Real words from women who trained with us — the standard every course still has to meet."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          {/* Hero testimonial — Samantha S. featured prominently */}
          <Reveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 font-serif text-2xl font-bold text-brand">
                {testimonial.name.charAt(0)}
              </div>
              <p className="font-mono text-sm font-semibold tracking-[0.04em] text-ink">
                {testimonial.name}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {testimonial.role}
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <blockquote className="relative rounded-2xl bg-dusk p-8 sm:p-12">
              <Quote size={32} strokeWidth={1.5} className="mb-5 text-brand" aria-hidden />
              <p className="font-serif text-2xl italic leading-relaxed text-mist sm:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-7">
                <StarRating size={16} className="text-brand" />
              </footer>
            </blockquote>
          </Reveal>

          {/* Why it matters — honesty policy */}
          <Reveal delay={100} className="mt-14">
            <SectionLabel label="Why it matters" />
            <h2 className="mb-5 font-heading text-2xl font-semibold leading-snug text-ink">
              We&rsquo;d rather show you one real story than invent a dozen.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Samantha&rsquo;s words above are genuine, from a student who trained with Sakina
              directly and went on to build her own career in the fitness industry. As more of our
              graduates come through the Academy&rsquo;s own courses, we&rsquo;ll add their stories
              here too — every one of them will be real, attributed, and unedited beyond
              formatting.
            </p>
          </Reveal>

          {/* Share your story CTA */}
          <Reveal delay={150} className="mt-10">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/5 px-6 py-4 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
            >
              Share your story
              <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Be the next story"
        title="Where could this time next year find you?"
        subtitle="Speak to us about the course or bundle that gets you there."
        showGlitch
      />

      <Footer />
    </main>
  );
}
