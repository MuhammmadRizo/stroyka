export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  text: string;
}

export const saleProducts: Product[] = [
  {
    id: 1,
    name: "Рубероид РКП-350 ТХ размер материала 1 х 15 м (10м2, 1 рулон)",
    price: 469,
    oldPrice: 520,
    discount: -25,
    image: "https://placehold.co/180x140/e8f4f8/555?text=Рубероид",
  },
  {
    id: 2,
    name: "Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная",
    price: 445,
    oldPrice: 530,
    discount: -15,
    image: "https://placehold.co/180x140/f8f0e8/555?text=Пена",
  },
  {
    id: 3,
    name: "Сетка 'Рабица' яч. 50х50/1,5х10 м ОЦ",
    price: 1499,
    oldPrice: 1800,
    discount: -25,
    image: "https://placehold.co/180x140/eef8e8/555?text=Сетка",
  },
  {
    id: 4,
    name: "Металлочерепица, цвет коричневый, 1,18 × 1,15 м",
    price: 769,
    oldPrice: 960,
    discount: -25,
    image: "https://placehold.co/180x140/f8e8e8/555?text=Металлочерепица",
  },
];

export const popularProducts: Product[] = [
  {
    id: 10,
    name: "Керамогранит Грация 598×895 коричневый С-D ТРАМГОД",
    price: 899,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Керамогранит",
  },
  {
    id: 11,
    name: "Затирка для узких швов Ceresit CE 33, цвет белый, 2 кг",
    price: 275,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Затирка",
  },
  {
    id: 12,
    name: "Грунтовка Старатели 10л глубокого проникновения",
    price: 839,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Грунтовка",
  },
  {
    id: 13,
    name: "Гипсокартон Волма, 2500 × 1200 × 12,5 мм",
    price: 335,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Гипсокартон",
  },
  {
    id: 14,
    name: "Профиль 6,15м для гипсокартона",
    price: 195,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Профиль",
  },
  {
    id: 15,
    name: "Рулетка 3м",
    price: 100,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Рулетка",
  },
  {
    id: 16,
    name: "Клей МХ-75 штукатурка гипсовая МХ 10гр",
    price: 360,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Клей+МХ",
  },
  {
    id: 17,
    name: "Уголок серый канализационный Д110 ГФ90",
    price: 335,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Уголок",
  },
  {
    id: 18,
    name: "Клей Rotband, 30 кг",
    price: 508,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Rotband",
  },
  {
    id: 19,
    name: "Саморез по металлу 3,5х25 мм для гипсокартона",
    price: 340,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Саморезы",
  },
  {
    id: 20,
    name: "Шпатлёвка универсальная Danogips SuperFinish 17 л",
    price: 2555,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Шпатлёвка",
  },
  {
    id: 21,
    name: "Клейкая лента металлизированная Impulsa-Fl, 5х5000 м",
    price: 226,
    image: "https://placehold.co/200x160/f5f5f5/888?text=Лента",
  },
];

export const categories: Category[] = [
  { id: 1, name: "Дюймовые", image: "https://placehold.co/100x80/f0f0f0/666?text=Дюймовые" },
  { id: 2, name: "Пиломатериалы", image: "https://placehold.co/100x80/f0f0f0/666?text=Пиломатериалы" },
  { id: 3, name: "Линолеум", image: "https://placehold.co/100x80/f0f0f0/666?text=Линолеум" },
  { id: 4, name: "Обои", image: "https://placehold.co/100x80/f0f0f0/666?text=Обои" },
  { id: 5, name: "Инструменты", image: "https://placehold.co/100x80/f0f0f0/666?text=Инструменты" },
  { id: 6, name: "Товары для дачи", image: "https://placehold.co/100x80/f0f0f0/666?text=Для+дачи" },
  { id: 7, name: "Окна", image: "https://placehold.co/100x80/f0f0f0/666?text=Окна" },
  { id: 8, name: "Двери", image: "https://placehold.co/100x80/f0f0f0/666?text=Двери" },
  { id: 9, name: "Сантехника", image: "https://placehold.co/100x80/f0f0f0/666?text=Сантехника" },
  { id: 10, name: "Краски", image: "https://placehold.co/100x80/f0f0f0/666?text=Краски" },
  { id: 11, name: "Электротовары", image: "https://placehold.co/100x80/f0f0f0/666?text=Электро" },
  { id: 12, name: "Интерьер", image: "https://placehold.co/100x80/f0f0f0/666?text=Интерьер" },
];

export const brands: Brand[] = [
  { id: 1, name: "BEVER" },
  { id: 2, name: "BARNER" },
  { id: 3, name: "Хромо бланк" },
  { id: 4, name: "EuroBlock" },
  { id: 5, name: "PERFEKTA" },
  { id: 6, name: "MSTERA" },
  { id: 7, name: "AGS" },
  { id: 8, name: "ГАЛЕН" },
  { id: 9, name: "RECKE" },
  { id: 10, name: "MoFormat" },
  { id: 11, name: "Декра" },
  { id: 12, name: "ENGELS" },
];

export const reviews: Review[] = [
  {
    id: 1,
    author: "Пётр",
    avatar: "П",
    date: "12 марта 2023",
    text: "Сегодня 16.05.2022 года. Брал перфоратор в аренду знакомым по улице. Вернули в очень плохом состоянии, с явными следами разбора. В общем описаний перфоратора — за наш было прагматично а операторе, всем за 100 ₽",
  },
  {
    id: 2,
    author: "Анна",
    avatar: "А",
    date: "8 февраля 2023",
    text: "Живу от ближайшего МКЗ заказа. Брала раку этот дом ему. Хочу дать реку этому в том, чтобы отказывали как вместе. Очень квалифицированная помощь! Лучший ассортимент строительных материалов!",
  },
  {
    id: 3,
    author: "Виктор",
    avatar: "В",
    date: "5 ноября 2022",
    text: "Заказывал в данном магазине строй материалов. Приехали не вовремя, но все материалы в отличном состоянии. Строй материалы многие сравнивали, мне очень помогли! Рекомендую каждому! Большое спасибо",
  },
  {
    id: 4,
    author: "Дмитрий",
    avatar: "Д",
    date: "11 ноября 2022",
    text: "Данный магазин доставил все необходимые материалы в надлежащем состоянии. Всё поставили в комплектности и в дополнительной упаковке. Менеджеры работают хорошо. Рекомендую!",
  },
];

export const topBarLinks = ["Бренды", "Доставка", "Возврат", "Документация", "Контакты"];

export const navCategories = [
  "Акции",
  "Строительные материалы",
  "Керамическая плитка",
  "Краски",
  "Сантехника",
  "Напольные покрытия",
  "Инструменты",
  "Обои",
];

export const footerAccountLinks = ["Личный кабинет", "Заказы", "Избранное", "Сравнение"];
export const footerCatalogLinks = ["Каталог", "Акции", "Бренды", "Контакты"];
export const footerInfoLinks = ["Стать продавцом", "Доставка", "Возврат", "Документация"];
