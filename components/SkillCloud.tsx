// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { useTheme } from "next-themes";
// import {
//   Cloud,
//   fetchSimpleIcons,
//   ICloud,
//   renderSimpleIcon,
//   SimpleIcon,
// } from "react-icon-cloud";

// // Props for the IconCloud
// const cloudProps: Omit<ICloud, "children"> = {
//   containerProps: {
//     style: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       height: "400px",
//       margin: "0",
//       padding: "0",
//     },
//   },
//   options: {
//     reverse: true,
//     depth: 1.5,
//     wheelZoom: false,
//     imageScale: 2,
//     activeCursor: "default",
//     tooltip: "native",
//     initial: [0.1, -0.1],
//     clickToFront: 500,
//     tooltipDelay: 0,
//     outlineColour: "#0000",
//     maxSpeed: 0.04,
//     minSpeed: 0.02,
//   },
// };

// // Custom icon renderer
// const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
//   const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
//   const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
//   const minContrastRatio = theme === "dark" ? 2 : 1.2;

//   return renderSimpleIcon({
//     icon,
//     bgHex,
//     fallbackHex,
//     minContrastRatio,
//     size: 42,
//     aProps: {
//       href: undefined,
//       target: undefined,
//       rel: undefined,
//       onClick: (e: any) => e.preventDefault(),
//     },
//   });
// };

// // Main Skill Cloud Component
// export default function SkillCloud() {
//   const iconSlugs = [
//     "html5",
//     "css3",
//     "javascript",
//     "typescript",
//     "react",
//     "nextdotjs",
//     "tailwindcss",
//     "nodedotjs",
//     "express",
//     "nestjs",
//     "mongodb",
//     "postgresql",
//     "mysql",
//     "prisma",
//     "git",
//     "github",
//     "postman",
//     "docker",
//     "linux",
//     "vercel",
//     "vscode",
//     "redux",
//   ];

//   const [data, setData] = useState<Awaited<ReturnType<typeof fetchSimpleIcons>> | null>(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
//   }, []);

//   const renderedIcons = useMemo(() => {
//     if (!data) return null;
//     return Object.values(data.simpleIcons).map((icon) =>
//       renderCustomIcon(icon, theme || "light")
//     );
//   }, [data, theme]);

//   return (
//     <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-4 py-10">
//       {/* @ts-ignore */}
//       <Cloud {...cloudProps}>{renderedIcons}</Cloud>
//     </div>
//   );
// }

"use client";

import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  ICloud,
  renderSimpleIcon,
} from "react-icon-cloud";

// Props for the IconCloud
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "400px",
      margin: "0",
      padding: "0",
    },
  },
  options: {
    reverse: true,
    depth: 1.5,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Manual icon data - we'll define the essential properties ourselves
const manualIcons = [
  { slug: "html5", title: "HTML5", hex: "E34F26" },
  { slug: "css3", title: "CSS3", hex: "1572B6" },
  { slug: "javascript", title: "JavaScript", hex: "F7DF1E" },
  { slug: "typescript", title: "TypeScript", hex: "3178C6" },
  { slug: "react", title: "React", hex: "61DAFB" },
  { slug: "nextdotjs", title: "Next.js", hex: "000000" },
  { slug: "tailwindcss", title: "Tailwind CSS", hex: "06B6D4" },
  { slug: "nodedotjs", title: "Node.js", hex: "339933" },
  { slug: "express", title: "Express", hex: "000000" },
  { slug: "mongodb", title: "MongoDB", hex: "47A248" },
  { slug: "mysql", title: "MySQL", hex: "4479A1" },
  { slug: "git", title: "Git", hex: "F05032" },
  { slug: "github", title: "GitHub", hex: "181717" },
  { slug: "linux", title: "Linux", hex: "FCC624" },
  { slug: "vercel", title: "Vercel", hex: "000000" },
  { slug: "vscode", title: "VS Code", hex: "007ACC" },
  { slug: "figma", title: "Figma", hex: "F24E1E" },
  { slug: "solidity", title: "Solidity", hex: "363636" },
  { slug: "cpp", title: "C++", hex: "00599C" },
  { slug: "java", title: "Java", hex: "007396" },
  { slug: "python", title: "Python", hex: "3776AB" },
  { slug: "rust", title: "Rust", hex: "000000" },
  { slug: "ethereum", title: "Ethereum", hex: "3C3C3D" },
  { slug: "web3dotjs", title: "Web3.js", hex: "F16822" },
];

// Custom icon renderer
const renderCustomIcon = (icon: { slug: string; title: string; hex: string }, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon: {
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
      source: "",
      guidelines: "",
      license: { type: "" }
    },
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

// Main Skill Cloud Component
export default function SkillCloud() {
  const { theme } = useTheme();

  const renderedIcons = useMemo(() => {
    return manualIcons.map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [theme]);

  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-4 py-10">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
}