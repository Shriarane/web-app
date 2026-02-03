import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Briefcase,
    title: "ESOP Alternative",
    description:
      "No equity dilution, no complex cap tables. A simpler path to employee retention.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Returns",
    description:
      "Mutual fund investments grow over time, creating substantial loyalty bonuses.",
  },
  {
    icon: Shield,
    title: "Risk Protection",
    description:
      "Company retains funds if employees leave early, protecting your investment.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description:
      "Launch your retention program in days, not months. No legal complexity.",
  },
  {
    icon: BarChart3,
    title: "Transparent Tracking",
    description:
      "Employees view their virtual balance anytime, staying motivated and engaged.",
  },
  {
    icon: Lock,
    title: "Fully Compliant",
    description:
      "Designed within existing legal frameworks. No regulatory surprises.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="benefits" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent font-semibold text-2xl mb-6">
            Key Benefits
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Why Companies Choose Fund
            <span style={{ color: "#be164b" }}>Lights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A retention solution designed for the modern workforce
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const isHovered = hoveredIndex === index;

            // hover-based animation state similar to stats
            let animateStyle: any = { opacity: 1, scale: 1, y: 0 };
            if (hoveredIndex === null) {
              animateStyle = { opacity: 1, scale: 1, y: 0 };
            } else if (isHovered) {
              animateStyle = { opacity: 1, scale: 1.06, y: -8 };
            } else if (Math.abs((hoveredIndex ?? 0) - index) === 1) {
              animateStyle = { opacity: 0.98, scale: 1.03, y: -4 };
            } else {
              animateStyle = { opacity: 0.75, scale: 0.98, y: 0 };
            }

            const tileClass = cn(
              "rounded-2xl p-8 h-full shadow-soft border border-border/50 transition-all duration-300 overflow-visible",
              isHovered ? "bg-[#DE1A58]" : "bg-card"
            );

            const iconWrapperClass = cn(
              "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
              isHovered ? "bg-white" : "bg-gradient-gold"
            );

            const iconClass = cn(
              "w-7 h-7 transition-colors duration-300",
              isHovered ? "text-[#DE1A58]" : "text-accent-foreground"
            );

            const titleClass = cn(
              "text-xl font-bold mb-3 transition-colors duration-300",
              isHovered ? "text-white" : "text-foreground"
            );

            const descClass = cn(
              "leading-relaxed transition-colors duration-300",
              isHovered ? "text-white/90" : "text-muted-foreground"
            );

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? animateStyle : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={tileClass}>
                  {/* Icon */}
                  <div className={iconWrapperClass}>
                    <benefit.icon className={iconClass} />
                  </div>

                  {/* Content */}
                  <h3 className={titleClass}>{benefit.title}</h3>
                  <p className={descClass}>{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
