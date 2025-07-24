

"use client";
import WorldMap from "@/components/magicui/WorldMap";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
  return (
    <div className="py-20 bg-black w-full flex flex-col items-center justify-center overflow-hidden relative">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center z-10 px-4">
        <p className="font-bold text-xl md:text-4xl text-white">
          Remote Freelance{" "}
          <span className="text-blue-500">
            {" Services".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          I offer the flexibility to work for anyone — whether from the same
          country or different. I provide tailored solutions for clients around
          the globe, perfect for those who value creativity, independence, and
          efficiency.
        </p>
      </div>

      {/* Map Wrapper - responsive */}
      <div className="relative w-full max-w-[1200px] aspect-[2/1] mt-10">
        <WorldMap
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -53.8919 } },
            { start: { lat: -15.7975, lng: -53.8919 }, end: { lat: 43.7223, lng: -9.1393 } },
            { start: { lat: 49.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
          ]}
        />

        {/* India Marker */}
        <div
          className="absolute flex items-center space-x-2 animate-bounce z-20"
          style={{
            top: "47%", // responsive %
            left: "71%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#f87171"
            className="w-5 h-5 drop-shadow-lg"
          >
            <path d="M192 0C86 0 0 86 0 192c0 77.4 27.5 99.3 172.7 307.3a24 24 0 0 0 38.6 0C356.5 291.3 384 269.4 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 0-160 80 80 0 0 1 0 160z" />
          </svg>
          <span className="text-white text-sm bg-red-600 px-2 py-1 rounded shadow-md">
            India
          </span>
        </div>
        
      </div>
      
    </div>
    
  );
}
