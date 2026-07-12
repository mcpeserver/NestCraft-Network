import React, { createContext, useContext, useState, useEffect } from "react";
import { SERVER_CONFIG } from "../config/serverConfig";
import defaultLogo from "../assets/images/logo.jpg";
import defaultHeroBg from "../assets/images/hero-bg.jpg";

export interface DeveloperInfo {
  name: string;
  whatsapp: string;
  whatsappUrl: string;
  portfolioUrl: string;
  portfolioLabel: string;
  communityName: string;
  communityUrl: string;
  communityLabel: string;
}

export interface GameMode {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ServerConfig {
  name: string;
  tagline: string;
  description: string;
  about: string;
  javaIp: string;
  bedrockIp: string;
  bedrockPort: string;
  discordUrl: string;
  developer: DeveloperInfo;
  gameModes: GameMode[];
  logo: string;
  heroImage: string;
}

interface ServerConfigContextType {
  config: ServerConfig;
  isLoading: boolean;
  activePage: string;
  navigateToPage: (pageId: string, elementId?: string) => void;
}

const ServerConfigContext = createContext<ServerConfigContextType | undefined>(undefined);

export function ServerConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ServerConfig>({
    ...SERVER_CONFIG,
    logo: defaultLogo,
    heroImage: defaultHeroBg,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<string>("home");

  const navigateToPage = (pageId: string, elementId?: string) => {
    setActivePage(pageId);
    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const loadConfig = async () => {
      // 1. Fetch Local config.json for ultimate speed & customization
      try {
        const response = await fetch("/config.json");
        if (response.ok) {
          const data = await response.json();
          setConfig(prev => ({
            ...prev,
            ...data,
            developer: {
              ...prev.developer,
              ...(data.developer || {})
            },
            gameModes: data.gameModes || prev.gameModes,
            logo: data.logo || prev.logo,
            heroImage: data.heroImage || prev.heroImage,
          }));
        }
      } catch (error) {
        console.warn("Gagal memuat config.json lokal, menggunakan static fallback:", error);
      }

      // 2. Fetch Developer & Community data dynamically from GitHub RAW API
      try {
        const devResponse = await fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json");
        if (devResponse.ok) {
          const devData = await devResponse.json();
          setConfig(prev => {
            const githubDevName = devData.name || prev.developer.name;
            const githubPhone = devData.contact?.phone || devData.contact?.whatsapp || prev.developer.whatsapp;
            const githubWhatsapp = devData.contact?.whatsapp || githubPhone;
            const githubPortfolio = devData.website?.portfolio || prev.developer.portfolioUrl;
            
            // Resolve community info
            const githubCommunityName = devData.community?.name || prev.developer.communityName;
            const githubCommunityUrl = devData.community?.website || prev.developer.communityUrl;
            const githubCommunityDiscord = devData.community?.discord || prev.discordUrl;

            // Formulate clean international WhatsApp URL
            let cleanedPhone = githubWhatsapp.replace(/\D/g, "");
            if (cleanedPhone.startsWith("0")) {
              cleanedPhone = "62" + cleanedPhone.slice(1);
            }
            const githubWhatsappUrl = `https://wa.me/${cleanedPhone}`;

            return {
              ...prev,
              discordUrl: githubCommunityDiscord,
              developer: {
                ...prev.developer,
                name: githubDevName,
                whatsapp: githubPhone,
                whatsappUrl: githubWhatsappUrl,
                portfolioUrl: githubPortfolio,
                communityName: githubCommunityName,
                communityUrl: githubCommunityUrl
              }
            };
          });
        }
      } catch (error) {
        console.warn("Gagal memuat konfigurasi developer dari GitHub, menggunakan fallback lokal:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadConfig();
  }, []);

  // Sync state to Document Head for SEO, Open Graph and Favicon dynamically
  useEffect(() => {
    if (config) {
      document.title = `${config.name} - ${config.tagline}`;
      
      const updateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
        const selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
        let meta = document.querySelector(selector);
        if (!meta) {
          meta = document.createElement("meta");
          if (isProperty) {
            meta.setAttribute("property", nameOrProperty);
          } else {
            meta.setAttribute("name", nameOrProperty);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
      };

      // General SEO
      updateMeta("description", config.description);
      
      // Open Graph / Facebook
      updateMeta("og:title", `${config.name} - ${config.tagline}`, true);
      updateMeta("og:description", config.description, true);
      if (config.heroImage) {
        updateMeta("og:image", config.heroImage, true);
      }
      
      // Twitter
      updateMeta("twitter:title", `${config.name} - ${config.tagline}`, true);
      updateMeta("twitter:description", config.description, true);
      if (config.heroImage) {
        updateMeta("twitter:image", config.heroImage, true);
      }

      // Favicon & Apple Touch Icon from config.logo
      if (config.logo) {
        let favicon = document.querySelector("link[rel='icon']");
        if (!favicon) {
          favicon = document.createElement("link");
          favicon.setAttribute("rel", "icon");
          favicon.setAttribute("type", "image/png");
          document.head.appendChild(favicon);
        }
        favicon.setAttribute("href", config.logo);

        let appleIcon = document.querySelector("link[rel='apple-touch-icon']");
        if (!appleIcon) {
          appleIcon = document.createElement("link");
          appleIcon.setAttribute("rel", "apple-touch-icon");
          document.head.appendChild(appleIcon);
        }
        appleIcon.setAttribute("href", config.logo);
      }
    }
  }, [config]);

  return (
    <ServerConfigContext.Provider value={{ config, isLoading, activePage, navigateToPage }}>
      {children}
    </ServerConfigContext.Provider>
  );
}

export function useServerConfig() {
  const context = useContext(ServerConfigContext);
  if (!context) {
    throw new Error("useServerConfig must be used within a ServerConfigProvider");
  }
  return context;
}
