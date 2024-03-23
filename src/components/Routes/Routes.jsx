import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';
import Cart from '../Cart/Cart';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CATEGORIES} element={<SingleCategory />} />
        <Route path={ROUTES.CART} element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
