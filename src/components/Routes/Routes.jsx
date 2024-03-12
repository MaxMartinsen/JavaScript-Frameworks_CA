import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import Home from '../Home/Home';
import SingleProduct from '../Products/SingleProduct';
import Contact from '../Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
