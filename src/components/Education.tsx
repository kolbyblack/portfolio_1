import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="min-h-screen section-padding">
      <div className="container-swiss">
        <motion.h2
          className="text-section-label font-display mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          EDUCATION
        </motion.h2>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-h3 font-display font-bold mb-2">
            Presbyterian Boys Secondary School
          </h3>
          <motion.p
            className="text-body font-body mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            2021 – 2023
          </motion.p>
          <motion.p
            className="text-body-small font-body opacity-70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Skills: Time Management, Public Speaking, Leadership, Team Collaboration
          </motion.p>
        </motion.div>

        <div className="border-t border-white pt-8">
          <motion.h3
            className="text-section-label font-display mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            CERTIFICATIONS & AWARDS
          </motion.h3>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-body-large font-display font-bold mb-2">
              Cybercrime Awareness Workshop
            </h4>
            <p className="text-body-small font-body mb-2 opacity-70">
              U.S. Department of State, Bureau of International Narcotics and Law Enforcement Affairs
            </p>
            <p className="text-metadata font-body opacity-50">
              November 2022
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-body-large font-display font-bold mb-2">
              Innovative Student of the Year
            </h4>
            <p className="text-body-small font-body mb-2 opacity-70">
              Computer Science Department
            </p>
            <p className="text-metadata font-body opacity-50">
              2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
