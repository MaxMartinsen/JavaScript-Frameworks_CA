import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';

function SingleProduct() {
  const { id } = useParams();
  const { data: response, isLoading, error } = useGetProductQuery(id);

  const product = response?.data;

  console.log(product);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{product?.title}</h2>
    </div>
  );
}

export default SingleProduct;
