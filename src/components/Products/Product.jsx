import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../utils/routes';

import { addItemToCart } from '../../features/user/userSlice';

import styles from '../../styles/Product.module.css';

function Product(item) {
  const { title, price, discountedPrice, image, description, rating } = item;
  const dispatch = useDispatch();
  const isDiscounted = discountedPrice && discountedPrice < price;
  const addToCart = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{
            backgroundImage: `url(${image?.url || 'defaultImagePath'})`,
          }}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.prices}>
          {isDiscounted ? (
            <>
              <div className={styles.price}>{discountedPrice} Nok</div>
              <div className={styles.oldPrice}>{price} Nok</div>
            </>
          ) : (
            <div className={styles.price}>{price} Nok</div>
          )}
        </div>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button onClick={addToCart} className={styles.add}>
            Add to cart
          </button>
          <button className={styles.favourite}>Add to Favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>Rating: {rating}</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
