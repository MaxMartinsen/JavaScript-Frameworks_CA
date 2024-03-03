import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer} target="_blank">
        <a href="/help" className={styles.link}>
          Help
        </a>
        <a
          href="/help"
          className={styles.link}
          style={{ textDecoration: 'underline' }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
