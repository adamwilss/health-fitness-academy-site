import '../globals.css';

export const metadata = {
  title: 'Health Fitness Academy — OFQUAL Regulated Fitness Qualifications for Women',
  description:
    'Health Fitness Academy trains women in Prestwich and online across the UK to become gym instructors, personal trainers, and Pilates and cycling instructors.',
};

export default function EditorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="bg-[#F9F7F2]">
        {children}
      </body>
    </html>
  );
}
