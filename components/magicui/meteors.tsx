
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Freelancer",
  "Web3 Developer",
  "Blockchain Developer",
  "Cybersecurity Enthusiast",
];

export function MeteorDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[32px] sm:h-[40px] md:h-[52px] w-[220px] sm:w-[280px] md:w-[360px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 text-xl sm:text-2xl md:text-4xl font-semibold whitespace-nowrap"

        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
