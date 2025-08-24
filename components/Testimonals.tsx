
"use client";
import Image from "next/image";
import sindhulogo from "@/components/assets/sindhulogo.jpg";
import React, { useRef, useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Suhana delivered a clean, efficient, and beautiful web application on time. Her attention to detail and commitment to quality is impressive.",
    name: "Anjali Verma",
    title: "Product Manager, Acmegrade",
    image: sindhulogo,
  },
  {
    text: "She quickly grasped complex blockchain requirements and implemented a seamless dApp. Truly reliable and talented.",
    name: "Rahul Mehta",
    title: "Management, RGUKT",
    image: sindhulogo,
  },
  {
    text: "Working with Suhana was a joy! Her frontend skills and collaborative spirit made every sprint efficient and enjoyable.",
    name: "Emily Tran",
    title: "Founder, Toshik IT Solutions",
    image: sindhulogo,
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 1.2;
    let animationFrame: number;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft += dir === "left" ? -300 : 300;
  };

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-3xl text-center font-bold text-blue-500 mb-10">
          Word <span className="text-white">About Me</span>
        </h1>

        {/* Arrow Buttons Container (full width) */}
        <div className="absolute inset-0 flex justify-between items-center px-2 sm:px-6 pointer-events-none">
          <button
            className="z-20 bg-blue-600 p-2 rounded-full hover:bg-blue-700 pointer-events-auto"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            className="z-20 bg-blue-600 p-2 rounded-full hover:bg-blue-700 pointer-events-auto"
            onClick={() => scroll("right")}
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>

        {/* Scrollable Testimonials */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-[#111] border border-blue-500 p-6 rounded-lg flex-shrink-0 w-[85vw] sm:w-[360px] transition-transform hover:scale-[1.02]"
              >
                <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
                <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex items-center space-x-4 mt-auto">
                  {/* <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  /> */}
                  <Image
                                  src={t.image}
                                  alt={t.title}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {t.name}
                    </h4>
                    <p className="text-neutral-500 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
