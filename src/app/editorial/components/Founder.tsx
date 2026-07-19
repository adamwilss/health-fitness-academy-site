import Image from 'next/image';
import Link from 'next/link';

export default function Founder() {
  return (
    <section id="about" className="bg-[#F9F7F2] py-24 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="font-mono text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#C45A2E]">The Founder</span>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-[1.1] text-[#141618]">
              Sakina didn&apos;t come from fitness. That&apos;s exactly why this Academy <span className="text-[#C45A2E]">exists</span>.
            </h2>
            <p className="mt-5 text-[#4A4E54] text-[0.95rem] sm:text-base leading-relaxed max-w-[500px]">
              At 34, facing redundancy, medical obesity and her own mental health struggles while raising four children, Sakina found fitness by accident — and found it changed everything. She went on to qualify Level 2, 3 and 4 herself, ran women-only boot camps in her community, and eventually built the female-centred space she wished had existed when she started.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-7 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[#C45A2E] border-b border-[#C45A2E]/25 pb-0.5 hover:border-[#C45A2E] transition-colors">
              Read Sakina&apos;s full story
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-md overflow-hidden aspect-[4/5] shadow-[0_12px_48px_rgba(20,22,24,0.14)]">
              <Image
                src="/images/hfa-04-foam-roller.jpg"
                alt="Sakina Khan, founder of Health Fitness Academy, in the studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <blockquote className="lg:absolute lg:-left-9 lg:bottom-10 static mt-6 lg:mt-0 max-w-[340px] bg-[#22262A] rounded-md p-6 lg:p-7 shadow-[0_12px_48px_rgba(20,22,24,0.14)] border-l-2 border-[#C45A2E]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#C45A2E] mb-3">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-serif italic text-white/90 text-[0.92rem] leading-relaxed">
                &ldquo;Sakina was one of the reasons I went into the fitness industry. I attended her classes for a couple of years and loved her style and passion for fitness. Her support before, during and after has been second to none.&rdquo;
              </p>
              <footer className="mt-4 text-[0.7rem] text-white/55 leading-relaxed">
                <strong className="text-white/90 font-medium">Samantha S.</strong><br />
                Former student, now a working fitness professional
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
