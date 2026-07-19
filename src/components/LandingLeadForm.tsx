'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, Lock } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

/** Landing-page goal → the interest label the enquiry email reports. */
const GOALS: { label: string; interest: string }[] = [
  { label: 'Become a personal trainer', interest: 'Foundational Fitness Bundle' },
  { label: 'Become a gym instructor', interest: 'Level 2 Gym Instructor' },
  { label: 'Teach group classes', interest: 'Level 2 Exercise to Music (ETM)' },
  { label: 'Teach Pilates', interest: 'Level 3 Mat Pilates' },
  { label: 'Not sure yet — help me choose', interest: 'Not sure yet — just enquiring' },
];

/**
 * Compact lead-capture form for the paid-traffic landing page. Posts to the
 * same /api/contact endpoint as the main contact form, with the message
 * auto-composed so every lead is tagged with its landing-page source.
 */
export default function LandingLeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const goalLabel = String(data.get('goal') || GOALS[0].label);
    const goal = GOALS.find((g) => g.label === goalLabel) ?? GOALS[0];

    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      interest: goal.interest,
      message: `New lead from the "Become a Personal Trainer" landing page.\nGoal: ${goalLabel}`,
      company: String(data.get('company') || ''), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-card p-10 text-center shadow-[0_24px_48px_-24px_rgba(36,27,27,0.45)]">
        <CheckCircle2 size={40} strokeWidth={1.5} className="mb-4 text-moss" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-ink">You&rsquo;re in</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          We&rsquo;ll call or email within one working day with course details, dates and payment
          plan options — no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-card p-6 shadow-[0_24px_48px_-24px_rgba(36,27,27,0.45)] sm:p-7"
    >
      <p className="mb-1 font-heading text-lg font-semibold text-ink">
        Get course details &amp; dates
      </p>
      <p className="mb-5 text-sm leading-relaxed text-muted">
        Full pricing, payment plans and your next start date — within one working day.
      </p>

      {/* Honeypot — hidden from real users, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="space-y-4">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input id="lead-name" name="name" type="text" required maxLength={120} className="field" />
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input id="lead-email" name="email" type="email" required maxLength={254} className="field" />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone <span className="text-muted">(for a quick call back)</span>
          </label>
          <input id="lead-phone" name="phone" type="tel" maxLength={40} className="field" />
        </div>
        <div>
          <label htmlFor="lead-goal" className="mb-1.5 block text-sm font-medium text-ink">
            What do you want to become?
          </label>
          <select id="lead-goal" name="goal" defaultValue={GOALS[0].label} className="field">
            {GOALS.map((g) => (
              <option key={g.label} value={g.label}>
                {g.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary btn-lg mt-5 w-full disabled:opacity-70"
      >
        {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
        {status === 'loading' ? 'Sending…' : 'Get My Course Details'}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <Lock size={12} strokeWidth={2} aria-hidden />
        No spam, no pressure — one call or email, then it&rsquo;s your decision.
      </p>
    </form>
  );
}
