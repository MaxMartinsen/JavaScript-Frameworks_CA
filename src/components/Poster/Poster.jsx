import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Home.module.css';
import posterImg from '../../images/poster.png';

function Poster() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/product/5aa2e388-8dfb-4d70-b031-3732d8c6771a');
  };

  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024</div>
          <h1 className={styles.head}>Bluetooth Speaker</h1>
          <button className={styles.button} onClick={handleNavigate}>
            Shop Now
          </button>{' '}
        </div>
        <div className={styles.image}>
          <img src={posterImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Poster;
