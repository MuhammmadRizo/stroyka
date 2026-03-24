import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export default function ProductCard({ product, showDiscount = false }: ProductCardProps) {
  return (
    <article className="product-card">
      {showDiscount && product.discount && (
        <span className="product-card__badge">{product.discount}%</span>
      )}

      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <p className="product-card__name">{product.name}</p>

      <div>
        <span className="product-card__price">{product.price.toLocaleString("ru-RU")} ₽</span>
        {product.oldPrice && (
          <span className="product-card__old-price">{product.oldPrice.toLocaleString("ru-RU")} ₽</span>
        )}
      </div>

      <button className="btn-yellow btn-yellow-sm" aria-label={`Добавить ${product.name} в корзину`}>
        <ShoppingCart size={13} />
        В корзину
      </button>
    </article>
  );
}
