export interface FaqItem {
  question: string;
  answer: string;
  /** True if this question is relevant to bundle pages. */
  bundleRelevant?: boolean;
}

export const faqs: FaqItem[] = [
  {
    question: 'Do I need a fitness background to enrol?',
    answer:
      'No. Our Level 2 Gym Instructor course has no prerequisites and is built for complete beginners — Sakina herself had no fitness background when she started. Most of our students join with more determination than experience, which is exactly the right starting point.',
    bundleRelevant: true,
  },
  {
    question: 'Are your qualifications recognised nationally?',
    answer:
      'Yes. Our courses are OFQUAL-regulated and accredited by CIMSPA, Active IQ (part of NCFE) and REPs / the Fitness Register — the recognised bodies UK gyms, studios and employers check for. These are real, portable qualifications, not an in-house certificate.',
    bundleRelevant: true,
  },
  {
    question: 'What\u2019s the difference between online, blended and in-person study?',
    answer:
      'Online means you study entirely at your own pace, with practical assessments arranged as needed. Blended combines online learning with in-person practical days for hands-on skills. In-person is available on select courses for students who prefer face-to-face teaching throughout. All routes lead to the same recognised qualification.',
    bundleRelevant: true,
  },
  {
    question: 'How long do courses take?',
    answer:
      'It depends on the course and route: Level 2 Gym Instructor can be completed in a one-week fast-track or at your own pace online; Exercise to Music typically takes 8\u201312 weeks; bundle pathways like the Foundational Fitness Bundle run to around 578 study hours across both qualifications. Every course page lists its typical duration.',
  },
  {
    question: 'Can I pay in instalments?',
    answer:
      'We know these are significant qualifications to invest in, especially while raising a family or between jobs \u2014 get in touch and we\u2019ll talk through what\u2019s possible for your course or bundle.',
    bundleRelevant: true,
  },
  {
    question: 'Is this only for Muslim women, or women from faith communities?',
    answer:
      'Health Fitness Academy is run exclusively by women, for women \u2014 and we place particular focus on making fitness qualifications accessible to women from faith communities, who\u2019ve historically faced real barriers entering this industry. But every course and bundle is open to any woman ready to learn, whatever your background.',
  },
  {
    question: 'What happens after I qualify?',
    answer:
      'You leave with a nationally recognised qualification and ongoing access to mentorship from our team \u2014 many of whom built their own careers the same way. Course pages list typical roles and salary ranges for each qualification, and our bundles are designed to take you further, faster, if you want to keep building.',
    bundleRelevant: true,
  },
  {
    question: 'Do you offer CPD for instructors who are already qualified?',
    answer:
      'Yes \u2014 Menopause Exercise Guidance, Commanding the Room, and Nutrition Through the Ages are all short CPD add-ons for instructors who already hold a Level 2 or Level 3 qualification and want to specialise further.',
  },
  {
    question: 'How do I choose between a single course and a bundle?',
    answer:
      'If you already know you want to reach personal trainer level, or want the widest possible qualification base, a bundle works out better value and keeps you on one continuous pathway. If\u2019re starting with a single specific goal \u2014 say, teaching Pilates \u2014 a single course may be all you need for now, and you can always add more later.',
    bundleRelevant: true,
  },
];
