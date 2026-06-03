import React, { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { CurrentProject } from "./components/CurrentProject";
import { Experience } from "./components/Experience";
import { Leadership } from "./components/Leadership";
import { GithubImpact } from "./components/GithubImpact";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 text-slate-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/90 dark:text-slate-50 font-sans selection:bg-blue-500/30 antialiased transition-all duration-700 overflow-x-hidden">
        {/* Ambient Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse opacity-40 dark:opacity-20" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse opacity-30 dark:opacity-15" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-violet-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse opacity-35 dark:opacity-15" style={{animationDelay: '4s'}} />
        </div>
        
        <Navbar />
        <main className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <CurrentProject />
          <Experience />
          <Leadership />
          <GithubImpact />
          <Contact />
        </main>
        <footer className="relative z-10 w-full py-12 border-t border-slate-200/50 dark:border-white/5 backdrop-blur-sm bg-white/30 dark:bg-slate-950/30">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Abdisa Awel Tahir. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500">
              <span>Crafted with passion</span>
              <span>•</span>
              <span>Powered by React</span>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
