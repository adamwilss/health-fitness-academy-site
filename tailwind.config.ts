import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme tokens — values come from CSS variables in globals.css.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        footer: 'rgb(var(--footer) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'brand-secondary': 'rgb(var(--brand-secondary) / <alpha-value>)',
        'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',
        dusk: 'rgb(var(--dusk) / <alpha-value>)',
        moss: 'rgb(var(--moss) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        'muted-dusk': 'rgb(var(--muted-dusk) / <alpha-value>)',
      },
      fontFamily: {
        // Karla carries body copy under the "sans" token (call-site
        // compatibility with font-sans throughout).
        sans: ['var(--font-karla)', 'system-ui', 'sans-serif'],
        // Bricolage Grotesque — structural register: course names, section
        // headers, nav, bundle titles.
        heading: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        // Instrument Serif — emotional/editorial register: hero headline,
        // founder story, pull-quotes.
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        // IBM Plex Mono — the "transcript" data register: stats, levels,
        // hours, CIMSPA points, prices, the Ledger.
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      transitionDuration: {
        250: '250ms',
      },
      boxShadow: {
        card: '0 1px 0 rgb(45 50 58 / 0.03), 0 10px 24px -18px rgb(45 50 58 / 0.22)',
        'card-hover': '0 2px 0 rgb(45 50 58 / 0.03), 0 26px 44px -26px rgb(45 50 58 / 0.28)',
        seal: '0 1px 0 rgb(45 50 58 / 0.06), 0 4px 12px -6px rgb(45 50 58 / 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
