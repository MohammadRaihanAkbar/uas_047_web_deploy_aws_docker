"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("hero--visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="floating-accent" style={{ top: "20%", left: "10%" }} />
      <div className="floating-accent floating-accent--alt" style={{ bottom: "10%", right: "15%" }} />

      <span className="hero-tagline">Tempat Peristirahatan Terakhir yang Damai</span>
      <h1 className="hero-title">
        TAMAN ABADI
        <br />
        <span className="hero-title--gradient">MEMORIAL PARK</span>
      </h1>
      <p className="hero-description">
        Kami menghadirkan layanan pemakaman profesional dengan penuh kehormatan
        dan kasih sayang. Memberikan ketenangan bagi yang pergi dan kedamaian
        bagi yang ditinggalkan.
      </p>
      <a href="#services" className="cta-button">
        LIHAT LAYANAN KAMI
      </a>
    </section>
  );
}
