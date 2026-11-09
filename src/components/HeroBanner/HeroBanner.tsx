import './HeroBanner.scss';

export default function HeroBanner() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <h1 id="hero-title" className="hero__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="hero__offer">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className="hero__button">
          Ver produtos
        </a>
      </div>
    </section>
  );
}
