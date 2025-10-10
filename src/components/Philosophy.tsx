import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const words = ["TECHNOLOGY", "SHOULD SOLVE", "REAL PROBLEMS", "FOR REAL PEOPLE"];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center section-padding">
      <div className="text-center max-w-5xl mx-auto">
        {words.map((word, index) => (
          <motion.div
            key={index}
            className="font-display text-h3 font-bold mb-6"
            style={{ lineHeight: 2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.div>
        ))}

        <motion.p
          className="text-body-small font-body mt-12 opacity-70"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Especially in markets that need it most.
        </motion.p>
      </div>
    </section>
  );
};
