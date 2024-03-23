import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from '../../styles/Contact.module.css';

function Contact() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [values, setValues] = useState({
    name: '',
    title: '',
    email: '',
    body: '',
  });

  useEffect(() => {
    if (currentUser) {
      setValues((prevValues) => ({
        ...prevValues,
        name: currentUser.name,
        email: currentUser.email,
      }));
    }
  }, [currentUser]);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', values);
  };

  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            placeholder="Name Surname"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
            disabled={!!currentUser}
          />
        </div>

        <div className={styles.group}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
            disabled={!!currentUser}
          />
        </div>

        <div className={styles.group}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={values.title}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <textarea
            placeholder="Description"
            name="body"
            value={values.body}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
