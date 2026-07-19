import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stories and insight from Health Fitness Academy on inclusive fitness training, women\u2019s access to the industry, and qualifying as an instructor.',
};

export default function BlogIndexPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Blog"
        title="Stories from the Academy"
        subtitle="We publish when we have something worth saying, not on a schedule — here’s everything so far."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group card-lift block rounded-2xl border border-line bg-card p-7 hover:border-brand/50 sm:p-9"
                >
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {post.displayDate} &middot; {post.readingTime}
                  </p>
                  <h2 className="mb-3 font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mb-5 text-base leading-relaxed text-muted sm:text-lg">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Read the article
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10">
            <p className="text-center text-sm leading-relaxed text-muted">
              More stories coming soon — this is just the first.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
