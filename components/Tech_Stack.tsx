
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
