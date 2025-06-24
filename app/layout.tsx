
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/providers";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Suhana Shaik",
  description: "Portfolio Website of Suhana Shaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import { LenisProvider } from "@/components/providers";
// import { ThemeProvider } from "next-themes";
// import { Spotlight } from "@/components/ui/spotlight";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Suhana Shaik",
//   description: "Portfolio Website of Suhana Shaik",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/logo.png" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
//       >
//         {/* ✅ Spotlight in background */}
//         <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
//           <Spotlight fill="white" className="w-full h-full" />
//         </div>

//         {/* ✅ App Content above spotlight */}
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
//           <LenisProvider>
//             <main className="relative z-10">{children}</main>
//           </LenisProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
