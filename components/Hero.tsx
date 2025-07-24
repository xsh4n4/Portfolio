
"use client";

import React from "react";
import Image from "next/image";
import "../app/globals.css";
import { MeteorDemo } from "./magicui/meteors";
import { Spotlight } from "./ui/spotlight";
import {
  FaEnvelope,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa6";

import profile3 from "@/components/assets/profile3.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full px-4 md:px-16 lg:px-32 pt-40 pb-28 overflow-hidden relative"
    >
      {/* Spotlight */}
      <Spotlight className="top-16 left-10 md:left-32 md:top-20 z-0 h-screen" fill="white" />

      {/* Container - LAYOUT SWITCH */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 text-white text-center md:text-left">

        {/* Profile - LEFT ON DESKTOP */}
        <div className="flex flex-col items-center md:items-start z-30">
          <Image
            src={profile3}
            alt="profile"
            width={256}
            height={256}
            className="object-cover shadow-lg border border-blue-500 rounded-[10%]"
            priority
          />
          <p className="mt-2 text-xs text-green-400 flex items-center gap-1">
  <span
    className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_4px_rgba(34,197,94,0.7)]"
  />
  AVAILABLE FOR FREELANCE PROJECTS
</p>


        </div>

        {/* Content - RIGHT ON DESKTOP */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:max-w-xl mt-4 md:mt-8">
           {/* header */}
        {/* HI I'M + Role */}
<div className="w-full flex justify-center md:justify-start">
  <div className="flex items-center gap-3 text-4xl sm:text-4xl md:text-5xl font-bold">
    <span className="whitespace-nowrap">HI I'M</span>
    <MeteorDemo />
  </div>
</div>




          {/* Name */}
          <div className="text-4xl md:text-5xl font-bold">SUHANA SHAIK</div>

          {/* AKA */}
          <div className="text-blue-500 text-xl md:text-2xl font-mono">aka xsh4n4</div>

          {/* Contact Icons */}
          <div className="flex gap-5 mt-2 text-white text-2xl">
            <a href="mailto:xsh4n4@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com/xsh4n4" target="_blank" rel="noopener noreferrer" title="Twitter / X" className="hover:text-blue-400 transition">
              <FaXTwitter />
            </a>
            <a href="https://github.com/xsh4n4" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/xsh4n4" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bouncing Scroll Icon */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce hover:text-blue-400 transition"
        title="Scroll to About"
      >
        <FaChevronDown />
      </a>
    </div>
  );
};

export default Hero;
