import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Music2 } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import SealBadge from '@/components/SealBadge';
import StarRating from '@/components/StarRating';
import { InstagramIcon } from '@/components/SocialIcons';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Health Fitness Academy in Prestwich, Manchester - call, email, or send a message about any course or bundle.',
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Contact"
        title="Let’s get you started."
        subtitle="Send a message, call, or drop by our details below — we reply to every enquiry within one working day."
      />

      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <ContactForm />
            {/* Trust line below form */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
              <StarRating size={14} className="text-brand" />
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                OFQUAL-regulated &middot; CIMSPA &middot; Active IQ &middot; REPs
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-card p-7">
                <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Get in touch directly
                </p>
                <div className="space-y-4">
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-base text-ink transition-colors hover:text-brand"
                  >
                    <Phone size={18} strokeWidth={1.75} className="text-brand" />
                    {SITE.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-base text-ink transition-colors hover:text-brand"
                  >
                    <Mail size={18} strokeWidth={1.75} className="text-brand" />
                    {SITE.email}
                  </a>
                  <p className="flex items-start gap-3 text-base text-ink">
                    <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand" />
                    {SITE.address}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-line pt-6">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted transition-colors hover:text-brand"
                  >
                    <InstagramIcon size={19} strokeWidth={1.75} />
                  </a>
                  <a
                    href={SITE.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-muted transition-colors hover:text-brand"
                  >
                    <Music2 size={19} strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Health Fitness Academy location"
                  src="https://www.google.com/maps?q=102+Scholes+Lane,+Prestwich,+Manchester,+M25+0AU&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
