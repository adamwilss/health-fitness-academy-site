import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="relative">
      <Nav />
      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-bg">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[clamp(14rem,38vw,30rem)] font-extrabold leading-none text-ink/[0.04]"
        >
          404
        </span>
        <div className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Page not found
          </p>
          <h1 className="mb-5 text-balance font-heading text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
            This page doesn&rsquo;t exist — but your qualification still can.
          </h1>
          <p className="mx-auto mb-9 max-w-lg text-lg leading-relaxed text-muted">
            The link that brought you here is broken. Every other link on this site goes
            exactly where it says it will.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/" className="btn btn-primary btn-lg w-full sm:w-auto">
              Back to Home
            </a>
            <a href="/courses" className="btn btn-ghost-ink btn-lg w-full sm:w-auto">
              Browse Courses
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
