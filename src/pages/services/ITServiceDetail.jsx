import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import FAQAccordion from "../../components/common/FAQAccordion";
import Reveal from "../../components/common/Reveal";
import ServiceCard from "../../components/cards/ServiceCard";
import CTA from "../../components/sections/CTA";
import { getItServiceBySlug, itServices } from "../../data/itServices";

const ITServiceDetail = () => {
  const { slug } = useParams();
  const service = getItServiceBySlug(slug);

  useEffect(() => {
    if (service) document.title = `${service.title} | Codefloor It Tech LLP`;
  }, [service]);

  if (!service) return <Navigate to="/it-services" replace />;

  const related = itServices.filter((s) => s.slug !== slug && s.category === service.category).slice(0, 3);
  const Icon = service.icon;

  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      {/* Luxury Configured PageHero */}
      <PageHero
        eyebrow={service.category.toUpperCase()}
        title={service.title}
        description={service.heroDesc}
        breadcrumbItems={[{ label: "IT Services", path: "/it-services" }, { label: service.title }]}
      />

      {/* Features & Benefits Matrix */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          
          {/* Dynamic Feature Provision */}
          <Reveal direction="left" className="relative bg-[#0A0F1A] border border-white/5 p-8 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
              {Icon && <Icon size={22} />}
            </span>
            <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">What's included</h2>
            <ul className="flex flex-col gap-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-normal">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Dynamic Strategic Value Delivery */}
          <Reveal direction="right" delay={0.1} className="relative bg-[#0A0F1A] border border-white/5 p-8 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
              <TrendingUp size={22} />
            </span>
            <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">Why it matters</h2>
            <ul className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-normal">
                  <CheckCircle2 size={18} className="text-[#F5D76E] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Structured Process Blueprint */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ STRATEGIC WORKFLOW" title="Our process, start to finish" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {service.process.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="relative bg-[#060913] border border-white/5 p-6 h-full group transition-all hover:border-[#D4AF37]/30 shadow-2xl">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                  <span className="font-mono text-4xl font-black text-[#D4AF37]/10 mb-4 block group-hover:text-[#D4AF37]/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif font-bold text-white text-base leading-snug tracking-wide">{step}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign FAQ Repository */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ INQUIRY MATRIX" title={`Common questions about ${service.title}`} align="left" />
          <div className="mt-12 bg-[#0A0F1A] border border-white/5 p-2 shadow-2xl">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Relational Cross-Linked Modules */}
      {related.length > 0 && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionTitle eyebrow="✦ ARCHITECTURAL AFFILIATES" title="You might also need" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {related.map((s, i) => (
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
      )}

      {/* High-Contrast Luxury Theme Call To Action */}
      <CTA
        eyebrow="GET STARTED"
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        description="Get a free, no-obligation quote tailored to your requirements."
      />

      {/* Consultation Operational Desk Hook */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative bg-[#0A0F1A] border border-white/10 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">
              Prefer to talk it through first?
            </h3>
            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed font-normal">
              Book a free 20-minute consultation and we'll scope your structural project framework together.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] font-bold text-xs uppercase font-mono tracking-widest px-8 py-4 shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book a Consultation</span> 
              <ArrowRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServiceDetail;