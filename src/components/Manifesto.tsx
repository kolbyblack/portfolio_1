import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Manifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const lines = [
    "I BUILD SYSTEMS",
    "THAT SCALE,",
    "SOLUTIONS",
    "THAT MATTER.",
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center relative section-padding">
      <div className="text-center relative z-10">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="font-display text-h2 font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="absolute bottom-8 right-8 text-body-small font-body max-w-xs text-right"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        — Focused on African markets,<br />driven by technology.
      </motion.p>
    </section>
  );
};
