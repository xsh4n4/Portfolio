
// "use client";

// import { useState } from 'react';
// import Tilt from 'react-parallax-tilt';
// import Image from 'next/image';
// import profile1 from '@/components/assets/profilex.jpg';
// import profile2 from '@/components/assets/profilex.jpg';
// import profile3 from '@/components/assets/profilex.jpg';

// const education = [
//   {
//     title: 'B.Tech in Computer Science',
//     subtitle: 'XYZ University',
//     duration: '2019 – 2023',
//     description: 'Focused on Web Development, Blockchain, and AI.',
//     image: profile1,
//   },
//   {
//     title: 'Blockchain Bootcamp',
//     subtitle: 'Alchemy University',
//     duration: '2023',
//     description: 'Hands-on Ethereum, Solidity, and Web3.js.',
//     image: profile2,
//   },
//   {
//     title: 'Cybersecurity Training',
//     subtitle: 'TryHackMe Labs',
//     duration: '2024',
//     description: 'Learned pen-testing and network defense.',
//     image: profile3,
//   },
// ];

// const experience = [
//   {
//     title: 'Frontend Developer Intern',
//     subtitle: 'TechNova Pvt. Ltd.',
//     duration: 'Jan – May 2024',
//     description: 'Built reusable UI components, boosted performance.',
//     image: profile1,
//   },
//   {
//     title: 'Blockchain Developer',
//     subtitle: 'Web3 Labs',
//     duration: 'Jun 2024 – Present',
//     description: 'Developed & deployed smart contracts.',
//     image: profile2,
//   },
//   {
//     title: 'Smart Contract Auditor',
//     subtitle: 'SecureBlock',
//     duration: '2025 – Present',
//     description: 'Auditing Ethereum contracts for vulnerabilities.',
//     image: profile3,
//   },
// ];

// export default function SlimFlipCards() {
//   const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
//   const data = activeTab === 'education' ? education : experience;

//   return (
//     <section className="bg-black text-white py-20 px-4 sm:px-8" id="timeline">
//       <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">
//         Education <span className="text-white">& Experience</span>
//       </h2>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           className={`px-5 py-2 rounded-full text-sm font-semibold border ${
//             activeTab === 'education'
//               ? 'bg-blue-500 text-white border-blue-500'
//               : 'text-blue-400 border-blue-500 hover:bg-blue-600 hover:text-white'
//           } transition-all duration-300`}
//           onClick={() => setActiveTab('education')}
//         >
//           Education
//         </button>
//         <button
//           className={`px-5 py-2 rounded-full text-sm font-semibold border ${
//             activeTab === 'experience'
//               ? 'bg-blue-500 text-white border-blue-500'
//               : 'text-blue-400 border-blue-500 hover:bg-blue-600 hover:text-white'
//           } transition-all duration-300`}
//           onClick={() => setActiveTab('experience')}
//         >
//           Experience
//         </button>
//       </div>

//       {/* Box container */}
//       <div className="max-w-4xl mx-auto border border-blue-500/30 rounded-2xl p-6 bg-[#0a0a0a]/50 backdrop-blur-md">
//         <div className="flex flex-col items-center gap-6">
//           {data.map((item, idx) => (
//             <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.2} scale={1.02} className="w-full">
//               <div className="flip-card w-full h-[140px]">
//                 <div className="flip-card-inner w-full h-full">
//                   {/* Front */}
//                   <div className="flip-card-front bg-[#0f172a] border border-blue-500 rounded-xl shadow-md p-4 flex items-center gap-4">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       className="w-16 h-16 object-cover rounded-lg border border-white/10"
//                     />
//                     <div className="flex flex-col justify-center">
//                       <h3 className="text-md font-bold">{item.title}</h3>
//                       <p className="text-blue-400 text-sm">{item.subtitle}</p>
//                       <p className="text-xs text-white mt-1">{item.duration}</p>
//                     </div>
//                   </div>

//                   {/* Back */}
//                   <div className="flip-card-back bg-blue-900 border border-blue-500 rounded-xl shadow-md p-4 flex items-center justify-center text-sm text-white text-center">
//                     {item.description}
//                   </div>
//                 </div>
//               </div>
//             </Tilt>
//           ))}
//         </div>
//       </div>

//       {/* Flip styles */}
//       <style jsx>{`
//         .flip-card {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           transition: transform 0.8s ease;
//         }
//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }
//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           border-radius: 0.75rem;
//         }
//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import profile1 from "@/components/assets/profilex.jpg";
import profile2 from "@/components/assets/profilex.jpg";
import profile3 from "@/components/assets/profilex.jpg";

const education = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "XYZ University",
    duration: "2019 – 2023",
    description: "Focused on Web Development, Blockchain, and AI.",
    image: profile1,
  },
  {
    title: "Blockchain Bootcamp",
    subtitle: "Alchemy University",
    duration: "2023",
    description: "Hands-on Ethereum, Solidity, and Web3.js.",
    image: profile2,
  },
  {
    title: "Cybersecurity Training",
    subtitle: "TryHackMe Labs",
    duration: "2024",
    description: "Learned pen-testing and network defense.",
    image: profile3,
  },
];

const experience = [
  {
    title: "Frontend Developer Intern",
    subtitle: "TechNova Pvt. Ltd.",
    duration: "Jan – May 2024",
    description: "Built reusable UI components, boosted performance.",
    image: profile1,
  },
  {
    title: "Blockchain Developer",
    subtitle: "Web3 Labs",
    duration: "Jun 2024 – Present",
    description: "Developed & deployed smart contracts.",
    image: profile2,
  },
  {
    title: "Smart Contract Auditor",
    subtitle: "SecureBlock",
    duration: "2025 – Present",
    description: "Auditing Ethereum contracts for vulnerabilities.",
    image: profile3,
  },
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
<div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-[2px] shadow-md rounded-xl">
  {item.duration}
</div>
{/* bg-[#0f172a] */}
             

              {/* Image + Text */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              />
              <Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              /><Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              />
              <Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              /><Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl border border-white/10 shadow-md"
              /><Image
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
