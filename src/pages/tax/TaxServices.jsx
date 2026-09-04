import PageHero from "../../components/common/PageHero";
import ServiceCard from "../../components/cards/ServiceCard";
import CTA from "../../components/sections/CTA";
import { taxServices } from "../../data/taxServices";

const TaxServices = () => {
  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      {/* Luxury Configured PageHero */}
      <PageHero
        eyebrow="TAXATION & COMPLIANCE REGISTRY"
        title="Compliance handled by people who actually read the fine print."
        description="15 services covering tax filing, registration, and ongoing compliance — managed by certified professionals."
        breadcrumbItems={[{ label: "Tax & Financial Services" }]}
      />

      {/* Main Corporate Registry Catalog */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        {/* Heritage Backdrop Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Section Heading Decor Hook */}
          <div className="mb-12 border-b border-white/5 pb-6 max-w-xs">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase block">
              ✦ ARCHITECTURAL PILLARS
            </span>
          </div>

          {/* Premium Legacy Service Card Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((s, i) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                shortDesc={s.shortDesc}
                to={`/tax-services/${s.slug}`}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Sovereign Framework Call To Action Block */}
      <CTA
        eyebrow="NOT SURE WHAT YOU NEED?"
        title="Let our tax experts assess your requirements — free."
        primaryLabel="Book a Free Consultation"
        primaryTo="/contact"
      />
    </div>
  );
};

export default TaxServices;