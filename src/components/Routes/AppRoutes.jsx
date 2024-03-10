import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
