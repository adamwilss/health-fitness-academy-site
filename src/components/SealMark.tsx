/**
 * A large circular "seal" mark — the wax-seal motif drawn as an SVG with
 * ring text, used as a low-opacity decorative watermark to give sections
 * visual weight where photography would otherwise sit. Colour comes from
 * `currentColor`, so callers control tone and opacity with text utilities.
 * The `id` prop must be unique per page (SVG textPath references it).
 */
export default function SealMark({
  id,
  className = '',
  text = 'HEALTH FITNESS ACADEMY · PRESTWICH, MANCHESTER · BY WOMEN, FOR WOMEN ·',
}: {
  id: string;
  className?: string;
  text?: string;
}) {
  const pathId = `seal-ring-${id}`;
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden focusable="false">
      <defs>
        <path
          id={pathId}
          d="M 100,100 m -73,0 a 73,73 0 1,1 146,0 a 73,73 0 1,1 -146,0"
          fill="none"
        />
      </defs>
      <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="100"
        cy="100"
        r="55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <text
        fontSize="12.5"
        letterSpacing="2.5"
        fill="currentColor"
        fontFamily="var(--font-mono), ui-monospace, monospace"
      >
        <textPath href={`#${pathId}`}>{text}</textPath>
      </text>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontSize="36"
        fontStyle="italic"
        fill="currentColor"
        fontFamily="var(--font-serif), Georgia, serif"
      >
        HFA
      </text>
    </svg>
  );
}
