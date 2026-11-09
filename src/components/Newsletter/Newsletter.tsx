import './Newsletter.scss';

export default function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner container">
        <div className="newsletter__intro">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__description">
            Assine a nossa newsletter e receba novidades e promoções exclusivas.
          </p>
        </div>

        <form
          className="newsletter__form"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
          }}
        >
          <div className="newsletter__fields">
            <label className="visually-hidden" htmlFor="newsletter-name">
              Nome
            </label>
            <input
              id="newsletter-name"
              className="newsletter__input"
              type="text"
              placeholder="Digite seu nome"
              required
            />
            <label className="visually-hidden" htmlFor="newsletter-email">
              E-mail
            </label>
            <input
              id="newsletter-email"
              className="newsletter__input"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
            <button type="submit" className="newsletter__button">
              Inscrever
            </button>
          </div>

          <label className="newsletter__check">
            <input type="checkbox" required />
            <span>Aceito receber novidades e promoções</span>
          </label>
        </form>
      </div>
    </section>
  );
}