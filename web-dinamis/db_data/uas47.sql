-- ============================================
-- DATABASE: uas47
-- Web Pemakaman - Taman Abadi Memorial Park
-- ============================================

CREATE DATABASE IF NOT EXISTS uas47;
USE uas47;

-- Tabel users (untuk login admin)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','editor') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- password: admin123 (bcrypt hash)
INSERT INTO users (username, password, role) VALUES
('admin', '$2b$10$E88joOa.CdE9LkNJPY0W9exC8Qm4TBiglLTwUbZ1HPtkx7aO8hUCK', 'admin');

-- Tabel layanan pemakaman
CREATE TABLE IF NOT EXISTS layanan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  icon VARCHAR(50) DEFAULT 'flower',
  nama VARCHAR(150) NOT NULL,
  deskripsi TEXT,
  urutan INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO layanan (icon, nama, deskripsi, urutan) VALUES
('flower', 'Pemakaman Umum', 'Layanan pemakaman lengkap dengan prosesi doa, persiapan jenazah, dan penguburan sesuai syariat Islam maupun adat istiadat setempat.', 1),
('box', 'Peti Mati Premium', 'Penyediaan peti mati berkualitas tinggi dari kayu jati solid, mahoni, hingga peti mati custom dengan ukiran khusus sesuai permintaan keluarga.', 2),
('heart', 'Dekorasi Pemakaman', 'Rangkaian bunga segar, karangan bunga duka cita, dan dekorasi area pemakaman yang elegan dan penuh penghormatan.', 3),
('car', 'Transportasi Jenazah', 'Layanan ambulans dan kendaraan pengantar jenazah ber-AC dengan sopir profesional, tersedia 24 jam untuk jarak dekat maupun antar kota.', 4),
('book', 'Pengurusan Dokumen', 'Bantuan pengurusan surat kematian, akta kematian, izin pemakaman, dan seluruh dokumen administrasi yang diperlukan.', 5),
('home', 'Kremasi & Kolumbarium', 'Fasilitas kremasi modern dengan standar internasional dan penyimpanan abu di kolumbarium yang tenang dan terawat.', 6);

-- Tabel berita / pengumuman
CREATE TABLE IF NOT EXISTS berita (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  konten TEXT,
  image VARCHAR(500) DEFAULT NULL,
  is_published TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO berita (judul, slug, excerpt, konten, image, is_published) VALUES
('Pembukaan Blok Pemakaman Baru Area Melati', 'pembukaan-blok-melati',
 'Taman Abadi Memorial Park membuka blok pemakaman baru bernama Area Melati yang berlokasi di sisi timur taman.',
 'Taman Abadi Memorial Park dengan bangga mengumumkan pembukaan blok pemakaman baru bernama Area Melati. Berlokasi di sisi timur taman yang teduh dan asri, Area Melati menawarkan kavling pemakaman dengan pemandangan taman hijau yang menenangkan. Blok ini dilengkapi dengan jalur pejalan kaki yang lebar, bangku peristirahatan, dan sistem irigasi otomatis untuk menjaga keindahan taman sepanjang tahun. Pemesanan kavling sudah dibuka mulai tanggal 1 Juli 2026.',
 NULL, 1),
('Jadwal Doa Bersama Bulanan Juni 2026', 'doa-bersama-juni-2026',
 'Kegiatan doa bersama dan tahlilan rutin bulanan akan dilaksanakan pada hari Jumat, 20 Juni 2026.',
 'Mengingatkan kepada seluruh keluarga ahli waris, bahwa kegiatan doa bersama dan tahlilan rutin bulanan akan dilaksanakan pada hari Jumat, 20 Juni 2026 pukul 08.00 WIB di Musholla At-Taubah yang berada di kompleks Taman Abadi Memorial Park. Kegiatan ini dipimpin oleh Ustadz Ahmad Fauzi dan terbuka untuk umum. Setelah acara doa, akan dilanjutkan dengan kegiatan bersih-bersih makam secara gotong royong.',
 NULL, 1),
('Promo Paket Pemakaman Keluarga Hemat', 'promo-paket-keluarga',
 'Dapatkan diskon khusus untuk pemesanan paket kavling keluarga berisi 4 hingga 6 petak makam.',
 'Taman Abadi Memorial Park menawarkan Paket Pemakaman Keluarga Hemat untuk Anda yang ingin mempersiapkan tempat peristirahatan terakhir bersama orang-orang tercinta. Paket ini mencakup 4 hingga 6 petak kavling yang berdampingan, dilengkapi dengan penanda nisan granit berkualitas, perawatan taman selama 10 tahun, dan akses ke fasilitas musholla serta area parkir. Hubungi customer service kami untuk informasi harga dan ketersediaan kavling.',
 NULL, 1),
('Renovasi Musholla At-Taubah Selesai', 'renovasi-musholla',
 'Musholla At-Taubah di kompleks Taman Abadi telah selesai direnovasi dan siap digunakan kembali.',
 'Alhamdulillah, renovasi Musholla At-Taubah yang berada di dalam kompleks Taman Abadi Memorial Park telah selesai dilaksanakan. Renovasi meliputi perluasan area sholat yang kini dapat menampung hingga 200 jamaah, pemasangan AC sentral, pembaruan sistem sound, dan pembangunan area wudhu yang lebih luas dan nyaman. Musholla ini juga kini dilengkapi dengan perpustakaan mini berisi kitab-kitab dan Al-Quran untuk para peziarah.',
 NULL, 1);

-- Tabel kontak / pesan masuk
CREATE TABLE IF NOT EXISTS kontak (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(150) NOT NULL,
  email VARCHAR(200),
  subjek VARCHAR(255),
  pesan TEXT,
  is_read TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
