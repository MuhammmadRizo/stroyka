import { ChevronRight } from "lucide-react";
import styles from "@/styles/sections.module.css";
import ProductCard from "./ProductCard";
import { saleProducts } from "@/lib/data";

export default function SalesSection() {
  return (
    <section className={styles.salesSection}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Акции</h2>
          <a href="#" className="section-link">
            Все акции <ChevronRight size={15} />
          </a>
        </div>
        <div className={styles.salesGrid}>
          {saleProducts.map((p) => (
            <ProductCard key={p.id} product={p} showDiscount />
          ))}
        </div>
      </div>
    </section>
  );
}
