import LegalPageLayout from "../LegalPageLayout";
import { siteConfig } from "../../data/siteConfig";

const sections = [
  {
    heading: "Information We Collect",
    body: `We collect information you provide directly to us — such as your name, email, phone number, and business details — when you fill out a form, request a quote, or book a consultation on our website. We also collect limited technical data (browser type, pages visited) via cookies to improve site performance.`,
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to respond to inquiries, deliver requested services, process payments, send relevant updates (only if you opt in), and improve our website and service offerings. We do not sell your personal data to third parties.",
  },
  {
    heading: "Financial & Tax Data Confidentiality",
    body: "Data shared for tax, accounting, or compliance engagements is treated with strict confidentiality in line with professional standards for Chartered Accountants and Company Secretaries, and is never shared with unauthorised third parties.",
  },
  {
    heading: "Data Security",
    body: "We implement industry-standard security measures — encryption in transit, access controls, and regular audits — to protect your data from unauthorised access, alteration, or disclosure.",
  },
  {
    heading: "Cookies",
    body: "We use cookies to remember your preferences and analyse site traffic. You can control cookie preferences through our cookie consent banner or your browser settings.",
  },
  {
    heading: "Your Rights",
    body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us at ${siteConfig.email}.`,
  },
  {
    heading: "Contact Us",
    body: `For any privacy-related questions, reach out to us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
];

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    updated="July 2026"
    breadcrumbLabel="Privacy Policy"
    sections={sections}
  />
);

export default PrivacyPolicy;
