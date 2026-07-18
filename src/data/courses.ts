export type Level = 'L2' | 'L3' | 'L4' | 'CPD';

export interface Course {
  slug: string;
  level: Level;
  levelLabel: string;
  title: string;
  tagline: string;
  summary: string;
  body: string[];
  whoFor: string;
  format: string[];
  duration: string;
  salary?: string;
  prerequisite: string | null;
  learn: string[];
  accreditations: string[];
  bundleSlug?: string;
  cpd?: boolean;
}

export const courses: Course[] = [
  {
    slug: 'level-2-gym-instructor',
    level: 'L2',
    levelLabel: 'Level 2',
    title: 'Level 2 Gym Instructor',
    tagline: 'The first stamp in the ledger — no fitness background required.',
    summary:
      'A foundational, nationally recognised qualification that gets you into a gym floor, running inductions and programmes with confidence, in as little as a week.',
    body: [
      'This is where almost every one of our instructors started, including Sakina. There’s no prerequisite and no assumed fitness background — just a willingness to learn the anatomy, programming and coaching skills that turn you into someone a nervous new gym member trusts.',
      'You’ll learn how to plan and deliver safe, effective gym-based exercise programmes, take a client through induction, and understand the basics of anatomy, physiology and screening. Assessment is practical as well as written, because the job is practical.',
      'Study online and at your own pace, or take the one-week fast-track if you want to be qualified and working within days. Either way, you’re taught and assessed by women, in a cohort of women, from day one.',
    ],
    whoFor:
      'Anyone starting from zero — a career change, a return to work, or simply someone who’s spent years helping others train informally and wants the paper to prove it.',
    format: ['Online', 'Blended', '1-week fast-track'],
    duration: '1 week (fast-track) or self-paced online/blended',
    salary: '£24,000 – £28,000 as a gym instructor or class leader',
    prerequisite: null,
    learn: [
      'Anatomy and physiology for exercise',
      'Client screening, induction and programme design',
      'Health and safety and professional responsibilities in a gym environment',
      'Coaching cues and correcting technique with confidence',
      'How to progress straight into Level 3 Personal Training',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ'],
    bundleSlug: 'foundational-fitness-bundle',
  },
  {
    slug: 'level-3-personal-trainer',
    level: 'L3',
    levelLabel: 'Level 3',
    title: 'Level 3 Personal Trainer',
    tagline: 'From instructing a room to building a client roster of your own.',
    summary:
      'Builds on your Level 2 foundation with the anatomy, nutrition and business skills you need to train clients one-to-one and, if you want it, start building your own PT business.',
    body: [
      'Where Level 2 teaches you to run a safe session, Level 3 teaches you to build a career. You’ll go deeper into applied anatomy and physiology, learn to design programmes for specific goals — fat loss, strength, rehab, performance — and get a grounding in nutrition coaching and the fundamentals of running a PT business.',
      'This is the qualification most of our graduates use to go self-employed, whether that’s freelancing inside a gym, running outdoor sessions, or building an online coaching client base.',
      'Choose online, blended, or fully in-person delivery depending on how you learn best — all routes lead to the same recognised outcome, taught by female assessors who’ve built these careers themselves.',
    ],
    whoFor:
      'Level 2 graduates ready to specialise in one-to-one coaching, or anyone who wants the full instructor-to-PT pathway in one place via the Foundational Fitness Bundle.',
    format: ['Online', 'Blended', 'In-person'],
    duration: 'Self-paced, typically completed alongside Level 2 in the bundle pathway',
    salary: '£35,000 – £50,000 as a personal trainer',
    prerequisite: 'Level 2 Gym Instructor (or equivalent)',
    learn: [
      'Applied anatomy, physiology and exercise science',
      'Programme design for individual client goals',
      'Nutrition coaching fundamentals',
      'Client consultation, retention and business basics',
      'Building and marketing a personal training practice',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ', 'REPs'],
    bundleSlug: 'foundational-fitness-bundle',
  },
  {
    slug: 'level-3-diploma-gym-instructing-personal-training',
    level: 'L3',
    levelLabel: 'Level 2 & 3',
    title: 'Level 3 Diploma in Gym Instructing & Personal Training',
    tagline: 'Level 2 and Level 3, combined into a single diploma pathway.',
    summary:
      'The full instructor-to-PT qualification delivered as one continuous diploma, for students who know from day one they want to end up as a personal trainer.',
    body: [
      'If you’re confident you want to reach Level 3 eventually, this diploma covers the same ground as our separate Level 2 and Level 3 courses but structured as one continuous programme, so you move from gym floor fundamentals straight into personal training without a gap between qualifications.',
      'You’ll still sit the same recognised assessments at each level — this is a delivery structure, not a shortcut — but many students find the combined pathway easier to plan around than two separate enrolments.',
      'Delivered online, blended or in-person, with the same female assessors and mentorship you’d get on any of our courses.',
    ],
    whoFor:
      'Students who already know they want to become a personal trainer and would rather commit to one combined pathway than enrol separately.',
    format: ['Online', 'Blended', 'In-person'],
    duration: 'Self-paced, structured as a continuous Level 2 to Level 3 pathway',
    salary: '£35,000 – £50,000 as a personal trainer',
    prerequisite: null,
    learn: [
      'Everything covered in Level 2 Gym Instructor',
      'Everything covered in Level 3 Personal Trainer',
      'A single assessment plan spanning both levels',
      'Continuity of mentorship from induction through to qualifying as a PT',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ', 'REPs'],
  },
  {
    slug: 'level-2-exercise-to-music',
    level: 'L2',
    levelLabel: 'Level 2',
    title: 'Level 2 Exercise to Music (ETM)',
    tagline: 'Lead a room, not just a rep.',
    summary:
      'The qualification behind every great group fitness class — choreography, cueing and the energy to hold a whole studio with you, not just watching you.',
    body: [
      'Exercise to Music is a different skill from one-to-one training: you’re reading a room of twenty people at once, cueing the next move before they need it, and keeping energy up for a full class. This course teaches the choreography, music timing, and group-management skills that make that look effortless.',
      'Over 8–12 weeks online, you’ll build a bank of class formats and routines you can teach from your first week qualified, whether that’s at a gym, a community hall, or your own women-only class.',
      'Many of our students take this alongside Level 2 Gym Instructor as part of the Women’s Empowerment Bundle, since group fitness and gym floor work complement each other well.',
    ],
    whoFor:
      'Anyone who wants to teach group classes — dance-fitness, aerobics, circuits — rather than, or alongside, one-to-one PT work.',
    format: ['Online', '8–12 weeks'],
    duration: '8–12 weeks',
    salary: '£21,000 – £28,000 as a group exercise instructor',
    prerequisite: null,
    learn: [
      'Choreography and class structuring',
      'Cueing, timing and reading a group',
      'Music selection and phrasing for exercise',
      'Adapting classes for mixed-ability groups',
      'Running a safe, inclusive group fitness environment',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ'],
    bundleSlug: 'womens-empowerment-bundle',
  },
  {
    slug: 'level-2-studio-cycling',
    level: 'L2',
    levelLabel: 'Level 2',
    title: 'Level 2 Studio Cycling',
    tagline: 'Turn a dark room and a bike into forty minutes people come back for.',
    summary:
      'A focused qualification in indoor cycling instruction — bike setup, safe resistance progression, and the pacing and playlist instincts that make a spin class land.',
    body: [
      'Studio cycling is one of the most requested group formats in UK gyms, and one of the hardest to teach badly and get away with — bad bike setup and poor pacing show up fast in a room on bikes. This course covers correct bike setup and safety checks, structuring a class around resistance and cadence changes, and building the instructor presence a dark, loud room needs.',
      'Study online or blended with practical bike time, and come out able to run a class that’s genuinely enjoyable rather than just hard.',
    ],
    whoFor:
      'Instructors who want a specialism that’s always in demand at gyms and studios, or who want to add cycling to an existing group-fitness offer.',
    format: ['Online', 'Blended'],
    duration: 'Self-paced online, or blended with practical studio sessions',
    prerequisite: null,
    learn: [
      'Bike setup, safety checks and injury prevention',
      'Structuring resistance and cadence through a class',
      'Music pacing and class energy management',
      'Coaching cues specific to indoor cycling',
    ],
    accreditations: ['OFQUAL', 'CIMSPA'],
  },
  {
    slug: 'level-3-mat-pilates',
    level: 'L3',
    levelLabel: 'Level 3',
    title: 'Level 3 Mat Pilates',
    tagline: 'Precision coaching, not just counting reps.',
    summary:
      'A qualification in mat-based Pilates instruction — anatomy, cueing and programme design for a discipline that rewards precision over volume.',
    body: [
      'Pilates instructing is as much about language as movement — the right cue at the right moment changes how a client feels an exercise. This course covers the anatomy underpinning core and postural control, how to sequence a class that builds logically, and how to cue for genuine quality of movement rather than just counting reps.',
      'You’ll also cover adapting programmes across ability levels and common physical presentations, so you can teach a mixed class confidently from your first week.',
      'Study online or blended, and progress naturally into Reformer Pilates once you’re qualified.',
    ],
    whoFor:
      'Instructors drawn to a slower, more precise coaching style, or anyone wanting to add Pilates to an existing PT or group-fitness offer.',
    format: ['Online', 'Blended'],
    duration: 'Self-paced online or blended',
    salary: '£24,000 – £40,000 as a Pilates instructor',
    prerequisite: null,
    learn: [
      'Anatomy of core and postural control',
      'Mat Pilates sequencing and class programming',
      'Precision cueing and movement correction',
      'Adapting classes across ability levels',
      'The pathway into Reformer Pilates',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ'],
  },
  {
    slug: 'level-3-reformer-pilates',
    level: 'L3',
    levelLabel: 'Level 3',
    title: 'Level 3 Reformer Pilates',
    tagline: 'The equipment specialism studios are actively hiring for.',
    summary:
      'A Reformer-equipment specialism for already-qualified mat Pilates instructors, in one of the highest-demand corners of the Pilates studio world.',
    body: [
      'Reformer studios have grown fast across the UK, and qualified Reformer instructors are consistently in demand — this is one of our most requested specialisms for exactly that reason. You’ll learn to set up and adjust the Reformer safely for different bodies and goals, sequence a full-machine class, and spot and correct technique on equipment that behaves very differently from a mat.',
      'Because Reformer work builds directly on mat fundamentals, this course requires your Level 2 as a prerequisite, so class time can focus entirely on the equipment specialism rather than re-teaching the basics.',
    ],
    whoFor:
      'Level 2-qualified instructors ready to specialise in one of the best-paid, most in-demand studio disciplines.',
    format: ['Online', 'Blended'],
    duration: 'Self-paced online or blended',
    salary: '£30,000 – £50,000 as a Reformer Pilates instructor',
    prerequisite: 'Level 2 (gym instructing or mat Pilates)',
    learn: [
      'Reformer setup, spring loading and safety checks',
      'Sequencing a full Reformer class',
      'Technique correction on equipment',
      'Adapting Reformer work for injury and rehab clients',
    ],
    accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ'],
  },
  {
    slug: 'menopause-exercise-guidance',
    level: 'CPD',
    levelLabel: 'CPD',
    title: 'Menopause Exercise Guidance',
    tagline: 'A specialism your existing clients are already asking you for.',
    summary:
      'A CPD add-on for already-qualified instructors, covering tailored exercise and nutrition guidance for women navigating perimenopause and menopause.',
    body: [
      'This is one of the most requested topics from our own students’ clients, and one of the least well covered in general fitness training. This short CPD course fills that gap — how hormonal changes affect strength, recovery, bone density and body composition, and how to adapt programming and nutrition guidance accordingly.',
      'It sits alongside your existing Level 2 or Level 3 qualification as an added specialism, not a replacement for it, and is a genuinely differentiating credential to offer clients.',
    ],
    whoFor:
      'Already-qualified Level 2 or Level 3 instructors who want to serve menopausal and perimenopausal clients with real confidence.',
    format: ['Online CPD'],
    duration: 'Short CPD course',
    prerequisite: 'Existing Level 2 or Level 3 qualification',
    learn: [
      'How perimenopause and menopause affect training response',
      'Adapting strength, cardio and recovery programming',
      'Nutrition considerations across the menopause transition',
      'Having informed, sensitive conversations with clients',
    ],
    accreditations: ['CIMSPA'],
    cpd: true,
  },
  {
    slug: 'commanding-the-room',
    level: 'CPD',
    levelLabel: 'CPD',
    title: 'Commanding the Room',
    tagline: 'The skill nobody’s syllabus teaches, and every good instructor needs.',
    summary:
      'A CPD short course in instructor presence — confidence, projection, and the group-engagement skills that turn technically correct coaching into genuinely great coaching.',
    body: [
      'You can know every cue in the book and still struggle to hold a room’s attention. This course is entirely about that gap — building the vocal presence, body language and engagement instincts that make people want to keep coming back to your class specifically.',
      'It’s built from Sakina’s own experience running community boot camps long before the Academy existed, when presence and trust were the whole job.',
    ],
    whoFor:
      'Any qualified instructor who wants to grow their confidence in front of a class or client, especially those newer to teaching.',
    format: ['Online CPD'],
    duration: 'Short CPD course',
    prerequisite: 'Existing fitness qualification recommended',
    learn: [
      'Vocal projection and pacing for group settings',
      'Reading energy and adjusting on the fly',
      'Building authentic instructor confidence',
      'Handling nerves, difficult moments and mixed-ability rooms',
    ],
    accreditations: ['CIMSPA'],
    cpd: true,
  },
  {
    slug: 'nutrition-through-the-ages',
    level: 'CPD',
    levelLabel: 'CPD',
    title: 'Nutrition Through the Ages',
    tagline: 'One client, four decades of different nutritional needs.',
    summary:
      'A CPD course covering how nutritional needs change across a lifetime, including Mediterranean diet principles and age-specific guidance for a genuinely mixed client base.',
    body: [
      'A 22-year-old client and a 55-year-old client need different things from you, nutritionally, even with identical goals. This course covers how nutritional needs shift across the lifespan, with a close look at Mediterranean diet principles and evidence-based, age-specific guidance you can bring into client conversations with confidence.',
      'It’s designed to sit alongside your Level 2 or Level 3 qualification as a practical, immediately usable specialism.',
    ],
    whoFor:
      'Already-qualified instructors and PTs who want a stronger, more nuanced nutrition offer for clients of every age.',
    format: ['Online CPD'],
    duration: 'Short CPD course',
    prerequisite: 'Existing Level 2 or Level 3 qualification recommended',
    learn: [
      'How nutritional needs change from young adulthood through later life',
      'Mediterranean diet principles in practice',
      'Age-specific dietary considerations for common client goals',
      'Bringing nutrition guidance into PT and coaching conversations responsibly',
    ],
    accreditations: ['CIMSPA'],
    cpd: true,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
