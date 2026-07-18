import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy',
  description: `How ${SITE.legalName} collects, uses, and protects your personal data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Legal"
        title="Privacy & Cookie Policy"
        subtitle="How we collect, use, and protect your personal data — kept on our own site, not outsourced to a third party."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mb-8 text-sm text-muted">Last updated: 19 July 2026</p>

          <div className="space-y-10 text-[15px] leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">1. Who We Are</h2>
              <p className="mb-2">
                {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), company
                number {SITE.companyNumber}, is an OFQUAL-regulated online and hybrid fitness
                training academy based at {SITE.address}.
              </p>
              <p>
                For the purposes of the UK General Data Protection Regulation (UK GDPR) and the
                Data Protection Act 2018, {SITE.legalName} is the data controller of your personal
                data.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">2. What Data We Collect</h2>
              <p className="mb-3">
                When you use our website, contact us, or enrol on a course, we may collect:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Contact information</strong> — name, email address,
                  phone number, and any details submitted through our contact form, phone or
                  social media.
                </li>
                <li>
                  <strong className="text-ink">Enrolment and course data</strong> — course or
                  bundle interest, study preferences (online, blended or in-person), and
                  qualification progress once enrolled.
                </li>
                <li>
                  <strong className="text-ink">Usage data</strong> — anonymous analytics such as
                  pages visited and referral sources, where analytics tools are enabled.
                </li>
                <li>
                  <strong className="text-ink">Cookies</strong> — small text files that enable
                  core site functionality. See Section 6.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">3. How We Use Your Data</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To respond to enquiries and process course or bundle applications.</li>
                <li>To deliver course materials, assessments and mentorship once you&rsquo;ve enrolled.</li>
                <li>To process payments and manage our business relationship with you.</li>
                <li>To meet our obligations to our accrediting and regulatory bodies (OFQUAL, CIMSPA, Active IQ, REPs).</li>
                <li>To improve our website and course delivery.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">4. Legal Basis for Processing</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Consent</strong> — where you&rsquo;ve given clear
                  consent, e.g. marketing communications.
                </li>
                <li>
                  <strong className="text-ink">Contract</strong> — where processing is necessary to
                  deliver a course or bundle you&rsquo;ve enrolled on.
                </li>
                <li>
                  <strong className="text-ink">Legitimate interests</strong> — responding to
                  enquiries and improving our services, where this doesn&rsquo;t override your
                  rights.
                </li>
                <li>
                  <strong className="text-ink">Legal obligation</strong> — including reporting to
                  accrediting bodies where required.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">5. Data Sharing and Third Parties</h2>
              <p className="mb-3">We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Accrediting and regulatory bodies</strong> — OFQUAL,
                  CIMSPA, Active IQ (part of NCFE) and REPs, where required to issue or verify your
                  qualification.
                </li>
                <li>
                  <strong className="text-ink">Service providers</strong> — hosting, email and
                  payment providers who help us operate, all contractually bound to protect your
                  data.
                </li>
                <li>
                  <strong className="text-ink">Legal authorities</strong> — where required by law,
                  court order, or regulatory request.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">6. Cookies</h2>
              <p className="mb-3">Our website uses the following cookies:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Essential cookies</strong> — required for the
                  website to function. These cannot be turned off.
                </li>
                <li>
                  <strong className="text-ink">Analytics cookies</strong> — optional, only set with
                  your consent, and used to understand how visitors use the site.
                </li>
              </ul>
              <p className="mt-3">
                Manage your preference at any time using the cookie banner on our site, or by
                clearing cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">7. Data Retention</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Enquiry data</strong> — retained up to 12 months
                  after your last contact, unless you enrol.
                </li>
                <li>
                  <strong className="text-ink">Student and course records</strong> — retained for
                  the duration of your qualification plus as long as required by our accrediting
                  bodies for verification purposes.
                </li>
                <li>
                  <strong className="text-ink">Analytics data</strong> — anonymised after 26
                  months.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">8. Your Rights</h2>
              <p className="mb-3">Under UK data protection law, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-ink">Access</strong> a copy of the data we hold about you.</li>
                <li><strong className="text-ink">Rectification</strong> of inaccurate or incomplete data.</li>
                <li><strong className="text-ink">Erasure</strong> of your data, where applicable.</li>
                <li><strong className="text-ink">Restriction</strong> of how we process your data.</li>
                <li><strong className="text-ink">Object</strong> to processing based on legitimate interests.</li>
                <li><strong className="text-ink">Data portability</strong>, where technically feasible.</li>
              </ul>
              <p className="mt-3">
                Contact us using the details below to exercise any of these rights. We&rsquo;ll
                respond within one month.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">9. Data Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your data
                against unauthorised access, loss, misuse or alteration, including secure hosting
                and access controls. No method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">10. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on this page
                with an updated &ldquo;Last updated&rdquo; date.
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
                  <strong className="text-ink">Data Controller:</strong> {SITE.legalName}, {SITE.address}
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
