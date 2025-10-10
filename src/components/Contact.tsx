import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("kobbyawesome@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const links = [
    { text: "email", isEmail: true },
    { text: "linkedin", href: "https://linkedin.com/in/kobby-essel" },
    { text: "github", href: "https://github.com/kolbyblack" },
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center section-padding">
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-display text-h1 font-bold block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            LET'S BUILD
          </motion.span>
          
          <motion.span
            className="font-display text-h1 font-bold block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            SOMETHING
          </motion.span>
        </motion.div>

        <motion.div
          className="space-y-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.text}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {link.isEmail ? (
                <button
                  onClick={handleEmailClick}
                  className="text-body-large font-body hover:opacity-70 transition-opacity cursor-pointer relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </button>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-body-large font-body hover:opacity-70 transition-all hover:translate-x-1"
                >
                  {link.text}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-body-small font-body opacity-70"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : {}}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Available for consultancy, collaboration,
          <br />
          and ambitious projects — 2025
        </motion.p>
      </div>
    </section>
  );
};
