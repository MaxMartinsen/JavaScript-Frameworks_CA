import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SingleProduct from '../Products/SingleProduct';
// Import other components as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      {/* Define other routes here */}
    </Routes>
  );
};

export default AppRoutes;
