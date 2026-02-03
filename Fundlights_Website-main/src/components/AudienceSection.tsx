import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User, CheckCircle2 } from "lucide-react";

const companyBenefits = [
	"Convert attrition costs into retention investments",
	"Zero equity dilution or cap table complexity",
	"Funds stay in company name until vesting",
	"Scalable from 10 to 10,000+ employees",
	"Dual revenue benefit: SaaS + reduced turnover costs",
];

const employeeBenefits = [
	"Watch your loyalty bonus grow in real-time",
	"Benefit from compounding mutual fund returns",
	"Clear vesting schedule with transparent rules",
	"Receive full accumulated value upon tenure completion",
	"Simple, mobile-friendly dashboard access",
];

const AudienceSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="for-companies" className="py-24 bg-background" ref={ref}>
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent font-semibold text-2xl mb-6">
						For Everyone
					</span>
					<h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
						A Win-Win for Companies & Employees
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Aligned incentives that create lasting value for both parties
					</p>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* For Companies */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						id="for-companies"
					>
						<div className="bg-gradient-navy rounded-3xl p-8 md:p-10 h-full relative overflow-hidden">
							{/* Background Pattern */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
										<Building2 className="w-7 h-7 text-accent" />
									</div>
									<h3 className="text-2xl font-bold text-primary-foreground">
										For Companies
									</h3>
								</div>

								<ul className="space-y-4">
									{companyBenefits.map((benefit, index) => (
										<motion.li
											key={benefit}
											initial={{ opacity: 0, x: -20 }}
											animate={isInView ? { opacity: 1, x: 0 } : {}}
											transition={{
												duration: 0.4,
												delay: 0.3 + index * 0.1,
											}}
											className="flex items-start gap-3"
										>
											<CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
											<span className="text-primary-foreground/90">
												{benefit}
											</span>
										</motion.li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>

					{/* For Employees */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						id="for-employees"
					>
						<div className="bg-card rounded-3xl p-8 md:p-10 h-full border border-border shadow-elevated relative overflow-hidden">
							{/* Background Pattern */}
							<div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center">
										<User className="w-7 h-7 text-accent-foreground" />
									</div>
									<h3 className="text-2xl font-bold text-foreground">
										For Employees
									</h3>
								</div>

								<ul className="space-y-4">
									{employeeBenefits.map((benefit, index) => (
										<motion.li
											key={benefit}
											initial={{ opacity: 0, x: 20 }}
											animate={isInView ? { opacity: 1, x: 0 } : {}}
											transition={{
												duration: 0.4,
												delay: 0.3 + index * 0.1,
											}}
											className="flex items-start gap-3"
										>
											<CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
											<span className="text-muted-foreground">
												{benefit}
											</span>
										</motion.li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AudienceSection;
