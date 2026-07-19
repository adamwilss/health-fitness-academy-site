import SectionLabel from './SectionLabel';

// Shared header for interior pages. Every call site gives its own eyebrow
// and subtitle — the live site's mistake of copy-pasting the same subtitle
// on every page is deliberately not repeated here.
// When `epic` is true, the header gets the hero-grid + gradient title
// treatment from the bundle pages.
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  epic,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  epic?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Ambient grid + glow for epic headers */}
      {epic && (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full animate-slow-pulse"
            style={{
              background:
                'radial-gradient(circle, rgb(var(--brand) / 0.12) 0%, transparent 62%)',
            }}
          />
        </>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.09) 0%, transparent 68%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
        <SectionLabel label={eyebrow} tone="brand" />
        <h1
          className={`max-w-3xl text-balance font-heading text-[clamp(2.1rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.015em] ${
            epic ? 'text-gradient-brand' : 'text-ink'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
