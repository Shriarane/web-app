import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy – Fundlights
            </h1>
            <p className="text-muted-foreground">
              Last Updated: 24 January 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy is issued by Fundlights (“Fundlights”, “we”, “our”, “us”), accessible at https://fundlights.com.
                Fundlights is a financial wellness and employee benefits platform designed to educate and empower individuals and organizations without collecting or monetizing personal financial data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Our Privacy Commitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights is built on trust and confidentiality.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We do not store personal financial information.</li>
                <li>We do not sell, rent, or trade personal information.</li>
                <li>We do not share personal information with third parties.</li>
                <li>All data interactions are secured and purpose-limited.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights follows a strict data-minimization approach.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">a) Voluntarily Provided Information:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Only when users contact us or request a demo:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name</li>
                <li>Work email address</li>
                <li>Phone number</li>
                <li>Organization or employer name</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4 mt-6">
                Fundlights does not collect or store:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Bank or investment account details</li>
                <li>PAN, Aadhaar, or KYC information</li>
                <li>Salary details or financial identifiers</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">b) Automatically Collected Information:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For basic website functionality and analytics:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address</li>
                <li>Browser and device information</li>
                <li>Pages visited and session duration</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This data is anonymized and cannot identify individuals.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Information is used strictly to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Deliver financial wellness and employee benefit programs</li>
                <li>Respond to queries or demo requests</li>
                <li>Improve platform experience and content</li>
                <li>Meet regulatory or legal obligations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fundlights does not use data for advertising, profiling, or resale.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Employee Financial Wellness Programs</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For employer-sponsored programs:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>No individual employee financial data is stored</li>
                <li>All interactions are anonymized or session-based</li>
                <li>Employer reports contain only aggregated insights</li>
                <li>Individual employee data is never disclosed</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights applies industry-standard security controls including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Secure infrastructure</li>
                <li>Encryption in transit and at rest</li>
                <li>Access control and monitoring</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Minimal contact data is retained only when voluntarily provided</li>
                <li>Data is retained only for the required purpose</li>
                <li>Users may request deletion at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights does not share personal information with advertisers, data brokers, or third parties.
                Service providers operate under strict confidentiality agreements and do not access personal data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights complies with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Digital Personal Data Protection (DPDP) Act, 2023</li>
                <li>Applicable Indian IT and data security regulations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children’s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Services are intended for adults. Fundlights does not knowingly collect data from individuals under 18 years.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundlights is not responsible for privacy practices of third-party websites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                This policy may be updated periodically. Changes will be published on this page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Fundlights</strong>
                <br />
                <strong className="text-foreground">Email:</strong> support@fundlights.com
                <br />
                <strong className="text-foreground">Website:</strong> https://fundlights.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
