import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { fetchProducts } from '../../features/products/productsSlice'; // Ensure you have this action
import Product from './Product';
import Products from './Products';
import { ROUTES } from '../../utils/routes';

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: response, isLoading, error } = useGetProductQuery({ id });
  const { items: allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      navigate(ROUTES.HOME);
    }
  }, [error, navigate]);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length]);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (response?.data) {
      const currentTags = response.data.tags;
      const related = allProducts.filter((product) =>
        product.tags.some((tag) => currentTags.includes(tag))
      );
      setRelatedProducts(
        related.length > 1
          ? related.filter((product) => product.id !== id)
          : allProducts
      );
    }
  }, [response, allProducts, id]);

  if (isLoading) return <div>Loading...</div>;

  return response?.data ? (
    <>
      <Product {...response.data} />
      <Products
        products={relatedProducts}
        amount={5}
        title="Related Products"
      />
    </>
  ) : (
    <div>Product not found</div>
  );
}

export default SingleProduct;
