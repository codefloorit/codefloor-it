import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, rating, quote, initials } = testimonial;
  return (
    <div className="relative bg-[#0A0F1A] border border-white/5 p-7 sm:p-8 h-full flex flex-col justify-between group transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-2xl overflow-hidden">
      {/* Heritage Geometry Accent Marks */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-[#D4AF37]/40 transition-colors duration-300" />

      <div>
        {/* Top Operational Row: Quote & Rating Matrix */}
        <div className="flex items-center justify-between mb-6">
          <Quote size={28} className="text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors duration-300 transform -scale-x-100" />
          <div className="flex gap-1 bg-[#060913] border border-white/5 px-2 py-1 shadow-inner">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < rating ? "fill-[#F5D76E] text-[#F5D76E]" : "fill-transparent text-white/10"}
              />
            ))}
          </div>
        </div>

        {/* Core Testimonial Narrative */}
        <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed font-sans font-normal italic mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Corporate Identity Profile Desk */}
      <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
        {/* Architectural Avatar Chamber */}
        <div className="flex h-11 w-11 items-center justify-center bg-[#060913] border border-[#D4AF37]/30 font-serif font-bold text-[#F5D76E] text-sm group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F5D76E] group-hover:text-[#0A0F1A] transition-all duration-300 shadow-md">
          {initials}
        </div>
        
        <div>
          <p className="font-serif font-bold text-white text-sm tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
            {name}
          </p>
          <p className="text-[#D4AF37] font-mono uppercase text-[10px] tracking-wider mt-0.5">
            ✦ {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;