import { ArrowRight } from 'lucide-react';
import type { Bundle } from '@/data/bundles';

export default function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <a
      href={`/bundles/${bundle.slug}`}
      className="group card-lift flex flex-col rounded-2xl border-2 border-brand/30 bg-card p-7 hover:border-brand sm:p-8"
    >
      <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand">
        Bundle
      </p>
      <h3 className="mb-3 font-heading text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {bundle.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {bundle.tagline}
      </p>

      <div className="mb-6 grid grid-cols-3 gap-3 border-y border-line py-4">
        <div>
          <p className="font-mono text-lg font-semibold text-ink">{bundle.cimspaPoints}</p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
            CIMSPA points
          </p>
        </div>
        <div>
          <p className="font-mono text-lg font-semibold text-ink">{bundle.hours}</p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
            Study hours
          </p>
        </div>
        <div>
          <p className="font-mono text-lg font-semibold text-ink">{bundle.priceOnline}</p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
            From, online
          </p>
        </div>
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View bundle
        <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
