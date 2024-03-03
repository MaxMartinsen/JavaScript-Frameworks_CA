export const tagUtils = (products) => {
  const allTags = products.flatMap((product) => product.tags);

  const categoryMap = {
    shoes: 'fashion',
    bags: 'fashion',
    jewelry: 'fashion',
    'skin care': 'beauty',
    perfume: 'beauty',
    shampoo: 'beauty',
    audio: 'electronics',
    peripherals: 'electronics',
    gaming: 'electronics',
    computers: 'electronics',
    wearables: 'electronics',
    watch: 'electronics',
    headphones: 'electronics',
  };

  const categories = allTags.map((tag) => categoryMap[tag] || tag);

  return Array.from(new Set(categories)).sort();
};
