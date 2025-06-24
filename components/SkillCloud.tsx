"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
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

// Custom icon renderer
const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
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
  const iconSlugs = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "tailwindcss",
    "nodedotjs",
    "express",
    "nestjs",
    "mongodb",
    "postgresql",
    "mysql",
    "prisma",
    "git",
    "github",
    "postman",
    "docker",
    "linux",
    "vercel",
    "vscode",
    "redux",
  ];

  const [data, setData] = useState<Awaited<ReturnType<typeof fetchSimpleIcons>> | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-4 py-10">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
}
