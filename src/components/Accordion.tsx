'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/faq';

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-heading text-base font-medium text-ink sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                strokeWidth={1.75}
                className={`shrink-0 text-brand transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:px-8 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
