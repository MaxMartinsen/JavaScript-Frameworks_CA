import { useNavigate } from 'react-router-dom';

import bannerImg from '../../images/banner.png';

import styles from '../../styles/Banner.module.css';

function Banner() {
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate('/categories/all');
  };

  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          Happy Easter<span>SALE</span>
        </p>
        <button className={styles.more} onClick={handleSeeAllClick}>
          See all
        </button>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={styles.discount}>
          save up to <span>50%</span>
        </p>
      </div>
    </section>
  );
}

export default Banner;
