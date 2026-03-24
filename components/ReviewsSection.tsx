"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/sections.module.css";
import { reviews } from "@/lib/data";

export default function ReviewsSection() {
  const [start, setStart] = useState(0);
  const perPage = 4;
  const canPrev = start > 0;
  const canNext = start + perPage < reviews.length;

  return (
    <section className={styles.reviewsSection}>
      <div className="container">
        <div className={styles.reviewsHeader}>
          <h2 className="section-title">Отзывы</h2>
          <div className={styles.reviewsArrows}>
            <button
              className={styles.reviewsArrow}
              onClick={() => setStart((s) => Math.max(0, s - 1))}
              disabled={!canPrev}
              aria-label="Предыдущий"
            >
              <ChevronLeft size={15} color="#555" />
            </button>
            <button
              className={styles.reviewsArrow}
              onClick={() => setStart((s) => s + 1)}
              disabled={!canNext}
              aria-label="Следующий"
            >
              <ChevronRight size={15} color="#555" />
            </button>
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.slice(start, start + perPage).map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <span className={styles.reviewCard__quote} aria-hidden="true">"</span>

              <div className={styles.reviewCard__author}>
                <div className={styles.reviewCard__avatar}>{review.avatar}</div>
                <span className={styles.reviewCard__name}>{review.author}</span>
              </div>

              <p className={styles.reviewCard__text}>{review.text}</p>
              <p className={styles.reviewCard__date}>{review.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
