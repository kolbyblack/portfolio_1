import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLargeHover, setIsLargeHover] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.closest("a")) {
        setIsHovering(true);
        if (target.classList.contains("project-title") || target.closest(".project-title")) {
          setIsLargeHover(true);
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.closest("a")) {
        setIsHovering(false);
        setIsLargeHover(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const cursorSize = isLargeHover ? 12 : isHovering ? 8 : 3;

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 hidden md:block"
      style={{ mixBlendMode: "difference" }}
    >
      <motion.div
        className="absolute bg-white rounded-full"
        animate={{
          x: mousePosition.x - cursorSize,
          y: mousePosition.y - cursorSize,
          width: cursorSize * 2,
          height: cursorSize * 2,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
};
