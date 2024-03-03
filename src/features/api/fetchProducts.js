import { BASE_URL } from '../../utils/constants';

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/online-shop`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
