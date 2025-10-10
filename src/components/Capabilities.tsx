import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillColumns = [
  {
    title: "STRATEGY",
    skills: [
      "Start-up Leadership",
      "Project Coordination",
      "Strategic Planning",
      "Partnership Development",
      "Tech Consultancy",
    ],
  },
  {
    title: "SYSTEMS",
    skills: [
      "Database Architecture",
      "MySQL",
      "PostgreSQL",
      "Workflow Optimization",
      "Systems Design",
    ],
  },
  {
    title: "DEVELOPMENT",
    skills: [
      "Python",
      "Java",
      "Object-Oriented Design",
      "Critical Thinking",
      "Problem Solving",
    ],
  },
];

const additionalSkills = ["PUBLIC SPEAKING", "TIME MANAGEMENT", "TEAM LEADERSHIP"];

export const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center section-padding">
      <div className="container-swiss">
        <motion.h2
          className="text-h2 font-display font-bold text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          CAPABILITIES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {skillColumns.map((column, colIndex) => (
            <div key={column.title}>
              <motion.h3
                className="text-body font-display font-bold mb-6 pb-2 border-b border-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: colIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {column.title}
              </motion.h3>
              
              <div className="space-y-3">
                {column.skills.map((skill, skillIndex) => (
                  <motion.p
                    key={skill}
                    className="text-body-small font-body"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: colIndex * 0.1 + skillIndex * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {skill}
                  </motion.p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-body-small font-body font-bold tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {additionalSkills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < additionalSkills.length - 1 && " • "}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
