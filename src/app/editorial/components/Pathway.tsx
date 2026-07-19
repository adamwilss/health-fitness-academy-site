import Link from 'next/link';

const pathways = [
  {
    code: 'L2',
    title: 'Level 2',
    body: 'Your starting point. No fitness background required.',
    href: '/courses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[34px] h-[34px]">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
      </svg>
    ),
  },
  {
    code: 'L3',
    title: 'Level 3',
    body: 'Specialise and step into personal training or Pilates.',
    href: '/courses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[34px] h-[34px]">
        <path d="M6.5 6.5h11" />
        <path d="M6.5 12h11" />
        <path d="M6.5 17.5h11" />
        <path d="M9.5 3v18" />
        <path d="M14.5 3v18" />
      </svg>
    ),
  },
  {
    code: 'CPD',
    title: 'CPD',
    body: 'Short specialist courses for instructors already qualified.',
    href: '/courses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[34px] h-[34px]">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function Pathway() {
  return (
    <section id="courses" className="bg-[#F9F7F2] pb-28 sm:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <span className="font-mono text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#C45A2E]">Your Pathway</span>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-[1.1] text-[#141618]">
              Levels are a real qualification sequence, not decoration.
            </h2>
            <p className="mt-4 text-[#4A4E54] text-[0.95rem] sm:text-base leading-relaxed max-w-[560px]">
              Every course sits at a genuine level, including Level 2, Level 3 or a CPD specialism for instructors already qualified. Start wherever fits your goals.
            </p>
          </div>
          <Link href="/how-it-works" className="btn-editorial btn-editorial-outline shrink-0">
            How It Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pathways.map((p) => (
            <div key={p.title} className="group relative bg-white border border-[#E0DCD5] rounded-md p-8 sm:p-10 shadow-[0_2px_6px_rgba(20,22,24,0.04),0_8px_24px_rgba(20,22,24,0.06)] overflow-hidden transition-all hover:shadow-[0_12px_48px_rgba(20,22,24,0.14)] hover:-translate-y-1 hover:border-[#D9D3C9]">
              <span className="absolute -right-2 top-0 font-serif text-[9rem] font-medium leading-none text-[#F2EEE6] select-none pointer-events-none">
                {p.code}
              </span>
              <div className="relative z-10 text-[#C45A2E] mb-5">{p.icon}</div>
              <h3 className="relative z-10 font-mono text-[0.62rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#C45A2E] mb-2">
                {p.title}
              </h3>
              <p className="relative z-10 text-[#4A4E54] text-[0.9rem] sm:text-[0.92rem] leading-relaxed mb-7 max-w-[260px]">
                {p.body}
              </p>
              <Link href={p.href} className="relative z-10 inline-flex items-center gap-2 font-mono text-[0.55rem] sm:text-[0.58rem] font-medium uppercase tracking-[0.1em] text-[#141618] border-b border-[#E0DCD5] pb-0.5 group-hover:border-[#C45A2E] transition-colors">
                Browse {p.title} courses
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
