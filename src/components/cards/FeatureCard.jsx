import { CheckCircle2 } from "lucide-react";
import Reveal from "../common/Reveal";

const FeatureCard = ({ icon: Icon, title, desc, index = 0 }) => {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <div className="relative bg-[#0A0F1A] border border-white/5 p-6 sm:p-7 h-full flex gap-5 group transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-xl overflow-hidden">
        {/* Heritage Geometric Corner Line Accent */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
        
        {/* Dynamic Architectural Icon Chamber */}
        <span className="flex-shrink-0 flex h-11 w-11 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] group-hover:border-[#D4AF37]/40 group-hover:text-[#FFF5C3] transition-all duration-300 shadow-md">
          {Icon ? <Icon size={20} strokeWidth={1.8} /> : <CheckCircle2 size={20} />}
        </span>
        
        {/* Feature Context Hub */}
        <div>
          <h3 className="font-serif font-bold text-white text-base tracking-wide mb-2 group-hover:text-[#F5D76E] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal font-sans group-hover:text-white/80 transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default FeatureCard;