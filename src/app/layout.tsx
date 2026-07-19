import type { Metadata } from 'next';
import { Instrument_Serif, Bricolage_Grotesque, Karla, IBM_Plex_Mono } from 'next/font/google';
import JsInit from '@/components/JsInit';
import CookieConsent from '@/components/CookieConsent';
import WalkthroughGuide from '@/components/WalkthroughGuide';
import { SITE } from '@/data/site';
import './globals.css';

// Four-typeface system, each carrying a distinct register (see brief):
// serif = emotional/editorial, grotesk = structural, body = plain body
// copy, mono = the "transcript" data register (stats, levels, CIMSPA
// points, prices — the Ledger).
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-grotesk',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.healthfitnessacademy.co.uk'),
  title: {
    default: 'Health Fitness Academy — OFQUAL-Regulated Fitness Qualifications for Women',
    template: '%s — Health Fitness Academy',
  },
  description:
    'An OFQUAL-regulated online and hybrid training academy qualifying women as gym instructors, personal trainers, and Pilates and cycling instructors. Based in Prestwich, Manchester.',
};

/* Site-wide structured data: LocalBusiness + WebSite, so search and AI
   surfaces can identify the business, location and contact details. */
const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: '+447947846008',
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '102 Scholes Lane',
      addressLocality: 'Prestwich, Manchester',
      postalCode: 'M25 0AU',
      addressCountry: 'GB',
    },
    sameAs: [SITE.social.instagram, SITE.social.tiktok],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${instrumentSerif.variable} ${bricolageGrotesque.variable} ${karla.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <JsInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        {children}
        <CookieConsent />
        <WalkthroughGuide />
      </body>
    </html>
  );
}
