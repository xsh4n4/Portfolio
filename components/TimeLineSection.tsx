
"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import profile1 from "@/components/assets/profilex.jpg";
import sindhulogo from "@/components/assets/sindhulogo.jpg";
import rguktlogo from "@/components/assets/rguktlogo.jpg";
import acmegradelogo from "@/components/assets/acmegradelogo.jpg";
import toshiklogo from "@/components/assets/toshiklogo.jpg";


const education = [
  {
    title: "High School Education",
    subtitle: "Sindhu Educational Institutions",
    duration: "2010 – 2020",
    description: "Played a key role in shaping my discipline, work ethic, and eagerness to learn. Helped me develop both academic and personal strengths.",
    image: sindhulogo,
  },
  {
    title: "Pre-University Course",
    subtitle: "Rajiv Gandhi University of Knowledge Technologies",
    duration: "2020-2022",
    description: "Sparked my early interest in computers and emerging technologies. Encouraged hands-on learning and curiosity beyond the classroom.",
    image: rguktlogo,
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "RGUKT Nuzvid",
    duration: "2022-2026",
    description: "I discovered my passion for blockchain technology. I immersed myself in learning Solidity, smart contract security, and decentralized ecosystems.",
    image: rguktlogo,
  },
];

const experience = [
  {
    title: "Fullstack Developer Intern",
    subtitle: "Acmegrade",
    duration: "Jan – May 2024",
    description: "Contributed to building full-stack web applications using React, Node.js, and REST APIs. Gained practical experience in frontend-backend integration and real-world agile workflows.",
    image: acmegradelogo,
  },
  {
    title: "Blockchain FullStack Developer",
    subtitle: "Toshik IT Solutions",
    duration: "May 2025 – July 2025",
    description: "Focused on smart contract development and integration using Solidity and Foundry. Built and optimized secure, gas-efficient contracts for real-world decentralized applications.",
    image: toshiklogo,
  },
  // {
  //   title: "Smart Contract Auditor",
  //   subtitle: "SecureBlock",
  //   duration: "2025 – Present",
  //   description: "Auditing Ethereum contracts for vulnerabilities.",
  //   image: profile1,
  // }
  
];

export default function SlimFlipCards() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);



const renderCards = (data: typeof education) =>
  data.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.3}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1500}
        className="w-full"
      >
        <div className="group w-full h-[90px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front */}
            <div className="absolute inset-0 bg-black border-2 border-blue-500 rounded-xl shadow-xl p-3 pr-4 flex items-center gap-4 [backface-visibility:hidden]">
            {/* tag */}
    <div className="absolute top-2 right-2 border border-blue-700 bg-blue-500 text-[10px] text-white px-2 py-[1px] font-bold rounded">
  {item.duration}
</div>



             

              {/* Image + Text */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">{item.title}</h3>
                <p className="text-blue-400 text-sm">{item.subtitle}</p>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-blue-600 border-2 border-dotted border-blue-500 rounded-xl shadow-xl p-3 flex items-center justify-center text-white text-sm text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
              {item.description}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  ));


  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8" id="timeline">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">
        Education <span className="text-white">& Experience</span>
      </h2>

      
      {/* Tab switch - Only on Mobile */}
<div className="flex justify-center mb-6 md:hidden">
  <div className="flex border border-blue-500 bg-blue-900 overflow-hidden">
    <button
      className={`px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
        activeTab === 'education'
          ? 'bg-blue-500 text-white'
          : 'text-blue-300 hover:bg-blue-700 hover:text-white'
      } rounded-tl-[10%] rounded-bl-[10%]`}
      onClick={() => setActiveTab('education')}
    >
      Learning Path
    </button>
    <button
      className={`px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
        activeTab === 'experience'
          ? 'bg-blue-500 text-white'
          : 'text-blue-300 hover:bg-blue-700 hover:text-white'
      } rounded-tr-[10%] rounded-br-[10%]`}
      onClick={() => setActiveTab('experience')}
    >
      Work History
    </button>
  </div>
</div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
  {(isMobile ? activeTab === "education" : true) && (
    <div className="border border-blue-500/30 border-dotted rounded-2xl p-4 bg-[#0a0a0a]/50 backdrop-blur-md">
      {/* <h3 className="text-lg font-semibold text-white-400 mb-2 text-center">Learning Path</h3> */}
      <div className="flex flex-col gap-3">{renderCards(education)}</div>
    </div>
  )}
  {(isMobile ? activeTab === "experience" : true) && (
    <div className="border border-blue-500/30 border-dotted rounded-2xl p-4 bg-[#0a0a0a]/50 backdrop-blur-md">
      {/* <h3 className="text-lg font-semibold text-blue-400 mb-2 text-center">Work History</h3> */}
      <div className="flex flex-col gap-3">{renderCards(experience)}</div>
    </div>
  )}
</div>


    </section>
  );
}
