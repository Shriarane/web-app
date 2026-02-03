import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";
 
const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Compliance & Regulatory Disclosures | Fundlights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fundlights operates as a SEBI Registered ARN Holder Financial Advisor, distributing mutual fund products in compliance with applicable regulations in India. We are committed to transparency, ethical practices, and investor awareness while delivering long-term financial solutions.
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12 not-prose">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Registration</h3>
                  <p className="mt-2 text-lg font-semibold text-foreground">SEBI Registered ARN Holder</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-medium text-muted-foreground">ARN Number</h3>
                  <p className="mt-2 text-lg font-semibold text-foreground">180680</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-medium text-muted-foreground">EUIN</h3>
                  <p className="mt-2 text-lg font-semibold text-foreground">E364194</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Regulatory Registration Details</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights is registered with the Securities and Exchange Board of India (SEBI) through the Association of Mutual Funds in India (AMFI) as a Mutual Fund Distributor.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>ARN Number: 180680</li>
                <li>EUIN: E364194</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Nature of Services Offered</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights provides mutual fund distribution and financial facilitation services, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Mutual Fund Product Distribution</li>
                <li>Goal-Based Investment Assistance</li>
                <li>Portfolio Review &amp; Monitoring Support</li>
                <li>SIP Planning &amp; Wealth Accumulation Support</li>
                <li>Employee Financial Wellness Programs</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fundlights does not act as a SEBI Registered Investment Adviser (RIA) and does not provide fee-only investment advisory services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclosure on Commission &amp; Remuneration</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fundlights earns commissions from Asset Management Companies (AMCs) for distributing mutual fund schemes</li>
                <li>Commission structures are as per AMFI &amp; SEBI regulations</li>
                <li>The same scheme may have different commission structures</li>
                <li>Clients are encouraged to review scheme-related documents carefully</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This disclosure is made in compliance with regulatory requirements to ensure full transparency.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Investor Awareness &amp; Risk Disclosure</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Mutual fund investments are subject to market risks</li>
                <li>Past performance is not indicative of future returns</li>
                <li>Scheme-related documents should be read carefully before investing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fundlights does not guarantee returns or promise assured performance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Suitability &amp; Client Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While assisting clients, Fundlights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Considers client objectives and financial needs</li>
                <li>Provides product information and investment facilitation</li>
                <li>Encourages informed investment decisions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Final investment decisions remain the responsibility of the investor.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Conflict of Interest Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since Fundlights receives commissions from AMCs:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>There may be inherent conflicts of interest</li>
                <li>All efforts are made to maintain transparency and ethical conduct</li>
                <li>Investors are encouraged to seek clarity before investing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Privacy &amp; Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundlights ensures that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Client data is handled securely</li>
                <li>Information is used only for investment facilitation and regulatory purposes</li>
                <li>Data is not shared with unauthorized third parties</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Disclosures occur only when mandated by law or regulatory authorities.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Grievance Redressal Mechanism</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For queries or grievances, clients may contact:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Email: support@fundlights.com</li>
                <li>Response Timeline: Within 7 working days</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If unresolved, investors may approach the concerned AMC or lodge complaints through SEBI’s SCORES platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance Review &amp; Updates</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Compliance page is reviewed periodically to align with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>SEBI &amp; AMFI circulars</li>
                <li>Regulatory updates</li>
                <li>Industry best practices</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Last Updated: January 24, 2026
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Fundlights</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>SEBI-compliant ARN Holder</li>
                <li>Transparent commission disclosures</li>
                <li>Ethical distribution practices</li>
                <li>Investor-focused approach</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fundlights strives to build trust, awareness, and long-term wealth creation for investors.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
