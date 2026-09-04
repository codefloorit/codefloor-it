import Reveal from "./Reveal";

/**
 * Standard section heading used across the site.
 * eyebrow: small mono label above the heading (encodes section context)
 * title: main heading — accepts a string or JSX for partial gradient emphasis
 * align: "left" | "center"
 */
const SectionTitle = ({ eyebrow, title, description, align = "center", className = "" }) => {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E] mb-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold leading-[1.15] text-white tracking-wide">
        {title}
      </h2>
      
      {description && (
        <p className="mt-4 text-sm sm:text-base text-white/60 font-sans leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionTitle;