import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 24, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Fundlights. These Terms of Service (“Terms”) govern your access to and use of the website https://fundlights.com and all related services, content, and offerings provided by Fundlights (“Fundlights”, “we”, “our”, “us”).
                By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use Fundlights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. About Fundlights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights is a financial wellness and employee benefits enablement platform focused on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Financial education and awareness</li>
                <li>Workplace financial wellness programs</li>
                <li>Decision-support tools (non-transactional)</li>
                <li>Employee engagement around financial well-being</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                🚫 Fundlights does not provide product distribution, transaction execution, or personalized investment advice unless explicitly stated under a separate written agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility to Use Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You may use Fundlights only if:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You are 18 years of age or older</li>
                <li>You are legally capable of entering into binding agreements</li>
                <li>You use the platform for lawful purposes only</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using Fundlights, you confirm that you meet these requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Nature of Services (Important Disclaimer)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Fundlights provides:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Educational content</li>
                <li>Financial literacy programs</li>
                <li>General guidance and frameworks</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 mt-6">Fundlights does not:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Execute financial transactions</li>
                <li>Store personal financial data</li>
                <li>Act as a broker, distributor, or custodian</li>
                <li>Guarantee financial outcomes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                📌 Any financial decisions taken based on Fundlights content are made solely at the user’s discretion and responsibility.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. No Personal Data Storage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights is designed with a privacy-by-design architecture:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We do not store personal financial information</li>
                <li>We do not sell or share user data</li>
                <li>Employee interactions are anonymized and session-based</li>
                <li>Employer reports are aggregated only</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Use of the platform does not create any fiduciary obligation unless contractually agreed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">By using Fundlights, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate information when voluntarily submitted</li>
                <li>Use the platform ethically and lawfully</li>
                <li>Not misuse content, tools, or intellectual property</li>
                <li>Not attempt unauthorized access, data extraction, or system disruption</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Any misuse may result in suspension or termination of access.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on Fundlights, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Text, graphics, logos</li>
                <li>Tools, frameworks, and methodologies</li>
                <li>Brand name and trademarks</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                are the exclusive property of Fundlights and are protected by applicable intellectual property laws.
                ❌ Unauthorized copying, redistribution, or commercial use is prohibited without written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Employer-Sponsored Programs</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For organizations using Fundlights as an employee benefit:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fundlights does not disclose individual employee data</li>
                <li>Employers receive only aggregated and anonymized insights</li>
                <li>Fundlights is not responsible for employer HR policies or decisions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Employees are encouraged to use the platform voluntarily and confidentially.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links and Resources</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundlights may reference third-party websites or tools for educational purposes.
                We do not control or endorse third-party content and are not responsible for their practices or policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fundlights shall not be liable for any direct, indirect, incidental, or consequential damages</li>
                <li>Fundlights does not guarantee accuracy, completeness, or suitability of content</li>
                <li>Use of the platform is at your own risk</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fundlights shall not be liable for financial losses arising from decisions made based on educational content.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to indemnify and hold harmless Fundlights, its directors, employees, and partners from any claims, losses, or damages arising from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your misuse of the platform</li>
                <li>Violation of these Terms</li>
                <li>Violation of applicable laws</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Suspension or Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights reserves the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Suspend or terminate access without notice</li>
                <li>Restrict usage for security, legal, or operational reasons</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This may occur if these Terms are violated.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifications to Services or Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights may:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modify or discontinue services</li>
                <li>Update these Terms from time to time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Changes will be effective upon posting on this page. Continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of India.
                Courts located in India shall have exclusive jurisdiction over any disputes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Fundlights</strong><br />
                <strong className="text-foreground">Email:</strong> support@fundlights.com<br />
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

export default TermsOfService;
