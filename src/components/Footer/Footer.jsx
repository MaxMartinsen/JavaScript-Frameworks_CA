import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import LOGO from '/UniqOne_logo.svg';

import styles from '../../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {' '}
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="Online-store logo UniqOne" />
          </Link>
        </div>
        <div className={styles.rights}>
          Developed by{' '}
          <a href="https://maxmartinsen.pw/" target="_blank" rel="noreferrer">
            Max Martinsen
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`/sprite.svg#instagram`} />
            </svg>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`/sprite.svg#facebook`} />
            </svg>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <svg className="icon">
              <use xlinkHref={`/sprite.svg#youtube`} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
