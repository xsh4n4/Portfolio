// "use client";

// import { useEffect, useState } from "react";

// import { cn } from "@/lib/utils";

// interface MeteorsProps {
//   number?: number;
// }
// export const Meteors = ({ number = 20 }: MeteorsProps) => {
//   const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
//     [],
//   );

//   useEffect(() => {
//     const styles = [...new Array(number)].map(() => ({
//       top: -5,
//       left: Math.floor(Math.random() * window.innerWidth) + "px",
//       animationDelay: Math.random() * 1 + 0.2 + "s",
//       animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
//     }));
//     setMeteorStyles(styles);
//   }, [number]);

//   return (
//     <>
//       {[...meteorStyles].map((style, idx) => (
//         // Meteor Head
//         <span
//           key={idx}
//           className={cn(
//             "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
//           )}
//           style={style}
//         >
//           {/* Meteor Tail */}
//           <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
//         </span>
//       ))}
//     </>
//   );
// };

// export default Meteors;
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
