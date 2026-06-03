import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Tilt from 'react-parallax-tilt';

export function Projects() {
  const projects = [
    {
      title: "EthioLegalAI",
      description: "An AI-powered legal assistant designed to navigate and simplify Ethiopian law. Built to democratize legal access with natural language processing.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGxlZ2FsJTIwc2NhbGVzJTIwZnV0dXJpc3RpYyUyMHRlY2glMjBibHVlfGVufDF8fHx8MTc4MDM1NDE0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
      metrics: ["Reduced research time by 80%", "Processed 10k+ queries"],
      github: "#",
      demo: "#",
      accentColor: "red"
    },
    {
      title: "MWU Laptop Exit Verification System",
      description: "Enterprise security solution for university campus hardware tracking. Features real-time scanning, automated verification, and analytics dashboards.",
      image: "https://images.unsplash.com/photo-1762681829391-74e80741e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzZWN1cml0eSUyMGxvY2slMjBtb2Rlcm4lMjB0ZWNofGVufDF8fHx8MTc4MDM1NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "QR Integration"],
      metrics: ["Secured 5,000+ devices", "Zero unauthorized exits"],
      github: "#",
      demo: "#",
      accentColor: "rose"
    },
    {
      title: "CTC Learning Management System",
      description: "A comprehensive educational platform designed to streamline course delivery, assignments, and student progress tracking for modern institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMHNjcmVlbnxlbnwxfHx8fDE3ODAzNTQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["MERN Stack", "Redux", "AWS S3", "Socket.io"],
      metrics: ["Active 2,000+ users", "99.9% Uptime"],
      github: "#",
      demo: "#",
      accentColor: "red"
    }
  ];

  return (
    <section id="projects" className="w-full py-32 bg-white dark:bg-[#030614] relative overflow-hidden">
      {/* Cinematic RED Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A selection of enterprise applications and AI systems I've built to solve complex, real-world problems.
            </motion.p>
          </div>
          <motion.a 
            href="#" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:gap-3 transition-all group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            View All Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ef4444"
                  glareBorderRadius="24px"
                  scale={1.05}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-[#0a0f1c] aspect-[4/3] border-2 border-red-200 dark:border-red-500/20 group shadow-2xl shadow-red-500/10 hover:shadow-red-500/20 transition-shadow duration-500">
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image with zoom effect */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold shadow-lg z-20">
                      Featured
                    </div>
                  </div>
                </Tilt>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <motion.h3 
                  className="text-3xl font-bold text-slate-900 dark:text-white"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 py-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      className="px-3 py-1 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-sm font-medium border border-red-200 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-red-500/20 my-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
                      {metric}
                    </div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 pt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a 
                    href={project.demo} 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-xl font-medium hover:from-red-700 hover:to-rose-700 transition-all shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} className="relative z-10" />
                    <span className="relative z-10">Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                  <motion.a 
                    href={project.github} 
                    className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border-2 border-red-200 dark:border-red-500/30 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-300 dark:hover:border-red-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={18} />
                    Source
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
