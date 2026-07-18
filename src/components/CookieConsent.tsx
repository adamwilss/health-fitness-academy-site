'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hfa-cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hfa-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('hfa-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-line bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          We use cookies to improve your experience on our website. By continuing to browse, you
          agree to our use of cookies.{' '}
          <a href="/privacy-policy" className="underline transition-colors hover:text-ink">
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleDecline}
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-brand/40 hover:text-ink"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-on-brand transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
