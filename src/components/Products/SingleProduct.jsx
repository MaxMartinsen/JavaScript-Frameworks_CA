import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useGetProductQuery } from '../../features/api/apiSlice';
import { fetchRelatedProducts } from '../../features/products/productsSlice';

import Product from './Product';
import Products from './Products';

import { ROUTES } from '../../utils/routes';

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: response, isLoading, error } = useGetProductQuery({ id });
  const { related } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      navigate(ROUTES.HOME);
    }
  }, [error, navigate]);

  useEffect(() => {
    if (response?.data) {
      const currentTags = response.data.tags;
      dispatch(fetchRelatedProducts(currentTags));
    }
  }, [dispatch, response?.data]);

  if (isLoading) return <div>Loader ...</div>;

  return response?.data ? (
    <>
      <Product {...response.data} />
      <Products products={related} amount={4} title="Related Products" />
    </>
  ) : (
    <div>Product not found</div>
  );
}

export default SingleProduct;
