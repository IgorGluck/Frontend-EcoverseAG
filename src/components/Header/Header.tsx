import { CartIcon, HeartIcon, SearchIcon, UserIcon } from '../Icons/Icons';
import './Header.scss';

const BENEFITS = [
  { text: 'Compre em até', highlight: '12x sem juros' },
  { text: 'Frete grátis acima de', highlight: 'R$ 299' },
  { text: 'Retire na loja em', highlight: '2 horas' },
];

const MENU = [
  'Todas as categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__benefits">
        <ul className="header__benefits-list container">
          {BENEFITS.map(({ text, highlight }) => (
            <li key={highlight}>
              {text} <strong>{highlight}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="header__main">
        <div className="header__main-inner container">
          <a href="/" aria-label="Econverse, página inicial">
            <img className="header__logo" src="/images/logo.svg" alt="Econverse" />
          </a>

          <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <label className="visually-hidden" htmlFor="search">
              Buscar produtos
            </label>
            <input
              id="search"
              type="search"
              className="header__search-input"
              placeholder="O que você está buscando?"
            />
            <button type="submit" className="header__search-button" aria-label="Buscar">
              <SearchIcon width={28} height={28} />
            </button>
          </form>

          <div className="header__actions">
            <button type="button" aria-label="Minha conta">
              <UserIcon width={28} height={28} />
            </button>
            <button type="button" aria-label="Favoritos">
              <HeartIcon width={28} height={28} />
            </button>
            <button type="button" aria-label="Carrinho">
              <CartIcon width={28} height={28} />
            </button>
          </div>
        </div>
      </div>

      <nav className="header__nav" aria-label="Menu principal">
        <ul className="header__nav-list container">
          {MENU.map((item) => (
            <li key={item}>
              <a
                href="#produtos"
                className={`header__nav-link${item === 'Ofertas do dia' ? ' header__nav-link--highlight' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}