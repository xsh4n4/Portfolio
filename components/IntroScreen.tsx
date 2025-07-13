"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const ScannerOverlay = ({ top, height }: { top: number; height: number }) => {
  return (
    <motion.div
      className="absolute z-10 border border-blue-500/80 pointer-events-none overflow-hidden"
      style={{ top, height, left: "50%", transform: "translateX(-50%)", width: 300, opacity: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-[1px] h-full bg-blue-500/70 animate-scan-horizontal" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-blue-500/70 animate-scan-horizontal" />
      <div className="absolute top-0 left-0 h-[1px] w-full bg-blue-500/70 animate-scan-vertical" />
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-blue-500/70 animate-scan-vertical" />
      <div className="absolute inset-0 border-[1px] border-blue-500/80 rounded" />
    </motion.div>
  );
};

const IntroScreen = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(true);

  const [logoRef, logoHeight] = useBoundingHeight();
  const [nameRef, nameHeight] = useBoundingHeight();
  const [taglineRef, taglineHeight] = useBoundingHeight();
  const [quoteRef, quoteHeight] = useBoundingHeight();
  const [loaderRef, loaderHeight] = useBoundingHeight();

  const sections = [
    { ref: logoRef, height: logoHeight },
    { ref: nameRef, height: nameHeight },
    { ref: taglineRef, height: taglineHeight },
    { ref: quoteRef, height: quoteHeight },
  ];

  const [currentScan, setCurrentScan] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCurrentScan((prev) => {
        if (prev >= sections.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setShowIntro(false);
            document.body.style.overflow = "";
          }, 2000);
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
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
            {sections[currentScan] && (
              <ScannerOverlay top={sections[currentScan].ref.current?.offsetTop ?? 0} height={sections[currentScan].height} />
            )}

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
                className="text-3xl md:text-4xl font-bold text-blue-300 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Suhana Shaik
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

              {/* LOADING BAR (No Scanner) */}
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
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const ScannerOverlay = ({ top, height }: { top: number; height: number }) => {
  return (
    <motion.div
      className="absolute z-10 border border-blue-500/80 pointer-events-none overflow-hidden"
      style={{ top, height, left: "50%", transform: "translateX(-50%)", width: 300, opacity: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-[1px] h-full bg-blue-500/70 animate-scan-horizontal" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-blue-500/70 animate-scan-horizontal" />
      <div className="absolute top-0 left-0 h-[1px] w-full bg-blue-500/70 animate-scan-vertical" />
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-blue-500/70 animate-scan-vertical" />
      <div className="absolute inset-0 border-[1px] border-blue-500/80 rounded" />
    </motion.div>
  );
};

const IntroScreen = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(true);

  const [logoRef, logoHeight] = useBoundingHeight();
  const [nameRef, nameHeight] = useBoundingHeight();
  const [taglineRef, taglineHeight] = useBoundingHeight();
  const [quoteRef, quoteHeight] = useBoundingHeight();
  const [loaderRef, loaderHeight] = useBoundingHeight();

  const sections = [
    { ref: logoRef, height: logoHeight },
    { ref: nameRef, height: nameHeight },
    { ref: taglineRef, height: taglineHeight },
    { ref: quoteRef, height: quoteHeight },
  ];

  const [currentScan, setCurrentScan] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCurrentScan((prev) => {
        if (prev >= sections.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setShowIntro(false);
            document.body.style.overflow = "";
          }, 2000);
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
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
            {sections[currentScan] && (
              <ScannerOverlay top={sections[currentScan].ref.current?.offsetTop ?? 0} height={sections[currentScan].height} />
            )}

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
                className="text-3xl md:text-4xl font-bold text-blue-300 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Suhana Shaik
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

              {/* LOADING BAR (No Scanner) */}
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
