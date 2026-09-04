export const caseStudies = [
  {
    slug: "kulkarni-textiles-ecommerce-relaunch",
    title: "Kulkarni Textiles: From Offline Catalogue to ₹40L Monthly Online Revenue",
    client: "Kulkarni Textiles",
    industry: "Retail & E-Commerce",
    tags: ["E-Commerce Development", "Digital Marketing"],
    summary: "A legacy textile brand's move from in-store-only sales to a full online storefront and paid growth engine.",
    problem:
      "Kulkarni Textiles relied entirely on in-store footfall, with no digital sales channel and a fragmented inventory system across three physical locations.",
    solution:
      "We built a custom e-commerce storefront with unified inventory management, integrated regional payment gateways, and launched a coordinated SEO and paid social campaign around the launch.",
    technology: ["React", "Node.js", "Razorpay", "Meta Ads", "Google Ads"],
    result:
      "Within five months, online sales reached ₹40L in monthly revenue, with organic traffic contributing 35% of total orders by month six.",
    metrics: [
      { label: "Monthly Revenue Growth", value: "+₹40L" },
      { label: "Organic Traffic Share", value: "35%" },
      { label: "Time to Launch", value: "9 Weeks" },
    ],
  },
  {
    slug: "nimblestack-mvp-to-funded-startup",
    title: "NimbleStack: From MVP to a Funded SaaS Product",
    client: "NimbleStack",
    industry: "SaaS / Technology",
    tags: ["Software Development", "Startup Registration", "UI/UX Design"],
    summary: "Complete product build and compliance foundation that helped a two-person team close their seed round.",
    problem:
      "NimbleStack's founders had a strong product idea but no engineering team, no company structure, and an approaching investor deadline.",
    solution:
      "We handled Startup India registration and incorporation in parallel with building their MVP — a custom web application with a role-based dashboard — ready in time for investor demos.",
    technology: ["React", "PostgreSQL", "AWS", "Figma"],
    result:
      "NimbleStack closed a seed round within two months of launch, crediting the polished MVP and clean compliance record as key trust signals for investors.",
    metrics: [
      { label: "MVP Delivery", value: "7 Weeks" },
      { label: "Investor Meetings Secured", value: "12" },
      { label: "Seed Round Closed", value: "2 Months Post-Launch" },
    ],
  },
  {
    slug: "reddy-wellness-brand-and-app",
    title: "Reddy Wellness Co.: Rebuilding a Brand Around Its Community",
    client: "Reddy Wellness Co.",
    industry: "Health & Wellness",
    tags: ["Branding", "Mobile App Development", "UI/UX Design"],
    summary: "A full identity overhaul and booking app that turned a single studio into a growing multi-location brand.",
    problem:
      "Reddy Wellness had inconsistent branding across locations and relied on phone bookings, leading to scheduling errors and lost revenue.",
    solution:
      "We developed a full brand identity system and a custom booking app supporting real-time class scheduling, payments, and membership management.",
    technology: ["React Native", "Firebase", "Figma"],
    result:
      "Booking errors dropped to near zero and the studio expanded from one to three locations within a year, powered by consistent brand recognition.",
    metrics: [
      { label: "Booking Errors", value: "-92%" },
      { label: "New Locations", value: "3 in 12 Months" },
      { label: "App Rating", value: "4.8 / 5" },
    ],
  },
  {
    slug: "ansari-logistics-compliance-consolidation",
    title: "Ansari Logistics: Consolidating Compliance Across Three States",
    client: "Ansari Logistics",
    industry: "Logistics & Transportation",
    tags: ["ROC Compliance", "Accounting & Bookkeeping", "Payroll Services"],
    summary: "Bringing scattered multi-state compliance and payroll under one predictable monthly process.",
    problem:
      "Operating across three states with different vendors handling ROC filings, payroll, and books, Ansari Logistics faced repeated deadline misses and reconciliation errors.",
    solution:
      "We centralised bookkeeping, payroll for 85 employees, and ROC compliance under a single monthly retainer with a shared compliance calendar.",
    technology: ["Zoho Books", "Tally"],
    result:
      "Zero missed compliance deadlines in the following 18 months, with monthly close time reduced from 12 days to 4.",
    metrics: [
      { label: "Missed Deadlines", value: "0 in 18 Months" },
      { label: "Monthly Close Time", value: "12 → 4 Days" },
      { label: "Employees on Payroll", value: "85" },
    ],
  },
];

export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);
