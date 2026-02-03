import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, PiggyBank, Clock, Gift } from "lucide-react";

const steps = [
	{
		icon: Building2,
		step: "01",
		title: "Company Enrolls",
		description:
			"Set up your retention program in minutes. Define vesting schedules, contribution amounts, and eligible employees.",
	},
	{
		icon: PiggyBank,
		step: "02",
		title: "Monthly Investments",
		description:
			"Company invests monthly into diversified Mutual Funds. Funds stay in the company's name, creating a virtual wealth pool.",
	},
	{
		icon: Clock,
		step: "03",
		title: "Wealth Compounds",
		description:
			"Investments grow with market returns. Employees can track their virtual balance, watching their loyalty bonus compound.",
	},
	{
		icon: Gift,
		step: "04",
		title: "Loyalty Rewarded",
		description:
			"Complete your tenure? Receive the full compounded value as a Loyalty Bonus. Leave early? Company retains the funds.",
	},
];

const HowItWorksSection = () => {
	const ref = useRef<HTMLElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section id="how-it-works" className="py-24 bg-background" ref={ref}>
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent font-semibold text-2xl mb-6">
						How It Works
					</span>
					<h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
						Simple. Scalable. Powerful.
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Transform your retention strategy in four easy steps
					</p>
				</motion.div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step, index) => {
						const isHovered = hoveredIndex === index;

						// entrance animation when in view
						const entrance = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };

						// hover-based animation state
						let animateStyle: any = { opacity: 1, scale: 1, y: 0 };
						if (hoveredIndex === null) {
							animateStyle = { opacity: 1, scale: 1, y: 0 };
						} else if (isHovered) {
							animateStyle = { opacity: 1, scale: 1.04, y: -8 };
						} else if (Math.abs((hoveredIndex ?? 0) - index) === 1) {
							animateStyle = { opacity: 0.98, scale: 1.02, y: -4 };
						} else {
							animateStyle = { opacity: 0.8, scale: 0.98, y: 0 };
						}

						// allow overflow so badge can sit half outside the tile
						const wrapperClass = "relative group rounded-2xl p-8 shadow-soft border border-border/50 transition-shadow duration-300 transition-colors ease-in-out h-full overflow-visible";

						// tile background: brand color when hovered, otherwise card
						const tileBgClass = isHovered ? "bg-[#DE1A58]" : "bg-card";

						// shared badge classes (positioning via style to move up by 62px + 1px => 63px)
						const badgeBaseClass = "absolute left-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-gold";

						const badgeStyle = { left: '50%', top: '-63px', transform: 'translateX(-50%)' } as React.CSSProperties;

						const badgeHoverClass = isHovered ? "bg-white text-[#DE1A58]" : "bg-gradient-gold text-accent-foreground";

						// icon wrapper
						const iconWrapperClass = isHovered
							? "w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 transition-colors duration-300"
							: "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 transition-colors duration-300";

						const iconClass = isHovered ? "w-8 h-8 text-[#DE1A58] transition-colors duration-300" : "w-8 h-8 text-accent transition-colors duration-300";

						const titleClass = isHovered ? "text-white text-xl font-bold mb-3 transition-colors duration-300" : "text-xl font-bold text-foreground mb-3";

						const descClass = isHovered ? "text-white/90 transition-colors duration-300" : "text-muted-foreground leading-relaxed";

						return (
							<motion.div
								key={step.step}
								initial={{ opacity: 0, y: 40 }}
								animate={animateStyle}
								transition={{ duration: 0.45, delay: 0.15 * index }}
								className={wrapperClass + " " + tileBgClass}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								<div className="relative">
									<div className={`${badgeBaseClass} ${badgeHoverClass}`} style={badgeStyle}>{step.step}</div>

									<div className={iconWrapperClass}>
										<step.icon className={iconClass} />
									</div>

									<h3 className={titleClass}>{step.title}</h3>
									<p className={descClass}>{step.description}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
