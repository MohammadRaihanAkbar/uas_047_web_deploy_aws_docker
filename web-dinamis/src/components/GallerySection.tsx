"use client";

export default function GallerySection() {
  const images = [
    { src: "/images/hero-bg.png", title: "Taman Memorial", desc: "Pemandangan taman pemakaman yang asri" },
    { src: "/images/services-bg.png", title: "Area Pemakaman", desc: "Kavling pemakaman premium" },
    { src: "/images/vision-bg.png", title: "Taman Bunga", desc: "Perawatan taman yang indah" },
    { src: "/images/gallery-bg.png", title: "Gedung Serba Guna", desc: "Fasilitas memorial modern" },
    { src: "/images/contact-bg.png", title: "Jalan Setapak", desc: "Area taman yang tenang" },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">
        Galeri <span className="text-gradient">Foto</span>
      </h2>
      <p className="section-subtitle">
        Keindahan dan ketenangan Taman Abadi Memorial Park dalam setiap sudut
      </p>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="gallery-item__overlay">
              <h4>{img.title}</h4>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
