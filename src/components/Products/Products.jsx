import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Products.module.css';

function Products({ title, products, initialDisplay = 4 }) {
  const [displayAmount, setDisplayAmount] = useState(initialDisplay);

  const seeMoreHandler = () => {
    setDisplayAmount((prevDisplayAmount) => prevDisplayAmount + initialDisplay);
  };

  const isEnd = displayAmount >= products.length;

  return (
    <section className={styles.products}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {products.slice(0, displayAmount).map((product) => {
          const isDiscounted =
            product.discountedPrice && product.discountedPrice < product.price;
          return (
            <Link
              to={`/product/${product.id}`}
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
                <div className={styles.purchases}>Rating: {product.rating}</div>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    {isDiscounted ? (
                      <>
                        <div className={styles.price}>
                          {product.discountedPrice} Nok
                        </div>
                        <div className={styles.oldPrice}>
                          {product.price} Nok
                        </div>
                      </>
                    ) : (
                      <div className={styles.price}>{product.price} Nok</div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {!isEnd && (
        <div className={styles.more}>
          <button onClick={seeMoreHandler}>See more</button>
        </div>
      )}
    </section>
  );
}

export default Products;
