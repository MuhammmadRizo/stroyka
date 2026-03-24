import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "СтройкаСтор — строительные материалы и товары для ремонта",
  description:
    "Широкий ассортимент строительных материалов, инструментов, напольных покрытий и товаров для дома и дачи. Доставка по Москве.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
