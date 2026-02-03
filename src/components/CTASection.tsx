import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import DemoFormDialog from "./DemoFormDialog";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const salesEmail = "sales@fundlights.com";
  const mailtoHref = `mailto:${salesEmail}?subject=${encodeURIComponent(
    "Sales inquiry - FundLights",
  )}&body=${encodeURIComponent(
    "Hi FundLights Sales,\n\nI'm interested in learning more about FundLights.\n\nName:\nCompany:\nPhone:\nMessage:\n\nThanks,",
  )}`;

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0e1b3c" }}
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-gold mx-auto mb-8 flex items-center justify-center shadow-gold"
          >
            <Sparkles className="w-10 h-10 text-accent-foreground" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Retention Strategy?
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join forward-thinking companies using FundLights to build lasting
            employee loyalty while protecting their investment.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <DemoFormDialog>
              <Button variant="gold" size="xl">
                Schedule Your Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </DemoFormDialog>
            <Button
              variant="hero-outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open(mailtoHref, "_self")}
            >
              Contact Sales
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-primary-foreground/60"
          >
            No commitment required • Free consultation • Setup in days
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
