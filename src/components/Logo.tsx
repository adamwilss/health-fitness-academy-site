// No brand artwork exists yet for this client, so the mark is built from
// the design system itself rather than a placeholder image: a small
// saffron "seal" (the same wax-seal motif used on the Ledger) plus a
// two-line grotesk wordmark. Swap the seal for real artwork later if the
// client commissions one.
export default function Logo({ dusk = false }: { dusk?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-serif text-base italic text-on-brand"
        style={{ boxShadow: '0 1px 0 rgb(0 0 0 / 0.08), 0 6px 14px -8px rgb(0 0 0 / 0.4)' }}
      >
        H
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-heading text-[0.95rem] font-semibold tracking-[-0.01em] ${
            dusk ? 'text-mist' : 'text-ink'
          }`}
        >
          Health Fitness
        </span>
        <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand">
          Academy
        </span>
      </span>
    </span>
  );
}
