import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and conditions for enrolling on courses and bundles with ${SITE.legalName}.`,
};

export default function TermsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The terms that apply when you enrol with us — written in plain English, hosted here rather than off-site."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mb-8 text-sm text-muted">Last updated: 19 July 2026</p>

          <div className="space-y-10 text-[15px] leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">1. About Us</h2>
              <p>
                These terms apply to any course, bundle or CPD enrolment with {SITE.legalName}{' '}
                (company number {SITE.companyNumber}), {SITE.address}. By enrolling on a course or
                bundle, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">2. Enrolment</h2>
              <p className="mb-3">
                Enrolment is confirmed once we&rsquo;ve received your completed application and
                payment (or an agreed payment plan). Some courses have prerequisites, listed on
                the relevant course page — it&rsquo;s your responsibility to confirm you meet them
                before enrolling, though we&rsquo;re always happy to check with you first.
              </p>
              <p>
                Courses are delivered online, blended, or in-person depending on the route you
                choose. Access details, timetables and assessment dates are provided after
                enrolment.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">3. Fees and Payment</h2>
              <p className="mb-3">
                Course and bundle fees are as stated at the time of enrolment. Where a payment
                plan is agreed, instalments must be paid on the dates set out in your enrolment
                agreement. We reserve the right to suspend access to course materials if payments
                fall significantly overdue, following reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">4. Cancellations and Refunds</h2>
              <p className="mb-3">
                If you enrol online or by phone (a distance sale), you have a 14-day cooling-off
                period under the Consumer Contracts Regulations, during which you can cancel for a
                full refund, provided you haven&rsquo;t already started accessing course materials
                or assessments. Once you&rsquo;ve started a course, refunds are considered on a
                case-by-case basis, reflecting the proportion of the course completed and any
                assessment fees already incurred with accrediting bodies.
              </p>
              <p>
                To cancel, contact us using the details on our{' '}
                <a href="/contact" className="text-brand underline">
                  Contact
                </a>{' '}
                page as soon as possible.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">5. Accreditation</h2>
              <p>
                Our courses are OFQUAL-regulated and accredited by CIMSPA, Active IQ (part of
                NCFE) and REPs / the Fitness Register. These are independent accrediting and
                regulatory bodies with their own rules on assessment, certification and appeals.
                We&rsquo;ll always be clear on our course pages about which body accredits which
                qualification, and we&rsquo;ll support you through their assessment requirements —
                but final certification decisions rest with the relevant accrediting body, not
                with us.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">6. Your Conduct</h2>
              <p>
                Health Fitness Academy is a women-only learning community, built to be a safe and
                respectful space for every student regardless of background or faith. We expect
                all students to treat instructors, assessors and fellow students with respect. We
                reserve the right to suspend or remove access to course materials in cases of
                serious misconduct.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">7. Intellectual Property</h2>
              <p>
                All course materials, videos, written content and assessment resources remain the
                intellectual property of {SITE.legalName} (or our accrediting partners, where
                applicable) and are provided for your personal study use only. They may not be
                copied, redistributed or resold.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">8. Liability</h2>
              <p>
                We take reasonable care to ensure our courses are delivered to a high standard, but
                we cannot guarantee specific employment or salary outcomes after qualification —
                the salary ranges shown on our course pages are typical industry figures, not a
                guarantee. Nothing in these terms limits our liability for death or personal
                injury caused by our negligence, or for fraud.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">9. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. Any changes will be posted on this
                page with an updated &ldquo;Last updated&rdquo; date. Material changes affecting
                current students will be communicated directly.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">10. Governing Law</h2>
              <p>
                These terms are governed by the law of England and Wales, and any disputes will be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">11. Contact Us</h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong className="text-ink">Email:</strong>{' '}
                  <a href={`mailto:${SITE.email}`} className="text-brand underline transition-colors hover:text-brand/80">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <strong className="text-ink">Phone:</strong>{' '}
                  <a href={SITE.phoneHref} className="text-brand underline transition-colors hover:text-brand/80">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <strong className="text-ink">Registered address:</strong> {SITE.address}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
