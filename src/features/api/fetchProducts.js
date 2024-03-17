import { BASE_URL, ONLINE_SHOP } from '../../utils/constants';

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}${ONLINE_SHOP}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
