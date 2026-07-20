import type { Metadata } from 'next';
import Hero from './editorial/components/Hero';
import InfoStrip from './editorial/components/InfoStrip';
import Founder from './editorial/components/Founder';
import Stats from './editorial/components/Stats';
import Pathway from './editorial/components/Pathway';
import Community from './editorial/components/Community';
import FinalCta from './editorial/components/FinalCta';
import Footer from './editorial/components/Footer';

export const metadata: Metadata = {
  title: 'Health Fitness Academy — OFQUAL Regulated Fitness Qualifications for Women',
  description:
    'Health Fitness Academy trains women in Prestwich and online across the UK to become gym instructors, personal trainers, and Pilates and cycling instructors. OFQUAL-regulated, CIMSPA, Active IQ and REPs accredited.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <Founder />
      <Stats />
      <Pathway />
      <Community />
      <FinalCta />
      <Footer />
    </>
  );
}
