import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Frequently Asked Questions (FAQs)",
    questions: [
      {
        question: "What is Fundlights?",
        answer:
          "Fundlights is an employee financial wellness and retention platform that helps businesses improve workforce stability by aligning employee wealth creation with long-term organizational growth.",
      },
      {
        question: "How does Fundlights help businesses?",
        answer:
          "Fundlights helps businesses drive predictable employee retention and long-term performance by aligning employee wealth creation with organizational growth.\n\nInstead of short-term incentives, Fundlights introduces a mutual fund–linked retention framework that encourages employees to stay longer, build financial security, and remain engaged with the organization.\n\nKey business benefits include:\n• Improved Employee Retention – Longer tenure through compounding wealth incentives\n• Predictable Retention, Predictable Outcomes – Better forecasting of workforce stability and costs\n• Lower Hiring & Training Costs – Reduced attrition and preservation of institutional knowledge\n• Higher Productivity & Engagement – Financially secure employees perform better\n• Stronger Employer Brand – Positions the company as a future-ready employer\n• Scalable Alternative to Traditional Incentives – More flexible than ESOPs or cash bonuses\n\nFundlights converts employee retention into a measurable, manageable business lever.",
      },
      {
        question: "Who should use Fundlights?",
        answer:
          "Fundlights is designed for:\n• Startups and growing companies\n• SMEs and mid-size enterprises\n• HR and People teams\n• Founders, CXOs, and CFOs focused on retention and cost efficiency",
      },
      {
        question: "How is Fundlights different from ESOPs or cash bonuses?",
        answer:
          "Unlike ESOPs or one-time bonuses, Fundlights focuses on long-term wealth compounding rather than short-term payouts. This creates continuous retention motivation instead of event-based exits.",
      },
      {
        question: "What problem does Fundlights solve for employers?",
        answer:
          "Fundlights addresses:\n• High employee attrition\n• Unpredictable workforce planning\n• Rising hiring and training costs\n• Low engagement due to financial stress\n\nBy improving financial wellness, Fundlights helps businesses achieve stable teams and predictable growth.",
      },
      {
        question: "How do employees benefit from Fundlights?",
        answer:
          "Employees benefit through:\n• Long-term wealth creation\n• Better financial understanding\n• Reduced financial stress\n• Clear linkage between tenure and financial growth\n\nThis leads to higher loyalty and engagement.",
      },
      {
        question: "Is Fundlights suitable for startups and fast-growing companies?",
        answer:
          "Yes. Fundlights is scalable and flexible, making it ideal for startups and fast-growing companies that want strong retention without heavy cash burn or complex equity structures.",
      },
      {
        question: "Does Fundlights replace existing employee benefits?",
        answer:
          "No. Fundlights complements existing benefits like salary, bonuses, and insurance by adding a future-focused financial layer centered on wealth creation and retention.",
      },
      {
        question: "Is Fundlights compliant with regulations?",
        answer:
          "Yes. Fundlights operates within applicable regulatory frameworks and follows transparent, ethical, and compliant financial practices.",
      },
      {
        question: "How easy is it to implement Fundlights for a company?",
        answer:
          "Fundlights is easy to roll out with:\n• Simple onboarding for employers and employees\n• Customizable retention structures\n• Minimal operational overhead\n\nImplementation is designed to be fast, scalable, and business-friendly.",
      },
      {
        question: "Can Fundlights provide measurable ROI to businesses?",
        answer:
          "Yes. By reducing attrition, Fundlights helps businesses:\n• Lower hiring and onboarding costs\n• Improve productivity\n• Achieve more predictable business outcomes\n\nRetention becomes a quantifiable ROI driver.",
      },
      {
        question: "What is the core philosophy of Fundlights?",
        answer:
          'Fundlights is built on a simple idea:\n“When employees grow financially, businesses grow predictably.”',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#DE1A58]/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DE1A58]/10 mb-6">
                <HelpCircle className="w-8 h-8 text-[#DE1A58]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our platform, implementation, 
                and how we can help your organization.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-[#DE1A58] transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-[#DE1A58]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Reach out and we'll get back to you as soon as possible.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#DE1A58] text-white font-semibold rounded-lg hover:bg-[#DE1A58]/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
