# Raudhatul Jannah Site

Website profil Masjid Raudhatul Jannah dengan panel admin sederhana untuk mengubah konten homepage, status live, video, galeri, dan informasi kontak tanpa perlu mengedit file HTML secara manual.

## Ringkasan

Project ini terdiri dari dua bagian utama:
- frontend statis yang disajikan dari `public/`
- server Node.js ringan yang menangani autentikasi admin, API konten, dan upload gambar

Konten website disimpan di `data/content.json`, sedangkan file gambar hasil upload admin disimpan di `media/`.

## Struktur Folder

```text
.
|-- public/                 # HTML, CSS, JS, dan asset yang dikirim ke browser
|   |-- assets/brand/       # Logo dan asset visual brand
|   |-- index.html          # Halaman utama website
|   |-- login.html          # Halaman login admin
|   |-- admin.html          # Panel admin konten
|-- src/
|   |-- server.js           # Implementasi server utama
|-- data/
|   |-- content.json        # Sumber data konten website
|-- media/                  # File upload dari admin panel
|-- server.js               # Bootstrap server
|-- .env.example            # Contoh environment variable
|-- package.json            # Script dan metadata project
|-- README.md               # Dokumentasi teknis project
|-- HELP.md                 # Panduan admin dalam Bahasa Indonesia
```

## Kebutuhan

- Node.js 18 atau lebih baru
- Akses tulis ke folder `data/` dan `media/`
- `ADMIN_PASSWORD` harus diisi sebelum fitur admin dipakai di environment production

## Konfigurasi Environment

Gunakan file `.env.example` sebagai acuan:

```env
PORT=3000
HOST=0.0.0.0
ADMIN_PASSWORD=change-me
```

Keterangan:
- `PORT`: port server HTTP
- `HOST`: host binding server, default aman untuk container atau VM adalah `0.0.0.0`
- `ADMIN_PASSWORD`: password untuk masuk ke panel admin

## Menjalankan Project

Jalankan server:

```powershell
node server.js
```

Atau jika environment PowerShell Anda mengizinkan `npm` script:

```powershell
npm start
```

Setelah aktif, endpoint pentingnya adalah:
- `/` untuk homepage
- `/login.html` untuk login admin
- `/admin.html` untuk panel admin
- `/api/content` untuk baca/simpan konten
- `/api/admin/login` untuk login admin
- `/api/upload-image` untuk upload gambar galeri
- `/health` untuk health check sederhana

## Cara Kerja Konten

- Homepage mengambil data dari `/api/content`
- Panel admin menyimpan perubahan ke `data/content.json`
- Upload gambar dari panel admin akan menghasilkan URL `/media/...`
- Jika API tidak tersedia, script frontend masih punya fallback local storage untuk browser yang sedang dipakai, tetapi sumber data utama production tetap `data/content.json`

## Catatan Production

- Sajikan aplikasi ini di balik reverse proxy jika ingin memakai domain, HTTPS, atau header tambahan
- Pastikan folder `data/` dan `media/` tidak read-only
- Jangan commit file `.env` yang berisi password asli
- Session admin disimpan di memori proses server, jadi restart server akan mengeluarkan semua session login aktif
- Saat `ADMIN_PASSWORD` kosong, login admin otomatis dinonaktifkan

## Verifikasi Dasar

Pengecekan minimal setelah deploy:
- buka `/health` dan pastikan status `200`
- buka `/` dan pastikan homepage tampil normal
- login lewat `/login.html`
- simpan perubahan kecil dari `/admin.html`
- cek bahwa `data/content.json` ikut berubah
- coba upload 1 gambar dan pastikan file muncul di folder `media/`

## Pengembangan Lanjutan yang Disarankan

Beberapa peningkatan yang layak dipertimbangkan jika project ini terus dipakai production:
- tambah dukungan file `.env` loader seperti `dotenv`
- simpan session admin di store yang lebih persisten jika server dijalankan lebih dari satu instance
- tambah logging request dan error
- tambah backup otomatis untuk `data/content.json`
- tambah validasi URL dan sanitasi HTML yang lebih ketat untuk field admin tertentu
