# Panduan Kontribusi (Contributing Guide)

Terima kasih telah tertarik untuk berkontribusi pada pengembangan **NestCraft Network Landing Page**! Kami sangat menghargai kontribusi Anda, mulai dari pelaporan bug, usulan fitur, hingga perbaikan kode langsung.

Berikut adalah panduan langkah demi langkah untuk memastikan proses kolaborasi berjalan lancar dan efisien.

---

## 🛠️ Alur Kontribusi

### 1. Temukan atau Buat Issue
Sebelum mulai menulis kode, harap periksa daftar **Issues** yang ada untuk memastikan belum ada orang lain yang mengerjakan hal yang sama. Jika Anda menemukan bug baru atau ingin mengusulkan fitur baru, silakan buat Issue baru terlebih dahulu dengan deskripsi yang jelas.

### 2. Fork Repositori
Lakukan Fork pada repositori ini ke akun GitHub Anda untuk mulai membuat perubahan secara aman.

### 3. Buat Branch Baru
Buat branch baru dari branch utama (`main`) dengan penamaan yang deskriptif:
```bash
git checkout -b fitur/nama-fitur-anda
# atau
git checkout -b bugfix/perbaikan-nama-bug
```

### 4. Mulai Lakukan Perubahan
Lakukan perubahan pada lingkungan pengembangan lokal Anda. Pastikan untuk mengikuti standar kualitas kode yang berlaku:
- Gunakan TypeScript dengan pengetikan yang ketat (*strict types*).
- Gunakan komponen fungsional React.
- Gunakan Tailwind CSS v4 untuk penataan gaya yang konsisten.
- Pisahkan data dinamis ke `/src/config/serverConfig.ts`.

### 5. Lakukan Pengujian Lokal
Sebelum melakukan commit, pastikan proyek dapat dibangun tanpa error dengan menjalankan perintah linter dan build:
```bash
npm run lint
npm run build
```

### 6. Lakukan Commit & Push
Gunakan pesan commit yang deskriptif dan terstruktur sesuai standar [Conventional Commits](https://www.conventionalcommits.org/):
```bash
git commit -m "feat: menambahkan showcase mode game baru"
git push origin fitur/nama-fitur-anda
```

### 7. Buat Pull Request (PR)
Buka halaman repositori asli di GitHub dan Anda akan melihat tombol untuk membuat **Pull Request**. Harap jelaskan detail perubahan yang Anda buat, mengapa perubahan tersebut diperlukan, serta Issue yang berkaitan.

---

## 🎨 Panduan Gaya Desain & Kode

- **Desain**: Pertahankan estetika "Modern Gaming Network" yang futuristik, minimalis, dan premium. Jangan menambahkan tema medieval, fantasi, atau dekorasi yang berlebihan.
- **Warna**: Patuhi palet warna resmi yang dideklarasikan di `src/index.css`.
- **Ikon**: Selalu gunakan ikon dari pustaka `lucide-react`.

---

## ⚖️ Kode Etik
Dengan berpartisipasi dalam proyek ini, Anda diharapkan untuk selalu mematuhi dan menghormati [Kode Etik (Code of Conduct)](./CODE_OF_CONDUCT.md) komunitas kami demi kenyamanan bersama.
