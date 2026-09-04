// Production-ready IT services configuration for dynamic routing
import { 
  Globe, 
  Smartphone, 
  PenTool, 
  Palette, 
  Megaphone, 
  Share2, 
  ShieldCheck, 
  Cloud 
} from "lucide-react";

export const itServices = [
  {
    slug: "website-development",
    icon: Globe,
    category: "Development",
    title: "Website Development",
    imageTag: "service_web_dev",
    shortDesc: "Fast, SEO-friendly websites built to convert visitors into customers.",
    heroDesc:
      "We design and build responsive, high-performance websites on modern frameworks — engineered for speed, search visibility, and conversions from day one.",
    features: [
      "Custom responsive design for every screen size",
      "React / Next.js performance-first builds",
      "SEO-friendly architecture & clean semantic markup",
      "CMS integration for easy content updates",
      "Analytics & conversion tracking setup",
    ],
    benefits: [
      "Stronger first impression and brand credibility",
      "Higher search rankings from technical SEO foundations",
      "Faster load times that reduce bounce rate",
      "Easy to maintain and scale as you grow",
    ],
    process: ["Discovery & Requirement Mapping", "Wireframing & UI Design", "Development & QA", "Launch & Post-Launch Support"],
    faqs: [
      { q: "How long does a website project take?", a: "Most business websites are delivered in 3–6 weeks depending on scope, page count, and integrations." },
      { q: "Will my website work on mobile?", a: "Yes — every build is fully responsive and tested across mobile, tablet, and desktop breakpoints." },
      { q: "Do you provide ongoing support after launch?", a: "Yes, we offer maintenance retainers covering updates, backups, and monitoring." },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    category: "Development",
    title: "Mobile App Development",
    imageTag: "service_mobile_app",
    shortDesc: "Native and cross-platform apps for iOS and Android.",
    heroDesc:
      "We design and engineer mobile apps that feel native, perform smoothly, and are built to scale — from MVP to full product.",
    features: [
      "Cross-platform builds (React Native / Flutter)",
      "Native iOS & Android development",
      "API integration & backend connectivity",
      "Push notifications & in-app analytics",
      "App Store & Play Store deployment support",
    ],
    benefits: [
      "One codebase, both platforms — lower cost, faster delivery",
      "Consistent, native-feeling user experience",
      "Real-time data sync with your existing systems",
      "Ongoing update and version support",
    ],
    process: ["Product Scoping & Wireframes", "UI/UX Prototyping", "Development & Sprints", "Store Submission & Support"],
    faqs: [
      { q: "Native or cross-platform — which is better?", a: "Cross-platform suits most business apps; we recommend native only for performance-critical or hardware-heavy apps." },
      { q: "How long does app store approval take?", a: "Typically 1–7 days depending on the platform and app category." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, including OS-update compatibility and feature iterations." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: PenTool,
    category: "Design",
    title: "UI/UX Design",
    imageTag: "service_ui_ux",
    shortDesc: "Research-driven interface design that's beautiful and usable.",
    heroDesc:
      "We craft interfaces that balance aesthetics with usability — grounded in user research, tested through prototypes, refined for clarity.",
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototyping",
      "Design systems & component libraries",
      "Usability testing & iteration",
      "Developer-ready handoff files",
    ],
    benefits: [
      "Higher user satisfaction and retention",
      "Fewer development revisions from clear handoff",
      "Consistent brand experience across products",
      "Data-informed design decisions",
    ],
    process: ["Research & Discovery", "Wireframes & IA", "High-Fidelity Prototyping", "Testing & Handoff"],
    faqs: [
      { q: "Do you design in Figma?", a: "Yes, all design work is delivered in Figma with organised, developer-ready components." },
      { q: "Do you conduct user testing?", a: "We run moderated and unmoderated usability tests depending on project scope and timeline." },
      { q: "Can you redesign an existing product?", a: "Yes, we specialise in UX audits and redesigns of existing live products." },
    ],
  },
  {
    slug: "graphic-design",
    icon: Palette,
    category: "Design",
    title: "Graphic Design",
    imageTag: "service_graphic_design",
    shortDesc: "On-brand visual assets for print, digital, and social.",
    heroDesc:
      "From social creatives to print collateral, our design team produces on-brand visual assets across every format you need.",
    features: [
      "Social media creative kits",
      "Brochures, flyers & print collateral",
      "Presentation & pitch deck design",
      "Packaging & merchandise design",
      "Ad creatives for paid campaigns",
    ],
    benefits: [
      "Consistent visual language across channels",
      "Faster turnaround for campaign assets",
      "Design that performs, not just looks good",
      "One partner for all your creative needs",
    ],
    process: ["Brief & Brand Review", "Concept Design", "Revisions", "Final Export & Delivery"],
    faqs: [
      { q: "Do you offer monthly design retainers?", a: "Yes, we offer flexible monthly packages for ongoing creative needs." },
      { q: "Can you match our existing brand guidelines?", a: "Absolutely — we design strictly within provided brand systems when available." },
      { q: "What's the typical turnaround?", a: "Standard creatives are delivered within 2–4 business days." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    category: "Marketing",
    title: "Digital Marketing",
    imageTag: "service_digital_marketing",
    shortDesc: "Full-funnel marketing strategy across search, social, and paid.",
    heroDesc:
      "We plan and execute full-funnel digital marketing strategies that drive measurable growth — not just impressions.",
    features: [
      "Marketing strategy & channel planning",
      "SEO, paid ads & social media execution",
      "Content & campaign calendars",
      "Conversion rate optimisation",
      "Monthly performance reporting",
    ],
    benefits: [
      "Data-backed decisions, not guesswork",
      "Consistent lead flow across channels",
      "Transparent reporting on ROI",
      "One team managing your entire funnel",
    ],
    process: ["Audit & Strategy", "Campaign Setup", "Execution & Optimisation", "Reporting & Scaling"],
    faqs: [
      { q: "Which channels do you manage?", a: "SEO, Google Ads, Meta Ads, LinkedIn, and email/content marketing, tailored to your audience." },
      { q: "How soon will we see results?", a: "Paid channels show early signals within weeks; organic SEO typically takes 3–6 months." },
      { q: "Do you provide monthly reports?", a: "Yes, detailed performance reports are shared monthly with strategy recommendations." },
    ],
  },
  {
    slug: "social-media-marketing",
    icon: Share2,
    category: "Marketing",
    title: "Social Media Marketing",
    imageTag: "service_social_marketing",
    shortDesc: "Content and community strategy that builds real engagement.",
    heroDesc:
      "We plan, create, and manage social media presence that builds community and drives measurable engagement, not vanity metrics.",
    features: [
      "Content strategy & monthly calendars",
      "Creative design & short-form video",
      "Community management",
      "Influencer collaboration support",
      "Performance analytics & insights",
    ],
    benefits: [
      "Consistent, on-brand presence across platforms",
      "Stronger audience relationships and trust",
      "Content that's built to convert, not just impress",
      "Clear monthly performance visibility",
    ],
    process: ["Strategy & Content Pillars", "Content Creation", "Scheduling & Community Management", "Analytics & Iteration"],
    faqs: [
      { q: "Which platforms do you manage?", a: "Instagram, LinkedIn, Facebook, X, and YouTube Shorts, based on your target audience." },
      { q: "Do you create the content or just post it?", a: "We handle end-to-end — strategy, creative production, scheduling, and reporting." },
      { q: "Can you manage paid social ads too?", a: "Yes, organic and paid social are often run in tandem for best results." },
    ],
  },
  {
    slug: "cyber-security",
    icon: ShieldCheck,
    category: "Infrastructure",
    title: "Cyber Security",
    imageTag: "service_cybersecurity",
    shortDesc: "Vulnerability assessment and hardening to protect your business.",
    heroDesc:
      "We assess, harden, and monitor your digital infrastructure against evolving threats — protecting your data, customers, and reputation.",
    features: [
      "Vulnerability assessment & penetration testing",
      "Firewall & network security configuration",
      "Data encryption & access control setup",
      "Security awareness training",
      "Incident response planning",
    ],
    benefits: [
      "Reduced risk of breaches and data loss",
      "Compliance-ready security posture",
      "Faster detection and response to threats",
      "Protects customer trust and brand reputation",
    ],
    process: ["Security Audit", "Risk Assessment", "Remediation & Hardening", "Ongoing Monitoring"],
    faqs: [
      { q: "Do you conduct penetration testing?", a: "Yes, we perform structured penetration testing with detailed remediation reports." },
      { q: "Is this suitable for small businesses?", a: "Yes, we scale security engagements from small businesses to larger enterprises." },
      { q: "Do you help with compliance certifications?", a: "We support readiness for ISO 27001 and similar security compliance frameworks." },
    ],
  },
  {
    slug: "cloud-services",
    icon: Cloud,
    category: "Infrastructure",
    title: "Cloud Services",
    imageTag: "service_cloud",
    shortDesc: "Cloud architecture, migration, and cost optimisation.",
    heroDesc:
      "We design, migrate, and manage cloud infrastructure on AWS, Azure, and GCP — built for reliability, scale, and cost efficiency.",
    features: [
      "Cloud architecture design",
      "Migration from on-premise or other clouds",
      "Auto-scaling & load balancing setup",
      "Cost monitoring & optimisation",
      "24/7 infrastructure monitoring",
    ],
    benefits: [
      "Infrastructure that scales with demand",
      "Reduced cloud spend through optimisation",
      "Improved reliability and disaster recovery",
      "Expert support without hiring an in-house team",
    ],
    process: ["Infrastructure Assessment", "Architecture Design", "Migration & Setup", "Monitoring & Optimisation"],
    faqs: [
      { q: "Which cloud providers do you work with?", a: "AWS, Microsoft Azure, and Google Cloud Platform." },
      { q: "Can you reduce our current cloud costs?", a: "Yes, cost audits frequently identify 20–40% in potential savings." },
      { q: "Do you offer 24/7 infrastructure monitoring?", a: "Yes, available as part of our managed cloud support plans." },
    ],
  },
];

export const getItServiceBySlug = (slug) => itServices.find((s) => s.slug === slug);