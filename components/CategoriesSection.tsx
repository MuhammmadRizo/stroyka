import { ChevronRight } from "lucide-react";
import styles from "@/styles/sections.module.css";
import { categories } from "@/lib/data";

export default function CategoriesSection() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Популярные категории</h2>
          <a href="#" className="section-link">
            Все категории <ChevronRight size={15} />
          </a>
        </div>
        <div className={styles.catGrid}>
          {categories.map((cat) => (
            <a key={cat.id} href="#" className={styles.catItem}>
              <img
                src={cat.image}
                alt={cat.name}
                className={styles.catItem__img}
                loading="lazy"
              />
              <span className={styles.catItem__name}>{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
