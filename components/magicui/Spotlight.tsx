// import React from "react";
// import { Spotlight } from "../ui/spotlight";

// export function SpotlightPreview() {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
       
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Spotlight } from "../ui/spotlight"; // Adjust path if needed

export function SpotlightPreview() {
  return (
    <>
      {/* ✅ FIXED BACKGROUND SPOTLIGHT */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[100px] left-[150px] w-[700px] h-[700px]">
          <Spotlight fill="white" className="w-full h-full" />
        </div>
      </div>

      {/* ✅ YOUR FOREGROUND SECTION */}
      <div className="relative z-10 min-h-[40rem] w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] flex items-center justify-center px-4">
        <div className="text-white text-2xl font-semibold text-center max-w-xl">
          This section stays fixed. The spotlight never shifts.
        </div>
      </div>
    </>
  );
}
