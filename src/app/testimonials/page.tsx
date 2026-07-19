import type { Metadata } from 'next';
import Image from 'next/image';
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
        subtitle="Real words from students who trained with us — the standard every course still has to meet."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          {/* Hero testimonial — editorial pull-quote treatment.
              No avatar pill: name + role as magazine-style attribution are
              stronger and more specific than a monogram circle. */}
          <Reveal>
            <blockquote className="relative overflow-hidden rounded-2xl bg-dusk p-9 sm:p-14">
              {/* Background photo — subtle atmosphere behind the quote */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hfa-06.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 768px"
                  quality={50}
                />
                <div className="absolute inset-0 bg-dusk/88" />
              </div>
              {/* Opening mark: large, positioned top-left like a broadsheet. */}
              <Quote
                size={44}
                strokeWidth={1}
                className="mb-6 text-brand opacity-80"
                aria-hidden
              />
              <p className="font-serif text-2xl italic leading-[1.45] text-mist sm:text-3xl sm:leading-[1.4]">
                {testimonial.quote}
              </p>
              <footer className="mt-8 flex flex-col gap-1.5 border-t border-mist/10 pt-6">
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
