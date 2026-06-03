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
import { ParticleBackground } from "./components/3d/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";
import "../styles/globals.css";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const lenis = async () => {
      const Lenis = (await import('lenis')).default;
      const lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    lenis();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20 text-slate-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-950 dark:via-red-950/50 dark:to-slate-950 dark:text-slate-50 font-sans selection:bg-red-500/30 antialiased transition-all duration-700 overflow-x-hidden">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* 3D Particle Background */}
        <ParticleBackground />
        
        {/* Ambient Background Effects - CINEMATIC RED */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-500/20 via-red-600/15 to-rose-500/10 rounded-full blur-3xl animate-pulse opacity-50 dark:opacity-30" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/15 via-crimson/10 to-red-500/10 rounded-full blur-3xl animate-pulse opacity-40 dark:opacity-25" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-rose-500/15 via-red-700/10 to-red-500/10 rounded-full blur-3xl animate-pulse opacity-45 dark:opacity-20" style={{animationDelay: '4s'}} />
          
          {/* Additional Cinematic Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
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
        <footer className="relative z-10 w-full py-12 border-t border-slate-200/50 dark:border-red-500/10 backdrop-blur-sm bg-white/30 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Abdisa Awel Tahir. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500">
              <span>Crafted with passion</span>
              <span className="text-red-500">•</span>
              <span>Powered by React</span>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
