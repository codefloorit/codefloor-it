// All Tax & Financial services. Powers the listing grid and the dynamic
// /tax-services/:slug detail page.
import {
  Receipt, FileCheck2, FileStack, FileSpreadsheet, BookOpen, Users,
  Building2, Building, Store, Rocket, IdCard, Award, ClipboardList,
  ShieldCheck, CheckSquare,
} from "lucide-react";

export const taxServices = [
  {
    slug: "income-tax-return",
    icon: Receipt,
    title: "Income Tax Return (ITR)",
    shortDesc: "Accurate, on-time ITR filing for individuals and businesses.",
    overview:
      "We prepare and file your Income Tax Return with complete accuracy — covering salary, business, capital gains, and multi-source income, while identifying every legitimate deduction available to you.",
    process: ["Document Collection", "Income & Deduction Review", "Return Preparation", "Filing & Acknowledgement"],
    documents: ["PAN & Aadhaar", "Form 16 / Salary slips", "Bank statements", "Investment & deduction proofs", "Business income records (if applicable)"],
    benefits: [
      "Maximised eligible deductions and refunds",
      "Zero late-filing penalties",
      "Expert review of multi-source income",
      "Safe, confidential document handling",
    ],
    pricingNote: "Starting from ₹1,199 for salaried individuals — final pricing depends on income complexity.",
    faqs: [
      { q: "What is the due date for ITR filing?", a: "Typically July 31st for individuals without audit requirements, though dates are notified annually by the department." },
      { q: "Can you file returns for previous years?", a: "Belated and updated returns (ITR-U) can be filed within the timelines allowed under the Income Tax Act." },
      { q: "Do you handle capital gains from stocks/property?", a: "Yes, we handle equity, mutual fund, crypto assets, and property capital gains computation and reporting." },
    ],
  },
  {
    slug: "gst-registration",
    icon: FileCheck2,
    title: "GST Registration",
    shortDesc: "End-to-end GST registration for new and existing businesses.",
    overview:
      "We handle your entire GST registration process — document preparation, application filing, and follow-up with the department — so you're compliant and ready to trade legally.",
    process: ["Eligibility Check", "Document Preparation", "Application Filing", "GSTIN Issuance"],
    documents: ["PAN of business/proprietor", "Business address proof", "Bank account details", "Identity & address proof of owners", "Business registration certificate (if applicable)"],
    benefits: [
      "Legal authorisation to collect and claim GST",
      "Access to input tax credit",
      "Improved credibility with vendors and clients",
      "Avoid penalties for non-registration",
    ],
    pricingNote: "Starting from ₹1,799 including government processing support.",
    faqs: [
      { q: "Who needs to register for GST?", a: "Businesses crossing the prescribed aggregate turnover threshold, or those involved in inter-state supply and e-commerce transactions mandated regardless of turnover." },
      { q: "How long does registration take?", a: "Typically 3–7 working days once documents are verified, assuming no clarifications (SCNs) are raised by the officer." },
      { q: "Can I register for GST voluntarily?", a: "Yes, voluntary registration is allowed and often beneficial for claiming input tax credits." },
    ],
  },
  {
    slug: "gst-return-filing",
    icon: FileStack,
    title: "GST Return Filing",
    shortDesc: "Monthly, quarterly and annual GST return filing, done right.",
    overview:
      "We manage your recurring GST return filings — GSTR-1, GSTR-3B, and annual returns — with automated reconciliation to keep your input credit claims accurate and audit-ready.",
    process: ["Data Collection", "Reconciliation", "Return Preparation", "Filing & Confirmation"],
    documents: ["Sales & purchase invoices", "GSTIN & login credentials", "Previous return filings", "E-way bill data (if applicable)"],
    benefits: [
      "Zero missed deadlines or late fees",
      "Accurate input tax credit reconciliation",
      "Reduced risk of notices and mismatches",
      "Clear monthly filing summary reports",
    ],
    pricingNote: "Starting from ₹999/month depending on transaction volume.",
    faqs: [
      { q: "What returns do you file?", a: "GSTR-1, GSTR-3B, GSTR-9 annual returns, GSTR-9C reconciliation statements, and QRMP scheme returns if opted." },
      { q: "What if I've missed previous filings?", a: "We help you catch up on pending returns while calculating legal ways to minimise applicable late fees." },
      { q: "Do you reconcile input tax credit?", a: "Yes, GSTR-2B and GSTR-3B matching is a standard part of our monthly filing workflow." },
    ],
  },
  {
    slug: "tds-return-filing",
    icon: FileSpreadsheet,
    title: "TDS Return Filing",
    shortDesc: "Accurate quarterly TDS return filing and compliance.",
    overview:
      "We prepare and file your quarterly TDS returns, generate Form 16/16A, and ensure your tax deduction compliance stays error-free.",
    process: ["TDS Data Collection", "Challan Reconciliation", "Return Preparation (24Q/26Q)", "Filing & Form Generation"],
    documents: ["TAN details", "Challan payment details", "Deductee PAN details", "Salary/payment records"],
    benefits: [
      "Avoid interest and high daily penalties on late filing",
      "Accurate Form 16/16A generation",
      "Reduced mismatch notices from the department",
      "Quarter-by-quarter compliance tracking",
    ],
    pricingNote: "Starting from ₹1,999 per quarter depending on deductee count.",
    faqs: [
      { q: "What is the due date for TDS returns?", a: "Quarterly due dates apply, generally the 31st of the month following the quarter-end (except for Q4, which is May 31st)." },
      { q: "Do you generate Form 16 for employees?", a: "Yes, TRACES-certified Form 16 and Form 16A generation is included in our TDS package." },
      { q: "What happens if TDS is deposited late?", a: "Interest applies on late deposit at 1.5% per month; we help calculate correct balances to halt further liability." },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    shortDesc: "Accurate books, always up to date and audit-ready.",
    overview:
      "We manage your day-to-day bookkeeping and accounting — from transaction recording to financial statement preparation — so your books are always accurate and audit-ready.",
    process: ["Transaction Recording", "Bank Reconciliation", "Financial Statement Preparation", "Monthly MIS Reporting"],
    documents: ["Bank statements", "Sales & purchase invoices", "Expense receipts", "Existing books (if any)"],
    benefits: [
      "Real-time visibility into business finances",
      "Audit-ready books at all times",
      "Informed decision-making with monthly MIS",
      "Reduced burden on internal teams",
    ],
    pricingNote: "Starting from ₹4,999/month depending on transaction volume.",
    faqs: [
      { q: "Which accounting software do you use?", a: "We actively work with TallyPrime, Zoho Books, QuickBooks, and Xero as per your workflow preference." },
      { q: "Can you clean up disorganised past records?", a: "Yes, we offer catch-up bookkeeping and historical ledger reconstruction services." },
      { q: "Do you provide monthly financial reports?", a: "Yes, customized P&L, balance sheets, and key business metric sheets are shared monthly." },
    ],
  },
  {
    slug: "payroll-services",
    icon: Users,
    title: "Payroll Services",
    shortDesc: "Accurate, compliant payroll processing every cycle.",
    overview:
      "We handle end-to-end payroll processing — salary computation, statutory deductions, payslips, and compliance filings — accurately, every cycle.",
    process: ["Employee Data Setup", "Salary Computation", "Statutory Deductions & Filing", "Payslip Distribution"],
    documents: ["Employee master data", "Attendance/leave records", "Salary structure details", "PF/ESI registration details"],
    benefits: [
      "On-time, error-free salary processing",
      "Full PF, ESI & PT compliance",
      "Reduced administrative burden",
      "Confidential, secure payroll handling",
    ],
    pricingNote: "Starting from ₹129/employee/month.",
    faqs: [
      { q: "Do you handle PF and ESI compliance?", a: "Yes, monthly challan generation, filings, and new employee registrations are fully managed." },
      { q: "Can you generate payslips automatically?", a: "Yes, compliant digital payslips are automatically compiled and dispatched." },
      { q: "What's the minimum team size for this service?", a: "We support expanding businesses starting from 5 employees up to mid-scale enterprises." },
    ],
  },
  {
    slug: "company-registration",
    icon: Building2,
    title: "Company Registration",
    shortDesc: "Private limited company incorporation, handled end-to-end.",
    overview:
      "We manage your complete company incorporation process — name approval, documentation, and SPICe+ ROC filing — so you can start operating legally, faster.",
    process: ["Name Approval", "Document Preparation", "ROC Filing", "Certificate of Incorporation"],
    documents: ["PAN & Aadhaar of directors", "Registered office address proof", "Digital Signature Certificate (DSC)", "MOA & AOA details"],
    benefits: [
      "Limited liability protection for owners",
      "Enhanced credibility with clients & investors",
      "Access to institutional funding and equity structuring",
      "Clear separation of personal and business assets",
    ],
    pricingNote: "Starting from ₹7,999 including basic government fees, stamp duties, and 2 DSCs.",
    faqs: [
      { q: "How long does incorporation take?", a: "Typically 7–10 working days once all signed documents and identity forms are uploaded." },
      { q: "Do I need a physical office to register?", a: "A physical address capable of receiving official correspondence is required; residential addresses are permitted." },
      { q: "What's included after incorporation?", a: "Your corporate PAN, TAN, and bank account introduction support are packed into the final delivery." },
    ],
  },
  {
    slug: "llp-registration",
    icon: Building,
    title: "LLP Registration",
    shortDesc: "Limited Liability Partnership registration made simple.",
    overview:
      "We handle end-to-end LLP registration — from name reservation to the LLP agreement — ideal for professional partnerships and lean business operations.",
    process: ["Name Reservation", "Document Preparation", "Incorporation Filing", "LLP Agreement Drafting"],
    documents: ["PAN & Aadhaar of partners", "Registered office proof", "Digital Signature Certificate", "Partner contribution details"],
    benefits: [
      "Limited liability with partnership structural flexibility",
      "Lower compliance burden than a private limited company",
      "No mandatory minimum capital requirement",
      "Separate legal identity distinct from its partners",
    ],
    pricingNote: "Starting from ₹6,499 including government filing fees and partner DSCs.",
    faqs: [
      { q: "How is an LLP different from a Pvt Ltd company?", a: "LLPs feature reduced compliance upkeep and audit exemptions below certain limits, but cannot issue shares to casual investors." },
      { q: "What's the minimum number of partners?", a: "A minimum of two designated partners is legally required to form and sustain an LLP." },
      { q: "Is an LLP agreement mandatory?", a: "Yes, it must be drafted, executed on required stamp paper, and filed within 30 days of incorporation." },
    ],
  },
  {
    slug: "msme-registration",
    icon: Store,
    title: "MSME Registration",
    shortDesc: "Udyam/MSME registration to unlock government benefits.",
    overview:
      "We handle your MSME (Udyam) registration to unlock access to priority sector lending, collateral-free loans, and prompt payment protection benefits.",
    process: ["Eligibility Assessment", "Document Collection", "Udyam Application Filing", "Certificate Issuance"],
    documents: ["Aadhaar of proprietor/authorised signatory", "PAN of business", "Bank account details", "Business activity details"],
    benefits: [
      "Access to collateral-free bank loans and lower interest rates",
      "Statutory protection against delayed vendor payments",
      "Eligibility for exclusive government tenders and subsidies",
      "Concessions on trademark & patent registration fees",
    ],
    pricingNote: "Starting from ₹899 including end-to-end processing.",
    faqs: [
      { q: "Who is eligible for MSME registration?", a: "Manufacturing and service entities matching the latest dynamic investment and turnover ceilings." },
      { q: "Is MSME registration mandatory?", a: "It is optional, but strongly advised due to the immense credit and security benefits it establishes." },
      { q: "Can I update my MSME details later?", a: "Yes, your data link automatically updates via PAN/GST integration, and manual adjustments can be processed online." },
    ],
  },
  {
    slug: "startup-registration",
    icon: Rocket,
    title: "Startup Registration",
    shortDesc: "DPIIT startup recognition to access tax and funding benefits.",
    overview:
      "We help you obtain DPIIT Startup India recognition — unlocking corporate tax exemptions, self-certified compliance paths, and access to capital pool programs.",
    process: ["Eligibility Review", "Document & Pitch Preparation", "DPIIT Application Filing", "Recognition Certificate"],
    documents: ["Certificate of incorporation", "Business description/pitch deck", "Website or product details (if available)", "PAN of the entity"],
    benefits: [
      "Income tax exemption for eligible startups under Section 80-IAC",
      "Simplified compliance tracking and self-certification models",
      "Direct entry points for government seed funds and capital pools",
      "Fast-tracked patent and IP application paths with high fee rebates",
    ],
    pricingNote: "Starting from ₹5,999 including custom pitch write-up assistance.",
    faqs: [
      { q: "What qualifies as a 'startup' for DPIIT?", a: "An incorporated Private Company or LLP under 10 years old, with annual turnover below ₹100 crore, working toward innovation." },
      { q: "What tax benefits are available?", a: "Recognized startups can apply separately for a 3-year income tax holiday, evaluated by an Inter-Ministerial Board." },
      { q: "Do you help with the pitch deck for application?", a: "Yes, we structure the core innovation statement and narrative needed for the official portal upload." },
    ],
  },
  {
    slug: "pan-tan-services",
    icon: IdCard,
    title: "PAN & TAN Services",
    shortDesc: "Fast PAN and TAN application and correction services.",
    overview:
      "We handle new PAN/TAN applications as well as data rectifications — ensuring your primary tax identifiers are accurate and issued without processing delays.",
    process: ["Application Type Assessment", "Document Preparation", "Online Filing", "Card/Certificate Delivery"],
    documents: ["Identity proof", "Address proof", "Business incorporation certificate (for entities)", "Photograph (for individual PAN)"],
    benefits: [
      "Fast, error-free application processing",
      "Correction support for existing PAN/TAN mismatched data",
      "Vital operational infrastructure for banking and tax items",
      "Trackable status updates until final card dispatch",
    ],
    pricingNote: "Starting from ₹599 per application.",
    faqs: [
      { q: "How long does PAN issuance take?", a: "Physical cards usually take 7–12 working days, while digitally signed e-PANs arrive much faster." },
      { q: "Can you correct errors on an existing PAN?", a: "Yes, we handle updates for misspelled names, wrong dates of birth, and photographic mismatches." },
      { q: "Is TAN required for all businesses?", a: "TAN is mandatory for any business entity that needs to deduct tax at source (TDS) under legal guidelines." },
    ],
  },
  {
    slug: "trademark-registration",
    icon: Award,
    title: "Trademark Registration",
    shortDesc: "Protect your brand name and logo with trademark registration.",
    overview:
      "We handle your trademark search, application compilation, and follow-up with the Trademark Registry — protecting your brand name, logo, and tagline.",
    process: ["Trademark Search", "Application Filing", "Examination Response", "Registration Certificate"],
    documents: ["Logo/wordmark to be registered", "Applicant identity proof", "Business proof (for company applicants)", "Power of attorney (Form TM-48)"],
    benefits: [
      "Exclusive legal monopoly over your brand assets and markers",
      "Direct legal recourse against market copycats and infringers",
      "Valuable intangible business asset creation for future fundraising",
      "Nationwide protection under a single regulatory filing",
    ],
    pricingNote: "Starting from ₹7,499 including government statutory fees under the MSME category.",
    faqs: [
      { q: "How long does trademark registration take?", a: "The path to final registration spans 8–14 months, passing through examination, advertisement, and opposition windows." },
      { q: "Can I use ™ before registration completes?", a: "Yes, the ™ symbol can be applied immediately upon application filing; the ® mark requires final registration approval." },
      { q: "What if my trademark faces an objection?", a: "Our team drafts and files professional technical replies to address objections raised during examination." },
    ],
  },
  {
    slug: "roc-compliance",
    icon: ClipboardList,
    title: "ROC Compliance",
    shortDesc: "Annual ROC filings and secretarial compliance, managed fully.",
    overview:
      "We manage your annual ROC compliance calendar — from AOC-4 and MGT-7 filings to event-based adjustments — keeping your company in flawless legal standing.",
    process: ["Compliance Calendar Setup", "Document & Resolution Preparation", "Annual Return Filing", "Event-Based Filing as Needed"],
    documents: ["Financial statements", "Board resolutions", "Shareholding details", "Previous ROC filing records"],
    benefits: [
      "Shields company from heavy daily penalty charges",
      "Maintains the company in 'Active' compliance status on the MCA portal",
      "Systematic calendar reminders to avoid deadline stress",
      "Provides institutional safety during due diligence or funding rounds",
    ],
    pricingNote: "Starting from ₹9,999/year for standard corporate annual filings.",
    faqs: [
      { q: "What are the key annual ROC filings?", a: "Form AOC-4 (for financial balances) and Form MGT-7/7A (for company annual returns) form the primary annual duties." },
      { q: "What happens if we miss ROC deadlines?", a: "Substantial daily additional fees apply, and prolonged failure invites strike-off notices for the company." },
      { q: "Do you handle director KYC (DIR-3)?", a: "Yes, annual web-based or biometric director KYC validation is packed into our annual compliance tracking." },
    ],
  },
  {
    slug: "audit-support",
    icon: ShieldCheck,
    title: "Audit Support",
    shortDesc: "Statutory, tax, and internal audit preparation and support.",
    overview:
      "We provide end-to-end audit support — compiling records, performing reconciliations, and liaising directly with independent auditors to make your business completely audit-ready.",
    process: ["Pre-Audit Readiness Review", "Documentation & Reconciliation", "Auditor Liaison", "Audit Report Finalisation"],
    documents: ["Books of accounts", "Bank statements", "Statutory registers", "Prior year audit reports"],
    benefits: [
      "Accelerated, smooth audit closure without execution friction",
      "Minimised formal query logs and adverse remarks from auditors",
      "Stronger financial check-and-balance architecture internally",
      "Assurance regarding statutory validation timelines",
    ],
    pricingNote: "Custom tailored quote based on entity scale and specific audit mandates.",
    faqs: [
      { q: "Do you conduct the audit or support it?", a: "We act as your internal financial managers to clear reconciliations and coordinate details; the audit opinion is given by an independent CA." },
      { q: "What types of audits do you support?", a: "Statutory corporate audits, Tax audits under the Income Tax Act, GST audits, and internal control reviews." },
      { q: "How far in advance should we engage you?", a: "Engaging our support team 4–6 weeks ahead of final audit dispatch ensures a smooth verification window." },
    ],
  },
  {
    slug: "business-compliance",
    icon: CheckSquare,
    title: "Business Compliance",
    shortDesc: "Ongoing regulatory compliance management for your business.",
    overview:
      "We manage your ongoing regulatory obligations — licenses, renewals, and statutory filings — across tax, labor, and corporate frameworks.",
    process: ["Compliance Audit", "Calendar & Checklist Setup", "Ongoing Filing & Renewals", "Quarterly Compliance Review"],
    documents: ["Business registration documents", "Existing licenses & registrations", "Financial records", "Employee/labour records (if applicable)"],
    benefits: [
      "Centralized view of all micro and macro business compliances",
      "Vastly reduced risk of surprise legal notices or operating bans",
      "Proactive notifications before any license expiration date",
      "Uninterrupted peace of mind to scale core business metrics",
    ],
    pricingNote: "Custom quote structured cleanly around specific license counts.",
    faqs: [
      { q: "What compliances are typically covered?", a: "General tax targets, MCA corporate tracks, Shop & Establishment acts, Professional Tax, and basic municipal licensing." },
      { q: "Is this suitable for multi-state businesses?", a: "Yes, we organize localized tracks for entities scaling operations across multiple Indian states." },
      { q: "Do you send renewal reminders?", a: "Yes, a dashboard-driven operational calendar with active milestones is maintained for your account." },
    ],
  },
];

export const getTaxServiceBySlug = (slug) => taxServices.find((s) => s.slug === slug);