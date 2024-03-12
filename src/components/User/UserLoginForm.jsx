import { useState } from 'react';
import styles from '../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';

function UserLoginForm({ closeForm, changeFormType }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(userData));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Login</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Email@stud.noroff.no"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.link} onClick={() => changeFormType('signup')}>
          Create an account
        </div>
        <button className={styles.submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default UserLoginForm;
