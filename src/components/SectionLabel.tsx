// A restrained section eyebrow: a short orange hairline plus a
// letter-spaced caps label, in the mono "transcript" face.
export default function SectionLabel({
  label,
  tone = 'muted',
}: {
  label: string;
  tone?: 'muted' | 'brand' | 'dusk';
}) {
  const textTone =
    tone === 'brand' ? 'text-brand' : tone === 'dusk' ? 'text-muted-dusk' : 'text-muted';
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="orange-gradient h-0.5 w-8 shrink-0 rounded-full" />
      <p className={`font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] ${textTone}`}>
        {label}
      </p>
    </div>
  );
}
