"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ nama: "", email: "", subjek: "", pesan: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setForm({ nama: "", email: "", subjek: "", pesan: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      {/* Background Image */}
      <div className="contact-bg-image">
        <img src="/images/contact-bg.png" alt="" aria-hidden="true" />
      </div>
      <div className="contact-bg-overlay" />

      <h2 className="section-title">
        Hubungi <span className="text-gradient">Kami</span>
      </h2>
      <p className="section-subtitle">
        Butuh informasi lebih lanjut tentang layanan pemakaman atau pemesanan kavling? Silakan hubungi kami.
      </p>

      <div className="contact-wrapper">
        {/* Info Side */}
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div className="contact-info-text">
              <h4>Alamat</h4>
              <p>Jl. Ketenangan No. 47, Surabaya, Jawa Timur 60234</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div className="contact-info-text">
              <h4>Telepon</h4>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📧</div>
            <div className="contact-info-text">
              <h4>Email</h4>
              <p>info@tamanabadi.id</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">🕐</div>
            <div className="contact-info-text">
              <h4>Jam Operasional</h4>
              <p>Senin - Sabtu: 08:00 - 17:00 WIB</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nama">Nama</label>
              <input
                id="nama"
                type="text"
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                placeholder="Nama lengkap Anda"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@contoh.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subjek">Subjek</label>
            <input
              id="subjek"
              type="text"
              required
              value={form.subjek}
              onChange={(e) => setForm({ ...form, subjek: e.target.value })}
              placeholder="Misal: Pemesanan Kavling, Info Harga, dll"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              rows={5}
              required
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              placeholder="Ceritakan kebutuhan Anda..."
            />
          </div>

          <button type="submit" className="cta-button" disabled={status === "sending"}>
            {status === "sending" ? "MENGIRIM..." : "KIRIM PESAN"}
          </button>

          {status === "ok" && (
            <p className="form-msg form-msg--ok">✅ Pesan terkirim! Tim kami akan segera menghubungi Anda.</p>
          )}
          {status === "error" && (
            <p className="form-msg form-msg--err">❌ Gagal mengirim pesan. Silakan coba lagi.</p>
          )}
        </form>
      </div>
    </section>
  );
}
