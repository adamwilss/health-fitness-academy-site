import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import SectionLabel from '@/components/SectionLabel';
import SealBadge from '@/components/SealBadge';
import CtaBand from '@/components/CtaBand';
import { SITE } from '@/data/site';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'Our Commitment',
  description:
    "How Health Fitness Academy backs up its values in practice — female assessors, ongoing mentorship, and a genuinely safe space for women from every background.",
};

const commitments = [
  {
    title: 'Female assessors, every time',
    body: 'Every course is taught and assessed by women. There is no version of your qualification where a man is marking your practical assessment or grading your written work.',
  },
  {
    title: "Mentorship doesn't end at graduation",
    body: 'Qualifying is the start, not the finish. Our mentorship continues after you pass, and much of our own team qualified through this Academy before going on to teach here themselves.',
  },
  {
    title: 'A genuine safe space for faith communities',
    body: "We\u2019ve built our teaching environment with the specific barriers faith-community women face front of mind — modesty, women-only spaces, and freedom from judgement — without making that the only story: every course is open to any woman.",
  },
  {
    title: 'Flexible around real life',
    body: 'Online, blended or in-person, fast-track or self-paced — study fits around children, work and existing commitments, not the other way round.',
  },
  {
    title: 'Real accreditation, not a paper mill',
    body: "OFQUAL regulation and CIMSPA, Active IQ and REPs accreditation aren\u2019t decoration — they\u2019re what makes your qualification recognised by employers and portable across the industry.",
  },
];

export default function OurCommitmentPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Our commitment"
        title="Here's what we actually promise you."
        subtitle="Not a mission statement — the specific things we do to back it up."
        epic
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-8 sm:pb-28">
          <RevealGroup className="space-y-8">
            {commitments.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal border-b border-line pb-8 last:border-0"
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
              >
                <h2 className="mb-3 font-heading text-xl font-semibold text-ink sm:text-2xl">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Held to a standard" tone="brand" />
            <h2 className="mb-8 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Regulated and accredited — not self-declared.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-4">
              {SITE.accreditations.map((body, i) => (
                <SealBadge key={body} label={body} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Any questions?"
        title="Ask us anything before you commit."
        subtitle="We'd rather answer your questions honestly now than have you find out the answer the hard way later."
        secondaryLabel="Read our FAQ"
        secondaryHref="/faq"
        showGlitch
      />

      <Footer />
    </main>
  );
}
