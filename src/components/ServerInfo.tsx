import React, { useState, useEffect } from "react";
import { Copy, Check, Server, Radio, Users, Cpu, ShieldAlert, ArrowRight } from "lucide-react";
import { SERVER_CONFIG } from "../config/serverConfig";

interface ServerInfoProps {
  onCopyIp: (ip: string) => void;
}

interface ServerStatus {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  version: string;
  loading: boolean;
  error: boolean;
}

export default function ServerInfo({ onCopyIp }: ServerInfoProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  // Dynamic Minecraft Server Status State
  const [javaStatus, setJavaStatus] = useState<ServerStatus>({
    online: false,
    playersOnline: 0,
    playersMax: 100,
    version: "1.16.5 - 1.21.x",
    loading: true,
    error: false,
  });

  const [bedrockStatus, setBedrockStatus] = useState<ServerStatus>({
    online: false,
    playersOnline: 0,
    playersMax: 100,
    version: "Terbaru",
    loading: true,
    error: false,
  });

  // Fetch real-time status from public APIs
  useEffect(() => {
    let isMounted = true;

    const fetchServerStatus = async () => {
      try {
        // Fetch Java Status
        const javaRes = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_CONFIG.javaIp}`);
        if (javaRes.ok) {
          const javaData = await javaRes.json();
          if (isMounted) {
            setJavaStatus({
              online: javaData.online,
              playersOnline: javaData.players?.online || 0,
              playersMax: javaData.players?.max || 100,
              version: javaData.version?.name_clean || "1.16.5 - 1.21.x",
              loading: false,
              error: false,
            });
          }
        } else {
          throw new Error("Gagal mengambil status Java");
        }
      } catch (err) {
        if (isMounted) {
          setJavaStatus(prev => ({ ...prev, loading: false, error: true }));
        }
      }

      try {
        // Fetch Bedrock Status
        const bedrockRes = await fetch(
          `https://api.mcstatus.io/v2/status/bedrock/${SERVER_CONFIG.bedrockIp}:${SERVER_CONFIG.bedrockPort}`
        );
        if (bedrockRes.ok) {
          const bedrockData = await bedrockRes.json();
          if (isMounted) {
            setBedrockStatus({
              online: bedrockData.online,
              playersOnline: bedrockData.players?.online || 0,
              playersMax: bedrockData.players?.max || 100,
              version: bedrockData.version?.name || "Semua Versi PE",
              loading: false,
              error: false,
            });
          }
        } else {
          throw new Error("Gagal mengambil status Bedrock");
        }
      } catch (err) {
        if (isMounted) {
          setBedrockStatus(prev => ({ ...prev, loading: false, error: true }));
        }
      }
    };

    fetchServerStatus();
    // Refresh status every 60 seconds
    const interval = setInterval(fetchServerStatus, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const handleCopyJava = () => {
    onCopyIp(SERVER_CONFIG.javaIp);
    setCopiedJava(true);
    setTimeout(() => setCopiedJava(false), 2000);
  };

  const handleCopyBedrock = () => {
    onCopyIp(`${SERVER_CONFIG.bedrockIp}:${SERVER_CONFIG.bedrockPort}`);
    setCopiedBedrock(true);
    setTimeout(() => setCopiedBedrock(false), 2000);
  };

  return (
    <section 
      id="server-info" 
      className="py-24 px-4 relative bg-[#0B0B0B]"
    >
      {/* Background neon elements */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-dark to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white uppercase mb-4">
            INFORMASI <span className="text-primary">SERVER</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
            Gunakan informasi koneksi di bawah ini untuk bergabung dengan NestCraft Network. Server kami mendukung penuh cross-play antar platform Java & Bedrock Edition secara simultan.
          </p>
        </div>

        {/* Java & Bedrock Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Java Card */}
          <div 
            className="glass-panel p-8 rounded-xl relative flex flex-col justify-between border-t-2 border-t-primary"
            id="card-java-info"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-white uppercase tracking-tight">
                      JAVA EDITION
                    </h3>
                    <p className="text-xs text-text-secondary font-mono">Untuk PC / MacOS / Linux</p>
                  </div>
                </div>

                {/* Live Status Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#151515] border border-border-dark">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${
                    javaStatus.loading 
                      ? "bg-amber-500 animate-pulse" 
                      : javaStatus.online 
                        ? "bg-emerald-500 shadow-lg shadow-emerald-500/50" 
                        : "bg-red-500"
                  }`} />
                  <span className="text-[10px] font-mono font-bold tracking-wide text-white uppercase">
                    {javaStatus.loading ? "MEMUAT" : javaStatus.online ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
              </div>

              {/* Server Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-[#121212] border border-border-dark p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-4.5 w-4.5 text-text-secondary" />
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary">PEMAIN AKTIF</p>
                    <p className="text-sm font-semibold font-display text-white">
                      {javaStatus.loading ? "..." : `${javaStatus.playersOnline} / ${javaStatus.playersMax}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="h-4.5 w-4.5 text-text-secondary" />
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary">VERSI SUPPORT</p>
                    <p className="text-sm font-semibold font-display text-white truncate max-w-[130px]">
                      {javaStatus.loading ? "..." : javaStatus.version}
                    </p>
                  </div>
                </div>
              </div>

              {/* IP Address Field */}
              <div className="mb-6">
                <label className="text-[10px] font-mono font-semibold tracking-wider text-text-secondary block mb-2 uppercase">
                  IP ADDRESS JAVA:
                </label>
                <div className="flex items-center justify-between gap-3 bg-[#121212] border border-border-dark p-3.5 rounded-md font-mono text-white text-sm md:text-base font-medium relative group">
                  <span className="select-all tracking-wide">{SERVER_CONFIG.javaIp}</span>
                  <button
                    onClick={handleCopyJava}
                    className="p-1.5 rounded hover:bg-surface-dark text-text-secondary hover:text-white transition-all cursor-pointer"
                    aria-label="Salin IP Java"
                    title="Salin IP Java"
                  >
                    {copiedJava ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <button
              onClick={handleCopyJava}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-primary hover:bg-primary/95 text-white font-display text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer duration-300"
              aria-label="Salin alamat IP Java"
            >
              <Copy className="h-4 w-4" />
              SALIN IP JAVA
            </button>
          </div>

          {/* Bedrock Card */}
          <div 
            className="glass-panel p-8 rounded-xl relative flex flex-col justify-between border-t-2 border-t-primary"
            id="card-bedrock-info"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Radio className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-white uppercase tracking-tight">
                      BEDROCK EDITION
                    </h3>
                    <p className="text-xs text-text-secondary font-mono">Untuk HP Android / iOS / Windows 10</p>
                  </div>
                </div>

                {/* Live Status Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#151515] border border-border-dark">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${
                    bedrockStatus.loading 
                      ? "bg-amber-500 animate-pulse" 
                      : bedrockStatus.online 
                        ? "bg-emerald-500 shadow-lg shadow-emerald-500/50" 
                        : "bg-red-500"
                  }`} />
                  <span className="text-[10px] font-mono font-bold tracking-wide text-white uppercase">
                    {bedrockStatus.loading ? "MEMUAT" : bedrockStatus.online ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
              </div>

              {/* Server Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-[#121212] border border-border-dark p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-4.5 w-4.5 text-text-secondary" />
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary">PEMAIN AKTIF</p>
                    <p className="text-sm font-semibold font-display text-white">
                      {bedrockStatus.loading ? "..." : `${bedrockStatus.playersOnline} / ${bedrockStatus.playersMax}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="h-4.5 w-4.5 text-text-secondary" />
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary">VERSI PE/BE</p>
                    <p className="text-sm font-semibold font-display text-white truncate max-w-[130px]">
                      {bedrockStatus.loading ? "..." : bedrockStatus.version}
                    </p>
                  </div>
                </div>
              </div>

              {/* IP Address & Port Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-mono font-semibold tracking-wider text-text-secondary block mb-2 uppercase">
                    IP ADDRESS BEDROCK:
                  </label>
                  <div className="flex items-center justify-between gap-2 bg-[#121212] border border-border-dark p-3.5 rounded-md font-mono text-white text-sm md:text-base font-medium">
                    <span className="select-all truncate tracking-wide">{SERVER_CONFIG.bedrockIp}</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-mono font-semibold tracking-wider text-text-secondary block mb-2 uppercase">
                    PORT BEDROCK:
                  </label>
                  <div className="flex items-center justify-between bg-[#121212] border border-border-dark p-3.5 rounded-md font-mono text-white text-sm md:text-base font-semibold text-center justify-center">
                    <span className="select-all text-primary">{SERVER_CONFIG.bedrockPort}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <button
              onClick={handleCopyBedrock}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded border border-border-dark bg-surface-dark/40 hover:bg-surface-dark/95 hover:border-primary/40 text-white font-display text-sm font-bold tracking-wider transition-all cursor-pointer duration-300"
              aria-label="Salin alamat IP dan Port Bedrock"
            >
              <Copy className="h-4 w-4 text-text-secondary" />
              SALIN IP BEDROCK
            </button>
          </div>
        </div>

        {/* Cara Bergabung Guide (SEO Value) */}
        <div className="glass-panel p-6 sm:p-8 rounded-xl bg-surface-dark/20 border border-border-dark/50">
          <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            CARA BERGABUNG DENGAN NESTCRAFT NETWORK
          </h4>
          <ol className="space-y-4 text-sm text-text-secondary leading-relaxed font-sans list-none">
            <li className="flex gap-4">
              <span className="font-mono text-primary font-bold">01.</span>
              <div>
                <strong className="text-white">Buka Game Minecraft Anda</strong> — Pastikan Anda menggunakan versi game yang kompatibel (Java Edition 1.16.5+ atau Bedrock Edition/MCPE versi terbaru).
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary font-bold">02.</span>
              <div>
                <strong className="text-white">Masuk ke Menu Multiplayer</strong> — Pilih <code className="bg-[#121212] px-1.5 py-0.5 rounded border border-border-dark text-white font-mono text-xs">Add Server</code> atau <code className="bg-[#121212] px-1.5 py-0.5 rounded border border-border-dark text-white font-mono text-xs">Tambah Server</code>.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary font-bold">03.</span>
              <div>
                <strong className="text-white">Masukkan Alamat Server</strong> — Isi nama server dengan <code className="text-white font-mono text-xs font-semibold">NestCraft</code>, dan alamat server dengan <code className="text-primary font-mono text-xs font-semibold">{SERVER_CONFIG.javaIp}</code>. Untuk Bedrock, pastikan Port diisi <code className="text-primary font-mono text-xs font-semibold">{SERVER_CONFIG.bedrockPort}</code>.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary font-bold">04.</span>
              <div>
                <strong className="text-white">Simpan dan Mainkan</strong> — Klik Simpan/Done, lalu pilih server NestCraft dari daftar server Anda dan klik <strong className="text-white">Join Server</strong>!
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
