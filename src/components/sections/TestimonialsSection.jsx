import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Sparkles, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

// Custom Luxury Card Component
const LuxuryTestimonialCard = ({ testimonial }) => {
  // Safely grab keys even if your data file uses slightly different naming conventions
  const reviewText = testimonial.text || testimonial.review || testimonial.content || "No review content provided.";
  const authorName = testimonial.name || "Anonymous Client";
  const authorRole = testimonial.role || testimonial.designation || "Founder";
  const authorCompany = testimonial.company || "Enterprise Partner";

  return (
    <div className="h-full w-full relative flex flex-col justify-between rounded-3xl border border-white/5 bg-[#0B1220]/60 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 hover:border-[#D4AF37]/30 hover:-translate-y-1 group shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Micro Inner Ambient Radial Glow */}
      <div className="absolute -right-16 -bottom-16 h-36 w-36 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-[#D4AF37]/10" />
      
      <div className="relative z-10 w-full">
        {/* Luxury Quote Indicator */}
        <div className="text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors duration-300 mb-6">
          <Quote size={36} fill="currentColor" stroke="none" />
        </div>

        {/* Core Review Narrative Text */}
        <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed italic mb-8">
          "{reviewText}"
        </p>
      </div>

      {/* Author Profile Footing Meta */}
      <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-6 mt-auto w-full">
        {testimonial.image && (
          <img 
            src={testimonial.image} 
            alt={authorName} 
            className="h-12 w-12 rounded-full object-cover border border-[#D4AF37]/30 flex-shrink-0"
          />
        )}
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-white tracking-wide text-sm sm:text-base group-hover:text-[#F5D76E] transition-colors truncate">
            {authorName}
          </h4>
          <p className="text-xs text-white/40 font-semibold tracking-wider uppercase mt-0.5 truncate">
            {authorRole} <span className="text-[#D4AF37]/60">@</span> {authorCompany}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // return (
  //   <section className="relative overflow-hidden bg-[#0A0F1A] py-24 text-white border-y border-white/5">
  //     {/* Background Micro Mesh Ambience */}
  //     <div className="absolute inset-0 bg-grid-pattern opacity-5 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
  //     <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />



  //     {/* Global Embedded CSS to override Swiper standard layout elements cleanly */}
  //     <style dangerouslySetInnerHTML={{__html: `
  //       .premium-swiper-global .swiper-pagination-bullet {
  //         background: rgba(255, 255, 255, 0.2) !important;
  //         opacity: 1 !important;
  //         width: 8px !important;
  //         height: 8px !important;
  //         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  //         border-radius: 9999px !important;
  //       }
  //       .premium-swiper-global .swiper-pagination-bullet-active {
  //         background: #F5D76E !important;
  //         width: 28px !important;
  //         box-shadow: 0 0 10px rgba(245, 215, 110, 0.4) !important;
  //       }
  //     `}} />
  //   </section>
  // );
};

export default TestimonialsSection;