import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";
import Tilt from 'react-parallax-tilt';

export function Contact() {
  const links = [
    { name: "Email", icon: <Mail size={24} />, href: "mailto:hello@example.com", color: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, href: "#", color: "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-blue-600/20" },
    { name: "GitHub", icon: <Github size={24} />, href: "#", color: "bg-slate-800/10 text-slate-800 dark:bg-white/10 dark:text-white hover:bg-slate-800/20 dark:hover:bg-white/20 border-slate-800/20 dark:border-white/20" },
    { name: "Telegram", icon: <Send size={24} />, href: "#", color: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 border-sky-500/20" },
  ];

  return (
    <section id="contact" className="w-full py-32 bg-slate-50 dark:bg-[#05081c] border-t border-slate-200 dark:border-red-500/10 relative overflow-hidden">
      {/* Cinematic RED Background decoration */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-red-600/10 rounded-full blur-[150px] pointer-events-none translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 dark:from-red-400 dark:via-rose-400 dark:to-red-400 animate-gradient bg-[length:200%_auto] neon-text">
              Amazing Together.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.a 
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl hover:from-red-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2 text-lg relative z-10">Say Hello</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {links.map((link, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
              >
                <motion.a
                  href={link.href}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#0a0f1c] border-2 ${link.color} shadow-sm hover:shadow-lg transition-all group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">{link.name}</span>
                </motion.a>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
