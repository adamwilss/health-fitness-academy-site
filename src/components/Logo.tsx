import Image from 'next/image';

/**
 * Real brand mark: orange-gradient wings icon + wordmark.
 * Wings icon from client-supplied logo assets.
 */
export default function Logo({ dusk = false }: { dusk?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/wings-icon.png"
        alt=""
        aria-hidden
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        priority
      />
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
