import styles from '../../styles/CheckoutSuccess.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

function CheckoutSuccess() {
  return (
    <section className={styles.success}>
      <h1 className={styles.title}>Checkout Successful!</h1>
      <p className={styles.message}>Thank you for your purchase.</p>
      <Link to={ROUTES.HOME} className={styles.home}>
        Return to Home
      </Link>
    </section>
  );
}

export default CheckoutSuccess;
