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

## 2. Bagian yang Bisa Diubah

Di halaman admin, Anda dapat mengubah beberapa bagian utama website:
- `Hero Section`: judul utama, subjudul, tagline, dan status LIVE
- `About Section`: isi penjelasan tentang masjid
- `Streaming Section`: deskripsi live streaming
- `Videos Section`: daftar video yang tampil di homepage
- `Gallery Section`: judul galeri dan item foto galeri
- `Contact Section`: alamat, WhatsApp, Instagram, Facebook, YouTube, dan embed Google Maps
- `Donation Section`: informasi rekening dan tombol konfirmasi donasi
- `Footer Section`: nama brand, ayat, dan copyright footer

## 3. Menyimpan Perubahan

Setelah selesai mengubah isi form:
1. Klik tombol `Simpan Perubahan`
2. Tunggu pesan status berhasil
3. Refresh halaman beranda untuk melihat hasil terbaru

Catatan penting:
- Perubahan disimpan ke server, bukan hanya di browser, selama server sedang aktif normal.
- Jika server sedang bermasalah, browser bisa menyimpan fallback lokal sementara, tetapi itu tidak otomatis terlihat oleh semua pengunjung.

## 4. Mengatur Status LIVE

Di bagian `Hero Section` ada checkbox `Tandai sedang LIVE`.
- Centang jika kajian sedang live
- Hilangkan centang jika tidak sedang live

Perubahan ini akan memengaruhi badge LIVE di halaman utama.

## 5. Mengelola Video

Di bagian `Videos Section`:
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

## 6. Mengelola Galeri

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

## 7. Mengubah Kontak dan Peta

Pada `Contact Section`, periksa dengan teliti field berikut:
- `Link Google Maps`: untuk tombol buka maps
- `Link Embed Map`: untuk tampilan peta yang muncul di website
- `Link WhatsApp`: gunakan format seperti `https://wa.me/628xxxx`
- `Link Telepon`: gunakan format seperti `tel:0858xxxx`
- Link media sosial: pastikan URL lengkap dan benar

Jika salah satu link tidak benar, pengunjung bisa diarahkan ke halaman yang salah.

## 8. Mengubah Informasi Donasi

Pada `Donation Section`, admin bisa mengganti:
- label donasi
- judul donasi
- deskripsi donasi
- nama bank
- label rekening
- nomor rekening
- nama pemilik rekening
- link tombol WhatsApp konfirmasi

Pastikan nomor rekening dan nama bank diperiksa ulang sebelum disimpan.

## 9. Tombol Reset

Tombol `Reset ke Default` akan mengembalikan konten ke isi bawaan website.

Gunakan tombol ini dengan hati-hati karena:
- konten yang sudah diubah bisa tertimpa
- setelah reset dan disimpan, isi website akan kembali ke default

Sebaiknya lakukan reset hanya jika memang ingin mengulang isi dari awal.

## 10. Tombol Keluar

Klik tombol `Keluar` untuk logout dari panel admin.

Ini penting dilakukan terutama jika admin membuka panel dari komputer bersama atau perangkat publik.

## 11. Jika Perubahan Tidak Muncul

Jika perubahan belum terlihat di homepage:
- refresh halaman browser
- pastikan Anda sudah menekan `Simpan Perubahan`
- cek apakah status berhasil muncul di panel admin
- coba buka website dari tab baru
- jika perlu, lakukan hard refresh browser

Jika masih belum berubah, kemungkinan server tidak berhasil menyimpan data ke `data/content.json`.

## 12. Jika Upload Gambar Gagal

Hal yang perlu dicek:
- ukuran file jangan terlalu besar
- format file harus JPG, PNG, WEBP, atau GIF
- koneksi ke server harus aktif
- sesi login admin masih valid

Jika sesi habis, login ulang lalu coba upload lagi.

## 13. Batasan Penting

Halaman admin ini sederhana dan praktis, tetapi ada beberapa batasan:
- session login akan hilang jika server restart
- perubahan konten tersimpan pada file JSON di server
- jika server dipindah tanpa menyalin folder `data/` dan `media/`, data lama tidak ikut terbawa

## 14. Rekomendasi Operasional

Agar pengelolaan website lebih aman:
- gunakan password admin yang kuat
- batasi siapa yang mengetahui password admin
- backup folder `data/` dan `media/` secara berkala
- cek kembali tampilan homepage setelah mengubah konten penting
- logout setelah selesai mengedit
