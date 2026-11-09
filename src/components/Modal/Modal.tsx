import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './Modal.scss';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function Modal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal__close"
          aria-label="Fechar"
          onClick={onClose}
        />

        <img className="modal__image" src={product.photo} alt={product.productName} />

        <div className="modal__info">
          <h2 id="modal-title" className="modal__title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <button type="button" className="modal__details">
            Veja mais detalhes do produto &gt;
          </button>

          <div className="modal__actions">
            <div className="modal__quantity" role="group" aria-label="Quantidade">
              <button
                type="button"
                className="modal__qty-button modal__qty-button--minus"
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <output className="modal__qty-value" aria-live="polite">
                {String(quantity).padStart(2, '0')}
              </output>
              <button
                type="button"
                className="modal__qty-button modal__qty-button--plus"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="2" />
                  <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>

            <button type="button" className="modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}