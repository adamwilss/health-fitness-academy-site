export interface Bundle {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  body: string[];
  includes: string[]; // course slugs
  // Qualifications included in the bundle that aren't sold as standalone
  // courses (so have no course page of their own to link to).
  alsoIncludes?: string[];
  cimspaPoints: number;
  hours: number;
  priceOnline: string;
  priceHybrid: string;
  bestFor: string;
  /** Eyebrow text above the hero headline (e.g. "Most Popular Pathway"). */
  eyebrow: string;
  /** Short subtitle below the hero headline. */
  heroSubtitle: string;
  /** Three to five value propositions for the "Best for" block. */
  valueProps: string[];
}

export const bundles: Bundle[] = [
  {
    slug: 'foundational-fitness-bundle',
    title: 'Foundational Fitness Bundle',
    tagline: 'Gym floor to personal trainer, one enrolment.',
    summary:
      'Our most direct route from zero to fully qualified personal trainer — Level 2 Gym Instructor and Level 3 Personal Trainer, bundled with a continuous pathway and mentorship the whole way through.',
    body: [
      'This is the pathway most of our students take, and the one we recommend if your end goal is working with your own clients. You\u2019ll qualify as a Level 2 Gym Instructor first — building the anatomy, screening and coaching foundations everything else rests on — then move directly into Level 3 Personal Trainer, where programme design, nutrition coaching and the business side of PT work come in.',
      'Buying the two qualifications as a bundle costs less than enrolling separately, and keeps you with the same cohort and the same mentorship from your very first induction to the day you\u2019re qualified to train clients on your own.',
      'Choose fully online study, or a hybrid route with in-person practical days if you learn better with hands-on time in the room.',
    ],
    includes: ['level-2-gym-instructor', 'level-3-personal-trainer'],
    cimspaPoints: 14,
    hours: 578,
    priceOnline: '\u00a31,200',
    priceHybrid: '\u00a31,500',
    bestFor:
      'Students who know they want to end up personal training and want the most direct, best-value route there.',
    eyebrow: 'Most Popular Pathway',
    heroSubtitle:
      'Go from zero to fully qualified personal trainer \u2014 two nationally recognised qualifications, one continuous pathway, and mentorship that stays with you from induction to your first paying client.',
    valueProps: [
      'Two qualifications in one continuous pathway \u2014 no gap, no re-enrolment',
      'Same mentor and cohort from Level 2 through Level 3',
      'Online or hybrid \u2014 study around your life, not the other way round',
      'Better value than enrolling on each course separately',
    ],
  },
  {
    slug: 'womens-empowerment-bundle',
    title: 'Women\u2019s Empowerment Bundle',
    tagline: 'Four qualifications, one community, built for women coaching women.',
    summary:
      'Our most complete pathway \u2014 Level 2 Gym Instructor, Level 2 Exercise to Music, Level 3 Personal Trainer, and Women\u2019s Health & Fitness Coaching \u2014 for students who want to be able to serve women across every setting: gym floor, group class, and one-to-one.',
    body: [
      'This bundle exists because a lot of our students don\u2019t want to choose between gym instructing, teaching group classes, and personal training \u2014 they want to be able to do all three, and to do them with a genuine specialism in women\u2019s health and fitness.',
      'You\u2019ll build the full foundation of Level 2 Gym Instructor and Level 3 Personal Trainer, add Level 2 Exercise to Music so you can lead group classes with real confidence, and finish with Women\u2019s Health & Fitness Coaching \u2014 the specialism that reflects exactly what this Academy was built for.',
      'It\u2019s the largest pathway we offer, priced accordingly, and it\u2019s the one most of our students from faith communities choose, since it prepares you to build or lead a genuinely women-only offering from day one.',
    ],
    includes: ['level-2-gym-instructor', 'level-2-exercise-to-music', 'level-3-personal-trainer'],
    alsoIncludes: ['Women\u2019s Health & Fitness Coaching'],
    cimspaPoints: 24,
    hours: 735,
    priceOnline: '\u00a31,500',
    priceHybrid: '\u00a31,800',
    bestFor:
      'Students who want the widest possible qualification base, especially those planning to build a women-only or faith-conscious fitness offering.',
    eyebrow: 'Complete Pathway',
    heroSubtitle:
      'The widest qualification base we offer \u2014 four nationally recognised credentials that prepare you to coach women across the gym floor, group classes, and one-to-one, all in one continuous pathway.',
    valueProps: [
      'Four qualifications \u2014 gym floor, group classes, PT, and women\u2019s health specialism',
      'One community and one mentor through every stage',
      'Perfect for building a women-only or faith-conscious fitness offering',
      'Better value than enrolling on each course separately',
    ],
  },
];

export function getBundle(slug: string) {
  return bundles.find((b) => b.slug === slug);
}
