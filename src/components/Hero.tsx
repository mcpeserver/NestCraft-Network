import React from "react";
import { Play, Info, Layers, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { SERVER_CONFIG } from "../config/serverConfig";

interface HeroProps {
  onCopyIp: (ip: string) => void;
}

export default function Hero({ onCopyIp }: HeroProps) {
  const handleMainSekarangClick = () => {
    onCopyIp(SERVER_CONFIG.javaIp);
    const element = document.getElementById("server-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGameModes = () => {
    const element = document.getElementById("game-modes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* 1. Cinematic Background & Effects */}
      {/* Digital grid layout overlay */}
      <div className="absolute inset-0 cyber-grid-red opacity-60 z-0 pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 z-0 pointer-events-none" />

      {/* Cinematic Red Glow/Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[550px] md:h-[550px] rounded-full bg-[#D61F26] opacity-[0.12] blur-[80px] md:blur-[140px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute -top-40 left-0 right-0 h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none blur-[60px]" />
      
      {/* Subtle Neon Lines */}
      <div className="absolute top-[20%] left-0 right-0 neon-line-red opacity-40 pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 right-0 neon-line-red opacity-30 pointer-events-none" />

      {/* Cinematic grid border visual frame */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border-dark/50 to-transparent hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border-dark/50 to-transparent hidden lg:block" />

      {/* 2. Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Glowing Logo - The centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          {/* External glow background */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-70 group-hover:bg-primary/30 transition-all duration-500 scale-95" />
          
          <img
            src="/logo.png"
            alt="NestCraft Network Primary Logo"
            referrerPolicy="no-referrer"
            className="h-32 w-32 md:h-44 md:w-44 object-contain rounded-2xl relative z-10 red-glow-logo transform transition-all duration-500 group-hover:scale-[1.03]"
          />
        </motion.div>

        {/* Small Server Jumbotron Category */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4 backdrop-blur-sm"
        >
          <Layers className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-primary uppercase">
            MULTI-GAME MODE NETWORK
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white uppercase leading-none mb-4"
        >
          NESTCRAFT <span className="text-primary block md:inline">NETWORK</span>
        </motion.h1>

        {/* Tagline / Welcome Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl font-medium text-white max-w-2xl mb-6 tracking-wide"
        >
          Selamat Datang di NestCraft Network Server
        </motion.p>

        {/* Network multi-mode description summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm md:text-base text-text-secondary max-w-xl mb-10 leading-relaxed font-sans"
        >
          Sebuah ekosistem gaming modern Minecraft Indonesia. Kami menyediakan berbagai pilihan game mode terpopuler—termasuk Survival, PvP, OneBlock, SkyBlock, Creative, dan Parkour—yang dirancang untuk performa server terbaik, bebas lag, dan komunitas yang ramah.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleMainSekarangClick}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary/95 text-white font-display font-bold tracking-wider hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer red-glow-hover"
            aria-label="Main Sekarang - Menyalin IP Server"
          >
            <Play className="h-4.5 w-4.5 fill-current" />
            MAIN SEKARANG
          </button>
          
          <button
            onClick={scrollToGameModes}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-border-dark bg-surface-dark/40 hover:bg-surface-dark/80 text-white font-display font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            aria-label="Lihat Informasi - Gulir ke informasi mode game"
          >
            <Info className="h-4.5 w-4.5 text-text-secondary" />
            LIHAT INFORMASI
          </button>
        </motion.div>
      </div>

      {/* Down Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer hidden md:flex flex-col items-center gap-1 text-text-secondary hover:text-white"
        onClick={scrollToGameModes}
        aria-label="Gulir ke mode game"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">GULIR KE BAWAH</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
