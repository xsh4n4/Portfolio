// import IconCloud from "../ui/iconcloud";

// const slugs = [
//   "typescript",
//   "javascript",
//   "react",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   "vercel",
//   "testinglibrary",
//   "docker",
//   "git",
//   "github",
//   "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   "figma",
//   "linux",
//   "postman",
//   "netlify",
//   "solidity",
//   "cpp",
//   "java",
//   "python",
//   "tensorflow",
//   "numpy",
//   "pandas",
//   "rust",
//     "ethereum",
//     "solidity",
//     "web3dotjs"
// ];

// export function IconCloudDemo() {
//   return (
//     <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
//       <IconCloud iconSlugs={slugs} />
//     </div>
//   );
// }
import IconCloud from "../ui/iconcloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mongodb",
  "mysql",
  "git",
  "github",
  "linux",
  "vercel",
  "vscode",
  "figma",
  "solidity",
  "cpp",
  "java",
  "python",
  "rust",
  "ethereum",
  "web3dotjs"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}