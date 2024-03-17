import { useSelector, useDispatch } from 'react-redux';
import UserRegisterForm from './UserRegisterForm';

import styles from '../../styles/User.module.css';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const changeFormType = (type) => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={() => dispatch(toggleForm(false))}
      ></div>
      {formType === 'signup' ? (
        <UserRegisterForm
          changeFormType={changeFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm changeFormType={changeFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
