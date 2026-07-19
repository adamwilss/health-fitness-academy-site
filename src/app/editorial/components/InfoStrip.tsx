export default function InfoStrip() {
  const items = [
    {
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      text: 'Prestwich, Manchester and online across the UK',
    },
    {
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
      text: 'Women only cohorts',
    },
    {
      icon: 'M3 4h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M16 2v4 M8 2v4 M3 10h18',
      text: 'Courses from £300',
    },
  ];

  return (
    <div className="bg-[#141618] border-t border-white/[0.08] py-4">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-6 text-[#F2EEE6]/70 text-[0.75rem] sm:text-[0.78rem] font-medium">
          {items.map((i) => (
            <div key={i.text} className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#C45A2E] shrink-0">
                {i.icon.split(' ').map((s, idx) => <path key={idx} d={s} />)}
              </svg>
              {i.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
