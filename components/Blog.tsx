// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiVercel,
//   SiTypescript,
// } from "react-icons/si"
// import { ExternalLink, Code, Eye } from "lucide-react"

// interface blog {
//   title: string
//   url: string
//   github: string
//   imageUrl: string
//   techStack: string[]
// }

// export default function blogs() {
//   const [activeTab, setActiveTab] = useState<"fullstack" | "mini" | "landing">("fullstack")
//   const [, setHoveredIndex] = useState<number | null>(null)

//   const blogs: Record<string, blog[]> = {
//     fullstack: [
//       {
//         title: "Eleweight",
//         url: "http://Eleweight.in",
//         imageUrl: `https://i.pinimg.com/736x/a8/fa/41/a8fa4190768a2674a401d37b1a7ef95a.jpg`,
//         github: "https://github.com/kendrekaran/Eleweight_frontend",
//         techStack: ["React", "Express", "Node.js", "MongoDB"],
//       },
//       {
//         title: "Satya Check",
//         url: "http://Satya-check.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/c3/0f/b4/c30fb46cafeb99f30433d32c28798e7a.jpg`,
//         github: "https://github.com/21prnv/SatyaCheck",
//         techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
//       },
//       {
//         title: "Portfolio",
//         url: "http://Karank.tech",
//         imageUrl: `https://image.thum.io/get/width/1200/crop/900/noanimate/https://karank.tech`,
//         github: "https://github.com/kendrekaran/NextJs_Portfolio",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//     ],
//     mini: [
//       {
//         title: "Cloud Clipper",
//         url: "http://Cloudclipper.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/8b/59/bf/8b59bfa204cb3972f2b917706e4ca3a4.jpg`,
//         github: "https://github.com/kendrekaran/video_downloader",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//       {
//         title: "Image Clipper",
//         url: "http://Imageclipper.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/49/66/94/4966945425193c33f97dc5aa8cb64b3d.jpg`,
//         github: "https://github.com/kendrekaran/bg-remover",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//       {
//         title: "Marriage Math",
//         url: "http://Marriagemath.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/f7/b3/f3/f7b3f3768fea9352b30ce4c289c81c74.jpg`,
//         github: "https://github.com/kendrekaran/dowry_calculator",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//     ],
//     landing: [
//       {
//         title: "Zen Ops",
//         url: "http://Zen-ops.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/b1/04/4e/b1044e584c8d71c3996162d5051d3832.jpg`,
//         github: "https://github.com/kendrekaran/Zenops",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//       {
//         title: "Hy Krox",
//         url: "http://Hy-krox.vercel.app",
//         imageUrl: `https://i.pinimg.com/736x/b7/63/f4/b763f4faa08c23e47d05782dece7f7f6.jpg`,
//         github: "https://github.com/kendrekaran/Hy-krox",
//         techStack: ["Next.js", "React", "Tailwind CSS"],
//       },
//     ],
//   }

//   const getTechIcon = (tech: string) => {
//     switch (tech) {
//       case "Next.js":
//         return <SiNextdotjs className="text-white" />
//       case "React":
//         return <SiReact className="text-cyan-400" />
//       case "Node.js":
//         return <SiNodedotjs className="text-green-500" />
//       case "Express":
//         return <SiExpress className="text-white" />
//       case "MongoDB":
//         return <SiMongodb className="text-green-700" />
//       case "Tailwind CSS":
//         return <SiTailwindcss className="text-blue-500" />
//       case "TypeScript":
//         return <SiTypescript className="text-blue-600" />
//       default:
//         return <SiVercel className="text-white" />
//     }
//   }

//   return (
//     <section id="blogs" className="py-20 bg-black text-white w-full">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//         <motion.div
//           className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
          
//           <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block">
//             MY <span className="text-blue-500">BLOG</span>
//             <motion.div 
//               className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
//               initial={{ width: "0%" }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.5 }}
//             />
//           </h2>
//         </motion.div>
//           <p className="text-gray-400  max-w-lg mx-auto text-sm md:text-base">
//             A showcase of my web development journey, featuring full-stack applications, mini blogs, and landing
//             pages.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center rounded-xl mb-10">
//           <div className="inline-flex p-1 bg-gray-900/50 rounded-xl">
//             {(["fullstack", "mini", "landing"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                   activeTab === tab
//                     ? "bg-blue-500 text-white shadow-lg rounded-xl shadow-blue-500/20"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === "fullstack" ? "Fullstack blogs" : tab === "mini" ? "Mini blogs" : "Landing Pages"}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* blogs Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {blogs[activeTab].map((blog, index) => (
//             <div
//               key={index}
//               className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300  hover:shadow-lg hover:shadow-blue-500/10">
//                 {/* blog Image */}
//                 <div className="relative aspect-video overflow-hidden">
//                   <img
//                     src={blog.imageUrl || "/placeholder.svg"}
//                     alt={blog.title}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

//                   {/* Action buttons */}
//                   <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
//                     <a
//                       href={blog.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
//                       aria-label={`Visit ${blog.title}`}
//                     >
//                       <Eye className="w-4 h-4" />
//                     </a>
//                     <a
//                       href={blog.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
//                       aria-label={`View code for ${blog.title}`}
//                     >
//                       <Code className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
//                       {blog.title}
//                     </h3>
//                     <a
//                       href={blog.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-500 hover:text-blue-400 transition-colors"
//                       aria-label={`External link to ${blog.title}`}
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                     </a>
//                   </div>

//                   <p className="text-gray-500 text-xs mb-3 truncate">{blog.url.replace("http://", "")}</p>

//                   <div className="flex flex-wrap gap-1.5">
//                     {blog.techStack.map((tech, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300"
//                       >
//                         <span className="text-base">{getTechIcon(tech)}</span>
//                         <span>{tech}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View all blogs button */}
//         <div className="mt-14 text-center">
//           <a
//             href="https://github.com/kendrekaran"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
//           >
//             <span>View All on Medium</span>
//             <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import React from "react";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Import your images correctly (ensure these are public assets or use Next.js Image if needed)
import Multicloud from "@/components/assets/profilex.jpg";
import food from "@/components/assets/profilex.jpg";
import song from "@/components/assets/profilex.jpg";
import fake_invoice from "@/components/assets/profilex.jpg";
import coming_soon from "@/components/assets/profilex.jpg";

const blogs = [
  {
    title: "CloudSync",
    description: "An unified Multicloud storage application for Google Drive and one drive.",
    image: Multicloud,
    link: "http://multicloud-woad.vercel.app",
  },
  {
    title: "FemCare",
    description: "AI Based Health Recommendation (GMM) .",
    image: food,
    link: "https://fem-care-five.vercel.app/",
  },
  {
    title: "MoodMate",
    description: "AI based song recommendar according to your Images and voice record. Still in progress",
    image: song,
    link: "http://moodmate-beta.vercel.app",
  },
  {
    title: "BlackTrace",
    description: "Fraud Invoice Detection - A tool to detect fraud invoices.",
    image: fake_invoice,
    link: "https://invoice-detectt.netlify.app/",
  },
 
];

const blog = () => {
  return (
    <>
      {/* blogs Section */}
      <section id="blogs" className="py-16 md:py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8 md:mb-12 animate-fade-in">
            <Code className="text-blue-500" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
              Featured <span className ="text-blue-500">Blogs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-slide-up">
            {blogs.map((blog, index) => (
              <div
                key={blog.title}
                className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={blog.image.src}
                  alt={blog.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{blog.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-4">{blog.description}</p>
                  {blog.link && (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
                    >
                      View blog <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* View all projects button */}
                  <div className="mt-14 text-center">
                    <a
                      href="https://medium.com/@xsh4n4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
                    >
                      <span>View All on Medium</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
        </div>
      </section>

    </>
  );
};

export default blog;
