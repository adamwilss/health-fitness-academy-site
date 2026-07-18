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
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-14">
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
      />

      <Footer />
    </main>
  );
}
