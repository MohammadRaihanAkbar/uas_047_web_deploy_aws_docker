"use client";

import { useEffect, useRef } from "react";

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("dev-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developer" className="developer-section" ref={sectionRef}>
      <div className="floating-accent" style={{ top: "30%", right: "10%" }} />
      
      <h2 className="section-title">
        Profil <span className="text-gradient">Pengembang</span>
      </h2>
      <p className="section-subtitle">
        Aplikasi ini dikembangkan oleh mahasiswa Informatika sebagai proyek UAS Administrasi Server
      </p>

      <div className="developer-card-container">
        <div className="developer-card">
          <div className="developer-card__glow" />
          <div className="developer-card__content">
            <div className="developer-avatar-wrapper">
              <img
                src="https://github.com/MohammadRaihanAkbar.png"
                alt="Mohammad Raihan Akbar"
                className="developer-avatar"
              />
            </div>
            
            <h3 className="developer-name">Mohammad Raihan Akbar</h3>
            <p className="developer-nim">NIM: 2388010047</p>
            <p className="developer-role">
              Informatics Student • Machine Learning • Data Science • Data Analyst
            </p>
            
            <div className="developer-divider" />
            
            <p className="developer-about">
              Mahasiswa Informatika dengan fokus pada Machine Learning dan Data Science.
              Memiliki ketertarikan dalam analisis data, eksplorasi dataset, serta membangun model prediktif.
            </p>
            
            <div className="developer-skills">
              <span className="dev-skill">Python</span>
              <span className="dev-skill">Machine Learning</span>
              <span className="dev-skill">Data Analysis</span>
              <span className="dev-skill">Pandas</span>
              <span className="dev-skill">NumPy</span>
              <span className="dev-skill">Data Visualization</span>
            </div>
            
            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://github.com/MohammadRaihanAkbar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                KUNJUNGI GITHUB SAYA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
