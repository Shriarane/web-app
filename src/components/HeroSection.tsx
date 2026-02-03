import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import DemoFormDialog from "./DemoFormDialog";

const HeroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { icon: TrendingUp, value: "12-15%", label: "Average Annual Returns" },
    { icon: Users, value: "40%", label: "Reduction in Attrition" },
    { icon: Shield, value: "100%", label: "Legally Compliant" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Enterprise Retention Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-muted-foreground dark:text-muted-foreground">
              Build Wealth. Retain Talent
            </span>{" "}
            <span className="text-gradient-gold">Win Together.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            A Mutual Fund-linked Employee Retention Platform that creates compounding 
            wealth pools for loyal employees. Simpler, scalable, and more powerful than ESOPs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <DemoFormDialog>
              <Button variant="hero" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </DemoFormDialog>
            <a href="#how-it-works">
              <Button variant="hero-outline" size="xl" className="text-black dark:text-black">
                Watch How It Works
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              // determine animation state based on hoveredIndex
              let animateStyle: any = { opacity: 1, scale: 1, y: 0 };

              if (hoveredIndex === null) {
                animateStyle = { opacity: 1, scale: 1, y: 0 };
              } else if (hoveredIndex === index) {
                animateStyle = { opacity: 1, scale: 1.06, y: -8 };
              } else if (Math.abs((hoveredIndex ?? 0) - index) === 1) {
                // adjacent
                animateStyle = { opacity: 0.98, scale: 1.03, y: -4 };
              } else {
                animateStyle = { opacity: 0.75, scale: 0.98, y: 0 };
              }

              const tileClass = cn(
                "rounded-2xl p-6 shadow-soft border border-border/50 transition-shadow duration-300 transition-colors ease-in-out",
                hoveredIndex === index ? "bg-[#DE1A58]" : "bg-card"
              );

              const iconWrapperClass = cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors duration-300",
                hoveredIndex === index ? "bg-white" : "bg-gradient-gold"
              );

              const iconClass = cn(
                "w-6 h-6 transition-colors duration-300",
                hoveredIndex === index ? "text-[#DE1A58]" : "text-accent-foreground"
              );

              const valueClass = cn(
                "text-3xl font-bold mb-1 transition-colors duration-300",
                hoveredIndex === index ? "text-white" : "text-foreground"
              );

              const labelClass = cn(
                "text-sm transition-colors duration-300",
                hoveredIndex === index ? "text-white/90" : "text-muted-foreground"
              );

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={animateStyle}
                  transition={{ duration: 0.25 }}
                  className={tileClass}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={iconWrapperClass}>
                    <stat.icon className={iconClass} />
                  </div>
                  <div className={valueClass}>
                    {stat.value}
                  </div>
                  <div className={labelClass}>{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
