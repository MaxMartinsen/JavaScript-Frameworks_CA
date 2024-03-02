import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
