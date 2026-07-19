import Image from 'next/image';
import Link from 'next/link';

const checks = [
  'Women only learning environments',
  'Supportive tutors and mentors',
  'Career guidance and job support',
  'Ongoing community after qualification',
];

export default function Community() {
  return (
    <section id="why" className="bg-[#141618]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="/images/hfa-02-pt-coaching.jpg"
            alt="Women training with dumbbells in a supportive studio session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          <span className="font-mono text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#F2EEE6]/70">More Than Training</span>
          <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-[1.1] text-white max-w-[420px]">
            It&apos;s a community.
          </h2>
          <p className="mt-5 text-white/66 text-[0.95rem] sm:text-base leading-relaxed max-w-[430px]">
            Students join a network of women who support each other through study, placements and the early years of their careers. The relationships built here last long after the certificate is framed.
          </p>
          <ul className="mt-8 flex flex-col gap-3.5">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3 text-white/82 text-[0.92rem] sm:text-[0.94rem]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#C45A2E] shrink-0 mt-[3px]">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-editorial btn-editorial-orange self-start mt-10">
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
}
