import { useState } from "react";
import { Linkedin, Youtube, Mail } from "lucide-react";
import { mailtoSalesInquiry, siteLinkSections } from "@/data/siteLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = siteLinkSections;

  return (
    <footer className="bg-[#122349] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              {/* logo image with fallback */}
              <Logo />
              <span className="text-xl font-bold text-white">
                Fund<span className="text-accent">Lights</span>
              </span>
            </a>
            <p className="text-white/80 mb-6 max-w-sm">
              Enterprise-grade employee retention through Mutual Fund-linked
              loyalty programs. Building lasting value for companies and
              employees.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/fundlights"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            <a
              href="https://www.youtube.com/@fundlights"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
              <a
                href={mailtoSalesInquiry}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} FundLights Enterprise Solutions. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              <span className="inline-flex items-center gap-1">
                Crafted with love ❤️ in India
                <img
                  src="/images/India_Flag.jpg"
                  alt="India"
                  className="inline-block h-4 w-auto align-middle"
                  loading="lazy"
                />
              </span>
            </p>
            <p className="text-white/70 text-sm">
              Built with trust for enterprises worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// small logo component with fallback
function Logo() {
  const [imgError, setImgError] = useState(false);

  return !imgError ? (
    <img
      src="/logo.png"
      alt="FundLights"
      className="w-10 h-10 rounded-lg object-cover"
      onError={() => setImgError(true)}
    />
  ) : (
    <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
      <span className="text-accent-foreground font-bold text-lg">F</span>
    </div>
  );
}
