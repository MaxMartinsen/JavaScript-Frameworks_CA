/**
 * Selects trending products based on rating and the number of reviews.
 * Products are considered more "trending" if they have a higher rating and more reviews.
 * @param {Array} products - Array of product objects.
 * @param {number} limit - Maximum number of products to return.
 * @returns {Array} - Filtered and sorted array of trending products.
 */
export const trendingUtils = (products, limit = 5) => {
  const filtered = products.filter(
    (product) => product.reviews.length > 0 && product.rating >= 4
  );
  const sorted = filtered.sort((a, b) => {
    if (a.rating === b.rating) {
      return b.reviews.length - a.reviews.length;
    }
    return b.rating - a.rating;
  });
  return sorted.slice(0, limit);
};
