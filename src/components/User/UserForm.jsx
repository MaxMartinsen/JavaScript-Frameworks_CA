import { useSelector } from 'react-redux';
import UserSignUpForm from './UserSignupForm';

const UserForm = () => {
  const { showForm } = useSelector(({ user }) => user);
  return showForm ? <UserSignUpForm /> : <></>;
};

export default UserForm;
