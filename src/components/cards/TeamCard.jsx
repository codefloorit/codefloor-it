import { FaLinkedinIn } from "react-icons/fa";
import Reveal from "../common/Reveal";

const TeamCard = ({ name, role, bio, initials, index = 0 }) => {
  return (
    <Reveal delay={(index % 4) * 0.08}>
      <div className="relative bg-[#0A0F1A] border border-white/5 group p-6 text-center h-full flex flex-col items-center transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-xl overflow-hidden">
        {/* Heritage Geometric Corner Line Accent */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
        
        {/* Avatar Architecture */}
        <div className="relative mb-5 mt-2">
          {/* Hexagonal/Square Heritage Framing for Initials instead of simple circle */}
          <div className="flex h-20 w-20 items-center justify-center bg-[#060913] border-2 border-[#D4AF37]/40 font-serif text-xl font-bold text-[#F5D76E] group-hover:border-[#D4AF37] group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F5D76E] group-hover:text-[#0A0F1A] group-hover:scale-105 transition-all duration-300 shadow-md">
            {initials}
          </div>
          
          {/* Luxury LinkedIn Link Plate */}
          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center bg-[#060913] border border-[#D4AF37]/30 text-[#F5D76E] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#060913]">
            <FaLinkedinIn size={12} />
          </span>
        </div>

        {/* Identity Registry */}
        <h3 className="font-serif font-bold text-white text-base tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
          {name}
        </h3>
        
        {/* Professional Designation Matrix */}
        <p className="text-[#D4AF37] text-[11px] font-mono uppercase tracking-[0.15em] mt-1.5">
          ✦ {role}
        </p>
        
        {/* Executive Bio Narrative */}
        <p className="text-xs sm:text-sm text-white/60 mt-4 leading-relaxed font-normal font-sans group-hover:text-white/80 transition-colors duration-300">
          {bio}
        </p>
      </div>
    </Reveal>
  );
};

export default TeamCard;