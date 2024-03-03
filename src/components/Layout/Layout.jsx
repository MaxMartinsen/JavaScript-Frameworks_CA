import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from '../../features/categories/categoriesSlice';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

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
