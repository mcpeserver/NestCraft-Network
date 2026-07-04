import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Copy, Check } from "lucide-react";
import { SERVER_CONFIG } from "../config/serverConfig";

interface HeaderProps {
  onCopyIp: (ip: string) => void;
}

export default function Header({ onCopyIp }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth < 640 ? 140 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
      isScrolled 
        ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark/80 shadow-xl shadow-black/40" 
        : "bg-bg-dark/40 backdrop-blur-sm border-b border-border-dark/10"
    }`}>
      {/* Top Header Bar - Watermark Kredit Pengembang */}
      <div 
        id="top-header"
        className="w-full bg-[#050505]/95 border-b border-border-dark/50 py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <p className="text-[10px] md:text-xs text-text-secondary font-mono tracking-wider">
          <span className="text-primary font-bold">Ingin buat website Minecraft premium seperti ini?</span>{" "}
          Hubungi{" "}
          <span className="text-white hover:text-primary transition-colors font-semibold">
            {SERVER_CONFIG.developer.name}
          </span>{" "}
          • WhatsApp:{" "}
          <a 
            href={SERVER_CONFIG.developer.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors underline decoration-dotted underline-offset-2 font-bold"
            aria-label="Hubungi pengembang melalui WhatsApp"
          >
            {SERVER_CONFIG.developer.whatsapp}
          </a>
        </p>
        <div className="flex items-center">
          <span className="text-text-secondary font-mono text-xs hidden sm:inline mr-2">•</span>
          <a 
            href={SERVER_CONFIG.developer.portfolioUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-primary hover:text-white transition-all duration-300 border border-primary/40 bg-primary/10 hover:bg-primary px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider font-sans uppercase shadow-sm shadow-primary/10"
            aria-label="Lihat katalog server Minecraft lainnya"
          >
            {SERVER_CONFIG.developer.portfolioLabel} ➔
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="navbar"
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Server Name */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection("hero")}
              aria-label="Kembali ke Beranda"
            >
              <img
                src="/logo.png"
                alt="NestCraft Network Logo"
                referrerPolicy="no-referrer"
                className="h-9 w-9 md:h-12 md:w-12 rounded-lg object-contain transition-transform group-hover:scale-105 duration-300"
                loading="lazy"
              />
              <div>
                <span className="font-display font-bold text-base md:text-xl tracking-tight text-white block group-hover:text-primary transition-colors">
                  NESTCRAFT
                </span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary block -mt-1 uppercase">
                  NETWORK
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer text-white"
                aria-label="Navigasi ke Beranda"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("game-modes")}
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer text-text-secondary"
                aria-label="Navigasi ke Mode Game"
              >
                Mode Game
              </button>
              <button
                onClick={() => scrollToSection("server-info")}
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer text-text-secondary"
                aria-label="Navigasi ke Informasi Server"
              >
                Informasi Server
              </button>
              <button
                onClick={() => scrollToSection("discord-cta")}
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer text-text-secondary"
                aria-label="Navigasi ke Hub Discord"
              >
                Discord
              </button>
            </div>

            {/* CTA Main Sekarang */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("server-info")}
                className="px-6 py-2.5 rounded-md bg-primary hover:bg-primary/95 text-white font-display text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer red-glow-hover"
                aria-label="Main Sekarang - Klik untuk menyalin IP dan melihat info server"
              >
                MAIN SEKARANG
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-text-secondary hover:text-white transition-colors"
                aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-border-dark bg-bg-dark/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-base font-medium text-white hover:text-primary transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("game-modes")}
              className="block w-full text-left py-2 text-base font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Mode Game
            </button>
            <button
              onClick={() => scrollToSection("server-info")}
              className="block w-full text-left py-2 text-base font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Informasi Server
            </button>
            <button
              onClick={() => scrollToSection("discord-cta")}
              className="block w-full text-left py-2 text-base font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Discord
            </button>
            <button
              onClick={() => scrollToSection("server-info")}
              className="w-full text-center py-3 rounded bg-primary hover:bg-primary/95 text-white font-display font-bold tracking-wider transition-colors block"
            >
              MAIN SEKARANG
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
