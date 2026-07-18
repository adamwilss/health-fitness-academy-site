import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
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
          <Reveal>
            <blockquote className="rounded-2xl bg-dusk p-8 sm:p-12">
              <Quote size={32} strokeWidth={1.5} className="mb-5 text-brand" aria-hidden />
              <p className="font-serif text-2xl italic leading-relaxed text-mist sm:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-muted-dusk">
                {testimonial.name} &middot; {testimonial.role}
              </footer>
            </blockquote>
          </Reveal>

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
        </div>
      </section>

      <CtaBand
        eyebrow="Be the next story"
        title="Where could this time next year find you?"
        subtitle="Speak to us about the course or bundle that gets you there."
      />

      <Footer />
    </main>
  );
}
