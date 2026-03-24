import { ChevronRight } from "lucide-react";
import styles from "@/styles/sections.module.css";
import { brands } from "@/lib/data";

export default function BrandsSection() {
  const row1 = brands.slice(0, 6);
  const row2 = brands.slice(6, 12);

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Популярные бренды</h2>
          <a href="#" className="section-link">
            Все бренды <ChevronRight size={15} />
          </a>
        </div>
        <div className={styles.brandsRows}>
          {[row1, row2].map((row, i) => (
            <div key={i} className={styles.brandsRow}>
              {row.map((brand) => (
                <a key={brand.id} href="#" className={styles.brandItem}>
                  <span className={styles.brandItem__name}>{brand.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
