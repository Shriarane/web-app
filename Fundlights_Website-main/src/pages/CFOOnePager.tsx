import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Users, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  Download,
  BarChart3,
  PiggyBank,
  Clock,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CFOOnePager = () => {
  const handleDownload = () => {
    window.print();
  };

  const comparisonData = [
    { 
      factor: "Equity Dilution", 
      esop: false, 
      cashBonus: true, 
      fundlights: true,
      highlight: true 
    },
    { 
      factor: "Admin Complexity", 
      esop: "High", 
      cashBonus: "Low", 
      fundlights: "Low",
      highlight: false 
    },
    { 
      factor: "Growth Potential", 
      esop: "Variable", 
      cashBonus: "None", 
      fundlights: "12-15%/yr",
      highlight: true 
    },
    { 
      factor: "Recovery if Early Exit", 
      esop: false, 
      cashBonus: false, 
      fundlights: true,
      highlight: true 
    },
    { 
      factor: "Legal Compliance", 
      esop: "Complex", 
      cashBonus: "Simple", 
      fundlights: "Simple",
      highlight: false 
    },
    { 
      factor: "Tax Efficiency", 
      esop: "Moderate", 
      cashBonus: "Poor", 
      fundlights: "High",
      highlight: true 
    },
  ];

  const renderCellValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <XCircle className="w-5 h-5 text-destructive mx-auto" />
      );
    }
    return <span className="font-medium">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      {/* Download Button - Hidden in Print */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button onClick={handleDownload} variant="gold" size="lg" className="gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 print:px-4 print:py-6">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 print:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">FundLights</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 print:text-3xl">
            The CFO's Guide to{" "}
            <span className="text-gradient-gold">Smarter Employee Retention</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Zero Equity Dilution. Maximum ROI. Full Capital Protection.
          </p>
        </motion.header>

        {/* The Problem Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 print:mb-6"
        >
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 print:p-4">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-destructive" />
              The Hidden Cost of Employee Turnover
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="text-3xl font-bold text-destructive">50-200%</p>
                <p className="text-sm text-muted-foreground">of annual salary per replacement</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="text-3xl font-bold text-destructive">6-12 mo</p>
                <p className="text-sm text-muted-foreground">to reach full productivity</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="text-3xl font-bold text-destructive">Complex</p>
                <p className="text-sm text-muted-foreground">cap table with ESOPs</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 print:mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            How FundLights Works
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { step: "1", title: "Contribute", desc: "Monthly SIP per employee" },
              { step: "2", title: "Grow", desc: "12-15% avg. annual returns" },
              { step: "3", title: "Vest", desc: "Funds transfer on vesting" },
              { step: "4", title: "Protect", desc: "Recover if employee leaves" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-4 text-center h-full">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold text-accent-foreground font-bold flex items-center justify-center mx-auto mb-2 text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground absolute -right-3.5 top-1/2 -translate-y-1/2 hidden md:block print:hidden" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Financial Benefits Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 print:mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent" />
            Financial Benefits for Your Organization
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                icon: TrendingUp, 
                title: "12-15% Annual Returns", 
                desc: "Your retention investment grows, unlike cash bonuses that depreciate" 
              },
              { 
                icon: PiggyBank, 
                title: "40% Reduction in Attrition", 
                desc: "Save millions in replacement and training costs" 
              },
              { 
                icon: Shield, 
                title: "Zero Equity Dilution", 
                desc: "No complex valuations, no cap table management" 
              },
              { 
                icon: Clock, 
                title: "Full Capital Recovery", 
                desc: "If employee leaves early, funds return to company" 
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10 print:mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            How FundLights Compares
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-center p-4 font-semibold">ESOP</th>
                  <th className="text-center p-4 font-semibold">Cash Bonus</th>
                  <th className="text-center p-4 font-semibold bg-accent text-accent-foreground">FundLights</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-t border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
                  >
                    <td className="p-4 font-medium text-foreground">{row.factor}</td>
                    <td className="p-4 text-center text-muted-foreground">{renderCellValue(row.esop)}</td>
                    <td className="p-4 text-center text-muted-foreground">{renderCellValue(row.cashBonus)}</td>
                    <td className={`p-4 text-center ${row.highlight ? 'bg-accent/10 font-semibold text-accent' : ''}`}>
                      {renderCellValue(row.fundlights)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ROI Calculator Snapshot */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 print:mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            ROI Snapshot: 100 Employee Company
          </h2>
          <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-6 text-primary-foreground print:bg-primary">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm opacity-80 mb-1">Monthly Investment</p>
                <p className="text-3xl font-bold">₹10L</p>
                <p className="text-xs opacity-70">₹10,000 × 100 employees</p>
              </div>
              <div>
                <p className="text-sm opacity-80 mb-1">3-Year Corpus Value</p>
                <p className="text-3xl font-bold text-gold-light">₹4.5 Cr</p>
                <p className="text-xs opacity-70">At 12% avg. returns</p>
              </div>
              <div>
                <p className="text-sm opacity-80 mb-1">Cost Savings</p>
                <p className="text-3xl font-bold text-gold-light">₹2.4 Cr</p>
                <p className="text-xs opacity-70">40% reduction in turnover</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trust Indicators */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10 print:mb-6"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield, text: "100% Legally Compliant" },
              { icon: Clock, text: "Setup in Days, Not Months" },
              { icon: CheckCircle, text: "No Commitment for Demo" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center border-t border-border pt-8 print:pt-4"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Ready to Transform Your Retention Strategy?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a personalized demo with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <Button variant="gold" size="xl" className="gap-2">
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="xl">
              Contact: hello@fundlights.com
            </Button>
          </div>
          <div className="hidden print:block text-foreground font-medium">
            <p>📧 hello@fundlights.com | 🌐 www.fundlights.com</p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default CFOOnePager;
