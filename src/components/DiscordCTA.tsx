import React from "react";
import { MessageSquare, ArrowUpRight, Users } from "lucide-react";
import { useServerConfig } from "../context/ServerConfigContext";
import { motion } from "motion/react";

export default function DiscordCTA() {
  const { config } = useServerConfig();

  return (
    <section 
      id="discord-cta" 
      className="py-24 px-4 relative overflow-hidden bg-[#070707]"
    >
      {/* Background visual frames */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-dark to-transparent" />
      
      {/* Large glowing red ambient circle behind Discord Box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#5865F2]/10 blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-2xl border-l-4 border-l-[#5865F2] text-center flex flex-col items-center justify-center relative overflow-hidden"
          id="discord-cta-box"
        >
          {/* Subtle design patterns in background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5865F2]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          {/* Custom Stylized Discord Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/30 mb-8 shadow-lg shadow-[#5865F2]/10">
            {/* Discord custom brand SVG */}
            <svg 
              className="h-8 w-8 text-[#5865F2]" 
              fill="currentColor" 
              viewBox="0 0 127.14 96.36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,72.63,0c.82.71,1.68,1.4,2.58,2a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.81,48.54,124,25.77,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
            </svg>
          </div>

          {/* Title */}
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight mb-4">
            GABUNG KOMUNITAS DISCORD
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mb-10 leading-relaxed font-sans">
            Jadilah bagian dari komunitas game {config.name} yang terus berkembang! Dapatkan pengumuman terbaru, ikuti event-event seru server, diskusikan strategi permainan dengan member lain, atau hubungi tim bantuan kapan saja.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <a
              href={config.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-[#5865F2] hover:bg-[#4752C4] text-white font-display font-bold tracking-wider hover:shadow-xl hover:shadow-[#5865F2]/20 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
              aria-label={`Bergabung dengan Discord ${config.name}`}
              id="btn-join-discord"
            >
              <Users className="h-5 w-5" />
              BERGABUNG SEKARANG
              <ArrowUpRight className="h-4.5 w-4.5 opacity-80" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
