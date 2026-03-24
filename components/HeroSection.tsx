import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/HeroSection.module.css";

const tools = [
  { bg: "#e8e8e8", emoji: "🔧" },
  { bg: "#fff3cd", emoji: "🖌️" },
  { bg: "#fde8d0", emoji: "🔨" },
  { bg: "#e8f0e8", emoji: "📐" },
  { bg: "#fff3cd", emoji: "🪛" },
  { bg: "#e8e8e8", emoji: "🪚" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.banner}>
          {/* Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              Специальные<br />предложения
            </h1>
            <p className={styles.subtitle}>
              на строительные материалы<br />и товары для ремонта
            </p>
            <button className="btn-yellow">Подробнее</button>
          </div>

          {/* Tools collage */}
          <div className={styles.toolsGrid} aria-hidden="true">
            {tools.map((t, i) => (
              <div key={i} className={styles.toolCell} style={{ background: t.bg }}>
                <span style={{ fontSize: "clamp(24px, 4vw, 44px)" }}>{t.emoji}</span>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} aria-label="Предыдущий">
              <ChevronLeft size={16} color="#555" />
            </button>
            <button className={styles.arrowBtn} aria-label="Следующий">
              <ChevronRight size={16} color="#555" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
