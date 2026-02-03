import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Headphones, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => setCopiedValue(null), 1500);
      toast({
        title: "Copied",
        description: "Copied to clipboard.",
      });
    } catch {
      toast({
        title: "Copy failed",
        description: "Couldn't copy. Please copy manually.",
        variant: "destructive",
      });
    }
  };

  const isEmail = (value: string) => value.includes("@");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Sat, 10am-7pm IST",
      value: "+91-9096312177\n+91-9167873292",
      action: "tel:+919096312177"
    },
    {
      icon: MessageSquare,
      title: "Sales Inquiries",
      description: "Talk to our sales team",
      value: "sales@fundlights.com",
      action: "mailto:sales@fundlights.com"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "For existing customers",
      value: "support@fundlights.com",
      action: "mailto:support@fundlights.com"
    }
  ];

  const offices = [
    {
      city: "Pune",
      type: "Headquarters",
      address: "13, Gera Commerzone , Panchshil Towers Rd, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014",
    },
    {
      city: "Nagpur",
      type: "Regional Office",
      address: "Trimurti Nagar, Nagpur, Maharashtra 440022",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about FundLights? Want to see a demo? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.action}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/50 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <method.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                {isEmail(method.value) ? (
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-accent whitespace-pre-line">{method.value}</p>
                    <button
                      type="button"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-accent"
                      aria-label="Copy email"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        copyToClipboard(method.value);
                      }}
                    >
                      {copiedValue === method.value ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-accent whitespace-pre-line">{method.value}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Inc." required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <select 
                    id="companySize" 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your retention challenges or what you'd like to learn about FundLights..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Offices</h2>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{office.city}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                              {office.type}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Looking to Partner?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We work with HR consultants, benefits advisors, and technology partners.
                    </p>
                    <a href="mailto:sales@fundlights.com" className="text-sm font-medium text-accent hover:underline">
                      <span className="group inline-flex items-center gap-2">
                        sales@fundlights.com →
                        <button
                          type="button"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-accent"
                          aria-label="Copy email"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard("sales@fundlights.com");
                          }}
                        >
                          {copiedValue === "sales@fundlights.com" ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
