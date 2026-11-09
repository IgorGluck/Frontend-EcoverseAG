import './CategoryList.scss';

const CATEGORIES = [
  { name: 'Tecnologia', icon: 'tecnologia', size: 61, active: true },
  { name: 'Supermercado', icon: 'supermercado', size: 61 },
  { name: 'Bebidas', icon: 'bebidas', size: 61 },
  { name: 'Ferramentas', icon: 'ferramentas', size: 61 },
  { name: 'Saúde', icon: 'saude', size: 61 },
  { name: 'Esportes e Fitness', icon: 'esportes', size: 61 },
  { name: 'Moda', icon: 'moda', size: 63 },
];

export default function CategoryList() {
  return (
    <section className="categories container" aria-label="Compre por categoria">
      <ul className="categories__list">
        {CATEGORIES.map(({ name, icon, size, active }) => (
          <li key={name}>
            <a
              href="#produtos"
              className={`categories__link${active ? ' categories__link--active' : ''}`}
              aria-current={active ? 'true' : undefined}
            >
              <span className="categories__box">
                <img src={`/icons/${icon}.svg`} alt="" width={size} height={size} />
              </span>
              <span className="categories__label">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}