import React from "react";
import { motion } from "motion/react";
import Tilt from 'react-parallax-tilt';

export function TechStack() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-red-500 to-rose-500",
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
      gradient: "from-red-600 to-red-700",
    },
    {
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "Prisma"],
      gradient: "from-rose-500 to-red-500",
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "GitHub"],
      gradient: "from-red-700 to-rose-600",
    },
    {
      name: "AI & Modern",
      skills: ["OpenAI API", "LangChain", "Vector DBs"],
      gradient: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="tech" className="w-full py-24 bg-slate-50 dark:bg-[#05081c] border-y border-slate-200 dark:border-red-500/10 relative overflow-hidden">
      {/* Background Glow - CINEMATIC RED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A comprehensive suite of modern technologies used to build scalable, high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <Tilt
              key={category.name}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ef4444"
              glareBorderRadius="16px"
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-red-500/20 shadow-sm hover:shadow-xl hover:shadow-red-500/10 dark:hover:bg-white/[0.07] transition-all h-full relative overflow-hidden group"
              >
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent shimmer opacity-0 group-hover:opacity-100" />
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 relative z-10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} shadow-[0_0_10px_rgba(239,68,68,0.5)]`} />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0a0f1c] text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-red-500/10 hover:border-red-300 dark:hover:border-red-500/30 transition-colors cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
