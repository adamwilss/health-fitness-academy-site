'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { courses } from '@/data/courses';
import { bundles } from '@/data/bundles';

type Status = 'idle' | 'loading' | 'success' | 'error';

const INTEREST_OPTIONS = [
  'Not sure yet — just enquiring',
  ...bundles.map((b) => b.title),
  ...courses.map((c) => c.title),
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      interest: String(data.get('interest') || ''),
      message: String(data.get('message') || ''),
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
      <div className="flex flex-col items-center rounded-2xl border border-line bg-card p-10 text-center">
        <CheckCircle2 size={40} strokeWidth={1.5} className="mb-4 text-moss" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out — we&rsquo;ll come back to you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      {/* Honeypot — hidden from real users, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-ink">
            What are you interested in?
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={INTEREST_OPTIONS[0]}
            className="field"
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="Tell us a bit about where you're starting from and what you'd like to achieve."
          className="field"
        />
      </div>

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary btn-lg mt-6 w-full disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
