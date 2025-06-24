
// "use client";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Anjali Verma",
//     title: "Product Manager, TechNova",
//     text: "Suhana delivered a clean, efficient, and beautiful web application on time. Her attention to detail and commitment to quality is impressive.",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "Rahul Mehta",
//     title: "Founder, BlockChain Labs",
//     text: "She quickly grasped complex blockchain requirements and implemented a seamless dApp. Truly reliable and talented.",
//     image: "https://randomuser.me/api/portraits/men/52.jpg",
//   },
//   {
//     name: "Emily Tran",
//     title: "UX Designer, CreativEdge",
//     text: "Working with Suhana was a joy! Her frontend skills and collaborative spirit made every sprint efficient and enjoyable.",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
// ];

// export default function Testimonials() {
//   // Double the testimonials for smooth looping
//   const looped = [...testimonials, ...testimonials];

//   return (
//     <section className="relative bg-black py-16 overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//         What People Say
//       </h2>

//       {/* blue fading edges */}
//       <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

//       <div className="overflow-hidden w-full">
//         <div
//           className="flex gap-8 animate-scroll px-4"
//           onMouseEnter={(e) => {
//             (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
//           }}
//           onMouseLeave={(e) => {
//             (e.currentTarget as HTMLElement).style.animationPlayState = "running";
//           }}
//         >
//           {looped.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-[#111] border border-blue-500 min-w-[300px] md:min-w-[360px] max-w-[360px] h-auto p-6 rounded-lg flex flex-col justify-between shadow-md hover:shadow-blue-500/40 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
//             >
//               <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
//               <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
//                 “{testimonial.text}”
//               </p>
//               <div className="flex items-center space-x-4 mt-auto">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="text-white font-semibold text-sm">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-neutral-500 text-xs">{testimonial.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Suhana delivered a clean, efficient, and beautiful web application on time. Her attention to detail and commitment to quality is impressive.",
    name: "Anjali Verma",
    title: "Product Manager, TechNova",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "She quickly grasped complex blockchain requirements and implemented a seamless dApp. Truly reliable and talented.",
    name: "Rahul Mehta",
    title: "Founder, BlockChain Labs",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "Working with Suhana was a joy! Her frontend skills and collaborative spirit made every sprint efficient and enjoyable.",
    name: "Emily Tran",
    title: "UX Designer, CreativEdge",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          What People Say
        </h2>

        {/* Arrows */}
        <button
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-blue-600 p-2 rounded-full hover:bg-blue-700"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-blue-600 p-2 rounded-full hover:bg-blue-700"
          onClick={() => scroll("right")}
        >
          <FaChevronRight className="text-white" />
        </button>

        {/* Scrollable cards */}
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
                  <img
                    src={t.image}
                    alt={t.name}
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
