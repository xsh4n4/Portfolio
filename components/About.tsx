

// "use client";

// import React from "react";
// import IconCloud from "@/components/ui/iconcloud";
// import { MotionDiv } from "@/components/ui/motion";
// import { Download } from "lucide-react";
// import Link from "next/link";

// const iconSlugs = [
//   "html5", "css3", "javascript", "typescript", "react", "nextdotjs",
//   "tailwindcss", "nodedotjs", "express", "nestjs", "mongodb", "postgresql",
//   "mysql", "prisma", "git", "github", "postman", "docker", "linux", "vercel",
//   "vscode", "redux",
// ];

// export default function AboutPage() {
//   return (
//     <main
//       id="about"
//       className="min-h-[80vh] px-4 sm:px-12 py-12 bg-black text-white mt-32 scroll-mt-32"
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">


//         {/* LEFT SIDE - TEXT */}
//         <MotionDiv
//   initial={{ opacity: 0, x: -40 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   className="md:w-[55%] space-y-5 md:-mt-12 w-full flex flex-col items-center md:items-start text-center md:text-left"
// >

//           <h1 className="text-4xl font-bold text-center text-blue-500">
//             About<span className="text-white"> Me</span>
//           </h1>

//           <p className="text-lg leading-relaxed text-gray-300">
//             I'm <strong className="text-white">Suhana Shaik</strong>, a passionate full-stack and blockchain developer
//             driven by curiosity and creativity. I focus on building performant web apps using
//             technologies like <span className="text-white">React, Next.js, Solidity, and TailwindCSS</span>.
//           </p>

//           <p className="text-lg leading-relaxed text-gray-300">
//             My journey into <span className="text-white">Web3 and cybersecurity</span> started with a
//             passion for decentralization, privacy, and building secure applications. I’m actively learning
//             smart contract auditing and enjoy working on impactful blockchain-based projects.
//           </p>

//           <p className="text-lg leading-relaxed text-gray-300">
//             I believe in writing clean, maintainable code and constantly pushing my skills
//             forward by experimenting, building, and collaborating.
//           </p>

//           {/* Resume Button */}
//          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 mb-8 md:mb-0 w-full">


//             <Link href="https://drive.google.com/file/d/1Jg_KOfcXxwdJtnDofV5ENkdUF46V5WCS/view?usp=sharing">
//               <button className="w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-900 text-white text-sm">
//                 Download CV
//               </button>
//             </Link>
//             <Link href="#contact">
//               <button className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-400 border border-black text-sm">
//                 Hire Me
//               </button>
//             </Link>
//           </div>
//         </MotionDiv>

//         {/* RIGHT SIDE - SKILL CLOUD */}
//        <MotionDiv
//   initial={{ opacity: 0, x: 40 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   className="md:w-[45%] w-full flex justify-center mt-20 md:mt-0"
// >
//   <div className="w-full max-w-md flex items-center justify-center">
//     <div className="h-[300px] sm:h-[360px] w-full flex items-center justify-center">
//       <IconCloud iconSlugs={iconSlugs} />
//     </div>
//   </div>
// </MotionDiv>

//       </div>
//     </main>
//   );
// }
// About.tsx
"use client";

import React from "react";
import IconCloud from "@/components/ui/iconcloud";
import { MotionDiv } from "@/components/ui/motion";
import { Download } from "lucide-react";
import Link from "next/link";

const iconSlugs = [
  "html5", "css3", "javascript", "typescript", "react", "nextdotjs",
  "tailwindcss", "nodedotjs", "express", "nestjs", "mongodb", "postgresql",
  "mysql", "prisma", "git", "github", "postman", "docker", "linux", "vercel",
  "vscode", "redux",
];

export default function AboutPage() {
  return (
    <main
  id="about"
  className="px-4 sm:px-12 pt-32 pb-20 bg-black text-white scroll-mt-[8rem] md:scroll-mt-[5rem] overflow-hidden"
>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* LEFT SIDE - TEXT */}
        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left space-y-5"
        >
          <h1 className="text-4xl font-bold text-blue-500">
            About<span className="text-white"> Me</span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-300">
            I'm <strong className="text-white">Suhana Shaik</strong>, a passionate full-stack and blockchain developer
            driven by curiosity and creativity. I focus on building performant web apps using
            technologies like <span className="text-white">React, Next.js, Solidity, and TailwindCSS</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            My journey into <span className="text-white">Web3 and cybersecurity</span> started with a
            passion for decentralization, privacy, and building secure applications. I’m actively learning
            smart contract auditing and enjoy working on impactful blockchain-based projects.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I believe in writing clean, maintainable code and constantly pushing my skills
            forward by experimenting, building, and collaborating.
          </p>

          {/* Resume Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 mb-4 w-full">
            <Link href="https://drive.google.com/file/d/1Jg_KOfcXxwdJtnDofV5ENkdUF46V5WCS/view?usp=sharing">
              <button className="w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-900 text-white text-sm">
                Download CV
              </button>
            </Link>
            <Link href="#contact">
              <button className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-400 border border-black text-sm">
                Hire Me
              </button>
            </Link>
          </div>
        </MotionDiv>

        {/* RIGHT SIDE - SKILL CLOUD */}
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[45%] w-full flex justify-center mt-20 mb-20 md:mt-8"
        >
          <div className="w-full max-w-md h-[300px] sm:h-[360px] flex items-center justify-center">
            <IconCloud iconSlugs={iconSlugs} />
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}
