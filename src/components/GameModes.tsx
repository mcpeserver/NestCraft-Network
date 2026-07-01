import React from "react";
import * as Icons from "lucide-react";
import { SERVER_CONFIG } from "../config/serverConfig";
import { motion } from "motion/react";

// Helper to resolve Lucide Icon components dynamically
const resolveIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className="h-6 w-6 text-primary transition-transform group-hover:scale-110 duration-300" />;
  }
  return <Icons.HelpCircle className="h-6 w-6 text-primary" />;
};

export default function GameModes() {
  return (
    <section 
      id="game-modes" 
      className="py-24 px-4 relative bg-[#090909]"
    >
      {/* Visual background details */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-dark to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white uppercase mb-4">
            MODE <span className="text-primary">PERMAINAN</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
            Jelajahi berbagai pilihan game mode premium yang kami sediakan dalam satu jaringan server tunggal. Setiap mode permainan dirancang secara khusus untuk memberikan pengalaman petualangan terbaik tanpa lag.
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVER_CONFIG.gameModes.map((mode, index) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-8 rounded-xl relative overflow-hidden group flex flex-col justify-between"
              id={`card-mode-${mode.id}`}
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
              
              <div>
                {/* Icon & Tag Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shadow-inner group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    {resolveIcon(mode.iconName)}
                  </div>
                  <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-primary bg-primary/5 border border-primary/20 px-3 py-1 rounded-full uppercase">
                    {mode.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {mode.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {mode.description}
                </p>
              </div>

              {/* Action Prompt Link */}
              <div className="pt-4 border-t border-border-dark flex items-center justify-between text-xs font-mono tracking-wider text-text-secondary group-hover:text-white transition-colors">
                <span>STATUS: AKTIF</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">➔</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
