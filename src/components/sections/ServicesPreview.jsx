import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard from "../cards/ServiceCard";
import { itServices } from "../../data/itServices";
import { taxServices } from "../../data/taxServices";

const ServicesPreview = () => {
  const [tab, setTab] = useState("it");
  const list = tab === "it" ? itServices.slice(0, 6) : taxServices.slice(0, 6);
  const viewAllPath = tab === "it" ? "/it-services" : "/tax-services";

  return (
    <section className="relative overflow-hidden bg-[#0A0F1A] py-24 text-white border-t border-white/5">
      {/* Background Subtle Amience to tie with the Hero */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Custom Formatted Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs font-bold tracking-widest text-[#F5D76E] uppercase mb-4 select-none">
            <Sparkles size={12} />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Two practices. <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">One accountable team.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            From your first line of code to your next GST filing — pick a track below.
          </p>
        </div>

        {/* Premium Gold Luxury Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full p-1.5 flex gap-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {[
              { id: "it", label: "IT Services" },
              { id: "tax", label: "Tax & Financial" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 select-none ${
                  tab === t.id
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-[1.02]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean and Adaptive Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {list.map((s, i) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              shortDesc={s.shortDesc}
              to={`/${tab === "it" ? "it-services" : "tax-services"}/${s.slug}`}
              index={i}
            />
          ))}
        </div>

        {/* CTA Call to Action Footer Button */}
        <div className="text-center mt-16">
          <Link 
            to={viewAllPath} 
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transform hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
          >
            View All {tab === "it" ? "IT" : "Tax & Financial"} Services 
            <ArrowRight size={16} className="text-[#F5D76E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;