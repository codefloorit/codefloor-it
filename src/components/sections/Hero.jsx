
// import { useState } from "react";
// import { Shield, BookOpen, Coins, ChevronRight, Check, Wrench, Landmark, Cpu } from "lucide-react";

// const HeritageEcosystemGrid = () => {
//   const [activeTab, setActiveTab] = useState("bharatfundaxis");

//   const ventures = {
//     alysian: {
//       badge: "The Digital Vishwakarma Architecture",
//       title: "Alysian",
//       subtitle: "Private Limited",
//       tagline: "Empowering Modern Infrastructure & Technology Engines",
//       objectText: "To provide innovative IT and digital business solutions including software development, digital marketing, branding, logo design, web development, business consulting, and technology-enabled services, while developing and operating flagship business ventures to deliver specialized financial ecosystems.",
//       highlights: ["Enterprise Web & IT Automation", "Strategic Business Turnaround Consulting", "Corporate Core Infrastructure Management"],
//       themeColor: "#E6C655",
//       // Pure CSS Visual Graphic: Digital Loom & Blueprint Mandli Matrix
//       visualMarkup: (
//         <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-[#070D19] border-2 border-[#D4AF37]/20 p-6">
//           <div className="absolute inset-2 border border-[#D4AF37]/10 border-dashed" />
//           <div className="absolute w-48 h-48 rounded-full border border-[#D4AF37]/20 animate-spin [animation-duration:40s] flex items-center justify-center">
//             <div className="w-40 h-40 rounded-full border border-dashed border-[#D4AF37]/10" />
//           </div>
//           <div className="relative z-10 text-center space-y-3">
//             <div className="mx-auto w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center rotate-45">
//               <Cpu className="-rotate-45 text-[#F5D76E]" size={28} />
//             </div>
//             <p className="font-serif text-xs uppercase tracking-widest text-[#F5D76E] mt-4">The Digital Engine</p>
//             <div className="text-[11px] font-mono text-white/40 border-t border-white/10 pt-2 px-2">
//               Bespoke Software & Enterprise Frameworks
//             </div>
//           </div>
//         </div>
//       )
//     },
//     accountingwaale: {
//       badge: "The Absolute Financial Shastras",
//       title: "AccountingWaale",
//       subtitle: "Corporate Accounts & Tax Compliance",
//       tagline: "Precision Bookkeeping, Tax Optimization & Fiscal Balance",
//       objectText: "To provide professional accounting, bookkeeping, GST, income tax, compliance, payroll, auditing, business registration, and financial advisory services, along with practical accounting training, comprehensive internship programs, and skill development for aspiring finance professionals.",
//       highlights: ["End-to-End GST & Income Tax Filings", "Corporate Audit & Payroll Protocols", "Practical Professional Training Modules"],
//       themeColor: "#C49E2D",
//       // Pure CSS Visual Graphic: Traditional Bahi Khata (Ledger Records) Graphic
//       visualMarkup: (
//         <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between bg-[#0B1220] border-2 border-[#D4AF37]/30 p-5">
//           <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-3">
//             <span className="font-serif text-xs font-bold text-[#F5D76E] tracking-widest">REGISTRY & LEDGER</span>
//             <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#D4AF37]" />
//           </div>
//           <div className="space-y-3 my-auto">
//             {[
//               { label: "GST Compliance Profile", status: "VERIFIED" },
//               { label: "Corporate Audit Matrix", status: "COMPLIANT" },
//               { label: "Tax & Advisory Ledger", status: "BALANCED" }
//             ].map((row, i) => (
//               <div key={i} className="flex justify-between items-center bg-white/[0.02] p-2.5 border border-white/5">
//                 <span className="text-xs text-white/60 font-mono">{row.label}</span>
//                 <span className="text-[10px] font-bold tracking-wider bg-[#D4AF37]/10 text-[#F5D76E] px-2 py-0.5 border border-[#D4AF37]/30">{row.status}</span>
//               </div>
//             ))}
//           </div>
//           <div className="text-[10px] font-mono text-white/30 text-center italic border-t border-white/5 pt-2">
//             Securing Financial Integrity At Every Step
//           </div>
//         </div>
//       )
//     },
//     bharatfundaxis: {
//       badge: "Empowering Traditional Artisans & Entrepreneurs",
//       title: "BharatFundAxis",
//       subtitle: "Funding Growth. Empowering Dreams.",
//       tagline: "Supporting The Skilled Hands & Scaled Enterprises of Bharat",
//       objectText: "To offer financial awareness, institutional funding assistance, business loan guidance, structural investment support, financial consultancy, company registration, statutory business certifications, licensing, and compliance support services for startups and entrepreneurs.",
//       highlights: ["MSME Loans & Capital Access Up to ₹2 Crore", "Statutory Business Certifications & Licensing", "Collateral-Free Institutional Guidance Matrix"],
//       themeColor: "#D4AF37",
//       // Pure CSS Visual Graphic: Inspired by Vishwakarma Traditional Craft Elements & Arch Motif
//       visualMarkup: (
//         <div className="relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#0F172A] to-[#070D19] border-2 border-[#D4AF37] p-6 flex flex-col justify-between overflow-hidden">
//           {/* Subtle Indian Fort/Arch Style Corner Borders */}
//           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
//           <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border-4 border-[#D4AF37]/10 pointer-events-none" />
          
//           <div className="text-center space-y-1">
//             <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-mono">Flagship Initiative</p>
//             <h4 className="font-serif text-lg font-bold text-[#F5D76E] tracking-wide">LOAN ASSISTANCE MATRIX</h4>
//           </div>

//           {/* Core Traditional Identity Graphic (Shield/Seal hybrid) */}
//           <div className="my-4 relative mx-auto w-32 h-32 rounded-full border-2 border-dashed border-[#D4AF37]/40 flex items-center justify-center bg-[#070D19]">
//             <div className="w-24 h-24 rounded-full border border-[#D4AF37]/60 flex flex-col items-center justify-center text-center p-2 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
//               <span className="text-[9px] font-mono tracking-wider text-white/60 uppercase">UP TO</span>
//               <span className="text-xl font-serif font-black text-[#F5D76E]">₹10CR*</span>
//               <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-tight mt-0.5">Collateral Guidance</span>
//             </div>
//           </div>

//           {/* Quick Craft/Business Node Grid */}
//           <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono border-t border-white/10 pt-3">
//             <div className="p-1.5 bg-white/[0.02] border border-white/5 rounded">Carpenters</div>
//             <div className="p-1.5 bg-white/[0.02] border border-white/5 rounded text-[#F5D76E]">Blacksmiths</div>
//             <div className="p-1.5 bg-white/[0.02] border border-white/5 rounded">Potters</div>
//           </div>
//         </div>
//       )
//     }
//   };

//   const currentData = ventures[activeTab];

//   return (
//     <section className="relative overflow-hidden bg-[#060913] py-24 px-4 sm:px-6 lg:px-8 text-white w-full border-b-4 border-[#D4AF37]">
//       {/* Background Subtle Traditional Canvas Grid */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
//       {/* Royal Background Aura */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[200px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto w-full relative z-10">
        
//         {/* Heritage Corporate Header Block */}
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
//           <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
//             <span className="h-1.5 w-1.5 bg-[#D4AF37] rotate-45" />
//             GROW YOUR SKILLS, BUILD YOUR BUSINESS
//             <span className="h-1.5 w-1.5 bg-[#D4AF37] rotate-45" />
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
//             The Structural Corporate Ecosystem
//           </h2>
//           <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
//         </div>

//         {/* Master Structural Heritage Split Layout (No Slider/Scroll) */}
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
//           {/* LEFT COLUMN: Deep Legacy Architecture Nav Cards */}
//           <div className="lg:col-span-4 flex flex-col justify-between gap-4">
//             {Object.keys(ventures).map((key) => {
//               const item = ventures[key];
//               const isSelected = activeTab === key;
//               return (
//                 <button
//                   key={key}
//                   onClick={() => setActiveTab(key)}
//                   className={`w-full text-left p-6 transition-all duration-300 relative rounded-none border-2 flex-1 flex flex-col justify-between group ${
//                     isSelected 
//                       ? "bg-[#0B1324] border-[#D4AF37] shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
//                       : "bg-[#0B1324]/40 border-white/5 hover:border-white/20 hover:bg-[#0B1324]/70"
//                   }`}
//                 >
//                   {/* Traditional Top Accent Corner */}
//                   {isSelected && (
//                     <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
//                   )}

//                   <div className="space-y-4 w-full">
//                     <div className="flex justify-between items-start w-full">
//                       <div className={`p-3 rounded-none border transition-all ${
//                         isSelected ? "bg-[#D4AF37]/10 border-[#D4AF37] text-[#F5D76E]" : "bg-white/5 border-white/10 text-white/40"
//                       }`}>
//                         {key === "alysian" && <Shield size={20} />}
//                         {key === "accountingwaale" && <BookOpen size={20} />}
//                         {key === "bharatfundaxis" && <Coins size={20} />}
//                       </div>
//                       <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isSelected ? "text-[#F5D76E]" : "text-white/30"}`}>
//                         {key === "bharatfundaxis" ? "Flagship Core" : "Ecosystem Node"}
//                       </span>
//                     </div>

//                     <div>
//                       <h3 className={`text-lg font-serif font-bold tracking-wide transition-colors ${isSelected ? "text-white" : "text-white/70 group-hover:text-white"}`}>
//                         {item.title.split(" ")[0]} <span className="text-xs block font-sans font-normal text-white/40 mt-0.5">{item.subtitle}</span>
//                       </h3>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1 text-xs font-mono tracking-wider text-[#D4AF37] pt-6 opacity-80 group-hover:opacity-100 mt-auto">
//                     <span>Inspect Charter</span>
//                     <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {/* RIGHT COLUMN: The Heritage Visual Blueprint Panel */}
//           <div className="lg:col-span-8 bg-[#0B1324] border-2 border-white/10 p-6 sm:p-10 relative flex flex-col justify-between shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
            
//             {/* Real Traditional Frame Overlays */}
//             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
//             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
//             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
//             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

//             <div className="grid md:grid-cols-12 gap-8 items-start h-full">
              
//               {/* Textual Core & Objectives */}
//               <div className="md:col-span-7 space-y-6 flex flex-col justify-between h-full">
//                 <div className="space-y-4">
//                   <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F5D76E] bg-[#D4AF37]/5 px-3 py-1 border border-[#D4AF37]/20">
//                     <span>{currentData.badge}</span>
//                   </div>
                  
//                   <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight tracking-wide">
//                     {currentData.title}
//                     <span className="text-xs font-sans font-medium block text-[#D4AF37] mt-1 tracking-widest uppercase">{currentData.tagline}</span>
//                   </h3>

//                   <div className="p-4 bg-white/[0.02] border border-white/5 relative">
//                     <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
//                       <span className="text-[10px] font-mono font-black tracking-widest text-[#D4AF37] block mb-2 uppercase">Statutory Venture Object Clause:</span>
//                       {currentData.objectText}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Key Features Matrix Styled directly like the visual sheet points */}
//                 <div className="space-y-3 pt-4 border-t border-white/5">
//                   <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">Key Benefits & Ecosystem Target Pillars:</p>
//                   {currentData.highlights.map((highlight, index) => (
//                     <div key={index} className="flex items-start gap-3 group">
//                       <div className="mt-1 h-4 w-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
//                         <Check size={10} className="text-[#F5D76E]" />
//                       </div>
//                       <span className="text-xs sm:text-sm font-serif text-white/90 tracking-wide font-medium">{highlight}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Pure CSS Fine Art Design Representation Box */}
//               <div className="md:col-span-5 h-full flex items-center justify-center">
//                 <div className="w-full h-full relative p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
//                   {currentData.visualMarkup}
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>


//       </div>
//     </section>
//   );
// };

// export default HeritageEcosystemGrid

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coins,
  ChevronLeft,
  ChevronRight,
  Check,
  Cpu,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const HeritageHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = slide right, -1 = slide left
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: "alysian",
      badge: "Digital Infrastructure & Tech",
      title: "Codefloor It Tech LLP",
      tagline: "Modernizing Business Operations & Digital Ecosystems",
      objectText:
        "Architecting robust IT solutions, full-stack software engines, and strategic consulting platforms designed to automate business workflows and establish core digital stability.",
      highlights: [
        "Enterprise IT & Web Automation Systems",
        "Turnaround & Corporate Business Consulting",
        "Core Technology Infrastructure Management",
      ],
      icon: Cpu,
      bgImage:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80",
      stats: { value: "100%", label: "System Operational Integrity" },
      ventureLink: "https://www.alysianbusiness.com",
    },
    {
      id: "bharatfundaxis",
      badge: "Sovereign Capital & Growth",
      title: "BharatFundAxis",
      tagline: "Capital Access & Enterprise Growth Advisory",
      objectText:
        "Providing institutional funding assistance, business loan guidance, statutory licensing, and compliance frameworks for scaling enterprises and MSMEs.",
      highlights: [
        "MSME Loan Guidance & Capital Support",
        "Statutory Certifications & Business Licensing",
        "Institutional Investment Structuring",
      ],
      icon: Coins,
      bgImage:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=2000&q=80",
      stats: { value: "Up to ₹10Cr*", label: "Funding Guidance Threshold" },
      ventureLink: "https://www.bharatfundaxis.com",
    },
  ];

  // Smooth Auto-Slide (Every 2 seconds)
  useEffect(() => {
    let interval = null;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, slides.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  const current = slides[currentSlide];
  const IconComponent = current.icon;

  // Horizontal Motion Animation Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      className="relative w-full min-h-[85vh] bg-[#03060D] text-white overflow-hidden border-b border-[#D4AF37]/30 flex flex-col justify-between select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images with Fade Transition */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={current.bgImage}
            alt={current.title}
            className="w-full h-full object-cover object-center filter grayscale contrast-125 sepia-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03060D] via-[#03060D]/85 to-[#03060D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03060D] via-transparent to-[#03060D]/70" />
        </motion.div>
      </AnimatePresence>

      {/* Structural Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />

      {/* Top Header Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-8 px-6 sm:px-8 flex justify-between items-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
          <Sparkles size={12} className="text-[#D4AF37] animate-pulse" />
          Corporate Ecosystem Blueprint
        </div>
        <div className="font-mono text-xs text-white/40 tracking-widest uppercase">
          0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>

      {/* Main Content Body with Smooth Motion Sliding */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-8 py-10 my-auto overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid lg:grid-cols-12 gap-10 items-center w-full"
          >
            {/* Left Column: Information Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-[#F5D76E] bg-[#D4AF37]/10 px-3 py-1 border border-[#D4AF37]/20 backdrop-blur-md rounded-sm">
                <span>{current.badge}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
                  {current.title}
                </h1>
                <p className="text-xs sm:text-sm font-sans text-[#D4AF37] tracking-widest uppercase font-medium">
                  {current.tagline}
                </p>
              </div>

              <div className="p-5 bg-[#090F1E]/60 border border-white/10 backdrop-blur-md relative rounded-sm shadow-xl">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#D4AF37]" />
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans">
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] block mb-1 uppercase font-bold">
                    Ecosystem Mandate:
                  </span>
                  {current.objectText}
                </p>
              </div>

              {/* Operational Focus Points */}
              <div className="space-y-2.5 pt-1">
                <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-semibold">
                  Operational Focus Areas:
                </p>
                <div className="grid gap-2">
                  {current.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-[#F5D76E]" />
                      </div>
                      <span className="text-xs sm:text-sm font-sans text-white/90">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Single "Visit Venture" Button */}
              <div className="pt-4">
                <a
                  href={current.ventureLink}
                  className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#D4AF37] hover:bg-[#F5D76E] text-black font-sans font-bold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-all shadow-lg shadow-[#D4AF37]/15 transform active:scale-95 group"
                >
                  <span>Visit Venture</span>
                  <ExternalLink
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <a
                href={current.ventureLink}
                className="group relative w-full max-w-sm aspect-square bg-[#090F1E]/80 border border-[#D4AF37]/40 hover:border-[#D4AF37] p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md rounded-sm transition-all duration-300"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                    NODE METRICS
                  </span>
                  <IconComponent
                    className="text-[#F5D76E] group-hover:scale-110 transition-transform"
                    size={20}
                  />
                </div>

                <div className="my-auto text-center space-y-3">
                  <div className="mx-auto w-24 h-24 rounded-full border border-dashed border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center bg-[#03060D]/60 p-2 transition-all">
                    <div className="w-full h-full rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all">
                      <span className="text-xl font-serif font-bold text-[#F5D76E]">
                        {current.stats.value}
                      </span>
                    </div>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/70">
                    {current.stats.label}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] font-mono text-white/50 group-hover:text-white transition-colors">
                  <span>EXPLORE VENTURE DETAILS</span>
                  <ArrowRight
                    size={12}
                    className="text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Control Bar */}
      <div className="relative z-20 bg-[#03060D]/90 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`px-4 py-2 text-xs font-mono transition-all duration-200 border flex items-center gap-2 rounded-sm ${
                    isActive
                      ? "bg-[#D4AF37] text-black font-bold border-[#D4AF37]"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>0{idx + 1}.</span>
                  <span>{slide.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-2 border border-white/10 bg-white/5 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all rounded-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2 border border-white/10 bg-white/5 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all rounded-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageHeroSlider;