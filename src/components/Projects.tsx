import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  number: string;
  name: string;
  tagline: string;
  description: string;
  stack: string;
  status: string;
  associated: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "NEXUS",
    tagline: "Next-gen Economic Exchange and User Solutions",
    description:
      "A SaaS platform for Microfinance Institutions streamlining credit assessment, loan management, and compliance reporting. Automated scoring, secure record-keeping, scalable architecture for financial inclusion.",
    stack: "PostgreSQL, Python, Object-Oriented Design",
    status: "In Development (Apr 2025 – Present)",
    associated: "YT Groups",
  },
  {
    number: "02",
    name: "ALPHA",
    tagline: "Advanced Learning Prediction and Hedging Algorithm",
    description:
      "Trading algorithm designed to forecast market movements. Integrates future-oriented simulations and real-time adjustments to outperform traditional strategies.",
    stack: "Python, Machine Learning, Real-time Data Processing",
    status: "In Development (Feb 2025 – Present)",
    associated: "YT Groups",
  },
  {
    number: "03",
    name: "POLYEDGE",
    tagline: "Prediction Market Intelligence Platform",
    description:
      "Browser-based prediction market intelligence tool that aggregates live news, applies multi-factor AI signal analysis, and produces quantified betting intelligence for Polymarket users. Features a 2-call Anthropic API architecture, confidence scoring, sentiment analysis, and signal breakdowns across momentum, media coverage, expert consensus, and market sentiment.",
    stack: "HTML5, CSS3, Vanilla JavaScript, Anthropic Claude API",
    status: "Completed (Mar 2026)",
    associated: "YT Groups",
  },
  {
    number: "04",
    name: "SCOUT",
    tagline: "Tactical Football Betting Intelligence Platform",
    description:
      "Local football betting intelligence platform built from a monolithic JSX file into a structured multi-component architecture. Integrates three live APIs — football-data.org for standings and fixtures, The Odds API for live betting odds, and Anthropic Claude for AI match analysis. Features TONI (Tactical Overperformance Normalised Index), an original metric scoring teams -10 to +10 by combining scoring efficiency, points vs goal difference, form momentum, defensive fragility, and odds market divergence to identify flukes vs legitimate form.",
    stack: "React, JavaScript, football-data.org API, The Odds API, Anthropic Claude API",
    status: "Completed (2026)",
    associated: "YT Groups",
  },
  {
    number: "05",
    name: "STUDYBUDDY",
    tagline: "AI-Powered Study Assistant",
    description:
      "AI-powered study assistant that helps students transform lecture notes and study materials into interactive flashcards. Full-stack application with secure OAuth2 authentication, persistent storage, and a React frontend backed by a FastAPI service layer.",
    stack: "Python, FastAPI, TypeScript, React, PostgreSQL, OAuth2",
    status: "Completed (2026)",
    associated: "YT Groups",
  },
];

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className="border-t border-white pt-12 pb-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="text-h2 font-display font-bold mb-4 opacity-20"
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
          className="text-section-label font-display mb-16"
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
