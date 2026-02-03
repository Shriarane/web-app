import React, { useState } from 'react'; // Added this import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Heart, Zap, Users, Coffee, GraduationCap, ArrowRight } from "lucide-react";
import JobApplicationDialog from "@/components/JobApplicationDialog";

// --- New Component for Email Copy Functionality ---
const EmailCopy = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "careers@fundlights.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Reset "Copied" text back to "Copy" after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div 
      className="relative inline-block cursor-pointer group align-middle"
      onClick={handleCopy}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* The Email Text */}
      <span className="text-accent hover:underline decoration-accent underline-offset-4 transition-all">
        {email}
      </span>

      {/* The "Copy"   Tooltip */}
      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg transition-opacity duration-200 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {copied ? "Copied! ✅" : "Copy"}
        
        {/* Little arrow pointing down */}
        <div className="absolute top-100 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};
// --------------------------------------------------

const Careers = () => {
  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive coverage for you and family" },
    { icon: Zap, title: "FundLights Benefits", description: "Yes, we use our own product!" },
    { icon: Users, title: "Flexible Work", description: "Remote-first with optional office" },
    { icon: Coffee, title: "Wellness Budget", description: "Monthly allowance for your wellbeing" },
    { icon: GraduationCap, title: "Learning Fund", description: "Annual budget for courses & conferences" },
    { icon: Briefcase, title: "Equity Options", description: "Be an owner, not just an employee" },
  ];

  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Bangalore / Remote",
      type: "Full-time",
      description: "Build scalable financial platforms that handle millions in transactions securely."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore",
      type: "Full-time",
      description: "Shape the future of employee benefits by working closely with customers and engineering."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Mumbai / Remote",
      type: "Full-time",
      description: "Help our enterprise clients get maximum value from FundLights."
    },
    {
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that educates HR and Finance leaders about modern retention."
    },
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Bangalore / Remote",
      type: "Full-time",
      description: "Design and implement robust APIs and microservices for our financial platform."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive experiences for both employers and employees on our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Build the Future of Work With Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Join a team that's revolutionizing how companies retain and reward their best people. 
            We're growing fast and looking for passionate individuals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Why FundLights?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We practice what we preach. Our team enjoys industry-leading benefits and a culture 
            that values growth, transparency, and work-life balance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <p className="text-5xl mb-4">🚀</p>
              <h3 className="font-semibold text-foreground mb-2">Move Fast</h3>
              <p className="text-sm text-muted-foreground">
                We ship weekly and iterate based on real customer feedback.
              </p>
            </div>
            <div className="p-6">
              <p className="text-5xl mb-4">🤝</p>
              <h3 className="font-semibold text-foreground mb-2">Radical Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Everyone has access to company metrics, roadmap, and decisions.
              </p>
            </div>
            <div className="p-6">
              <p className="text-5xl mb-4">🌱</p>
              <h3 className="font-semibold text-foreground mb-2">Grow Together</h3>
              <p className="text-sm text-muted-foreground">
                We invest heavily in learning and celebrate each other's wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6" id="openings">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Open Positions</h2>
          
          {/* UPDATED EMAIL SECTION WITH HOVER/COPY FUNCTIONALITY */}
          <p className="text-muted-foreground text-center mb-12">
            Don't see a perfect fit? Email us at <EmailCopy />
          </p>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <JobApplicationDialog jobTitle={job.title} department={job.department}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Apply Now
                    </Button>
                  </JobApplicationDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Make an Impact?</h2>
          <p className="text-muted-foreground mb-8">
            Join us in building a product that genuinely improves people's financial lives.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Roles
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;