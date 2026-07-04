# MASTER PROMPT: Pembuat Landing Page Server Minecraft Premium & Modern

Berikut adalah **Master Prompt Universal** kelas dunia yang dirancang secara detail untuk menghasilkan website/landing page server Minecraft tingkat profesional, siap rilis (*production-ready*), ramah SEO, berkinerja tinggi, dan responsif sepenuhnya. Anda cukup meng-copy teks ini dan memasukkannya ke asisten koding AI mana pun untuk membuat website serupa untuk server Minecraft lainnya.

---

## 📋 INSTRUKSI UTAMA & PERAN AI

Bertindaklah sebagai **Senior UI/UX Designer, Creative Director, Art Director, Front-End Architect, SEO Specialist, dan Software Engineer**. Tugas Anda adalah membuat sebuah landing page premium, modern, dan sangat responsif untuk sebuah server Minecraft dengan spesifikasi visual dan teknis kelas dunia.

### 🎯 Batasan Cakupan Konten (Strict Scope Discipline)
- **Tampilkan HANYA data resmi**: Ikuti data server yang diberikan di bagian konfigurasi dinamis. Jangan pernah berasumsi, mengarang, atau memublikasikan data palsu seperti statistik pemain online palsu, daftar staff fiktif, roadmap yang tidak direncanakan, atau harga donasi fiktif jika tidak disediakan di file config.
- **Satu Halaman Penuh Keindahan**: Implementasikan keseluruhan aplikasi dalam tata letak satu halaman (*single-page layout*) dengan transisi halus (*smooth scrolling*).
- **Tanpa AI-Slop**: Hindari dekorasi murahan seperti teks terminal log fiktif (`CORE_ONLINE`, `PING_OK`), widget ping real-time palsu, atau visual credit mencolok. Fokuslah pada kemurnian desain visual, tipografi, dan ruang kosong (*white space*).

---

## 🎨 DESIGN SYSTEM & IDENTITAS VISUAL

Situs web harus memiliki identitas visual yang berbeda sepenuhnya dari website server Minecraft abad pertengahan (*medieval/fantasy*) pada umumnya. Terapkan konsep **Modern Gaming & Esports Network**:

1. **Warna Dasar**:
   - `Primary`: Merah Cerah/Neon (Contoh: `#D61F26`) sebagai warna aksen dan fokus perhatian.
   - `Background`: Hitam Pekat (Contoh: `#0B0B0B`) untuk nuansa sinematik yang kuat.
   - `Surface`: Abu-abu Gelap (Contoh: `#1A1A1A`) untuk permukaan kartu.
   - `Border`: Abu-abu Medium (Contoh: `#2A2A2A`) untuk pemisah halus.
   - `Text Primary`: Putih Murni (`#FFFFFF`).
   - `Text Secondary`: Abu-abu Terang (`#B8B8B8`).

2. **Tipografi**:
   - Judul/Display: **Space Grotesk** atau **Outfit** (font modern berkarakter tegas dan futuristik).
   - Teks Utama: **Inter** (font sans-serif yang sangat nyaman dibaca dan bersih).
   - Data & Status: **JetBrains Mono** (font monospaced premium untuk koordinat, status, dan IP).

3. **Gaya Visual & Mikro-Interaksi**:
   - Efek *glassmorphism* tipis dengan tingkat buram latar belakang (`backdrop-blur`) sedang.
   - Sudut membulat modern (`border-radius: 12px` hingga `16px`).
   - Animasi transisi yang sangat halus pada hover (perubahan warna border ke warna primary, efek bayangan neon tipis, dan pembesaran ukuran elemen yang lembut).

---

## 🏗️ ARSITEKTUR REKAYASA KODE & STRUKTUR REATOR

Gunakan arsitektur modern berbasis komponen modular (misalnya **React + Vite** atau **Next.js App Router**) dengan pemisahan data dinamis yang bersih.

### 🗄️ Template Konfigurasi Dinamis (`src/config/site.ts` atau sejenisnya)
Setiap data dinamis harus disimpan dalam satu objek terpusat agar mudah diubah untuk server lain:

```typescript
export const SITE_CONFIG = {
  name: "NAMA_SERVER_ANDA",
  tagline: "Slogan Pendek Server",
  description: "Selamat Datang di Jaringan Server Kami",
  about: "Deskripsi lengkap mengenai keunikan server dan komitmen kepada pemain.",
  
  // Informasi Koneksi
  javaIp: "play.nama-server.id",
  bedrockIp: "play.nama-server.id",
  bedrockPort: "25441",
  
  // Media Sosial & Komunitas
  discordUrl: "https://discord.gg/link-discord-anda",
  
  // Kredit Kreator & Portofolio
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    whatsappUrl: "https://wa.me/62895602592430",
    portfolioUrl: "https://sfl.gl/x2ic",
    portfolioLabel: "Lihat Katalog Server Lain 🌐"
  },
  
  // Mode Game Terpopuler
  gameModes: [
    {
      id: "survival",
      title: "Survival Classic",
      description: "Bertahan hidup bersama komunitas ramah dengan fitur klaim lahan, ekonomi seimbang, dan pasar pemain.",
      iconName: "Shield",
      tag: "Semi-RPG"
    },
    // ... Tambahkan mode game lain di sini
  ]
};
```

---

## 📺 LAYOUT DETAIL & ELEMEN SECTIONS

### 1. Top Header Bar (Watermark Developer)
- Tampilkan baris tipis di bagian paling atas halaman dengan tinggi minimalis.
- Teks wajib: `Developed by RAN DEV • WhatsApp: 0895602592430` dipadukan dengan tombol interaktif untuk mengunjungi link portfolio: `https://sfl.gl/x2ic` (label: "Lihat Katalog Server Lain 🌐").
- Pastikan desainnya menyatu dengan navbar tanpa mengalihkan fokus utama.

### 2. Main Navigation Bar
- Tampilkan logo server di sebelah kiri (dengan transisi hover yang membesar).
- Link menu navigasi: *Beranda*, *Mode Game*, *Informasi Server*, *Discord*.
- Tombol CTA sebelah kanan: `MAIN SEKARANG` yang melakukan smooth scroll ke bagian Server Info.
- Pada perangkat mobile, ganti link navigasi dengan tombol hamburger menu yang membuka drawer interaktif yang rapi.

### 3. Hero Section (Pintu Masuk Sinematik)
- Gunakan logo berbentuk huruf "N" atau logo server sebagai centerpiece dengan bayangan merah menyala (*glow effects*).
- Gunakan background gambar berkualitas tinggi bertema Minecraft yang digabungkan dengan overlay grid digital fiksi-ilmiah dan neon merah halus.
- Tampilkan judul besar server, slogan, dan dua tombol aksi:
  1. `MAIN SEKARANG`: Otomatis menyalin IP server dan mengarahkan pengguna ke bagian Server Info.
  2. `LIHAT INFORMASI`: Melakukan smooth scroll ke daftar mode permainan.

### 4. Game Modes Grid (Showcase Permainan)
- Susun kartu modular yang menampilkan mode-mode permainan yang ada di file konfigurasi.
- Berikan ikon yang relevan untuk setiap mode game menggunakan pustaka `lucide-react`.
- Terapkan efek hover modern di mana kartu akan sedikit terangkat ke atas, mengubah warna border menjadi merah neon, dan memunculkan sedikit cahaya glow merah di sudut kartu.

### 5. Server Info Section (Panduan Koneksi & Live Status)
- Sediakan dua buah kartu berdampingan untuk Java Edition dan Bedrock Edition.
- Integrasikan API status server Minecraft publik (seperti `https://api.mcstatus.io/v2/status/`) secara asinkron (*asynchronous*) untuk menampilkan status online, jumlah pemain aktif, dan versi server secara *real-time*.
- Tampilkan alamat IP dengan jelas dan tambahkan tombol `Salin IP` instan dengan animasi umpan balik berupa notifikasi Toast pop-up halus saat diklik.
- Tuliskan panduan singkat langkah demi langkah cara bermain yang mudah dipahami oleh pemain pemula.

### 6. Discord CTA (Community Hub)
- Buat banner besar dengan latar belakang gradasi ungu gelap berpadu pendaran cahaya merah neon.
- Tombol aksi utama berbentuk ikon Discord dengan link rujukan langsung ke server Discord komunitas.

### 7. Footer Section
- Tampilkan logo server, deskripsi kepatuhan hukum (*disclaimer* bahwa server tidak terafiliasi dengan Mojang Studios/Microsoft), info hak cipta, dan tampilkan kembali watermark developer `Developed by RAN DEV • WhatsApp: 0895602592430` lengkap dengan tombol menuju link katalog portofolio server `https://sfl.gl/x2ic`.

---

## 📈 STRATEGI SEO & OPTIMASI GOOGLE LIGHTHOUSE

Situs web wajib mendapatkan skor maksimal (Target: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥100) dengan implementasi:

1. **HTML5 Semantik**: Gunakan tag `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<h1>` - `<h6>` sesuai porsinya.
2. **Meta Tag Lengkap**: Berikan Meta Title, Meta Description yang persuasif, Keyword, Author, dan favicon.
3. **Open Graph & Twitter Cards**: Pastikan link situs memunculkan kartu preview logo merah NestCraft yang premium saat dibagikan ke media sosial (WhatsApp, Facebook, Twitter, Discord).
4. **Rich Snippets JSON-LD**: Tuliskan data terstruktur menggunakan format `@type: VideoGame` untuk server game agar terindeks sempurna di Google Search.
5. **Aksesibilitas (ARIA)**: Berikan atribut `aria-label` yang jelas pada setiap tombol ikonik, tautan eksternal, dan gambar.
6. **Optimasi Aset**: Gunakan teknik *lazy loading* pada gambar, format gambar modern (.webp atau .jpg terkompresi), dan optimasi font dari server internal tanpa membebani performa pemuatan awal halaman.

---

Dengan mengikuti panduan master prompt di atas, asisten koding AI akan menghasilkan landing page Minecraft server yang sangat memukau, super responsif, siap deploy, dan memiliki standar kualitas koding tertinggi!
