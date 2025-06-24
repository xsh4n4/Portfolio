// components/AnimatedSignature.tsx
"use client";

import { motion } from "framer-motion";

const AnimatedSignature = () => {
  return (
    <motion.svg
      width="300"
      height="100"
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M10,50 C20,20, 40,20, 50,50 S70,80, 80,50"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Add more paths as needed to complete your signature */}
    </motion.svg>
  );
};

export default AnimatedSignature;
