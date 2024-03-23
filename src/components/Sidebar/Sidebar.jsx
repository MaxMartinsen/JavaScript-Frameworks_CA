import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Sidebar.module.css';

function Sidebar() {
  const categories = useSelector((state) => state.products.categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
              to={`/categories/all`}
            >
              All
            </NavLink>
          </li>
          {categories.map((category, index) => (
            <li className={styles.link} key={index}>
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
        <NavLink
          to={ROUTES.CONTACT}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          Contact
        </NavLink>
      </div>
    </section>
  );
}

export default Sidebar;
