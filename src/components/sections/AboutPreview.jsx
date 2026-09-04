import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import { siteConfig } from "../../data/siteConfig";

const highlights = [
  "One team spanning development, design, marketing & finance",
  "Certified Chartered Accountants and Company Secretaries in-house",
  "11+ years serving businesses across India",
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1A] py-24 text-white border-y border-white/5">
      {/* Background Subtle Ambience Sync */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Descriptive Column */}
        <div className="lg:col-span-7">
          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs font-bold tracking-widest text-[#F5D76E] uppercase mb-6 select-none">
              <Sparkles size={12} className="animate-pulse" />
              About Codefloor
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6">
              The technology partner &amp; compliance partner — <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">finally the same team.</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium mb-8">
              Founded in {siteConfig.founded}, Codefloor It Tech LLP was built
              on a simple observation: growing businesses were juggling separate vendors for their
              software, their books, and their tax filings — and paying for the disconnect in missed
              deadlines. We brought both disciplines natively under one group.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm sm:text-base text-white/80 group">
                  <CheckCircle2 size={20} className="text-[#F5D76E] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transform hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
            >
              More About Us 
              <ArrowRight size={16} className="text-[#F5D76E] group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Right Metric Bento Box Column */}
        <div className="lg:col-span-5 w-full">
          <Reveal direction="right" delay={0.1}>
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
              <div className="rounded-[22px] bg-[#0B1220]/90 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                {/* Micro Ambient Glow Inside Stats Card */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: siteConfig.founded, highlight: false },
                    { label: "Team Members", value: "10+", highlight: true },
                    { label: "Cities Served", value: "25+", highlight: false },
                    { label: "Retention Rate", value: "96%", highlight: true },
                  ].map((item, idx) => (
                    <div 
                      key={item.label} 
                      className={`border border-white/5 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/30 hover:-translate-y-1 ${
                        item.highlight 
                          ? "bg-gradient-to-b from-white/[0.04] to-transparent mt-4 lg:mt-0" 
                          : "bg-white/[0.01]"
                      }`}
                    >
                      <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                        {item.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/50 font-bold uppercase tracking-widest mt-2 leading-none">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;