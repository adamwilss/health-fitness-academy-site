/**
 * Credential ticker — the ledger in motion. A slow conveyor of the
 * Academy's real credentials on charcoal, used as a live seam between
 * sections. Pauses entirely under prefers-reduced-motion.
 */
const DEFAULT_ITEMS = [
  'Est. Prestwich, Manchester',
  'OFQUAL regulated',
  '100% graduate success rate',
  '100% employment rate',
  'Women-only cohorts',
  'Courses from £300',
  'CIMSPA endorsed',
  'Active IQ — part of NCFE',
  'REPs accredited',
  'Flexible payment plans',
];

export default function Ticker({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-mist/10 bg-dusk py-3.5">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={`${half}-${item}`} className="flex items-center">
                <span
                  aria-hidden
                  className="mx-7 inline-block h-1.5 w-1.5 rounded-full bg-brand/70"
                />
                <span className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist/75">
                  {item}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
