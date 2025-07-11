"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

// Custom hook to get element height
const useBoundingHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(100);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);
  return [ref, height] as const;
};

const IntroScreen = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(true);

  const [logoRef, logoHeight] = useBoundingHeight();
  const [nameRef, nameHeight] = useBoundingHeight();
  const [taglineRef, taglineHeight] = useBoundingHeight();
  const [quoteRef, quoteHeight] = useBoundingHeight();
  const [loaderRef, loaderHeight] = useBoundingHeight();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "";
    }, 12000); // slightly longer for full scan effect

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-blue-400 font-mono"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Scanner Box */}
            <motion.div
              className="absolute w-[320px] bg-blue-300/10 border border-blue-500 shadow-md backdrop-blur-sm"
              initial={{ y: 0 }}
              animate={{ y: [0, logoHeight, logoHeight + nameHeight, logoHeight + nameHeight + taglineHeight, logoHeight + nameHeight + taglineHeight + quoteHeight, logoHeight + nameHeight + taglineHeight + quoteHeight + loaderHeight] }}
              transition={{ duration: 10, ease: "linear" }}
              style={{ height: logoHeight }}
            />

            <div className="z-10 flex flex-col items-center text-center gap-6 px-4 max-w-md">
              {/* LOGO */}
              <motion.div
                ref={logoRef}
                className="opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-blue-400 shadow-lg"
                />
              </motion.div>

              {/* NAME */}
              <motion.div
                ref={nameRef}
                className="text-4xl md:text-6xl font-bold text-blue-300 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <Typewriter
                  options={{
                    strings: ["Suhana Shaik"],
                    autoStart: true,
                    loop: false,
                    delay: 60,
                    cursor: "_",
                  }}
                />
              </motion.div>

              {/* TAGLINE */}
              <motion.p
                ref={taglineRef}
                className="text-blue-400 text-lg md:text-xl tracking-wide opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                Fullstack Developer • Blockchain Builder • Cybersecurity Enthusiast
              </motion.p>

              {/* QUOTE */}
              <motion.p
                ref={quoteRef}
                className="italic text-blue-300 text-sm md:text-base opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                "Code is the language of reality — I write it to shape the future."
              </motion.p>

              {/* LOADING BAR */}
              <motion.div
                ref={loaderRef}
                className="w-60 h-2 mt-6 bg-blue-800 border border-blue-500 overflow-hidden rounded opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }}
              >
                <motion.div
                  className="h-full bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ delay: 11, duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default IntroScreen;
