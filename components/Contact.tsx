
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
        name: formElements.name.value,
        email: formElements.email.value,
        message: formElements.message.value
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
          <h3 className="text-5xl font-bold tracking-wide">
  <span className="text-white">Get in </span>
  <span className="text-blue-500">Touch</span>
</h3>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div className="bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
            {/* <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-blue-400 relative inline-block w-fit"
            >
              CONTACT ME :
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.h3> */}
            <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full"
>
  <div className="flex justify-center items-center w-full">
    <button className="w-40 h-8 rounded-xl bg-blue-600 text-white text-xl font-semibold">
      CONTACT ME
    </button>
  </div>
</motion.div>



            <div className="text-lg md:text-xl text-gray-300 text-center mt-6 mb-10 leading-relaxed space-y-3">
              <p>Have a project in mind? Or just want to say hi?</p>
              <p>
                Feel free to reach out. I'm always open to discussing new
                opportunities and connecting with like-minded builders.
              </p>
            </div>

            <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full"
>
  <div className="flex justify-center items-center w-full">
    <button className="w-40 h-8 rounded-xl bg-blue-600 text-white text-xl font-semibold">
      MY SOCIALS
    </button>
  </div>
</motion.div>



         <div className="w-full flex justify-center">
  <div className="grid grid-cols-8 gap-x-5 gap-y-6 text-white text-[1.75rem] mt-6 mb-10 mx-auto">

              <a href="mailto:xsh4n4@gmail.com" title="Email" target="_blank"><FaEnvelope className="hover:text-blue-400 transition" /></a>
              <a href="https://linkedin.com/in/suhanask" title="LinkedIn" target="_blank"><FaLinkedin className="hover:text-blue-400 transition" /></a>
              <a href="https://github.com/xsh4n4" title="GitHub" target="_blank"><FaGithub className="hover:text-blue-400 transition" /></a>
              <a href="https://x.com/xsh4n4" title="Twitter" target="_blank"><FaXTwitter className="hover:text-blue-400 transition" /></a>
              <a href="https://discord.com/users/yourid" title="Discord" target="_blank"><FaDiscord className="hover:text-blue-400 transition" /></a>
              <a href="https://medium.com/@xsh4n4" title="Medium" target="_blank"><SiMedium className="hover:text-blue-400 transition" /></a>
              <a href="https://t.me/yourusername" title="Telegram" target="_blank"><FaTelegram className="hover:text-blue-400 transition" /></a>
              <a href="/resume.pdf" title="Resume" target="_blank"><LuFileText className="hover:text-blue-400 transition" /></a>
              <a href="https://cantina.xyz/yourprofile" title="Cantina" target="_blank"><GiLaserPrecision className="hover:text-blue-400 transition" /></a>
              <a href="https://immunefi.com/profile/xsh4n4" title="Immunefi" target="_blank"><GiShield className="hover:text-blue-400 transition" /></a>
              <a href="https://hackerone.com/xsh4n4" title="HackerOne" target="_blank"><SiHackerone className="hover:text-blue-400 transition" /></a>
              <a href="https://code4rena.com/yourprofile" title="Code4rena" target="_blank"><SiTarget className="hover:text-blue-400 transition" /></a>
              <a href="https://warpcast.com/xsh4n4" title="Farcaster" target="_blank"><TbBrandFigma className="hover:text-blue-400 transition" /></a>
            </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl bg-blue-600/40 border border-blue-500/50 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl bg-blue-600/40 border border-blue-500/50 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 rounded-xl bg-blue-600/40 border border-blue-500/50 text-white"
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

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
