import styles from '../../styles/Reviews.module.css';

function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className={styles.reviews}>
      <h2>Reviews</h2>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li className={styles.item} key={review.id}>
            <div className={styles.title}>
              <h3>{review.username}</h3>
              <span>({review.rating}/5)</span>
            </div>
            <div className={styles.text}>{review.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
