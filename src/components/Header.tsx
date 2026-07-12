import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Copy, Check } from "lucide-react";
import { useServerConfig } from "../context/ServerConfigContext";

interface HeaderProps {
  onCopyIp: (ip: string) => void;
}

export default function Header({ onCopyIp }: HeaderProps) {
  const { config, activePage, navigateToPage } = useServerConfig();
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

  // Split name for visual layout (e.g., "NestCraft Network" -> "NESTCRAFT" and "NETWORK")
  const serverNameParts = config.name.split(" ");
  const serverFirstWord = serverNameParts[0] || "NESTCRAFT";
  const serverRemainingWords = serverNameParts.slice(1).join(" ") || "NETWORK";

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-500 ${
      isScrolled 
        ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark/85 shadow-2xl shadow-black/60 py-0" 
        : "bg-bg-dark/40 backdrop-blur-sm border-b border-border-dark/10 py-2 md:py-3"
    }`}>
      {/* Top Header Bar - Watermark Kredit Pengembang */}
      <div 
        id="top-header"
        className="w-full bg-[#050505]/95 border-b border-border-dark/50 py-2 px-4 hidden md:flex flex-row items-center justify-center gap-2"
      >
        <p className="text-[10px] md:text-xs text-text-secondary font-mono tracking-wider text-center">
          <span className="text-primary font-bold">Ingin buat website Minecraft premium seperti ini?</span>{" "}
          Hubungi{" "}
          <span className="text-white hover:text-primary transition-colors font-semibold">
            {config.developer.name}
          </span>{" "}
          • WhatsApp:{" "}
          <a 
            href={config.developer.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors underline decoration-dotted underline-offset-2 font-bold"
            aria-label="Hubungi pengembang melalui WhatsApp"
          >
            {config.developer.whatsapp}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-text-secondary font-mono text-xs hidden sm:inline">•</span>
          <a 
            href={config.developer.portfolioUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-primary hover:text-white transition-all duration-300 border border-primary/40 bg-primary/10 hover:bg-primary px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider font-sans uppercase shadow-sm shadow-primary/10"
            aria-label="Lihat katalog server Minecraft lainnya"
          >
            {config.developer.portfolioLabel}
          </a>
          <span className="text-text-secondary font-mono text-xs hidden sm:inline">•</span>
          <a 
            href={config.developer.communityUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-white transition-all duration-300 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider font-sans uppercase shadow-sm shadow-emerald-500/10"
            aria-label={`Bergabung ke ${config.developer.communityName}`}
          >
            {config.developer.communityLabel}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="navbar"
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-14 md:h-16" : "h-16 md:h-22"
          }`}>
            {/* Logo and Server Name */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigateToPage("home")}
              aria-label="Kembali ke Beranda"
            >
              <img
                src={config.logo}
                alt={`${config.name} Logo`}
                referrerPolicy="no-referrer"
                className="h-9 w-9 md:h-12 md:w-12 rounded-lg object-contain transition-transform group-hover:scale-105 duration-300"
                loading="lazy"
              />
              <div>
                <span className="font-display font-bold text-base md:text-xl tracking-tight text-white block group-hover:text-primary transition-colors uppercase">
                  {serverFirstWord}
                </span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary block -mt-1 uppercase">
                  {serverRemainingWords}
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigateToPage("home")}
                className={`text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer py-1 ${
                  activePage === "home" ? "text-primary font-bold border-b-2 border-primary" : "text-text-secondary"
                }`}
                aria-label="Navigasi ke Beranda"
              >
                Beranda
              </button>
              <button
                onClick={() => navigateToPage("home", "game-modes")}
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer text-text-secondary py-1"
                aria-label="Navigasi ke Mode Game"
              >
                Mode Game
              </button>
              <button
                onClick={() => navigateToPage("info")}
                className={`text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer py-1 ${
                  activePage === "info" ? "text-primary font-bold border-b-2 border-primary" : "text-text-secondary"
                }`}
                aria-label="Navigasi ke Informasi Server"
              >
                Informasi Server
              </button>
              <button
                onClick={() => navigateToPage("discord")}
                className={`text-sm font-medium hover:text-primary transition-colors tracking-wide cursor-pointer py-1 ${
                  activePage === "discord" ? "text-primary font-bold border-b-2 border-primary" : "text-text-secondary"
                }`}
                aria-label="Navigasi ke Hub Discord"
              >
                Komunitas
              </button>
            </div>

            {/* CTA Main Sekarang */}
            <div className="hidden md:block">
              <button
                onClick={() => navigateToPage("info")}
                className="px-6 py-2.5 rounded-md bg-primary hover:bg-primary/95 text-white font-display text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer red-glow-hover animate-pulse"
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
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateToPage("home");
              }}
              className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                activePage === "home" ? "text-primary font-bold" : "text-text-secondary"
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateToPage("home", "game-modes");
              }}
              className="block w-full text-left py-2 text-base font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Mode Game
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateToPage("info");
              }}
              className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                activePage === "info" ? "text-primary font-bold" : "text-text-secondary"
              }`}
            >
              Informasi Server
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateToPage("discord");
              }}
              className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                activePage === "discord" ? "text-primary font-bold" : "text-text-secondary"
              }`}
            >
              Komunitas
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateToPage("info");
              }}
              className="w-full text-center py-3 rounded bg-primary hover:bg-primary/95 text-white font-display font-bold tracking-wider transition-colors block"
            >
              MAIN SEKARANG
            </button>

            {/* Developer Credits inside mobile menu */}
            <div className="pt-4 mt-4 border-t border-border-dark/60">
              <p className="text-[10px] text-text-secondary font-mono tracking-wider mb-2 text-center">
                <span className="text-primary font-bold">Ingin website Minecraft seperti ini?</span> <br />
                Hubungi <span className="text-white font-semibold">{config.developer.name}</span>
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href={config.developer.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded border border-border-dark bg-[#0b0b0b] hover:bg-[#1a1a1a] text-xs font-semibold text-text-secondary hover:text-white transition-colors block"
                >
                  WhatsApp: {config.developer.whatsapp}
                </a>
                <a 
                  href={config.developer.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded bg-primary/10 hover:bg-primary border border-primary/40 text-xs font-bold tracking-wider text-primary hover:text-white transition-colors block uppercase"
                >
                  {config.developer.portfolioLabel}
                </a>
                <a 
                  href={config.developer.communityUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/40 text-xs font-bold tracking-wider text-emerald-400 hover:text-white transition-colors block uppercase"
                >
                  {config.developer.communityLabel}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
