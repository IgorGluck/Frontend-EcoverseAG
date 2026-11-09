import './BrandList.scss';

const BRANDS = [1, 2, 3, 4, 5];

export default function BrandList() {
  return (
    <section className="brands container" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>
      <ul className="brands__list">
        {BRANDS.map((n) => (
          <li key={n} className="brands__item">
            <a href="#produtos" aria-label={`Marca ${n}`}>
              <img src="/images/logo.svg" alt="" width={117} height={34.76} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}