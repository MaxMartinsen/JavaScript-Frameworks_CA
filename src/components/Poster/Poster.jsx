import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import posterImg from '../../images/poster.png';

import styles from '../../styles/Poster.module.css';

function Poster() {
  const navigate = useNavigate();
  const posterRef = useRef(null);
  const [fontSize, setFontSize] = useState('44px');

  const handleNavigate = () => {
    navigate('/product/5aa2e388-8dfb-4d70-b031-3732d8c6771a');
  };

  useEffect(() => {
    const adjustFontSize = () => {
      const posterWidth = posterRef.current.offsetWidth;
      const minPosterWidth = 400;
      const maxPosterWidth = 1600;
      const minFontSize = 44;
      const maxFontSize = 200;

      const clampedPosterWidth = Math.min(
        Math.max(posterWidth, minPosterWidth),
        maxPosterWidth
      );
      const scale =
        (clampedPosterWidth - minPosterWidth) /
        (maxPosterWidth - minPosterWidth);

      const newFontSize = minFontSize + (maxFontSize - minFontSize) * scale;

      setFontSize(`${newFontSize}px`);
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => window.removeEventListener('resize', adjustFontSize);
  }, []);

  return (
    <section className={styles.poster} ref={posterRef}>
      <div className={styles.title} style={{ fontSize: fontSize }}>
        BIG SALE 20%
      </div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024</div>
          <h1 className={styles.head}>Bluetooth Speaker</h1>
          <button className={styles.button} onClick={handleNavigate}>
            Shop Now
          </button>
        </div>
        <div className={styles.image}>
          <img src={posterImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Poster;
