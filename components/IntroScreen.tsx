"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const useBoundingBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [bbox, setBbox] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setBbox({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  return [ref, bbox] as const;
};

const ScannerOverlay = ({ top, left, width, height }: any) => {
  const scannerColor = "#60a5fa"; // Tailwind blue-500

  return (
    <motion.div
      className="absolute z-10 pointer-events-none overflow-hidden"
      style={{
        top,
        left,
        width,
        height,
        backgroundColor: `${scannerColor}30`, // 20 = ~12% opacity
        border: `1px solid ${scannerColor}`,
        opacity: 0.9,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glowing Corners */}
      <div className="absolute top-0 left-0 h-[12px] w-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />
      <div className="absolute top-0 left-0 w-[12px] h-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />

      <div className="absolute top-0 right-0 h-[15px] w-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />
      <div className="absolute top-0 right-0 w-[15px] h-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />

      <div className="absolute bottom-0 left-0 h-[12px] w-[2px]" style={{ backgroundColor: scannerColor }} />
      <div className="absolute bottom-0 left-0 w-[12px] h-[2px]" style={{ backgroundColor: scannerColor }} />

      <div className="absolute bottom-0 right-0 h-[15px] w-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />
      <div className="absolute bottom-0 right-0 w-[15px] h-[2px]" style={{ backgroundColor: scannerColor, boxShadow: `0 0 8px ${scannerColor}` }} />

      {/* Horizontal Line */}
      <motion.div
        className="absolute h-[2px] bg-blue-500/70"
        style={{ width: '100%' }}
        animate={{
          top: ["30%", "70%", "30%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />


      {/* Vertical Line */}
      <motion.div
        className="absolute w-[2px] bg-blue-500/70"
        style={{ height: '100%' }}
        animate={{
          left: ["30%", "70%", "30%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

    </motion.div>
  );
};

const IntroScreen = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);


  const [logoRef, logoBox] = useBoundingBox();
  const [nameRef, nameBox] = useBoundingBox();
  const [taglineRef, taglineBox] = useBoundingBox();
  const [quoteRef, quoteBox] = useBoundingBox();

  const sections = [
    // { ref: logoRef, box: logoBox },
    { ref: nameRef, box: nameBox },
    { ref: taglineRef, box: taglineBox },
    { ref: quoteRef, box: quoteBox },
  ];

  const [currentScan, setCurrentScan] = useState(0);

  useEffect(() => {
    // document.body.style.overflow = "hidden";

    // Wait for content to animate in fully before starting scan
    const startDelay = setTimeout(() => {
      let index = 0;
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
        index++;
      }, 2500); // time to scan each section
    }, 2500); // wait for full content fade-in before scanning starts

    return () => {
      clearTimeout(startDelay);
      // document.body.style.overflow = "";
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
            {showIntro && nameVisible && sections[currentScan] && (
              <ScannerOverlay
                top={sections[currentScan].box.top - 4}
                left={sections[currentScan].box.left - 6}  // shift left
                width={sections[currentScan].box.width + 12} // stretch right
                height={sections[currentScan].box.height + 4}
              />

            )}

            <div className="z-10 flex flex-col items-center text-center gap-6 px-4 max-w-md">
              <motion.div
                className="flex items-center justify-center gap-6 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {/* Logo on the left */}
                <motion.div
                  ref={logoRef}
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

                {/* GIF instead of name on the right */}
                <motion.div
                  ref={nameRef}
                  className="w-[160px] md:w-[200px] opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  onAnimationComplete={() => setNameVisible(true)}
                >
                  <Image
                    src="/signature.png" // Replace this with your actual GIF path
                    alt="Suhana Signature"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>


              <motion.p
                ref={taglineRef}
                className="text-white text-lg md:text-xl tracking-wide opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                Fullstack Developer • Blockchain Builder • Cybersecurity Enthusiast
              </motion.p>

              <motion.p
                ref={quoteRef}
                className="italic text-blue-300 text-md md:text-base opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                "Bridging Web2 to Web3 — building secure, scalable apps on-chain."
              </motion.p>

              {/* Loading text + bar */}
              <div className="flex flex-col items-center gap-2 mt-6">
                {/* Loading Text + Spinner */}
                <div className="flex items-center gap-3 mt-6">
                  {/* Circular Dotted Loader */}
                  <div className="relative h-8 w-8">
                    {[...Array(8)].map((_, i) => (
                      <span
                        key={i}
                        className="absolute h-1.5 w-1.5 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${40 + 30 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${40 + 30 * Math.cos((i * Math.PI) / 4)}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: "1s",
                        }}
                      ></span>
                    ))}
                  </div>

                  {/* Text + Loading Bar */}
                  <div className="flex flex-col">
                    <span className="text-blue-500 text-md tracking-wide mb-1">Loading Portfolio...</span>
                  </div>
                </div>


                {/* Loading Bar */}
                <div className="w-60 h-2 bg-black-800 border border-blue-700 overflow-hidden rounded">
                  <motion.div
                    className="h-full bg-blue-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
