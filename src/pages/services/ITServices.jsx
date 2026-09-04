import { useMemo, useState } from "react";
import PageHero from "../../components/common/PageHero";
import ServiceCard from "../../components/cards/ServiceCard";
import CTA from "../../components/sections/CTA";
import { itServices } from "../../data/itServices";

const ITServices = () => {
  const categories = useMemo(
    () => ["All", ...new Set(itServices.map((s) => s.category))],
    []
  );
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? itServices : itServices.filter((s) => s.category === filter);

  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      {/* Luxury Configured PageHero */}
      <PageHero
        eyebrow="CAPABILITY DEPLOYMENT"
        title="Every technology capability your business needs, in one place."
        description="20 services across development, design, marketing, and infrastructure — delivered by one accountable team."
        breadcrumbItems={[{ label: "IT Services" }]}
      />

      {/* Main Structural Inventory Catalog */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        {/* Heritage Backdrop Canvas */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Institutional Matrix Filtering Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-white/5 pb-8 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-none text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] border-transparent shadow-[0_0_20px_rgba(212,175,55,0.2)] scale-[1.02]"
                    : "border-white/10 bg-[#0A0F1A]/60 text-white/50 hover:text-[#F5D76E] hover:border-[#D4AF37]/40"
                }`}
              >
                {/* Micro corner accent indicator for active pillar */}
                {filter === cat && (
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#FFF5C3] border border-[#0A0F1A]" />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Premium Legacy Service Card Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                shortDesc={s.shortDesc}
                to={`/it-services/${s.slug}`}
                index={i}
              />
            ))}
          </div>
          
        </div>
      </section>

      {/* Sovereign Framework Call To Action Block */}
      <CTA
        eyebrow="NOT SURE WHERE TO START?"
        title="Tell us the problem — we'll recommend the service."
        primaryLabel="Book a Free Consultation"
        primaryTo="/contact"
      />
    </div>
  );
};

export default ITServices;