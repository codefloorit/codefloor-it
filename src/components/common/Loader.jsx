import { motion } from "framer-motion";
import logo from "../../assets/l.png";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#060913]"
    >
      <div
        className="flex h-24 w-24 items-center justify-center"
        style={{ perspective: 800 }}
      >
        {/* Corporate identity core asset — rotating vertically */}
        <motion.img
          src={logo}
          alt="Codefloor It Tech LLP"
          className="h-16 w-16 object-contain brightness-110"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
      </div>

      {/* Luxury bold monospace blueprint branding */}
      <p
        className="
          font-mono
          text-xl
          font-black
          tracking-[0.4em]
          uppercase
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#F5D76E]
          to-[#D4AF37]
          mt-2
        "
      >
        Codefloor
      </p>
    </motion.div>
  );
};

export default Loader;
