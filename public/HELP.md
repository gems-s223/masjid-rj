# Panduan Admin Website

Panduan ini ditujukan untuk pengurus atau admin yang mengelola konten website Masjid Raudhatul Jannah melalui halaman admin.

## 1. Cara Masuk ke Admin

1. Buka halaman login admin: `/login.html`
2. Masukkan password admin
3. Klik tombol `Masuk`
4. Jika password benar, Anda akan diarahkan ke `/admin.html`

Catatan:
- Jika muncul pesan `ADMIN_PASSWORD belum disetel di server`, berarti password admin belum dikonfigurasi oleh pengelola server.
- Jika terlalu banyak percobaan login gagal, akses akan dikunci sementara beberapa menit.

## 2. Navigasi Panel Admin

Halaman admin menggunakan sistem tab navigasi. Klik tab di bagian atas untuk berpindah antar section:
- **Hero** - Bagian header utama website
- **About** - Bagian tentang masjid
- **Program** - Program dan kegiatan masjid
- **Schedule** - Jadwal kajian mendatang
- **Streaming** - Bagian live streaming
- **Videos** - Daftar video YouTube
- **Gallery** - Galeri foto
- **Fasilitas** - Fasilitas masjid
- **Contact** - Informasi kontak dan media sosial
- **Donation** - Informasi donasi
- **Footer** - Bagian kaki website

## 3. Bagian yang Bisa Diubah

### Hero Section
- Judul section hero
- Subjudul hero
- Tagline hero (mendukung HTML)
- Status LIVE (checkbox)

### About Section
- Label section tentang
- Judul section tentang
- 3 paragraf tentang masjid
- 3 statistik (angka dan label), contoh: "5+" dengan label "Tahun Berdiri"

### Program Section
- Label section program
- Judul section program
- Daftar program (repeater): ikon, judul, deskripsi, tag (contoh: "Ahad · 10:00 WIB")

### Schedule Section
- Label section jadwal
- Judul section jadwal
- Daftar jadwal (repeater): tanggal, bulan, judul kajian, detail, waktu

### Streaming Section
- Label section streaming
- Judul section streaming
- Deskripsi streaming

### Videos Section
- Label section video
- Judul section video
- Link channel YouTube
- Daftar video (repeater): URL video, thumbnail, judul, meta

### Gallery Section
- Label section galeri
- Judul section galeri
- Daftar item galeri (repeater): caption, image URL, upload gambar

### Fasilitas Section
- Label section fasilitas
- Judul section fasilitas
- Daftar fasilitas (repeater): ikon, judul, deskripsi

### Contact Section
- Label section kontak
- Judul section kontak
- Label lokasi
- Alamat lengkap
- Link Google Maps
- Link embed peta
- Link dan teks WhatsApp
- Link dan teks telepon
- Link dan teks Instagram
- Link dan teks Facebook
- Link dan teks YouTube

### Donation Section
- Label donasi
- Judul section donasi
- Deskripsi donasi
- Nama bank
- Label rekening
- Nomor rekening
- Atas nama rekening
- Link tombol konfirmasi WhatsApp
- Teks tombol konfirmasi

### Footer Section
- Nama brand footer
- Lokasi brand footer
- Ayat footer (mendukung HTML)
- Copyright footer

## 4. Menyimpan Perubahan

Setelah selesai mengubah isi form:
1. Klik tombol `Simpan Perubahan`
2. Tunggu pesan status berhasil
3. Refresh halaman beranda untuk melihat hasil terbaru

Catatan penting:
- Perubahan disimpan ke server, bukan hanya di browser, selama server sedang aktif normal.
- Jika server sedang bermasalah, browser bisa menyimpan fallback lokal sementara, tetapi itu tidak otomatis terlihat oleh semua pengunjung.

## 5. Mengatur Status LIVE

Di bagian `Hero Section` ada checkbox `Tandai sedang LIVE`.
- Centang jika kajian sedang live
- Hilangkan centang jika tidak sedang live

Perubahan ini akan memengaruhi badge LIVE di halaman utama.

## 6. Mengelola Item Repeater (Program, Jadwal, Video, Galeri, Fasilitas)

Beberapa section memiliki daftar item yang bisa ditambah, diurutkan, atau dihapus:

### Menambah Item
- Klik tombol `Tambah [Nama Section]` untuk menambah item baru

### Mengubah Urutan
- Gunakan tombol panah (▲▼) untuk memindahkan item ke atas atau ke bawah

### Menghapus Item
- Klik tombol `Hapus` pada item yang ingin dihapus

## 7. Mengelola Program

Di bagian `Program Section`:
- Pilih ikon program dari dropdown
- Isi judul program
- Isi deskripsi
- Isi tag (contoh: "Ahad · 10:00 WIB")

Ikon yang tersedia:
- Kajian Pagi (Jam)
- Streaming (TV)
- Kegiatan Anak (Orang)
- Kajian Malam (Rumah)
- Sholat Berjamaah (Masjid)
- Zakat & Infaq (Globe)

## 8. Mengelola Jadwal Kajian

Di bagian `Schedule Section`:
- Isi tanggal (angka, contoh: "23")
- Isi bulan (teks, contoh: "Mar")
- Isi judul kajian
- Isi detail (mendukung HTML, contoh: "Kitab Al-Mulakhos Fiqh<br>Bersama: Ust. Muhammad Fakhruddin")
- Isi waktu (contoh: "10:00 WIB - Menjelang Dzuhur")

## 9. Mengelola Video

Di bagian `Videos Section`:
- Isi link channel YouTube
- Klik `Tambah Video` untuk menambah item baru
- Isi `Video URL`
- Isi atau cek `Thumbnail URL`
- Isi `Judul Video`
- Isi `Meta Video`
- Gunakan tombol panah untuk mengubah urutan
- Gunakan tombol `Hapus` untuk menghapus item

Tips:
- Jika link video adalah YouTube, thumbnail biasanya akan terisi otomatis saat URL video dimasukkan.
- Pastikan URL video benar dan bisa dibuka publik.

## 10. Mengelola Galeri

Di bagian `Gallery Section`:
- Klik `Tambah Item Galeri` untuk menambah item baru
- Isi `Caption`
- Isi `Image URL` jika sudah punya link gambar
- Atau upload gambar langsung lewat area drag-and-drop

Cara upload gambar:
1. Klik area upload atau drag file gambar ke kotak upload
2. Tunggu progress bar selesai
3. URL gambar akan terpasang otomatis ke item galeri
4. Simpan perubahan dengan tombol `Simpan Perubahan`

Format gambar yang didukung:
- JPG atau JPEG
- PNG
- WEBP
- GIF

## 11. Mengelola Fasilitas

Di bagian `Fasilitas Section`:
- Klik `Tambah Fasilitas` untuk menambah item baru
- Pilih ikon fasilitas dari dropdown
- Isi judul fasilitas
- Isi deskripsi

Ikon yang tersedia:
- Toilet
- Parkir
- Toko / Mart
- Masjid
- Tempat Wudhu
- AC / Pendingin

## 12. Mengubah Kontak dan Peta

Pada `Contact Section`, periksa dengan teliti field berikut:
- `Label Lokasi` dan `Alamat Kontak`
- `Link Google Maps` - untuk tombol buka maps
- `Link Embed Map` - untuk tampilan peta yang muncul di website
- `Link WhatsApp` - gunakan format seperti `https://wa.me/628xxxx`
- `Link Telepon` - gunakan format seperti `tel:0858xxxx`
- Link dan teks media sosial (Instagram, Facebook, YouTube)

Pastikan semua URL lengkap dan benar. Jika salah satu link tidak benar, pengunjung bisa diarahkan ke halaman yang salah.

## 13. Mengubah Informasi Donasi

Pada `Donation Section`, admin bisa mengganti:
- Label dan judul section donasi
- Deskripsi donasi
- Nama bank, label rekening, nomor rekening, atas nama
- Link dan teks tombol konfirmasi WhatsApp

Pastikan nomor rekening dan nama bank diperiksa ulang sebelum disimpan.

## 14. Mengubah Footer

Pada `Footer Section`:
- `Nama Brand Footer` - nama yang muncul di footer
- `Lokasi Brand Footer` - lokasi masjid
- `Ayat Footer` - ayat Al-Quran (mendukung HTML)
- `Copyright Footer` - teks hak cipta

## 15. Tombol Reset

Tombol `Reset ke Default` akan mengembalikan konten ke isi bawaan website.

Gunakan tombol ini dengan hati-hati karena:
- konten yang sudah diubah bisa tertimpa
- setelah reset dan disimpan, isi website akan kembali ke default

Sebaiknya lakukan reset hanya jika memang ingin mengulang isi dari awal.

## 16. Tombol Keluar

Klik tombol `Keluar` untuk logout dari panel admin.

Ini penting dilakukan terutama jika admin membuka panel dari komputer bersama atau perangkat publik.

## 17. Akses Langsung ke Panduan dan Beranda

Di bagian bawah halaman admin terdapat tautan langsung:
- `Buka Panduan Admin` - membuka file HELP.md
- `Buka Beranda` - membuka halaman utama website

## 18. Jika Perubahan Tidak Muncul

Jika perubahan belum terlihat di homepage:
- refresh halaman browser
- pastikan Anda sudah menekan `Simpan Perubahan`
- cek apakah status berhasil muncul di panel admin
- coba buka website dari tab baru
- jika perlu, lakukan hard refresh browser

Jika masih belum berubah, kemungkinan server tidak berhasil menyimpan data ke `data/content.json`.

## 19. Jika Upload Gambar Gagal

Hal yang perlu dicek:
- ukuran file jangan terlalu besar
- format file harus JPG, PNG, WEBP, atau GIF
- koneksi ke server harus aktif
- sesi login admin masih valid

Jika sesi habis, login ulang lalu coba upload lagi.

## 20. Batasan Penting

Halaman admin ini sederhana dan praktis, tetapi ada beberapa batasan:
- session login akan hilang jika server restart
- perubahan konten tersimpan pada file JSON di server
- jika server dipindah tanpa menyalin folder `data/` dan `media/`, data lama tidak ikut terbawa

## 21. Rekomendasi Operasional

Agar pengelolaan website lebih aman:
- gunakan password admin yang kuat
- batasi siapa yang mengetahui password admin
- backup folder `data/` dan `media/` secara berkala
- cek kembali tampilan homepage setelah mengubah konten penting
- logout setelah selesai mengedit
