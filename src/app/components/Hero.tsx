import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Code2, Database, Sparkles, Zap } from "lucide-react";
import Tilt from 'react-parallax-tilt';

export function Hero() {
  const stats = [
    { label: "Years Experience", value: "2+", icon: <Sparkles size={16} /> },
    { label: "Repositories", value: "67+", icon: <Code2 size={16} /> },
    { label: "Contributions", value: "1450+", icon: <Zap size={16} /> },
    { label: "Internship", value: "Completed", icon: <Database size={16} /> },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic RED Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-red-600/30 rounded-full blur-[120px] mix-blend-screen opacity-60 dark:opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-rose-500/25 rounded-full blur-[100px] mix-blend-screen opacity-50 dark:opacity-35 animate-pulse" style={{animationDelay: '1.5s'}} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium border border-red-500/20 w-max relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2 w-2 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="relative z-10">Available for new opportunities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent shimmer" />
          </motion.div>

          <motion.h1 
            className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building Real-World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 dark:from-red-400 dark:via-rose-400 dark:to-red-400 animate-gradient bg-[length:200%_auto] neon-text">
              Digital Solutions
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I design, develop, and deploy scalable web applications, AI-powered systems, and enterprise solutions that make an impact.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-xl font-medium hover:from-red-700 hover:to-rose-700 transition-all shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 border-2 border-red-200 dark:border-red-500/30 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-300 dark:hover:border-red-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-red-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col gap-1 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] z-20 bg-white dark:bg-[#0a0f1c] p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Frontend</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">React & Next.js</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[0%] z-20 bg-white dark:bg-[#0a0f1c] p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Backend</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Node & MongoDB</p>
            </div>
          </motion.div>

          {/* Main Visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-[2.5rem] blur-2xl transform rotate-3" />
          <div className="absolute inset-0 bg-slate-900 dark:bg-[#0a0f1c] rounded-[2rem] border border-slate-800 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-800/50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-slate-900/50 dark:bg-black/50 px-3 py-1 rounded-md text-xs text-slate-400 font-mono flex items-center gap-2">
                <Terminal size={12} />
                abdisa@portfolio:~
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 flex-1 overflow-hidden bg-[#0d1117] relative">
              <div className="absolute top-0 left-0 w-8 h-full border-r border-white/5 bg-[#0d1117] text-right pr-2 pt-6 text-slate-600 select-none hidden sm:block">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
              </div>
              <div className="pl-0 sm:pl-10">
                <p className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-400">'Abdisa Awel Tahir'</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">'Full-Stack Engineer'</span>,</p>
                <p className="pl-4">skills: ['<span className="text-yellow-300">React</span>', '<span className="text-yellow-300">Next.js</span>', '<span className="text-yellow-300">Node</span>'],</p>
                <p className="pl-4">passionateAbout: <span className="text-green-400">'Building AI systems'</span></p>
                <p>{'};'}</p>
                <br/>
                <p className="text-purple-400">async function <span className="text-blue-400">init</span>() {'{'}</p>
                <p className="pl-4 text-slate-500">// Deploying next big thing...</p>
                <p className="pl-4">await developer.<span className="text-blue-300">build</span>(<span className="text-green-400">'Enterprise App'</span>);</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
