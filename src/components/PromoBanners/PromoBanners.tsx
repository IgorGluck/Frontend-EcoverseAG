import './PromoBanners.scss';

const BANNERS = [1, 2];

export default function PromoBanners() {
  return (
    <section className="promo container" aria-label="Parceiros">
      {BANNERS.map((n) => (
        <article key={n} className={`promo__banner promo__banner--${n}`}>
          <h2 className="promo__title">Parceiros</h2>
          <p className="promo__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <a href="#produtos" className="promo__button">
            Confira
          </a>
        </article>
      ))}
    </section>
  );
}