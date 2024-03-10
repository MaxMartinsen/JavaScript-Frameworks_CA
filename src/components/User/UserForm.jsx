import { useSelector, useDispatch } from 'react-redux';
import UserRegisterForm from './UserRegisterForm';

import styles from '../../styles/User.module.css';
import { toggleForm } from '../../features/user/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={() => dispatch(toggleForm(false))}
      ></div>
      <UserRegisterForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
};

export default UserForm;
