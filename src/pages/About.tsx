import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import timeline2021 from "@/assets/timeline-2021.png";
import timeline2022 from "@/assets/timeline-2022.png";
import timeline2023 from "@/assets/timeline-2023.png";
import timeline2024 from "@/assets/timeline-2024.png";
import timeline2025 from "@/assets/timeline-2025.png";

const About = () => {
  //Schema.org structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FundLights Enterprise Solutions",
    "alternateName": "FundLights",
    "url": "https://fundlights.com",
    "logo": "https://fundlights.com/logo.png",
    "description": "SEBI-registered mutual fund distributor offering innovative employee retention solutions through mutual fund-linked loyalty bonuses.",
    "foundingDate": "2021",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": "https://fundlights.com/contact"
    }
  };

  // Schema.org structured data for AboutPage
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FundLights - Employee Retention Platform",
    "description": "Learn about FundLights, a SEBI-registered mutual fund distributor revolutionizing employee retention with mutual fund-linked loyalty bonuses.",
    "url": "https://fundlights.com/about",
    "mainEntity": organizationSchema
  };
  const values = [
    {
      icon: Heart,
      title: "Employee First",
      description: "We believe that happy, financially secure employees are the backbone of every successful company."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every transaction, every policy, and every decision is made with complete transparency."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We're committed to continuous innovation that benefits both employers and employees."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work alongside HR and Finance teams as true partners, not just vendors."
    }
  ];


  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>About FundLights | SEBI-Registered Employee Retention Platform</title>
        <meta name="description" content="FundLights is a SEBI-registered mutual fund distributor revolutionizing employee retention. Learn our story, mission, and journey from 2021 to ₹9.8Cr AUM." />
        <meta name="keywords" content="FundLights, employee retention platform, SEBI registered, mutual fund distributor, loyalty bonus, ESOP alternative, employee benefits India" />
        <link rel="canonical" href="https://fundlights.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About FundLights | SEBI-Registered Employee Retention Platform" />
        <meta property="og:description" content="Learn how FundLights is revolutionizing employee retention with mutual fund-linked loyalty bonuses. SEBI-registered since 2021." />
        <meta property="og:url" content="https://fundlights.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About FundLights | Employee Retention Platform" />
        <meta name="twitter:description" content="SEBI-registered mutual fund distributor offering innovative employee retention solutions." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6" aria-labelledby="about-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Redefining Employee Retention
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            FundLights was born from a simple question: Why should companies choose between 
            equity dilution and losing their best talent? We built a better way—a{" "}
            <Link to="/#how-it-works" className="text-accent hover:underline">mutual fund-linked retention platform</Link>{" "}
            that benefits everyone.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-muted/30" aria-labelledby="our-story-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <article>
              <h2 id="our-story-heading" className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                In 2021, our founders faced a common dilemma: how to retain top talent without 
                giving away equity or creating complex{" "}
                <Link to="/blog/esop-vs-fundlights-which-is-right-for-your-company" className="text-accent hover:underline">ESOP structures</Link>{" "}
                that confused employees and frustrated CFOs.
              </p>
              <p className="text-muted-foreground mb-4">
                After months of research and collaboration with HR leaders, finance teams, and 
                legal experts, FundLights was born—a retention tool that grows wealth, protects 
                companies, and keeps everyone aligned.
              </p>
              <p className="text-muted-foreground">
                Today, we help companies retain their best people while maintaining 
                clean cap tables and healthy balance sheets. Learn more about{" "}
                <Link to="/#benefits" className="text-accent hover:underline">how we help companies</Link>.
              </p>
            </article>
            <aside className="bg-accent/10 rounded-2xl p-8" aria-label="Mission and Vision">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center" aria-hidden="true">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Make employee retention simple, transparent, and rewarding for everyone.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center" aria-hidden="true">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      A world where every employee has access to wealth-building opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6" aria-labelledby="our-values-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="our-values-heading" className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {values.map((value, index) => (
              <article key={index} role="listitem" className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-elevated hover:border-accent hover:bg-accent/5 hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 px-6 bg-muted/30" aria-labelledby="our-journey-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="our-journey-heading" className="text-3xl font-bold text-foreground text-center mb-4">Our Journey</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A steady path of disciplined growth and client trust since our SEBI registration in 2021.
          </p>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {/* 2021 */}
            <motion.div 
              className="relative flex items-start mb-16 md:justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex md:justify-end mb-4">
                    <img src={timeline2021} alt="FundLights 2021 - SEBI Registration milestone" className="w-20 h-20 rounded-xl object-cover shadow-md" loading="lazy" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">2021</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Regulatory Foundation</h3>
                  <p className="text-muted-foreground text-sm">
                    FundLights registered with SEBI, establishing a compliant foundation for mutual fund–linked employee retention solutions.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>
            </motion.div>

            {/* 2022 */}
            <motion.div 
              className="relative flex items-start mb-16 md:justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 hidden md:block" />
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="md:w-1/2 md:pl-12 pl-16 md:text-left">
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex mb-4">
                    <img src={timeline2022} alt="FundLights 2022 - ₹50 Lakhs AUM milestone" className="w-20 h-20 rounded-xl object-cover shadow-md" loading="lazy" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">2022</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Early Progress</h3>
                  <p className="text-muted-foreground text-sm">
                    Assets Under Management (AUM) reached ₹50 Lakhs as early clients placed their trust in our platform.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2023 */}
            <motion.div 
              className="relative flex items-start mb-16 md:justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex md:justify-end mb-4">
                    <img src={timeline2023} alt="FundLights 2023 - ₹1 Crore AUM milestone" className="w-20 h-20 rounded-xl object-cover shadow-md" loading="lazy" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">2023</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Building a Strong Base</h3>
                  <p className="text-muted-foreground text-sm">
                    AUM reached ₹1 Crore, reflecting consistent client relationships and disciplined investment practices.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>
            </motion.div>

            {/* 2024 */}
            <motion.div 
              className="relative flex items-start mb-16 md:justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 hidden md:block" />
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="md:w-1/2 md:pl-12 pl-16 md:text-left">
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex mb-4">
                    <img src={timeline2024} alt="FundLights 2024 - ₹3 Crore AUM milestone" className="w-20 h-20 rounded-xl object-cover shadow-md" loading="lazy" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">2024</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Scaling Responsibly</h3>
                  <p className="text-muted-foreground text-sm">
                    AUM grew to ₹3 Crore as more companies adopted our mutual fund–linked retention approach.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2025 */}
            <motion.div 
              className="relative flex items-start md:justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex md:justify-end mb-4">
                    <img src={timeline2025} alt="FundLights 2025 - ₹9.8 Crore AUM with 73 clients" className="w-20 h-20 rounded-xl object-cover shadow-md" loading="lazy" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">2025</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Trust & Long-term Relationships</h3>
                  <p className="text-muted-foreground text-sm">
                    AUM reached ₹9.8 Crore with 73 loyal customers who continue to trust FundLights for their employee retention needs.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Retention Strategy?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the growing number of companies using FundLights to retain top talent without equity dilution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
