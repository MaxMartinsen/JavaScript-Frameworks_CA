import { useState } from 'react';
import styles from '../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';

function UserRegisterForm({ closeForm }) {
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

    // If an avatar URL is provided, create the avatar object with a default alt text.
    // Adjust this part according to your form fields and requirements.
    const avatarObject = values.avatar
      ? {
          url: values.avatar,
          alt: 'User avatar', // Default alt text
        }
      : undefined;

    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
      avatar: avatarObject, // Include the avatar object here
      // Add any additional fields as per your form and API requirements
    };

    // Dispatch the action to create a user
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
        <div className={styles.link}>I already have an account</div>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
}

export default UserRegisterForm;
