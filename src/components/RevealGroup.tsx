'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Watches one container and, when it scrolls into view, reveals every
 * `.scroll-reveal` descendant at once — each honouring its own `--sr-delay`,
 * so a row of items slides into place in sequence from a single observer.
 */
export default function RevealGroup({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
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
      { threshold: 0.1, rootMargin: '0px 0px -70px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-group ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
