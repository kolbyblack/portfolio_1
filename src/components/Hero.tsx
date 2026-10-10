import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <header className="hero-shell flex min-h-screen flex-col justify-center px-6 md:px-12">
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.38em] text-zinc-500">
          Yorke
        </p>

        <h1 className="mt-6 text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-8xl">
          Systems architect.
        </h1>

        <p className="mt-6 max-w-xl text-sm uppercase tracking-[0.18em] text-zinc-400 md:text-base">
          Technologist • Builder • Co-founder
        </p>

        <div className="mt-10 space-y-2 text-base leading-relaxed text-zinc-300 md:text-lg">
          <p>Building technology for African markets.</p>
          <p>Focused on systems, infrastructure, and products that scale.</p>
        </div>
      </motion.div>
    </header>
  );
};
