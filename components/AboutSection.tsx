import styles from "@/styles/sections.module.css";

const tools = [
  { bg: "#fff9d6", emoji: "🔧", label: "Инструменты" },
  { bg: "#e8f0ff", emoji: "🖌️", label: "Краски" },
  { bg: "#e8f5e8", emoji: "🪟", label: "Окна" },
  { bg: "#fff0e8", emoji: "🔩", label: "Крепёж" },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutInner}>
          <div>
            <h2 className={styles.aboutTitle}>О компании</h2>
            <div className={styles.aboutText}>
              <p>
                В СтройкаСтор вы всегда сможете купить все необходимые товары для ремонта
                дома и дачи. Создайте уютный ремонт квартиры! Стройте вместе со СтройкаСтором!
                Гигантский ассортимент строительных материалов в нашем каталоге.
              </p>
              <p>
                Быстрая доставка строительных товаров по низким ценам сделает ваши покупки
                более выгодными, а низкие цены делают покупки более доступными. Здесь вы найдёте
                более 30 000 товаров для ремонта и строительства.
              </p>
              <p>
                СтройкаСтор — это широкий ассортимент товаров для дома и ремонта выгодно.
                Обращайтесь, чтобы заказать строительные и отделочные материалы для дома и дачи.
              </p>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.aboutAccent} aria-hidden="true" />
            <div className={styles.aboutGrid}>
              {tools.map((t, i) => (
                <div key={i} className={styles.aboutCell} style={{ background: t.bg }}>
                  <span className={styles.aboutCell__emoji}>{t.emoji}</span>
                  <span className={styles.aboutCell__label}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
