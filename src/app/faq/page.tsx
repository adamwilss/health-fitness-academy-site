import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Accordion from '@/components/Accordion';
import CtaBand from '@/components/CtaBand';
import { faqs } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about enrolling, studying online or in-person, funding, accreditation, and what happens after you qualify.',
};

export default function FaqPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="FAQ"
        title="Questions worth answering honestly."
        subtitle="If yours isn’t here, ask us directly — we’d rather talk it through than leave you guessing."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <div className="mb-10 rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted">
                Below are the questions we hear most often from people considering their first
                fitness qualification — or their next one. If yours isn&rsquo;t covered,{' '}
                <a href="/contact" className="font-semibold text-brand hover:underline">
                  get in touch
                </a>{' '}
                and we&rsquo;ll answer it personally.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Still unsure?"
        title="A five-minute call answers most of this faster."
        subtitle="No pressure, no sales script — just a straightforward conversation about your goals."
        showGlitch
      />

      <Footer />
    </main>
  );
}
