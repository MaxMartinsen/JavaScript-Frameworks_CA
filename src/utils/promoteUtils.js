/**
 * Selects products with the lowest rating to promote their sale.
 * @param {Array} products - Array of product objects.
 * @param {number} limit - Maximum number of products to return.
 * @returns {Array} - Sorted array of products with the lowest rating.
 */
export const promoteUtils = (products, limit = 5) => {
  const sortedByLowestRating = [...products].sort(
    (a, b) => a.rating - b.rating
  );
  return sortedByLowestRating.slice(0, limit);
};
