import { Link } from 'react-router-dom';
import styles from '../../styles/Products.module.css';

function Products({ title, products, amount, style = {} }) {
  const displayAmount = amount || products.length;
  const list = products.slice(0, displayAmount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.image?.url})` }}
            ></div>
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.cat}>{product.tags?.[0]}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>
                    {product.discountedPrice || product.price}
                  </div>
                  {product.discountedPrice && (
                    <div className={styles.oldPrice}>{product.price}</div>
                  )}
                </div>
                <div className={styles.purchases}>Rating: {product.rating}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
