import { useDispatch, useSelector } from 'react-redux';

import { sumBy } from '../../utils/sumBy';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../features/user/userSlice';

import styles from '../../styles/Cart.module.css';

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);
  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, tags, image, discountedPrice, id, quantity } =
                item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${image.url})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{tags}</div>
                  </div>

                  <div className={styles.price}>{discountedPrice} Nok</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use xlinkHref={`/sprite.svg#minus`} />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use xlinkHref={`/sprite.svg#plus`} />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.total}>
                    {(discountedPrice * quantity).toFixed(2)} Nok
                  </div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use xlinkHref={`/sprite.svg#close`} />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE: {''}
              <span>
                {sumBy(
                  cart.map(
                    ({ quantity, discountedPrice }) =>
                      quantity * discountedPrice
                  )
                ).toFixed(2)}{' '}
                Nok
              </span>
            </div>
            <button className={styles.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
