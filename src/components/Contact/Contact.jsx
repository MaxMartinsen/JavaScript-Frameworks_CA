import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import { validateLength } from '../../utils/validateLength';
import { validateEmail } from '../../utils/validateEmail';

import styles from '../../styles/Contact.module.css';

function Contact() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    title: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    if (currentUser) {
      setValues((prevValues) => ({
        ...prevValues,
        name: currentUser.name,
        email: currentUser.email,
      }));
    }
  }, [currentUser]);

  useEffect(() => {
    if (submissionStatus === 'Form submitted successfully!') {
      console.log('Form Data:', values);
    }
  }, [submissionStatus, values, navigate]);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      ...(validateLength(values.name, 3) || {
        name: 'Name must be at least 3 characters.',
      }),
      ...(validateLength(values.title, 3) || {
        title: 'Subject must be at least 3 characters.',
      }),
      ...(validateEmail(values.email) || {
        email: 'Email must be a valid email address.',
      }),
      ...(validateLength(values.body, 3) || {
        body: 'Body must be at least 3 characters.',
      }),
    };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissionStatus('');
    const isFormValid = validateForm();
    setSubmissionStatus(
      isFormValid
        ? 'Form submitted successfully!'
        : 'Validation errors occurred.'
    );
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
        {errors.name && <p className={styles.error}>{errors.name}</p>}

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
        {errors.email && <p className={styles.error}>{errors.email}</p>}

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
        {errors.title && <p className={styles.error}>{errors.title}</p>}

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
        {errors.body && <p className={styles.error}>{errors.body}</p>}
        {submissionStatus !== 'Form submitted successfully!' && (
          <button className={styles.submit} type="submit">
            Submit
          </button>
        )}
        {submissionStatus && (
          <p className={styles.submissionStatus}>{submissionStatus}</p>
        )}
        <div className={styles.bottom}>
          {submissionStatus === 'Form submitted successfully!' && (
            <Link to={ROUTES.HOME} className={styles.home}>
              Return to Home
            </Link>
          )}
        </div>
      </form>
    </section>
  );
}

export default Contact;
