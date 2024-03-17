import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  filteredByPrice,
} from '../../features/products/productsSlice';

import { trendingUtils } from './../../utils/trendingUtils';
import { promoteUtils } from './../../utils/promoteUtils';

import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Promoted from '../Products/Promoted';

function Home() {
  const dispatch = useDispatch();
  const { items: products, filtered } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }

    dispatch(filteredByPrice(1000));
  }, [dispatch, products.length]);

  const trendingProducts = trendingUtils(products).slice(0, 5);
  const promotedProducts = promoteUtils(products).slice(-5);

  return (
    <>
      <Poster />
      <Products title="Trending" products={trendingProducts} amount={5} />
      <Promoted title="Worth seeing" products={promotedProducts} amount={5} />
      <Banner />
      <Products title="Less than 1000 Nok" products={filtered} amount={5} />
    </>
  );
}

export default Home;
