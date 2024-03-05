import { useSelector } from 'react-redux';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';

function Home() {
  const products = useSelector((state) => state.products.items);
  return (
    <>
      <Poster />
      <Products title="Trending" products={products} amount={5} />
    </>
  );
}

export default Home;
