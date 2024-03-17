import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.CATEGORIES} element={<SingleCategory />} />
    </Routes>
  );
};

export default AppRoutes;
