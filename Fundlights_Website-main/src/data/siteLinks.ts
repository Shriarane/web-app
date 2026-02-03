export type SiteLink = {
  name: string;
  href: string;
};

export type SiteLinkSections = {
  product: SiteLink[];
  company: SiteLink[];
  legal: SiteLink[];
};

const salesEmail = "sales@fundlights.com";

export const mailtoSalesInquiry = `mailto:${salesEmail}?subject=${encodeURIComponent(
  "Sales inquiry - FundLights",
)}&body=${encodeURIComponent(
  "Hi FundLights Sales,\n\nI'm interested in learning more about FundLights.\n\nName:\nCompany:\nPhone:\nMessage:\n\nThanks,",
)}`;

export const mailtoPricingRequest = `mailto:${salesEmail}?subject=${encodeURIComponent(
  "Pricing request - FundLights",
)}&body=${encodeURIComponent(
  "Hi FundLights Sales,\n\nI'd like to get pricing for FundLights.\n\nCompany name:\nWebsite:\nIndustry:\nEmployee count:\nLocations (cities/countries):\nCurrent retention challenges:\nDesired rollout timeline:\nPoint of contact (name, email, phone):\n\nThanks,",
)}`;

export const siteLinkSections: SiteLinkSections = {
  product: [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Pricing", href: mailtoPricingRequest },
    { name: "FAQs", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
  ],
};
