import { clients } from "../../data/testimonials";

// Infinite CSS marquee of client names — duplicated once for a seamless loop.
const ClientsMarquee = () => {
  const doubled = [...clients, ...clients];

  // return (
  //   <section className="relative overflow-hidden bg-[#0A0F1A] py-12 border-y border-white/5">
  
  //     <div className="relative z-10 w-full overflow-hidden select-none py-2">
        
  //       {/* Mirror Edge Masking Layers - Blends perfectly with dark luxury theme */}
  //       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent z-10 pointer-events-none" />
  //       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent z-10 pointer-events-none" />
        
  //       {/* CSS Loop Content Rail */}
  //       <div className="flex w-max items-center animate-marquee">
  //         {doubled.map((name, i) => (
  //           <div
  //             key={`${name}-${i}`}
  //             className="flex items-center whitespace-nowrap group"
  //           >
  //             {/* Individual Text Element with Luxury Glow Switch */}
  //             <span className="mx-6 sm:mx-8 font-semibold tracking-wide text-sm sm:text-base text-white/40 group-hover:text-[#F5D76E] group-hover:drop-shadow-[0_0_15px_rgba(245,215,110,0.3)] transition-all duration-300">
  //               {name}
  //             </span>
              
  //             {/* Unique Minimalist Geometric Separator Asset */}
  //             <span className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37]/30 bg-[#D4AF37]/10 opacity-40 group-hover:opacity-100 group-hover:border-[#F5D76E] transition-all duration-300" />
  //           </div>
  //         ))}
  //       </div>

  //     </div>
  //   </section>
  // );
};

export default ClientsMarquee;