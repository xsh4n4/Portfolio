
// "use client";

// import React, { useRef, useEffect } from "react";
// import { Send } from "lucide-react";
// import {
//   FaEnvelope,
//   FaXTwitter,
//   FaGithub,
//   FaLinkedin
// } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
// const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
// const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// const Contact = () => {
//   const form = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     emailjs.init(publicKey);
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       const formElements = form.current.elements as typeof form.current.elements & {
//         name: HTMLInputElement;
//         email: HTMLInputElement;
//         message: HTMLTextAreaElement;
//       };

//       const formData = {
//         from_name: formElements.name.value,
//         from_email: formElements.email.value,
//         message: formElements.message.value,
//       };

//       emailjs
//         .send(serviceID, templateID, formData)
//         .then(() => {
//           toast.success("✅ Message sent successfully!");
//           form.current?.reset();
//         })
//         .catch((error) => {
//           console.error("❌ Email sending error:", error);
//           toast.error("Something went wrong. Please try again later.");
//         });
//     }
//   };

//   return (
//     <section id="contact" className="relative py-20 px-4 bg-black overflow-hidden">
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="flex items-center space-x-2 mb-12">
//           < Send className="text-blue-500" size={28} />
//           <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center text-white">Get in Touch</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Info */}
//           <motion.div className="bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
//             <p className="text-gray-300 mb-8">
//               Have a project in mind or just want to say hi? Feel free to reach out via Twitter. I'm always open to discussing new opportunities and connecting with like-minded individuals.
//             </p>
//             <div className="space-y-4 text-blue-400">
//               <a href="mailto:xsh4n4@gmail.com" className="flex items-center space-x-3">
//                 <FaEnvelope size={18} />
//                 <span>xsh4n4@gmail.com</span>
//               </a>
//               <a href="https://linkedin.com/in/suhanask" target="_blank" className="flex items-center space-x-3">
//                 <FaLinkedin size={18} />
//                 <span>linkedin.com/in/suhanask</span>
//               </a>
//               <a href="https://github.com/xsh4n4" target="_blank" className="flex items-center space-x-3">
//                 <FaGithub size={18} />
//                 <span>github.com/xsh4n4</span>
//               </a>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
//   <input
//     type="text"
//     name="name"
//     placeholder="Your Name"
//     required
//     className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
//   />
//   <input
//     type="email"
//     name="email"
//     placeholder="Your Email"
//     required
//     className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
//   />
//   <textarea
//     name="message"
//     placeholder="Your Message"
//     rows={4}
//     required
//     className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
//   />
//   <button
//     type="submit"
//     className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
//   >
//     Send Message
//   </button>
// </motion.form>


//         </div>
//       </motion.div>

//       {/* Toast Container */}
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </section>
//   );
// };

// export default Contact;
"use client";

import React, { useRef, useEffect } from "react";
import { Send } from "lucide-react";
import {
  FaEnvelope,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegram
} from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { GiShield, GiLaserPrecision } from "react-icons/gi";
import { SiHackerone, SiTarget, SiMedium } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formElements = form.current.elements as typeof form.current.elements & {
        name: HTMLInputElement;
        email: HTMLInputElement;
        message: HTMLTextAreaElement;
      };

      const formData = {
        from_name: formElements.name.value,
        from_email: formElements.email.value,
        message: formElements.message.value,
      };

      emailjs
        .send(serviceID, templateID, formData)
        .then(() => {
          toast.success("✅ Message sent successfully!");
          form.current?.reset();
        })
        .catch((error) => {
          console.error("❌ Email sending error:", error);
          toast.error("Something went wrong. Please try again later.");
        });
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-black overflow-hidden">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center text-center mb-12 space-x-4">
  <Send className="text-blue-500" size={32} />
  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
    Get in Touch
  </h2>
</div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div className="bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
            <div className="text-lg md:text-xl text-gray-300 mt-10 mb-8 leading-relaxed space-y-3">
  <p>Have a project in mind? Or just want to say hi?</p>
  <p>Feel free to reach out. I'm always open to discussing new opportunities and connecting with like-minded builders.</p>
  
</div>

            <motion.h3
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-xl font-semibold text-white mb-6"
>
  MY SOCIALS :
</motion.h3>
            <div className="flex flex-wrap gap-4 text-blue-400">
              <a href="mailto:xsh4n4@gmail.com" title="Email" target="_blank"><FaEnvelope size={24} className="hover:text-white transition" /></a>
              <a href="https://linkedin.com/in/suhanask" title="LinkedIn" target="_blank"><FaLinkedin size={24} className="hover:text-white transition" /></a>
              <a href="https://github.com/xsh4n4" title="GitHub" target="_blank"><FaGithub size={24} className="hover:text-white transition" /></a>
              <a href="https://x.com/xsh4n4" title="X / Twitter" target="_blank"><FaXTwitter size={24} className="hover:text-white transition" /></a>
              <a href="https://discord.com/users/yourid" title="Discord" target="_blank"><FaDiscord size={24} className="hover:text-white transition" /></a>
              <a href="https://medium.com/@xsh4n4" title="Medium" target="_blank"><SiMedium size={24} className="hover:text-white transition" /></a>
              <a href="https://t.me/yourusername" title="Telegram" target="_blank"><FaTelegram size={24} className="hover:text-white transition" /></a>
              <a href="/resume.pdf" title="Resume" target="_blank"><LuFileText size={24} className="hover:text-white transition" /></a>
              <a href="https://cantina.xyz/yourprofile" title="Cantina" target="_blank"><GiLaserPrecision size={24} className="hover:text-white transition" /></a>
              <a href="https://immunefi.com/profile/xsh4n4" title="Immunefi" target="_blank"><GiShield size={24} className="hover:text-white transition" /></a>
              <a href="https://hackerone.com/xsh4n4" title="HackerOne" target="_blank"><SiHackerone size={24} className="hover:text-white transition" /></a>
              <a href="https://code4rena.com/yourprofile" title="Code4rena" target="_blank"><SiTarget size={24} className="hover:text-white transition" /></a>
              <a href="https://warpcast.com/xsh4n4" title="Farcaster" target="_blank"><TbBrandFigma size={24} className="hover:text-white transition" /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl bg-bl-900/40 border border-blue-500/50 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
