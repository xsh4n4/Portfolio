
"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { RiLinkedinLine } from "react-icons/ri";
import { SiMedium } from "react-icons/si";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
// import { LuGlobe } from "react-icons/lu"; // For Cantina

export function FloatingDockDemo() {
  const links = [
    {
      title: "Medium",
      icon: <SiMedium className="h-full w-full text-white dark:text-white" />,
      href: "https://medium.com/@xsh4n4", 
    },
    {
      title: "Mail",
      icon: <HiOutlineMail className="h-full w-full text-white dark:text-white" />,
      href: "mailto:xsh4n4@gmail.com", 
    },
    // {
    //   title: "Cantina",
    //   icon: <LuGlobe className="h-full w-full text-white dark:text-white" />,
    //   href: "https://cantina.xyz/profile/your-username", 
    // },
    {
      title: "Resume",
      icon: <HiOutlineDocumentText className="h-full w-full text-white dark:text-white" />,
      href: "/Suhana_Shaik_Resume.pdf", // put your resume in /public folder
    },
    {
      title: "LinkedIn",
      icon: <RiLinkedinLine className="h-full w-full text-white dark:text-white" />,
      href: "https://www.linkedin.com/in/suhanask",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white dark:text-white" />,
      href: "https://twitter.com/xsh4n4",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white dark:text-white" />,
      href: "https://github.com/xsh4n4",
    },
  ];

  return (
    <div className="fixed bottom-8 w-full flex justify-center items-end z-50 px-4">
      <FloatingDock items={links} />
    </div>
  );
}
