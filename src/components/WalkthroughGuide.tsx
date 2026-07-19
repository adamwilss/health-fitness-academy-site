'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, X, Check } from 'lucide-react';

const KEY = 'hfa-walkthrough';
const CARD_W = 400;

interface Step {
  href: string;
  /** CSS selector of the element this stop is talking about. */
  target: string;
  title: string;
  was: string;
  now: string[];
}

/* One stop per proof point — each pairs an old-site failure (from the
   audit) with what the rebuild does instead, anchored to the actual
   element on the page. */
const STEPS: Step[] = [
  {
    href: '/',
    target: '[data-tour="proof-ribbon"]',
    title: 'A homepage that sells the story',
    was: 'A Wix template with a broken “Course Bundles” button and a 2024 copyright.',
    now: [
      'Live credential ticker and this proof ribbon — 100% success, 100% employment',
      'Every button goes exactly where it says',
    ],
  },
  {
    href: '/pricing',
    target: '[data-tour="price-table"]',
    title: 'Every price, on the page',
    was: 'No pricing anywhere on the site — just a PDF brochure link.',
    now: [
      'Full fee tables for all 10 courses, straight from your brochure',
      'Bundle savings worked out to the pound — up to £1,297 off',
      'Payment plans and interest-free options, front and centre',
    ],
  },
  {
    href: '/courses',
    target: '[data-tour="course-grid"]',
    title: 'Courses you can actually browse',
    was: 'Six “Explore Courses” buttons all led back to the homepage.',
    now: [
      'Filter by level — L2, L3, CPD — with the price on every card',
      'Two bundle pathways presented side by side',
    ],
  },
  {
    href: '/courses/level-2-gym-instructor',
    target: '[data-tour="fees-card"]',
    title: 'The whole brochure, on the page',
    was: 'Course details lived in a PDF nobody opens on a phone.',
    now: [
      'Fees card with all three study routes',
      'Unit-by-unit syllabus, exact qualification awarded, career paths',
      'Google gets structured course + price data for rich results',
    ],
  },
  {
    href: '/bundles/womens-empowerment-bundle',
    target: '[data-tour="bundle-stats"]',
    title: 'Bundle pages built to convert',
    was: 'Bundles were a paragraph and a broken link.',
    now: [
      'Stats ribbon, included courses, FAQs, testimonial — a full sales page',
      '“Enquire” arrives with the bundle already selected in the form',
    ],
  },
  {
    href: '/become-a-personal-trainer',
    target: '#lead-form',
    title: 'A landing page ready for ads',
    was: 'Nowhere to send paid traffic — ads would land on the homepage.',
    now: [
      'Lead form above the fold, no menu to leak clicks away',
      'Every lead arrives tagged with its source and goal',
      'Sticky call/enquire bar on mobile',
    ],
  },
  {
    href: '/contact',
    target: '[data-tour="contact-form"]',
    title: 'Enquiries that reach your inbox',
    was: 'A basic Wix form, with legal pages pointing at Yell.com.',
    now: [
      'Form pre-selects whichever course or bundle they came from',
      'Own privacy policy and terms — no third-party legal pages',
    ],
  },
  {
    href: '/faq',
    target: '[data-tour="faq-list"]',
    title: 'The details, findable',
    was: 'The FAQ existed but was hidden — not in the navigation at all.',
    now: [
      'FAQ in the main nav, instalments answered with real payment-plan info',
      'Testimonials page with the right heading (old one said “Gym Instruction Courses”)',
    ],
  },
];

interface Anchor {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function WalkthroughGuide() {
  const router = useRouter();
  const pathname = usePathname();
  const [step, setStep] = useState<number | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Re-check on every route change (the guide mounts once in the layout,
  // before the start button has armed localStorage) and on the explicit
  // start event, so the card appears the moment the tour begins.
  useEffect(() => {
    function sync() {
      const raw = localStorage.getItem(KEY);
      if (raw === null) {
        setStep(null);
        return;
      }
      const n = parseInt(raw, 10);
      if (!Number.isNaN(n) && n >= 0 && n < STEPS.length) setStep(n);
    }
    sync();
    window.addEventListener(KEY, sync);
    return () => window.removeEventListener(KEY, sync);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Find this stop's element, walk it into view, and press the ring
  // around it. Elements can arrive late (route transition, scroll
  // reveals), so poll briefly and re-measure once things settle.
  useEffect(() => {
    if (step === null) return;
    const selector = STEPS[step].target;
    let cancelled = false;
    let tries = 0;

    const measure = () => {
      const el = document.querySelector(selector);
      if (!el || cancelled) return;
      const r = el.getBoundingClientRect();
      setAnchor({
        top: r.top + window.scrollY,
        left: r.left + window.scrollX,
        width: r.width,
        height: r.height,
      });
    };

    const locate = () => {
      if (cancelled) return;
      const el = document.querySelector(selector);
      if (!el) {
        if (++tries < 25) setTimeout(locate, 100);
        return;
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(measure, 650);
      setTimeout(measure, 1400); // once reveals/fonts have settled
    };

    setAnchor(null);
    // Give the destination page a beat to render before hunting.
    const kickoff = setTimeout(locate, 150);
    window.addEventListener('resize', measure);
    return () => {
      cancelled = true;
      clearTimeout(kickoff);
      window.removeEventListener('resize', measure);
    };
  }, [step, pathname]);

  const exit = useCallback(() => {
    localStorage.removeItem(KEY);
    setStep(null);
    setAnchor(null);
  }, []);

  const go = useCallback(
    (n: number) => {
      if (n < 0) return;
      if (n >= STEPS.length) {
        exit();
        router.push('/tour');
        return;
      }
      localStorage.setItem(KEY, String(n));
      setStep(n);
      setAnchor(null);
      router.push(STEPS[n].href);
    },
    [exit, router],
  );

  // Drive it with arrow keys on the call.
  useEffect(() => {
    if (step === null) return;
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (e.key === 'ArrowRight') go(step! + 1);
      if (e.key === 'ArrowLeft') go(step! - 1);
      if (e.key === 'Escape') exit();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, go, exit]);

  if (step === null) return null;
  const s = STEPS[step];
  const last = step === STEPS.length - 1;

  /* Card placement: docked just below the highlighted element, left edge
     aligned with it (clamped to the viewport). Falls back to bottom-right
     when the element hasn't been found; always a bottom sheet on mobile. */
  const docked = anchor !== null && !isMobile;
  const docW = typeof document !== 'undefined' ? document.documentElement.clientWidth : 1280;
  const cardLeft = docked ? Math.min(Math.max(anchor!.left, 16), docW - CARD_W - 16) : 0;
  const cardTop = docked ? anchor!.top + anchor!.height + 22 : 0;
  const RING_PAD = 10;

  const card = (
    <div
      ref={cardRef}
      className="overflow-hidden rounded-2xl border border-brand/30 bg-dusk shadow-[0_28px_60px_-20px_rgba(36,27,27,0.6)]"
    >
      {/* Progress */}
      <div className="h-1 w-full bg-mist/10">
        <div
          className="h-full bg-brand transition-[width] duration-300"
          style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand">
            Walkthrough &middot; {step + 1} of {STEPS.length}
          </p>
          <button
            type="button"
            onClick={exit}
            aria-label="Exit walkthrough"
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-dusk transition-colors hover:bg-mist/10 hover:text-mist"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        <h2 className="mb-3 font-heading text-lg font-semibold leading-snug text-mist">
          {s.title}
        </h2>

        <p className="mb-3 border-l-2 border-mist/15 pl-3 text-[0.8rem] leading-relaxed text-muted-dusk">
          <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
            Old site:&nbsp;
          </span>
          {s.was}
        </p>

        <ul className="mb-5 space-y-1.5">
          {s.now.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-mist">
              <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => go(step - 1)}
            disabled={step === 0}
            className="btn btn-ghost-dusk btn-sm disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Back
          </button>
          <button type="button" onClick={() => go(step + 1)} className="btn btn-primary btn-sm">
            {last ? 'Finish tour' : 'Next stop'}
            <ArrowRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Spotlight ring pressed around the element being talked about */}
      {anchor && (
        <div
          aria-hidden
          className="tour-ring"
          style={{
            top: anchor.top - RING_PAD,
            left: Math.max(anchor.left - RING_PAD, 4),
            width: Math.min(anchor.width + RING_PAD * 2, docW - 8),
            height: anchor.height + RING_PAD * 2,
          }}
        />
      )}

      {docked ? (
        <aside
          aria-label="Site walkthrough"
          className="rise-in absolute z-[70]"
          style={{ top: cardTop, left: cardLeft, width: CARD_W }}
        >
          {/* Caret pointing up at the highlighted element */}
          <span
            aria-hidden
            className="absolute -top-[7px] left-10 h-3.5 w-3.5 rotate-45 rounded-[3px] border-l border-t border-brand/30 bg-dusk"
          />
          {card}
        </aside>
      ) : (
        <aside
          aria-label="Site walkthrough"
          className="rise-in fixed inset-x-3 bottom-3 z-[70] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px]"
        >
          {card}
        </aside>
      )}
    </>
  );
}

/** Button that arms walkthrough mode and jumps to the first stop. */
export function StartWalkthroughButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.setItem(KEY, '0');
        window.dispatchEvent(new Event(KEY));
        router.push(STEPS[0].href);
      }}
      className="btn btn-primary btn-lg w-full sm:w-auto"
    >
      Start walkthrough mode
      <ArrowRight size={16} strokeWidth={2} />
    </button>
  );
}
