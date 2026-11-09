import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons/Icons';
import './Footer.scss';

const COLUMNS = [
  {
    title: 'Institucional',
    font: 'secondary',
    links: ['Sobre nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    font: 'secondary',
    links: ['Suporte', 'Fale conosco', 'Perguntas frequentes'],
  },
  {
    title: 'Termos',
    font: 'primary',
    links: ['Termos e condições', 'Política de privacidade', 'Política de cookies'],
  },
];

const SOCIALS = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'LinkedIn', Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__inner">
          <div className="footer__brand">
            <img className="footer__logo" src="/images/logo.svg" alt="Econverse" />
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="footer__socials">
              {SOCIALS.map(({ name, Icon }) => (
                <li key={name}>
                  <a href="#" aria-label={name}>
                    <Icon width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="footer__divider" aria-hidden="true" />

          <nav className="footer__nav" aria-label="Rodapé">
            {COLUMNS.map(({ title, font, links }) => (
              <div key={title} className={`footer__column footer__column--${font}`}>
                <h2 className="footer__column-title">{title}</h2>
                <ul className="footer__links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Econverse. Todos os direitos reservados.
      </p>
    </footer>
  );
}