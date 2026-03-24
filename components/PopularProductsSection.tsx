import styles from "@/styles/sections.module.css";
import ProductCard from "./ProductCard";
import { popularProducts } from "@/lib/data";

export default function PopularProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Популярные товары</h2>
        </div>
        <div className={styles.productsGrid}>
          {popularProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
