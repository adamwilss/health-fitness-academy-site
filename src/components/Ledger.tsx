import SealBadge from './SealBadge';

export interface LedgerEntry {
  label: string;
  value: string;
}

/**
 * The signature "Ledger" element: a running vertical rule styled like a
 * training-log attendance ledger. Each accreditation stat renders as a
 * stamped mono entry; accrediting bodies get a small saffron wax-seal
 * badge below. Used on every course and bundle page.
 */
export default function Ledger({
  title = 'Course record',
  entries,
  accreditations,
}: {
  title?: string;
  entries: LedgerEntry[];
  accreditations: string[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      <p className="mb-6 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
        {title}
      </p>
      <div className="relative pl-6">
        <span aria-hidden className="ledger-rule absolute left-0 top-1 bottom-1" />
        <dl className="space-y-5">
          {entries.map((entry) => (
            <div key={entry.label} className="relative">
              <span
                aria-hidden
                className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-brand"
              />
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                {entry.label}
              </dt>
              <dd className="font-mono text-base font-medium text-ink sm:text-lg">{entry.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          Accredited by
        </p>
        <div className="flex flex-wrap gap-3">
          {accreditations.map((body, i) => (
            <SealBadge key={body} label={body} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
