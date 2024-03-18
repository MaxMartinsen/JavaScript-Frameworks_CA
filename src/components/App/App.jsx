import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import AppRoutes from '../Routes/Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

export default App;
