import type { Level } from '@/data/courses';

const STYLES: Record<Level, string> = {
  L2: 'border-brand/60 text-brand',
  L3: 'border-moss/60 text-moss',
  L4: 'border-dusk/50 text-dusk',
  CPD: 'border-ink/30 text-muted',
};

export default function LevelBadge({
  level,
  label,
  size = 'md',
}: {
  level: Level;
  label?: string;
  size?: 'sm' | 'md';
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono font-semibold uppercase tracking-[0.1em] ${STYLES[level]} ${
        size === 'sm' ? 'px-2.5 py-0.5 text-[0.65rem]' : 'px-3 py-1 text-xs'
      }`}
    >
      {label ?? level}
    </span>
  );
}
