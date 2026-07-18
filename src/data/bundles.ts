export interface Bundle {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  body: string[];
  includes: string[]; // course slugs
  cimspaPoints: number;
  hours: number;
  priceOnline: string;
  priceHybrid: string;
  bestFor: string;
}

export const bundles: Bundle[] = [
  {
    slug: 'foundational-fitness-bundle',
    title: 'Foundational Fitness Bundle',
    tagline: 'Gym floor to personal trainer, one enrolment.',
    summary:
      'Our most direct route from zero to fully qualified personal trainer — Level 2 Gym Instructor and Level 3 Personal Trainer, bundled with a continuous pathway and mentorship the whole way through.',
    body: [
      'This is the pathway most of our students take, and the one we recommend if your end goal is working with your own clients. You’ll qualify as a Level 2 Gym Instructor first — building the anatomy, screening and coaching foundations everything else rests on — then move directly into Level 3 Personal Trainer, where programme design, nutrition coaching and the business side of PT work come in.',
      'Buying the two qualifications as a bundle costs less than enrolling separately, and keeps you with the same cohort and the same mentorship from your very first induction to the day you’re qualified to train clients on your own.',
      'Choose fully online study, or a hybrid route with in-person practical days if you learn better with hands-on time in the room.',
    ],
    includes: ['level-2-gym-instructor', 'level-3-personal-trainer'],
    cimspaPoints: 14,
    hours: 578,
    priceOnline: '£1,200',
    priceHybrid: '£1,500',
    bestFor:
      'Students who know they want to end up personal training and want the most direct, best-value route there.',
  },
  {
    slug: 'womens-empowerment-bundle',
    title: 'Women’s Empowerment Bundle',
    tagline: 'Four qualifications, one community, built for women coaching women.',
    summary:
      'Our most complete pathway — Level 2 Gym Instructor, Level 2 Exercise to Music, Level 3 Personal Trainer, and Women’s Health & Fitness Coaching — for students who want to be able to serve women across every setting: gym floor, group class, and one-to-one.',
    body: [
      'This bundle exists because a lot of our students don’t want to choose between gym instructing, teaching group classes, and personal training — they want to be able to do all three, and to do them with a genuine specialism in women’s health and fitness.',
      'You’ll build the full foundation of Level 2 Gym Instructor and Level 3 Personal Trainer, add Level 2 Exercise to Music so you can lead group classes with real confidence, and finish with Women’s Health & Fitness Coaching — the specialism that reflects exactly what this Academy was built for.',
      'It’s the largest pathway we offer, priced accordingly, and it’s the one most of our students from faith communities choose, since it prepares you to build or lead a genuinely women-only offering from day one.',
    ],
    includes: ['level-2-gym-instructor', 'level-2-exercise-to-music', 'level-3-personal-trainer'],
    cimspaPoints: 24,
    hours: 735,
    priceOnline: '£1,500',
    priceHybrid: '£1,800',
    bestFor:
      'Students who want the widest possible qualification base, especially those planning to build a women-only or faith-conscious fitness offering.',
  },
];

export function getBundle(slug: string) {
  return bundles.find((b) => b.slug === slug);
}
