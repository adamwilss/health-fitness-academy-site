export const SITE = {
  name: 'Health Fitness Academy',
  legalName: 'Health Fitness Academy Ltd',
  companyNumber: '15995358',
  founder: 'Sakina Khan',
  phone: '07947 846008',
  phoneHref: 'tel:+447947846008',
  email: 'info@healthfitnessacademy.co.uk',
  address: '102 Scholes Lane, Prestwich, Manchester, England, M25 0AU',
  addressShort: 'Prestwich, Manchester',
  domain: 'healthfitnessacademy.co.uk',
  url: 'https://www.healthfitnessacademy.co.uk',
  social: {
    instagram: 'https://www.instagram.com/healthfitnessacademy21',
    instagramHandle: '@healthfitnessacademy21',
    tiktok: 'https://www.tiktok.com/@healthfitnessacademy',
    tiktokHandle: '@healthfitnessacademy',
    // Exact Facebook profile URL to be confirmed with the client — this
    // search link is a working placeholder rather than a dead/guessed one.
    facebook: 'https://www.facebook.com/search/top?q=Sakina%20Khan%20Health%20Fitness%20Academy',
    facebookHandle: 'Sakina Khan',
  },
  accreditations: ['OFQUAL', 'CIMSPA', 'Active IQ', 'REPs'],
  values: [
    {
      name: 'Empowerment',
      description:
        'Every qualification is designed to leave you not just certified, but genuinely confident to use it.',
    },
    {
      name: 'Inclusivity',
      description:
        'A safe, welcoming space for women of every background — particularly those from faith communities who’ve found the wider fitness industry hard to enter.',
    },
    {
      name: 'Quality Education',
      description:
        'OFQUAL-regulated, CIMSPA-, Active IQ- and REPs-accredited qualifications, taught to a genuinely high standard, not a paper mill.',
    },
    {
      name: 'Community',
      description:
        'You train alongside other women, with ongoing mentorship that doesn’t stop the day you qualify.',
    },
    {
      name: 'Flexibility',
      description:
        'Online, blended or in-person — study around children, work and life, not the other way round.',
    },
  ],
} as const;
