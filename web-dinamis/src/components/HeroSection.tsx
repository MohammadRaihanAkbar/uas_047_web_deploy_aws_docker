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
      {/* Background Image */}
      <div className="hero-bg-image">
        <img src="/images/hero-bg.png" alt="" aria-hidden="true" />
      </div>
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Tempat Peristirahatan Terakhir yang Damai
        </div>

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

        <div className="hero-buttons">
          <a href="#services" className="cta-button">
            LIHAT LAYANAN KAMI raihan-2388010047
          </a>
          <a href="#contact" className="cta-button cta-button--outline">
            HUBUNGI KAMI
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
