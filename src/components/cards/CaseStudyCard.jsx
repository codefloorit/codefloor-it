import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";

const CaseStudyCard = ({ study, index = 0 }) => {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <Link
        to={`/case-studies/${study.slug}`}
        className="relative bg-[#0A0F1A] border border-white/5 group flex flex-col h-full p-7 sm:p-8 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-2xl overflow-hidden"
      >
        {/* Heritage Geometry Framework Accent Marks */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-colors duration-300" />

        {/* Corporate Segment Hub */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase bg-[#060913] border border-white/5 px-2.5 py-1">
            {study.industry}
          </span>
          <div className="flex h-8 w-8 items-center justify-center bg-[#060913] border border-white/5 text-white/40 group-hover:text-[#F5D76E] group-hover:border-[#D4AF37]/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
            <ArrowUpRight size={15} className="stroke-[2.5]" />
          </div>
        </div>

        {/* Core Case Narrative Title */}
        <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
          {study.title}
        </h3>

        {/* High Executive Summary Detail */}
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 flex-1 font-normal font-sans group-hover:text-white/80 transition-colors duration-300">
          {study.summary}
        </p>

        {/* Quantum Institutional Metric Ledger */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/5 relative">
          {/* Subtle vertical architectural accent gridline */}
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/[0.03]" />
          <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/[0.03]" />
          
          {study.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="relative z-10">
              <p className="font-mono text-[#F5D76E] font-bold text-sm sm:text-base tracking-tight group-hover:text-white transition-colors duration-300">
                {m.value}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-1 leading-tight group-hover:text-[#D4AF37]/70 transition-colors duration-300">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </Link>
    </Reveal>
  );
};

export default CaseStudyCard;