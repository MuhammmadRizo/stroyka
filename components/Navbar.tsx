"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import styles from "@/styles/Navbar.module.css";
import { topBarLinks, navCategories } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Top bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbar__inner}`}>
          <span className={styles.topbar__city}>
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Москва
          </span>
          <nav className={styles.topbar__links}>
            {topBarLinks.map((link) => (
              <a key={link} href="#" className={styles.topbar__link}>{link}</a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={`container ${styles.mainHeader__inner}`}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            <div className={styles.logo__icon}>SS</div>
            <span className={styles.logo__text}>Stroyka<br />Store</span>
          </a>

          {/* Catalog */}
          <button className={styles.catalogBtn}>
            <Menu size={16} />
            Каталог
          </button>

          {/* Search */}
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Поиск"
              className={styles.search__input}
              aria-label="Поиск товаров"
            />
            <button className={styles.search__btn} aria-label="Найти">
              <Search size={16} color="#ffffff" />
            </button>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.action} aria-label="Профиль">
              <User size={20} />
              <span className={styles.action__label}>Профиль</span>
            </button>
            <button className={styles.action} aria-label="Заказы">
              <Heart size={20} />
              <span className={styles.action__label}>Заказы</span>
            </button>
            <button className={styles.action} aria-label="Корзина">
              <ShoppingCart size={20} />
              <span className={styles.action__label}>Корзина</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Category navigation */}
      <nav className={styles.catNav}>
        <div className={`container ${styles.catNav__inner}`}>
          {navCategories.map((cat) => (
            <a key={cat} href="#" className={styles.catNav__link}>{cat}</a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles["mobileMenu--open"] : ""}`}>
        {navCategories.map((cat) => (
          <a key={cat} href="#" className={styles.mobileMenu__link}>{cat}</a>
        ))}
        <div style={{ display: "flex", gap: "16px", paddingTop: "8px" }}>
          <button className={styles.action}><User size={18} /> <span className={styles.action__label}>Профиль</span></button>
          <button className={styles.action}><Heart size={18} /> <span className={styles.action__label}>Заказы</span></button>
          <button className={styles.action}><ShoppingCart size={18} /> <span className={styles.action__label}>Корзина</span></button>
        </div>
      </div>
    </header>
  );
}
