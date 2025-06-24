// import React from 'react'
// import SignupFormDemo from './ui/signup-form-demo'

// const Contact = () => {
//   return (
//     <div 
//       id="contact"
// className='py-10 sm:py-0'>
//         <SignupFormDemo/>
//     </div>
//   )
// }

// export default Contact
"use client";

import React, { useRef, useEffect } from "react";
import { Send } from "lucide-react";
import {
  FaEnvelope,
  FaXTwitter,
  FaGithub,
  FaLinkedin
} from "react-icons/fa6";
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
        <div className="flex items-center space-x-2 mb-12">
          < Send className="text-blue-500" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center text-white">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div className="bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
            <p className="text-gray-300 mb-8">
              Have a project in mind or just want to say hi? Feel free to reach out via Twitter. I'm always open to discussing new opportunities and connecting with like-minded individuals.
            </p>
            <div className="space-y-4 text-blue-400">
              <a href="mailto:xsh4n4@gmail.com" className="flex items-center space-x-3">
                <FaEnvelope size={18} />
                <span>xsh4n4@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/suhanask" target="_blank" className="flex items-center space-x-3">
                <FaLinkedin size={18} />
                <span>linkedin.com/in/suhanask</span>
              </a>
              <a href="https://github.com/xsh4n4" target="_blank" className="flex items-center space-x-3">
                <FaGithub size={18} />
                <span>github.com/xsh4n4</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-xl">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-3 rounded-xl bg-blue-900/40 border border-blue-500/50 text-white"
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
