// A small "wax-seal" mark for accrediting bodies, part of the Ledger
// signature system. Each seal sits at a slight fixed rotation, like a
// physical stamp pressed slightly off true — deliberate, not randomised,
// so server and client always render the same markup.
const ROTATIONS = ['-4deg', '3deg', '-2deg', '5deg', '-3deg'];

export default function SealBadge({ label, index = 0 }: { label: string; index?: number }) {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  return (
    <span
      className="ledger-seal inline-flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-brand/70 bg-card text-center"
      style={{ transform: `rotate(${rotate})` }}
      title={label}
    >
      <span className="font-mono text-[0.5rem] font-bold uppercase leading-none tracking-tighter text-ink">
        {label.length > 8 ? label.slice(0, 7) : label}
      </span>
    </span>
  );
}
