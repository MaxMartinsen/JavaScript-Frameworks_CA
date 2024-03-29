import { Link } from 'react-router-dom';

import styles from '../../styles/Promoted.module.css';

function Promoted({ title, products, amount }) {
  const displayAmount = amount || products.length;
  const list = products.slice(0, displayAmount);
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, title, image }) => (
          <Link to={`/product/${id}`} key={id} className={styles.item}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image?.url})` }}
            ></div>
            <h3 className={styles.title}>{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Promoted;
