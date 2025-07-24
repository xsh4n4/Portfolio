

"use client";

import React from "react";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Import your images correctly (ensure these are public assets or use Next.js Image if needed)
import Web1Web2Web3 from "@/components/assets/Web1Web2Web3.png";
import llmvsxss from "@/components/assets/llmvsxss.jpg";
import song from "@/components/assets/profilex.jpg";
import fake_invoice from "@/components/assets/profilex.jpg";
import coming_soon from "@/components/assets/profilex.jpg";

const blogs = [
  {
    title: "Navigating the Web3 Landscape",
    description: " A Beginner’s Guide to Understanding Blockchain’s Evolution.",
    image: Web1Web2Web3,
    link: "https://medium.com/@xsh4n4/navigating-the-web3-landscape-a-beginners-guide-to-understanding-blockchain-s-evolution-94e97f10e719",
  },
  {
    title: "LLM vs XSS Blog Series",
    description: "Detecting XSS Attacks with LLM Agents: Reflected, Stored, and DOM-Based Explained.",
    image: llmvsxss,
    link: "https://medium.com/@xsh4n4/llms-vs-xss-p1-4f8d97095a8f",
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
