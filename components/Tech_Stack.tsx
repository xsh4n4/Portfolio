// "use client"

// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   SiHtml5, SiCss3, SiJavascript, SiTailwindcss, 
//   SiTypescript, SiReact, SiNodedotjs, SiExpress,
//   SiMongodb, SiNextdotjs
// } from "react-icons/si";

// interface Skill {
//   name: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   color: string;
// }

// const Skills: React.FC = () => {
//   const skills: Skill[] = [
//     { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
//     { name: "CSS", icon: SiCss3, color: "text-blue-500" },
//     { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
//     { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
//     { name: "React", icon: SiReact, color: "text-blue-400" },
//     { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
//     { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
//     { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
//     { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
//     { name: "Next.js", icon: SiNextdotjs, color: "text-white" }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <section id="skills" className="relative py-16 md:py-24 text-white w-full">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-10 md:mb-16 text-center"
//         >
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block">
//             Tech <span className="text-blue-500">Stack</span>
//             <motion.div 
//               className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
//               initial={{ width: "0%" }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.5 }}
//             />
//           </h2>
//           <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Technologies I use to build modern web applications
//           </p>
//         </motion.div>

//         <motion.div 
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
//         >
//           {skills.map((skill, index) => (
//             <SkillCard key={index} skill={skill} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Define types for SkillCard component props
// interface SkillCardProps {
//   skill: Skill;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <motion.div
//       variants={item}
//       whileHover={{ y: -5, scale: 1.03 }}
//       className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl overflow-hidden group"
//     >
//       <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
//         <div 
//           className={`text-4xl md:text-5xl lg:text-6xl ${skill.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
//         >
//           <skill.icon />
//         </div>
        
//         <h3 className="text-sm md:text-base font-medium text-center">{skill.name}</h3>
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiSolidity,
  SiEthereum, SiJavascript, SiTypescript, SiTailwindcss, SiDocker,
  SiKubernetes, SiJira, SiGit, SiGithub, SiHtml5, SiCss3, SiRust,
  SiVercel, SiFirebase, SiNetlify, SiWeb3Dotjs
} from "react-icons/si";

const categories = [
  {
    title: "Backend",
    description: "I love building scalable APIs and secure backend systems.",
    icons: [SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiGit, SiGithub],
    colors: ["text-green-500", "text-gray-400", "text-green-600", "text-blue-600", "text-orange-500", "text-white"]
  },
  {
    title: "Frontend & Design",
    description: "Passionate about clean, interactive UI using modern tools.",
    icons: [SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3],
    colors: ["text-blue-400", "text-white", "text-cyan-400", "text-yellow-400", "text-orange-500", "text-blue-500"]
  },
  {
    title: "Blockchain",
    description: "Building dApps and smart contracts on Ethereum & Solana.",
    icons: [SiSolidity, SiEthereum, SiRust, SiWeb3Dotjs],
    colors: ["text-yellow-500", "text-indigo-400", "text-orange-400", "text-blue-300"]
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying apps on cloud with container orchestration.",
    icons: [SiDocker, SiKubernetes, SiGit, SiGithub],
    colors: ["text-cyan-400", "text-blue-400", "text-orange-400", "text-white"]
  },
  {
    title: "Management",
    description: "Managing tasks, agile boards and collaboration tools.",
    icons: [SiJira],
    colors: ["text-purple-500"]
  },
  {
    title: "Deployment & Hosting",
    description: "Experience deploying modern apps with best platforms.",
    icons: [SiVercel, SiFirebase, SiNetlify],
    colors: ["text-white", "text-orange-400", "text-green-500"]
  }
];

export default function Skills() {
  return (
    <section className="relative py-20 px-4 md:px-12 bg-black text-white w-full">
{/* Cyber SVG background */}
 <svg className="absolute inset-0 w-full h-full opacity-10 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
  <defs>
    <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
     
      <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#00bfff" strokeWidth="0.2" />
    </pattern>
  </defs>

  {/* Grid background */}
  <rect width="100%" height="100%" fill="url(#grid)" />

  {/* Horizontal bottom line */}
  <line x1="0" y1="100" x2="100" y2="100" stroke="#00bfff" strokeWidth="0.4" />
</svg>



      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-bold mb-12"
        >
          Tech <span className="text-blue-500">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl bg-[#0f0f0f]/80 border border-neutral-800 p-6 shadow-lg backdrop-blur-md hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{category.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                {category.icons.map((Icon, index) => (
                  <div
                    key={index}
                    className={`relative group text-3xl ${category.colors[index]} hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon />
                    <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Icon.name.replace("Si", "")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiSolidity,
//   SiEthereum, SiJavascript, SiTypescript, SiTailwindcss, SiDocker,
//   SiKubernetes, SiJira, SiGit, SiGithub, SiHtml5, SiCss3, SiRust, SiWeb3Dotjs
// } from "react-icons/si";
// import { Tooltip } from "react-tooltip";

// const categories = [
//   {
//     title: "Backend",
//     description: "Scalable APIs and backend logic built using secure & robust frameworks.",
//     icons: [SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiGit, SiGithub],
//     colors: ["text-green-500", "text-gray-400", "text-green-600", "text-blue-600", "text-orange-500", "text-white"]
//   },
//   {
//     title: "Frontend & Design",
//     description: "Building pixel-perfect UIs with modern libraries and responsive designs.",
//     icons: [SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3],
//     colors: ["text-blue-400", "text-white", "text-cyan-400", "text-yellow-400", "text-orange-500", "text-blue-500"]
//   },
//   {
//     title: "Blockchain",
//     description: "Smart contracts, Web3 interactions & decentralized app development.",
//     icons: [SiSolidity, SiEthereum, SiRust, SiWeb3Dotjs],
//     colors: ["text-yellow-500", "text-indigo-400", "text-orange-600", "text-green-400"]
//   },
//   {
//     title: "Cloud & DevOps",
//     description: "Managing infrastructure, CI/CD, and deployments on the cloud.",
//     icons: [SiDocker, SiKubernetes, SiGithub],
//     colors: ["text-blue-400", "text-indigo-500", "text-white"]
//   },
//   {
//     title: "Management",
//     description: "Experience with Agile, Jira, and efficient project collaboration.",
//     icons: [SiJira],
//     colors: ["text-purple-500"]
//   },
//   {
//     title: "Languages",
//     description: "Languages I use across stacks for developing modern applications.",
//     icons: [SiJavascript, SiTypescript, SiSolidity, SiRust],
//     colors: ["text-yellow-400", "text-blue-600", "text-yellow-500", "text-orange-500"]
//   }
// ];

// export default function Skills() {
//   return (
//     <section className="relative py-20 px-4 md:px-12 bg-black text-white w-full overflow-hidden">
//       {/* Cyber SVG background */}
//       <svg className="absolute inset-0 w-full h-full opacity-10 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <defs>
//           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
//             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00f0ff" strokeWidth="0.4" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#grid)" />
//       </svg>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center text-4xl md:text-5xl font-bold mb-12"
//         >
//           My <span className="text-blue-500">Skillset</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {categories.map((category, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="rounded-xl bg-[#0f0f0f]/80 border border-blue-500/20 p-6 shadow-xl backdrop-blur-md relative overflow-hidden group"
//             >
//               <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
//               <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
//               <div className="flex flex-wrap gap-4 items-center">
//                 {category.icons.map((Icon, index) => (
//                   <div
//                     key={index}
//                     className={`text-3xl ${category.colors[index]} hover:scale-125 transition-transform duration-300 relative`}
//                     data-tooltip-id={`tip-${category.title}-${index}`}
//                   >
//                     <Icon />
//                     <Tooltip
//                       id={`tip-${category.title}-${index}`}
//                       content={Icon.displayName || Icon.name.replace("Si", "")}
//                       place="top"
//                       className="text-xs bg-white text-black px-2 py-1 rounded shadow-md"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
