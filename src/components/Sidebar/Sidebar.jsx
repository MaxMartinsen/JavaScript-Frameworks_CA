import { useSelector } from 'react-redux';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const categories = useSelector((state) => state.products.categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {categories.map((category, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                to={`/categories/${category}`}
              >
                {category}
              </NavLink>
            </li>
          ))}
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
