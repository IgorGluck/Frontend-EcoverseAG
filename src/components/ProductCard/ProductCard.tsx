import type { Product } from '../../types/product';
import { formatPrice, getInstallment, getOldPrice } from '../../utils/formatPrice';
import './ProductCard.scss';

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
        loading="lazy"
      />
      <p className="product-card__text">{product.descriptionShort}</p>
      <p className="product-card__old-price">
        <span className="visually-hidden">Preço antigo: </span>
        <s>{formatPrice(getOldPrice(product.price))}</s>
      </p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">
        ou 2x de {formatPrice(getInstallment(product.price))} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>
      <button
        type="button"
        className="product-card__button"
        aria-label={`Comprar ${product.productName}`}
      >
        Comprar
      </button>
    </article>
  );
}