export default function Stats() {
  const stats = [
    { value: '100', suffix: '%', label: 'Graduate success rate' },
    { value: '100', suffix: '%', label: 'Employment rate' },
    { value: '20', suffix: '+', label: 'Years in the industry' },
    { value: '£300', suffix: '+', label: 'Courses from just £300' },
  ];

  return (
    <section className="bg-[#F9F7F2] pb-24 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#141618] rounded-md shadow-[0_12px_48px_rgba(20,22,24,0.14)] px-6 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-[72px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-medium text-[#C45A2E] leading-none mb-2">
                  {s.value}
                  <span className="text-[0.55em] text-[#96977A] ml-0.5">{s.suffix}</span>
                </div>
                <div className="font-mono text-[0.55rem] sm:text-[0.58rem] font-medium uppercase tracking-[0.14em] text-white/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
