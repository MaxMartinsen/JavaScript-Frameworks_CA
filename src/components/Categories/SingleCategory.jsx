import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Products from '../Products/Products';
import Poster from './../Poster/Poster';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function SingleCategory() {
  const { category } = useParams();
  const products = useSelector((state) => state.products.items);

  let filteredProducts = products;

  if (category.toLowerCase() !== 'all') {
    filteredProducts = products.filter(
      (product) =>
        product.tags.includes(category) || product.category === category
    );
  }

  const title =
    category === 'all' ? 'All Products' : capitalizeFirstLetter(category);

  return (
    <>
      <Poster />
      <Products products={filteredProducts} title={title} />
    </>
  );
}

export default SingleCategory;
