"use client"
import { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import '../app/globals.css';
import Skills from "@/components/Tech_Stack";
import SkillCloud from "@/components/SkillCloud";
import { FloatingDockDemo } from "@/components/magicui/Dock";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Testimonals from "@/components/Testimonals";
import Blog from "@/components/Blog";
// import SecurityPortfolio from "@/components/SecurityPortfolio"
import WorldMapDemo from "@/components/WorldMapDemo";
import TimeLineSection from '@/components/TimeLineSection';
import CyberCubeGrid from '@/components/CyberCubeGrid';
import GitHubChart from "@/components/GitHubChart";
import Footer from "@/components/Footer";
// import oneko from '../app/oneko';
export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko.js"; // ✅ should be in public folder
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     document.body.className = darkMode ? "dark bg-black text-white" : "light bg-white text-black";
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(prev => !prev);
//   };

  return (
      
        <main>
          <Navbar/>
          <IntroScreen>

            <Hero />
            <About/>
            <TimeLineSection />
            <Projects />
            <Blog />
            {/* <SecurityPortfolio/> */}
            <Skills />
            {/* <CyberCubeGrid/> */}
            <div className="relative z-50 ">
              <FloatingDockDemo />
            </div>
            <GitHubChart />
            <Testimonals />
            <Contact />
            <WorldMapDemo />
            <Footer />
          </IntroScreen>
        </main>
     
   
  );
}
