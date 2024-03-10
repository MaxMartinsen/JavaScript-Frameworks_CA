import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Header.module.css';
import LOGO from '/UniqOne_logo.svg';
import AVATAR from '../../images/avatar_icon-default.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';

function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

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
            style={{ backgroundImage: `url(${AVATAR})` }}
          ></div>
          <div className={styles.username}>Guest</div>
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
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
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
