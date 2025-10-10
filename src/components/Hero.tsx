import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <motion.h1
        className="font-display text-hero font-bold text-center"
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        YORKE
      </motion.h1>
      
      <motion.p
        className="text-body-small font-body mt-4 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        Systems Architect • Technologist • Co-Founder
      </motion.p>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};
