import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

// items: [{ q, a }]
const FAQAccordion = ({ items = [], defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={`relative bg-[#0A0F1A] border overflow-hidden transition-all duration-300 rounded-none ${
              isOpen ? "border-[#D4AF37]/50 shadow-xl" : "border-white/5 hover:border-white/10"
            }`}
          >
            {/* Architectural structural corner markers when item is active */}
            {isOpen && (
              <>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />
              </>
            )}

            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none group bg-[#0A0F1A]"
            >
              <span className={`font-serif font-bold text-[15px] sm:text-base tracking-wide transition-colors duration-300 ${
                isOpen ? "text-[#F5D76E]" : "text-white group-hover:text-[#D4AF37]"
              }`}>
                {item.q}
              </span>
              
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-none border transition-colors duration-300 ${
                  isOpen 
                    ? "bg-[#D4AF37]/10 border-[#D4AF37] text-[#F5D76E]" 
                    : "bg-[#060913] border-white/10 text-white/40 group-hover:border-[#D4AF37]/30 group-hover:text-[#D4AF37]"
                }`}
              >
                <Plus size={14} className="stroke-[2.5]" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-[#060913]/30"
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-white/70 leading-relaxed font-sans border-t border-white/5 pt-4">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;