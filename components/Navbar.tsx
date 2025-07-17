
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes, FaPaw } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [catActive, setCatActive] = useState(true);

//   useEffect(() => {
//     if (catActive) {
//       if (!document.getElementById("cat-script")) {
//         const script = document.createElement("script");
//         script.src = "/oneko.js";
//         script.id = "cat-script";
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     } else {
//       // Remove script
//       const script = document.getElementById("cat-script");
//       if (script) script.remove();

//       // Remove any existing cat elements
//       const catElements = document.querySelectorAll("div, canvas, img");
//       catElements.forEach((el) => {
//         if (
//           el.id === "oneko" ||
//           el.className.includes("oneko") ||
//           (el as HTMLImageElement).src?.includes("oneko.gif")
//         ) {
//           el.remove();
//         }
//       });
//     }
//   }, [catActive]);

//   return (
//     <header className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo + Brand */}
//         <motion.div
//           className="flex items-center space-x-3"
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//         >
//           <Image
//             src="/oneko-logo.png"
//             alt="Logo"
//             width={32}
//             height={32}
//             className="rounded-full object-cover shadow-md"
//           />
//           <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
//             xsh4n4's
//           </span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {["Home", "About", "Projects", "Experience", "Contact"].map((item, idx) => (
//             <motion.div
//               key={item}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.05 * idx }}
//             >
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className="text-neutral-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
//               >
//                 {item}
//               </Link>
//             </motion.div>
//           ))}

//           {/* Cat Toggle Button */}
//           <button
//             onClick={() => setCatActive((prev) => !prev)}
//             title="Toggle Cat"
//             className="text-white text-xl ml-4 hover:text-blue-400 transition"
//           >
//             <FaPaw />
//           </button>

//         </nav>

//         {/* Mobile Toggle */}
//         <div className="md:hidden z-50 flex items-center gap-4">
//           <button
//             onClick={() => setCatActive((prev) => !prev)}
//             title="Toggle Cat"
//             className="text-white text-xl"
//           >
//             <FaPaw />
//           </button>
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-black/90 py-4 px-6 space-y-4 text-center text-white">
//           {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="block text-lg font-medium hover:text-blue-400"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}

//         </div>
//       )}
//     </header>
//   );
// }
"use client";

// Declare custom global window property
declare global {
  interface Window {
    oneko?: () => void;
  }
}


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaPaw } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [catActive, setCatActive] = useState(true);

  useEffect(() => {
    if (catActive) {
      if (typeof window.oneko === "function") {
        window.oneko();
      } else if (!document.getElementById("cat-script")) {
        const script = document.createElement("script");
        script.src = "/oneko.js";
        script.id = "cat-script";
        script.async = true;
        script.onload = () => {
          if (typeof window.oneko === "function") {
            window.oneko();
          }
        };
        document.body.appendChild(script);
      }
    } else {
      // Fade out the cat before removing
      const neko = document.getElementById("oneko");
      if (neko) {
        neko.style.transition = "opacity 0.5s ease";
        neko.style.opacity = "0";
        setTimeout(() => {
          neko?.remove();
        }, 500);
      }

      // Remove script
      const script = document.getElementById("cat-script");
      if (script) script.remove();
    }
  }, [catActive]);

  return (
    <header className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Image
            src="/oneko-logo.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full object-cover shadow-md"
          />
          <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
            xsh4n4's
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item, idx) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-neutral-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
              >
                {item}
              </Link>
            </motion.div>
          ))}

          {/* Cat Toggle Button */}
          <button
            onClick={() => setCatActive(prev => !prev)}
            title="Toggle Cat"
            className="text-white text-xl ml-4 hover:text-blue-400 transition"
          >
            <FaPaw />
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button
            onClick={() => setCatActive(prev => !prev)}
            title="Toggle Cat"
            className="text-white text-xl"
          >
            <FaPaw />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 py-4 px-6 space-y-4 text-center text-white">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg font-medium hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
