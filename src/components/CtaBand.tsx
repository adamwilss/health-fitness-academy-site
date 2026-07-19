export default function CtaBand({
  eyebrow,
  title,
  subtitle,
  primaryLabel = 'Book a Free Call',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  showGlitch,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showGlitch?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-dusk">
      {/* Glitch texture at low opacity for visual bite */}
      {showGlitch && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.03]"
          style={{ backgroundImage: 'url(/hfa-logo-glitch.jpg)' }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.12) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand">
          {eyebrow}
        </p>
        <h2 className="mb-5 text-balance font-serif text-[clamp(1.9rem,4.4vw,2.75rem)] italic leading-[1.15] text-mist">
          {title}
        </h2>
        <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-muted-dusk">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={primaryHref} className="btn btn-primary btn-lg w-full sm:w-auto">
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref && (
            <a href={secondaryHref} className="btn btn-ghost-dusk btn-lg w-full sm:w-auto">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
