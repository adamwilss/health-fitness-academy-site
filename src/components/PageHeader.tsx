import SectionLabel from './SectionLabel';

// Shared header for interior pages.
// epic=true: full grid + animated glow + gradient title (home / bundle pages only).
// Quiet mode: clean parchment background, confident type, single saffron rule via
// SectionLabel. No gradient, no grid, no glow — Coppard-benchmark restraint.
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
      {/* Ambient grid + glow — ONLY on epic headers (home / bundle pages). */}
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
      {/* Vertical rhythm: epic gets more top-breathing-room (nav + emphasis);
          quiet interior pages sit tighter — headline lands at attention, not
          horizon. pb tightened so section below steps up sooner. */}
      <div
        className={`relative mx-auto max-w-6xl px-5 sm:px-8 ${
          epic
            ? 'pb-12 pt-28 sm:pb-16 sm:pt-36'
            : 'pb-10 pt-24 sm:pb-14 sm:pt-32'
        }`}
      >
        <SectionLabel label={eyebrow} tone="brand" />
        <h1
          className={`max-w-3xl text-balance font-heading text-[clamp(1.875rem,4.5vw,2.875rem)] font-semibold leading-[1.1] tracking-[-0.015em] ${
            epic ? 'text-gradient-brand' : 'text-ink'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
