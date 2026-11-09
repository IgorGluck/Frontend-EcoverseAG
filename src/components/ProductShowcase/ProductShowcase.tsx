import { useId, useState } from 'react';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import { ChevronIcon } from '../Icons/Icons';
import './ProductShowcase.scss';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];
const VISIBLE = 4;
const CARD_WIDTH = 304;
const GAP = 18;

interface Props {
  id?: string;
  title: string;
  variant: 'tabs' | 'see-all';
  products: Product[];
  loading: boolean;
  error: string | null;
  onSelect: (product: Product) => void;
}

export default function ProductShowcase({
  id,
  title,
  variant,
  products,
  loading,
  error,
  onSelect,
}: Props) {
  const titleId = useId();
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [start, setStart] = useState(0);

  const maxStart = Math.max(products.length - VISIBLE, 0);

  return (
    <section id={id} className="showcase container" aria-labelledby={titleId}>
      <h2 id={titleId} className="showcase__title">
        {title}
      </h2>

      {variant === 'tabs' ? (
        <div className="showcase__tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className="showcase__tab"
              aria-pressed={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : (
        <button type="button" className="showcase__see-all">
          Ver todos
        </button>
      )}

      {loading && (
        <p className="showcase__message" role="status">
          Carregando produtos…
        </p>
      )}
      {error && (
        <p className="showcase__message" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="showcase__carousel">
          <div className="showcase__viewport">
            <ul
              className="showcase__list"
              style={{ transform: `translateX(-${start * (CARD_WIDTH + GAP)}px)` }}
            >
              {products.map((product, index) => (
                <li key={`${product.productName}-${index}`} className="showcase__item">
                  <ProductCard product={product} onSelect={onSelect} />
                </li>
              ))}
            </ul>
          </div>

          {maxStart > 0 && (
            <>
              <button
                type="button"
                className="showcase__arrow showcase__arrow--prev"
                aria-label="Produtos anteriores"
                disabled={start === 0}
                onClick={() => setStart((s) => Math.max(s - 1, 0))}
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                className="showcase__arrow showcase__arrow--next"
                aria-label="Próximos produtos"
                disabled={start >= maxStart}
                onClick={() => setStart((s) => Math.min(s + 1, maxStart))}
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}