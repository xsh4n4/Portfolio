
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
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[48px] w-[280px] sm:w-[360px] md:w-[440px] flex items-center justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full text-center text-base sm:text-xl md:text-4xl font-semibold text-blue-500"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
