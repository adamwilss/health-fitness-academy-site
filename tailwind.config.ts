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
    },
  },
  plugins: [],
};

export default config;
