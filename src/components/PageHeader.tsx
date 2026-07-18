import SectionLabel from './SectionLabel';

// Shared header for interior pages. Every call site gives its own eyebrow
// and subtitle — the live site's mistake of copy-pasting the same subtitle
// on every page is deliberately not repeated here.
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.09) 0%, transparent 68%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
        <SectionLabel label={eyebrow} tone="brand" />
        <h1 className="max-w-3xl text-balance font-heading text-[clamp(2.1rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
