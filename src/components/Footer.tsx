import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronUp } from "lucide-react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="py-16">
      <motion.div
        className="text-center text-metadata font-body space-y-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="opacity-70">Built with precision</p>
        <p className="opacity-50">React • Framer Motion • Swiss Principles</p>
        <p className="opacity-70 mt-4">© 2025 Yorke</p>
        
        <button
          onClick={scrollToTop}
          className="mt-8 flex items-center justify-center mx-auto gap-1 hover:opacity-70 transition-opacity group"
        >
          <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>Back to top</span>
        </button>
      </motion.div>
    </footer>
  );
};
