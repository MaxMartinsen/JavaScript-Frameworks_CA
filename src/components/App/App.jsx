import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import AppRoutes from '../Routes/Routes';
import UserForm from '../User/UserForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
