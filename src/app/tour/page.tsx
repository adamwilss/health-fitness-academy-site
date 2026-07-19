import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import SectionLabel from '@/components/SectionLabel';
import { StartWalkthroughButton } from '@/components/WalkthroughGuide';
import { courses } from '@/data/courses';
import { bundles } from '@/data/bundles';
import { blogPosts } from '@/data/blog';

/* Internal demo index for walking a client through the site on a call.
   Deliberately not linked from the nav, footer or sitemap, and noindexed. */
export const metadata: Metadata = {
  title: 'Site Tour',
  robots: { index: false, follow: false },
};

interface TourLink {
  href: string;
  label: string;
  note: string;
}

const GROUPS: { title: string; links: TourLink[] }[] = [
  {
    title: 'The headline pages',
    links: [
      { href: '/', label: 'Homepage', note: 'Animated hero, proof ribbon, founder story, bundles' },
      {
        href: '/pricing',
        label: 'Pricing',
        note: 'NEW — every fee on the page, bundle savings math, payment plans (was a buried PDF)',
      },
      {
        href: '/become-a-personal-trainer',
        label: 'Ads landing page',
        note: 'NEW — built for Google/Meta ads: lead form above the fold, sticky mobile CTA',
      },
      { href: '/courses', label: 'Courses & bundles', note: 'Filter by level, prices on every card' },
      { href: '/contact', label: 'Contact', note: 'Working form — course buttons arrive preselected' },
    ],
  },
  {
    title: 'Bundles',
    links: bundles.map((b) => ({
      href: `/bundles/${b.slug}`,
      label: b.title,
      note: `${b.priceOnline} online / ${b.priceHybrid} hybrid — stats ribbon, FAQ, testimonial`,
    })),
  },
  {
    title: 'Courses — full syllabus, fees & careers on every page',
    links: courses.map((c) => ({
      href: `/courses/${c.slug}`,
      label: c.title,
      note: `${c.priceOnline} online — ${c.units.length}-unit syllabus, qualification awarded, career paths`,
    })),
  },
  {
    title: 'Story & trust',
    links: [
      { href: '/about', label: 'About Sakina', note: 'Founder story with editorial drop cap' },
      { href: '/testimonials', label: 'Testimonials', note: 'Correct H1 (old site said "Gym Instruction Courses")' },
      { href: '/our-commitment', label: 'Our Commitment', note: 'Values, faith-community focus' },
      { href: '/faq', label: 'FAQ', note: 'In the main nav now (old site hid it)' },
      ...blogPosts.map((p) => ({
        href: `/blog/${p.slug}`,
        label: 'Blog',
        note: 'Real article layout, ready for the content strategy',
      })),
    ],
  },
  {
    title: 'The plumbing (old site pointed these at Yell.com)',
    links: [
      { href: '/privacy-policy', label: 'Privacy & Cookie Policy', note: 'Own page, own domain' },
      { href: '/terms', label: 'Terms', note: 'Own page, own domain' },
      { href: '/sitemap.xml', label: 'Sitemap', note: 'Every page, auto-generated' },
    ],
  },
];

export default function TourPage() {
  return (
    <main className="relative min-h-screen bg-bg">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-10 flex items-center justify-between">
          <Logo />
          <span className="rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
            Demo tour
          </span>
        </div>

        <SectionLabel label="Walkthrough" tone="brand" />
        <h1 className="mb-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
          The whole site, one screen.
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-muted">
          Every page on the new Health Fitness Academy site, in the order worth showing.
          Each link opens in a new tab so this list stays put.
        </p>

        {/* Guided demo — a floating card rides along the live site, one
            old-site-vs-now proof point per stop. Arrow keys work too. */}
        <div className="mb-12 rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-7">
          <p className="mb-1.5 font-heading text-lg font-semibold text-ink">
            Walkthrough mode
          </p>
          <p className="mb-5 max-w-lg text-sm leading-relaxed text-muted">
            A guided tour of the live site — 8 stops, each showing what the old site did and
            what this one does instead. Use the on-screen buttons or your arrow keys; press
            Esc to exit anytime.
          </p>
          <StartWalkthroughButton />
        </div>

        <div className="space-y-10">
          {GROUPS.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
                {group.title}
              </h2>
              <div className="overflow-hidden rounded-2xl border border-line bg-card">
                {group.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 border-b border-line px-5 py-4 transition-colors last:border-b-0 hover:bg-bg-secondary/60 sm:px-6"
                  >
                    <span className="flex min-w-0 flex-col">
                      <span className="font-heading text-base font-semibold text-ink">
                        {link.label}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">{link.note}</span>
                    </span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          Internal preview page — not linked from the site, not indexed by search engines.
        </p>
      </div>
    </main>
  );
}
