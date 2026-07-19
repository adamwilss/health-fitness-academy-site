import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { blogPosts, getPost } from '@/data/blog';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow={`${post.displayDate} · ${post.readingTime}`}
        title={post.title}
        subtitle={post.excerpt}
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              By {post.author}
            </p>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg drop-cap">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-7 sm:p-8">
              <h3 className="mb-2 font-heading text-lg font-semibold text-ink">
                Ready to take the next step?
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                Our courses qualify you to build the inclusive fitness spaces this industry is still
                short of. Find the course or bundle that fits your goals.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="/courses" className="btn btn-primary btn-md">
                  Explore Courses
                </a>
                <a href="/contact" className="btn btn-ghost-ink btn-md">
                  Book a Free Call
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <a href="/blog" className="text-sm font-semibold text-brand">
              &larr; Back to all stories
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Be part of the change"
        title="Train to be the safe space you needed."
        subtitle="Our courses qualify you to build the inclusive fitness spaces this industry is still short of."
        secondaryLabel="Explore Courses"
        secondaryHref="/courses"
        showGlitch
      />

      <Footer />
    </main>
  );
}
