/**
 * NestCraft Network Server Configuration
 * Semua data dinamis disimpan di sini agar mudah diubah sewaktu-waktu.
 */

export const SERVER_CONFIG = {
  name: "NestCraft Network",
  tagline: "Modern Gaming Network",
  description: "Selamat Datang di NestCraft Network Server",
  about: "NestCraft Network adalah server Minecraft Indonesia premium yang menggabungkan beberapa mode permainan terbaik dalam satu jaringan server yang stabil, cepat, dan ramah bagi semua pemain Java & Bedrock.",
  
  // Server IP & Port
  javaIp: "minenest.my.id",
  bedrockIp: "minenest.my.id",
  bedrockPort: "25441",
  
  // Community Links
  discordUrl: "https://discord.gg/p5PM3NTh7",
  
  // Developer Credit
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    whatsappUrl: "https://wa.me/62895602592430",
    portfolioUrl: "https://sfl.gl/x2ic",
    portfolioLabel: "Lihat Katalog Server Lain 🌐"
  },
  
  // Game Modes
  gameModes: [
    {
      id: "survival",
      title: "Survival",
      description: "Petualangan bertahan hidup klasik dengan fitur ekonomi modern, klaim wilayah, clan, dan komunitas yang sangat bersahabat.",
      iconName: "Shield", // Will map to Lucide icons
      tag: "Semi-RPG"
    },
    {
      id: "pvp",
      title: "PvP",
      description: "Uji mekanik dan ketangkasan bertarungmu di arena kompetitif, kit battle, duel 1v1, serta sistem ranking musiman.",
      iconName: "Swords",
      tag: "Kompetitif"
    },
    {
      id: "oneblock",
      title: "OneBlock",
      description: "Mulai petualangan ekstrem dari satu blok di langit yang terus membesar saat dihancurkan, bangun impianmu di angkasa.",
      iconName: "Box",
      tag: "Populer"
    },
    {
      id: "skyblock",
      title: "SkyBlock",
      description: "Kelola pulau melayang mandiri dengan sumber daya terbatas, selesaikan misi harian, dan jadilah pulau dengan level tertinggi.",
      iconName: "Cloud",
      tag: "Klasik"
    },
    {
      id: "creative",
      title: "Creative",
      description: "Wujudkan imajinasi arsitektur terbaikmu tanpa batasan sumber daya menggunakan plot kreatif dan worldedit lengkap.",
      iconName: "Compass",
      tag: "Kreatif"
    },
    {
      id: "parkour",
      title: "Parkour",
      description: "Lompati berbagai rintangan dari tingkat kesulitan pemula hingga ahli untuk mencatat waktu tercepat di papan peringkat.",
      iconName: "Zap",
      tag: "Ketangkasan"
    }
  ]
};
