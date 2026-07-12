/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GameModes from "./components/GameModes";
import ServerInfo from "./components/ServerInfo";
import DiscordCTA from "./components/DiscordCTA";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { ServerConfigProvider, useServerConfig } from "./context/ServerConfigContext";

function MainAppContent() {
  const { activePage } = useServerConfig();
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState("");

  const handleCopyIp = (ipAddress: string) => {
    navigator.clipboard.writeText(ipAddress)
      .then(() => {
        setCopiedMessage(`Alamat server "${ipAddress}" disalin ke papan klip.`);
        setIsToastOpen(true);
      })
      .catch(() => {
        console.error("Gagal menyalin teks.");
      });
  };

  return (
    <div className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between overflow-x-hidden">
      {/* Upper background lighting layer */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none z-0" />
      
      {/* Navigation and Top Credit Header */}
      <Header onCopyIp={handleCopyIp} />

      {/* Main Sections - Conditionally rendered to prevent DOM overload and guarantee zero lag */}
      <main className="flex-grow">
        {activePage === "home" && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <Hero onCopyIp={handleCopyIp} />

            {/* Game Modes Cards */}
            <GameModes />
          </div>
        )}

        {activePage === "info" && (
          <div className="animate-fade-in pt-24 md:pt-32">
            {/* IP Addresses & Server Specs */}
            <ServerInfo onCopyIp={handleCopyIp} />
          </div>
        )}

        {activePage === "discord" && (
          <div className="animate-fade-in pt-24 md:pt-32">
            {/* Discord Social Community CTA */}
            <DiscordCTA />
          </div>
        )}
      </main>

      {/* Footer & Watermark Credit */}
      <Footer />

      {/* Copy Notification Toast */}
      <Toast 
        message={copiedMessage} 
        isOpen={isToastOpen} 
        onClose={() => setIsToastOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ServerConfigProvider>
      <MainAppContent />
    </ServerConfigProvider>
  );
}

