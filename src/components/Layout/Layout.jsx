import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import UserForm from '../User/UserForm';

function Layout() {
  return (
    <>
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
