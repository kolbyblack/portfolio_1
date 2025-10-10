import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  stack?: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2024 – PRESENT",
    role: "CO-FOUNDER & CO-CEO",
    company: "YT Groups",
    location: "Accra, Ghana",
    description:
      "Leading tech consultancy delivering tailored software solutions. Specializing in database systems, strategic planning, and project coordination for African businesses.",
    stack: "MySQL, PostgreSQL, Python, Java",
  },
  {
    year: "2024 – PRESENT",
    role: "INTERN",
    company: "Iridis Labs",
    location: "Legon, Ghana",
    description:
      "Supporting government and private sector projects. Database systems, workflow optimization, and project management.",
    stack: "MySQL, PostgreSQL",
  },
  {
    year: "2022 – 2023",
    role: "SECRETARY GENERAL",
    company: "Presec Robotics & Programming Club",
    location: "",
    description:
      "Administrative leadership, communication facilitation, event coordination for robotics competitions and workshops.",
  },
];

const ExperienceBlock = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="border-t border-white pt-8 pb-16">
        <motion.div
          className="text-body-small font-body mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.year}
        </motion.div>

        <motion.h3
          className="text-h3 font-display font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.role}
        </motion.h3>

        <motion.p
          className="text-body font-body mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.company}
          {item.location && ` · ${item.location}`}
        </motion.p>

        <motion.p
          className="text-body-small font-body max-w-3xl mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.description}
        </motion.p>

        {item.stack && (
          <motion.p
            className="text-metadata font-body opacity-70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Stack: {item.stack}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export const Experience = () => {
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
          EXPERIENCE
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((item, index) => (
            <ExperienceBlock key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
