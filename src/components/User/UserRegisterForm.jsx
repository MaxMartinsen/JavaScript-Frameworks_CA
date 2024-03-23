import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

function UserRegisterForm({ closeForm, changeFormType }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const avatarObject = values.avatar
      ? {
          url: values.avatar,
          alt: 'User avatar',
        }
      : undefined;

    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
      avatar: avatarObject,
    };
    dispatch(createUser(userData));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sign Up</div>

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
            type="name"
            placeholder="Username"
            name="name"
            value={values.name}
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

        <div className={styles.group}>
          <input
            type="avatar"
            placeholder="Avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.link} onClick={() => changeFormType('login')}>
          I already have an account
        </div>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
}

export default UserRegisterForm;
