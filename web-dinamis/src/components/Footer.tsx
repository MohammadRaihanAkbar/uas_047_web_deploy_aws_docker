import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">Taman Abadi</Link>
          <p className="footer-tagline">Tempat Peristirahatan Terakhir yang Damai</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Menu</h4>
            <Link href="/#hero">Beranda</Link>
            <Link href="/#services">Layanan</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/#vision">Tentang</Link>
          </div>
          <div className="footer-col">
            <h4>Layanan</h4>
            <span>Pemakaman Umum</span>
            <span>Peti Mati Premium</span>
            <span>Transportasi Jenazah</span>
            <span>Pengurusan Dokumen</span>
          </div>
          <div className="footer-col">
            <h4>Kontak</h4>
            <span>info@tamanabadi.id</span>
            <span>+62 812 3456 7890</span>
            <span>Jl. Ketenangan No. 47, Surabaya</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Taman Abadi Memorial Park. Semua hak dilindungi undang-undang.</p>
        <p className="footer-credit">UAS Administrasi Server - Mohammad Raihan Akbar (2388010047)</p>
      </div>
    </footer>
  );
}
