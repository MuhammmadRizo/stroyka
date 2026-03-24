import { Mail, MapPin } from "lucide-react";
import styles from "@/styles/sections.module.css";
import {
  footerAccountLinks,
  footerCatalogLinks,
  footerInfoLinks,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div>
              <a href="#" className={styles.footerLogo}>
                <div className={styles.footerLogo__icon}>SS</div>
                <span className={styles.footerLogo__text}>
                  Stroyka
                  <br />
                  Store
                </span>
              </a>
              <div className={styles.footerContact}>
                <a
                  href="mailto:info@stroykastore.ru"
                  className={styles.footerContact__item}
                >
                  <Mail size={12} style={{ flexShrink: 0, marginTop: 2 }} />
                  info@stroykastore.ru
                </a>
                <span className={styles.footerContact__item}>
                  <MapPin size={12} style={{ flexShrink: 0, marginTop: 2 }} />
                  Москва, ул. Камчатская 10
                </span>
              </div>
            </div>

            {/* Links col 1 */}
            <div>
              <p className={styles.footerCol__title}>Личный кабинет</p>
              <nav className={styles.footerCol__links}>
                {footerAccountLinks.map((l) => (
                  <a key={l} href="#" className={styles.footerCol__link}>
                    {l}
                  </a>
                ))}
              </nav>
            </div>

            {/* Links col 2 */}
            <div>
              <p className={styles.footerCol__title}>Каталог</p>
              <nav className={styles.footerCol__links}>
                {footerCatalogLinks.map((l) => (
                  <a key={l} href="#" className={styles.footerCol__link}>
                    {l}
                  </a>
                ))}
              </nav>
            </div>

            {/* Links col 3 */}
            <div>
              <p className={styles.footerCol__title}>Информация</p>
              <nav className={styles.footerCol__links}>
                {footerInfoLinks.map((l) => (
                  <a key={l} href="#" className={styles.footerCol__link}>
                    {l}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottom__inner}>
            <span className={styles.footerBottom__copy}>© СтройкаСтор</span>
            <div className={styles.footerBottom__payments}>
              {["VISA", "Mastercard", "Мир"].map((p) => (
                <span key={p} className={styles.paymentBadge}>
                  {p}
                </span>
              ))}
            </div>
            <span className={styles.footerBottom__dev}>
              Разработка KUKURUZ STUDIO
            </span>
            <a
              href="sms:+998996402205?body=Salom%20men%20sizdan%20mahsulot%20buyurtma
%20qilmoqchiman"
            >
              {" "}
              Telefon orqali xabar yuborish{" "}
            </a>
            <a
              href="https://wa.me/+998996402205?body=Salom%20men%20sizdan%20mahsulot%20buyurtma
%20qilmoqchiman"
            >
              {" "}
              Telefon orqali xabar yuborish{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
