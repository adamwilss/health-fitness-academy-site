import Link from 'next/link';

export default function FinalCta() {
  return (
    <section id="contact" className="bg-[#F9F7F2] border-t border-[#E0DCD5] py-[72px] sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5 sm:gap-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 sm:w-11 sm:h-11 text-[#C45A2E] shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div>
              <h3 className="font-serif text-[1.4rem] sm:text-[1.55rem] font-medium leading-[1.25] text-[#141618]">
                Not sure where to start?
              </h3>
              <p className="mt-1 text-[#4A4E54] text-[0.92rem] sm:text-[0.95rem]">
                Book a free call and we will help you choose the best path for your goals.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-editorial btn-editorial-outline whitespace-nowrap">
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}
