import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../styles/Products.module.css';

function Products() {
  const products = useSelector((state) => state.products.items);

  // Removed undefined 'style' and 'title' references for this example
  return (
    <section className={styles.products}>
      {/* If you still want a title, ensure it's passed as a prop or defined somewhere */}
      <div className={styles.list}>
        {products.map((product) => (
          <Link
            to={`/categories/${product.tags[0]}`}
            key={product.id}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.image.url})` }}
            ></div>
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{product.title}</h3>
            </div>
            <div className={styles.cat}>{product.tags[0]}</div>
            <div className={styles.info}>
              <div className={styles.prices}>
                <div className={styles.price}>
                  {product.discountedPrice} Nok
                </div>
                <div className={styles.oldPrice}>{product.price} Nok</div>
              </div>
              <div className={styles.purchases}>Rating: {product.rating}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
