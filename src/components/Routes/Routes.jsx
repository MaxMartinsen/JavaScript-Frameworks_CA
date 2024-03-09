import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SingleProduct from '../Products/SingleProduct';
import { ROUTES } from '../../utils/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
