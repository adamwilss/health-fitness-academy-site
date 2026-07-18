'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right';

const VARIANT_CLASS: Record<Variant, string> = {
  up: '',
  left: 'sr-left',
  right: 'sr-right',
};

/**
 * Settles a block into place once it scrolls into view (one-shot). Pairs
 * with the `.scroll-reveal` CSS in globals.css, which no-ops under
 * prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  as?: 'div' | 'li';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as 'div';

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${VARIANT_CLASS[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--sr-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
