import React from "react";
import { Phone, ExternalLink } from "lucide-react";
import { SERVER_CONFIG } from "../config/serverConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="footer" 
      className="bg-[#050505] border-t border-border-dark pt-16 pb-12 px-4 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top footer row with Brand branding */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pb-12 border-b border-border-dark/60 mb-10 gap-8">
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
          >
            <img
              src="/logo.png"
              alt="NestCraft Network Secondary Logo"
              referrerPolicy="no-referrer"
              className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain"
              loading="lazy"
            />
            <div className="text-left">
              <span className="font-display font-bold text-base md:text-lg tracking-tight text-white block group-hover:text-primary transition-colors">
                NESTCRAFT
              </span>
              <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-primary block -mt-1 uppercase">
                NETWORK
              </span>
            </div>
          </div>

          {/* Quick legal / server compliance terms (Classic gaming bottom rows) */}
          <div className="text-center md:text-right">
            <p className="text-xs text-text-secondary font-sans leading-relaxed max-w-sm md:max-w-md">
              NestCraft Network adalah jaringan independen server Minecraft Indonesia. Kami tidak terafiliasi dengan Mojang Studios, Microsoft, atau Xbox Game Studios.
            </p>
          </div>
        </div>

        {/* Bottom footer credit watermark & copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-center sm:text-left gap-4">
          <div>
            <p className="text-xs text-text-secondary font-sans">
              &copy; {new Date().getFullYear()} <span className="text-white font-medium">{SERVER_CONFIG.name}</span>. Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>

          {/* Watermark Kredit Pengembang - Sangat Penting Sesuai Mandat */}
          <div className="bg-surface-dark/40 border border-border-dark py-3 px-5 rounded-md flex flex-col md:flex-row items-center gap-2">
            <p className="text-xs text-text-secondary font-mono tracking-wide">
              Website dikembangkan oleh{" "}
              <span className="text-white font-semibold">{SERVER_CONFIG.developer.name}</span>{" "}
              • WhatsApp:{" "}
              <a
                href={SERVER_CONFIG.developer.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-colors underline decoration-dotted underline-offset-2 font-medium"
                aria-label="Hubungi RAN DEV di WhatsApp"
              >
                {SERVER_CONFIG.developer.whatsapp}
              </a>
            </p>
            <span className="text-text-secondary font-mono text-xs hidden md:inline">•</span>
            <a
              href={SERVER_CONFIG.developer.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-all duration-300 font-bold font-sans text-xs flex items-center gap-1 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded shadow-sm shadow-primary/5 hover:bg-primary/10 hover:border-primary/40"
              aria-label="Lihat katalog server Minecraft lainnya"
            >
              Katalog Server Lain ➔
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
