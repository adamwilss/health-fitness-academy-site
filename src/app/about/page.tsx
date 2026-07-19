import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
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
  title: 'About Sakina Khan & Health Fitness Academy',
  description:
    'How a 34-year-old mother of four facing redundancy and medical obesity built an OFQUAL-regulated academy training women across the UK to become fitness professionals.',
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Our story"
        title="A space that didn’t exist, until Sakina built it."
        subtitle="Health Fitness Academy started with one woman’s own transformation — and a refusal to let that stay a one-off."
        epic
      />

      {/* Stats strip — real numbers from existing data */}
      <Reveal>
        <section className="bg-bg-secondary">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
            {[
              { value: '4', label: 'Qualifications in pathway' },
              { value: '735', label: 'Study hours (longest bundle)' },
              { value: '10', label: 'Courses available' },
              { value: '2', label: 'Bundle pathways' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-7 text-center">
                <p className="font-heading text-2xl font-bold text-brand sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Founder story */}
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionLabel label="The founder" />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                In 2012, at 34, Sakina Khan was made redundant while raising four children,
                navigating her own mental health struggles, and living with medical obesity. It
                wasn&rsquo;t the moment anyone would have picked to start a fitness career — which
                is exactly why it matters that she did.
              </p>
              <p>
                Fitness became the thing that turned her situation around, not as a quick fix, but
                as a genuine, sustained transformation. She didn&rsquo;t stop at feeling better —
                she went on to complete her own Level 2, Level 3 and Level 4 fitness
                qualifications, became a certified instructor, and started running women-only boot
                camps in her own community.
              </p>
              <p>
                Those boot camps are where the idea for this Academy actually started. Session
                after session, Sakina watched women arrive nervous — about their bodies, their
                fitness, sometimes about simply being in a room to exercise at all — and leave
                changed, because the room was theirs. No mixed classes to navigate, no assumptions
                to push back against, just space to build strength and confidence on their own
                terms.
              </p>
              <p>
                She looked for a training provider that reflected that same principle — a
                female-centred space where women could gain real, accredited fitness
                qualifications, taught and assessed by women who understood exactly what that
                first nervous class felt like. It didn&rsquo;t exist. So she built it.
              </p>
              <p>
                Health Fitness Academy is the result: an OFQUAL-regulated, CIMSPA-, Active IQ- and
                REPs-accredited training provider, run exclusively by women, for women, with a
                particular focus on making the fitness industry genuinely accessible to women from
                faith communities who&rsquo;ve too often found it closed to them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-10">
            <blockquote className="rounded-2xl bg-dusk p-8 sm:p-10">
              <Quote size={26} strokeWidth={1.5} className="mb-4 text-brand" aria-hidden />
              <p className="font-serif text-xl italic leading-relaxed text-mist sm:text-2xl">
                &ldquo;To empower women by providing a unique, female-centred online learning
                platform, dedicated to fostering a community where women can gain accredited
                qualifications, develop their fitness expertise, and inspire others.&rdquo;
              </p>
              <footer className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-dusk">
                Health Fitness Academy mission
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="What we stand for" />
            <h2 className="mb-12 max-w-2xl font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15] text-ink">
              Five values, held to on every single course.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SITE.values.map((value, i) => (
              <div
                key={value.name}
                className="scroll-reveal rounded-2xl border border-line bg-card p-6"
                style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
              >
                <p className="mb-2 font-heading text-base font-semibold text-ink">{value.name}</p>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Courses created by women, for women */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <SectionLabel label="Created by women, for women" />
            <h2 className="mb-6 font-heading text-[clamp(1.6rem,3.2vw,2.1rem)] font-semibold leading-[1.2] text-ink">
              Every assessor is a woman. Every mentor stays on after you qualify.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              You&rsquo;re not handed a syllabus and left to work through it alone. Every course is
              built and assessed by women who&rsquo;ve done this job, and mentorship doesn&rsquo;t
              stop the day you pass — many of our own team qualified through this exact Academy
              and now teach the next cohort.
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <SectionLabel label="A safe space, by design" />
            <h2 className="mb-6 font-heading text-[clamp(1.6rem,3.2vw,2.1rem)] font-semibold leading-[1.2] text-ink">
              Built with faith communities in mind, open to every woman.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              We give particular thought to the barriers women from faith communities have faced
              entering fitness — from modesty considerations to a scarcity of women-only spaces.
              That focus shapes how we teach, but every course and every bundle is open to any
              woman ready to learn.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Accreditations recap */}
      <section className="border-y border-line bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-between">
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

      <CtaBand
        eyebrow="Your turn"
        title="Whatever brought you here, you belong in this room."
        subtitle="Speak to us about the right course or bundle for where you're starting from."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="Browse Courses"
        secondaryHref="/courses"
        showGlitch
      />

      <Footer />
    </main>
  );
}
