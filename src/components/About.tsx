import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const columns = [
    {
      title: "WHO",
      content: [
        "Co-Founder & Co-CEO",
        "at YT Groups.",
        "",
        "Building tech solutions",
        "for African markets.",
        "",
        "Presec alum. Robotics",
        "club Secretary General.",
        "",
        "Currently interning",
        "at Iridis Labs.",
      ],
    },
    {
      title: "WHAT",
      content: [
        "Systems Architecture",
        "Database Design",
        "Strategic Planning",
        "Full-Stack Development",
        "",
        "MySQL • PostgreSQL",
        "Python • Java",
        "Project Leadership",
      ],
    },
    {
      title: "WHY",
      content: [
        "Technology should",
        "empower African",
        "businesses to compete",
        "globally. I build",
        "tools that level",
        "the playing field.",
      ],
    },
  ];

  return (
    <section ref={ref} className="min-h-screen section-padding">
      <div className="container-swiss">
        <motion.h2
          className="text-section-label font-display mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          ABOUT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {columns.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: colIndex * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="text-body font-display font-bold mb-4 pb-2 border-b border-white">
                {column.title}
              </h3>
              <div className="text-body-small font-body space-y-1">
                {column.content.map((line, lineIndex) => (
                  <p key={lineIndex} className={line === "" ? "h-4" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
