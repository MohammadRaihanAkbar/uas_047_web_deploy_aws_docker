import { query } from "@/lib/db";
import { Flower, Box, Heart, Car, Book, Home, Shield, Globe, Star, MapPin, Moon, Sun } from "lucide-react";

export const dynamic = "force-dynamic";

function getIcon(name: string) {
  const props = { size: 28, strokeWidth: 1.5, color: "var(--accent-gold)" };
  switch (name) {
    case "flower": return <Flower {...props} />;
    case "box": return <Box {...props} />;
    case "heart": return <Heart {...props} />;
    case "car": return <Car {...props} />;
    case "book": return <Book {...props} />;
    case "home": return <Home {...props} />;
    case "shield": return <Shield {...props} />;
    case "globe": return <Globe {...props} />;
    case "star": return <Star {...props} />;
    case "map-pin": return <MapPin {...props} />;
    case "moon": return <Moon {...props} />;
    case "sun": return <Sun {...props} />;
    default: return <Star {...props} />;
  }
}

export default async function ServicesSection() {
  let rows: any[] = [];
  try {
    rows = await query<any>("SELECT * FROM layanan ORDER BY urutan ASC");
  } catch (error) {
    console.error("Failed to fetch layanan during build:", error);
    // Fallback if DB not ready
  }

  return (
    <section id="services" className="services">
      <div className="floating-accent" style={{ top: "20%", left: "5%", opacity: 0.05 }} />
      <div className="floating-accent floating-accent--alt" style={{ bottom: "10%", right: "5%", opacity: 0.04 }} />

      <h2 className="section-title">
        Layanan <span className="text-gradient">Kami</span>
      </h2>
      <p className="section-subtitle">
        Kami menyediakan layanan pemakaman profesional dengan penuh kehormatan dan dedikasi tinggi
      </p>
      <div className="services-grid">
        {rows.length === 0 && (
          <p style={{ textAlign: "center", gridColumn: "1/-1", color: "var(--text-dim)" }}>Tidak ada layanan saat ini.</p>
        )}
        {rows.map((s: any, i: number) => (
          <div className="card" key={s.id} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="card-icon">{getIcon(s.icon)}</span>
            <h3>{s.nama}</h3>
            <p>{s.deskripsi}</p>
            <div className="card-shine" />
          </div>
        ))}
      </div>
    </section>
  );
}
