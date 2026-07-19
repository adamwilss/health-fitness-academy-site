import { Music2, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { SITE } from '@/data/site';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Our Commitment', href: '/our-commitment' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo dusk />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-dusk">
              An OFQUAL-regulated online and hybrid training academy, run exclusively by women,
              for women — based in Prestwich, Manchester.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Fitness Academy on Instagram"
                className="text-muted-dusk transition-colors hover:text-brand"
              >
                <InstagramIcon size={18} strokeWidth={1.75} />
              </a>
              <a
                href={SITE.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Fitness Academy on TikTok"
                className="text-muted-dusk transition-colors hover:text-brand"
              >
                <Music2 size={18} strokeWidth={1.75} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Fitness Academy on Facebook"
                className="text-muted-dusk transition-colors hover:text-brand"
              >
                <FacebookIcon size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="mb-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-dusk">
              Navigate
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-dusk transition-colors hover:text-mist"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="mb-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-dusk">
              Courses
            </p>
            <a href="/bundles/foundational-fitness-bundle" className="text-sm text-muted-dusk transition-colors hover:text-mist">
              Foundational Fitness Bundle
            </a>
            <a href="/bundles/womens-empowerment-bundle" className="text-sm text-muted-dusk transition-colors hover:text-mist">
              Women&rsquo;s Empowerment Bundle
            </a>
            <a href="/courses/level-2-gym-instructor" className="text-sm text-muted-dusk transition-colors hover:text-mist">
              Level 2 Gym Instructor
            </a>
            <a href="/courses/level-3-personal-trainer" className="text-sm text-muted-dusk transition-colors hover:text-mist">
              Level 3 Personal Trainer
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-dusk">
              Get In Touch
            </p>
            <a href={SITE.phoneHref} className="flex items-start gap-2 text-sm text-muted-dusk transition-colors hover:text-mist">
              <Phone size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-2 text-sm text-muted-dusk transition-colors hover:text-mist">
              <Mail size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand" />
              {SITE.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-muted-dusk">
              <MapPin size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand" />
              {SITE.address}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-mist/10 pt-6 text-xs text-muted-dusk sm:flex-row sm:items-center">
          <p>
            {SITE.legalName} &middot; Company No. {SITE.companyNumber}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy" className="transition-colors hover:text-mist">
              Privacy &amp; Cookie Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-mist">
              Terms
            </a>
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
