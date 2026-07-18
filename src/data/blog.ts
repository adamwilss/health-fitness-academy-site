export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  displayDate: string;
  author: string;
  readingTime: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'breaking-barriers-empowering-women-in-fitness',
    title: 'Breaking barriers: empowering women in fitness through inclusive training',
    excerpt:
      'Around 80% of Muslim women in the UK say they engage with fitness casually — but only 9% ever reach competitive level. Here’s why, and what an inclusive training space actually needs to look like.',
    date: '2025-11-21',
    displayDate: '21 November 2025',
    author: 'Health Fitness Academy',
    readingTime: '5 min read',
    body: [
      'Fitness is supposed to be for everyone. In practice, for a lot of women — particularly Muslim women and women from other faith communities — it very often isn’t, and the numbers make that hard to ignore. Around 80% of Muslim women in the UK say they engage with exercise casually, on their own terms, when and where they can. Only around 9% ever go on to reach a competitive level. That gap isn’t about ability, or interest. It’s about access.',
      'When we talk to the women who come through our courses, four barriers come up again and again. The first is religious and cultural: many women want to train in ways that respect modesty and faith practice, and a lot of mainstream gym environments simply aren’t built with that in mind. The second is the near-total absence of women-only facilities and classes in many areas — spaces where you don’t have to think twice about who’s in the room with you. The third is something as basic as modest athletic wear being genuinely hard to find, which sounds small until you realise it’s often the actual reason someone doesn’t sign up at all. And the fourth is harder to quantify but just as real: a quiet, reasonable fear of prejudice or being made to feel out of place.',
      'None of these are barriers to fitness itself. They’re barriers built by an industry that, historically, wasn’t designed with these women in mind. That’s the gap Health Fitness Academy exists to close — not by lecturing gyms about inclusivity from the outside, but by qualifying the women who’ll build inclusive spaces from the inside. Every instructor, PT and class leader we train goes on to make some corner of the fitness industry a little more accessible than they found it, because they’ve lived the barrier themselves.',
      'Sakina started this Academy after years of running women-only boot camps in her own community, watching women arrive nervous and leave transformed, over and over, simply because the room felt safe. That’s not a nice-to-have detail of how we teach. It’s the actual model: courses created by women, for women, taught by female assessors, in an environment built around the reality of who’s in the room — including, deliberately, women from faith communities the wider industry has too often overlooked.',
      'Closing an 80%-to-9% gap doesn’t happen through one campaign or one class. It happens qualification by qualification, instructor by instructor, women-only class by women-only class — which is exactly the slow, practical work this Academy was built to do.',
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
