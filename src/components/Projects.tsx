import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects, type Project } from "@/data/projects";

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className="project-block pt-12 pb-16 px-2 md:px-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="project-number text-h2 font-display font-bold mb-4 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.2 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.number}
      </motion.div>

      <motion.h3
        className="text-h3 font-display font-bold mb-2 project-title"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.name}
      </motion.h3>

      <motion.p
        className="text-body font-body italic mb-6 opacity-70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : {}}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.tagline}
      </motion.p>

      <motion.p
        className="text-body-small font-body max-w-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.description}
      </motion.p>

      <motion.div
        className="text-metadata font-body space-y-1 opacity-70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>Stack: {project.stack}</p>
        <p>Status: {project.status}</p>
        <p>Associated: {project.associated}</p>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="min-h-screen section-padding">
      <div className="container-swiss">
        <motion.h2
          className="text-section-label section-kicker font-display mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          SELECTED PROJECTS
        </motion.h2>

        <div>
          {projects.map((project, index) => (
            <ProjectBlock key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
