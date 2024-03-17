import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Header.module.css';
import LOGO from '/UniqOne_logo.svg';
import AVATAR from '../../images/avatar_icon-default.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';

function Header() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: 'Guest', avatar: AVATAR });

  const { data: products, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (currentUser && currentUser.avatar && currentUser.avatar.url) {
      setValues({
        name: currentUser.name || 'Guest',
        avatar: currentUser.avatar.url,
      });
    }
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredProducts = searchValue
    ? products?.data?.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Online-store logo UniqOne" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          ></div>
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? 'Loading...'
                : filteredProducts.length === 0
                  ? 'No results.'
                  : filteredProducts.map(({ title, image, id }) => (
                      <Link
                        to={`/product/${id}`}
                        key={id}
                        className={styles.item}
                        onClick={() => setSearchValue('')}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${image.url})` }}
                        ></div>
                        <div className={styles.title}>{title}</div>
                      </Link>
                    ))}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref={`/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
