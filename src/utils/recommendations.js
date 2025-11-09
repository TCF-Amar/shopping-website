

export const getRecommendations = (product, allProducts, limit = 4) => {
  if (!product || !allProducts || allProducts.length === 0) {
    return [];
  }

  // Score each product based on similarity
  const scoredProducts = allProducts
    .filter(p => p.id !== product.id) // Exclude current product
    .map(p => ({
      ...p,
      score: calculateSimilarityScore(product, p),
    }))
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, limit);

  return scoredProducts;
};


const calculateSimilarityScore = (product1, product2) => {
  let score = 0;

  // Category match (highest priority)
  if (product1.category === product2.category) {
    score += 50;
  }

  // Tag overlap
  const tags1 = new Set(product1.tags || []);
  const tags2 = new Set(product2.tags || []);
  const commonTags = [...tags1].filter(tag => tags2.has(tag));
  score += commonTags.length * 10;

  // Price range similarity (within 30%)
  const priceDiff = Math.abs(product1.price - product2.price) / product1.price;
  if (priceDiff < 0.3) {
    score += 20;
  } else if (priceDiff < 0.5) {
    score += 10;
  }

  // Rating similarity
  const ratingDiff = Math.abs(product1.rating - product2.rating);
  if (ratingDiff < 0.5) {
    score += 10;
  }

  return score;
};


export const getBatchRecommendations = (products, allProducts, limit = 4) => {
  if (!products || products.length === 0) {
    // Return random popular products
    return getRandomProducts(allProducts, limit);
  }

  // Aggregate tags and categories from all products
  const allTags = new Set();
  const allCategories = new Set();

  products.forEach(product => {
    if (product.tags) {
      product.tags.forEach(tag => allTags.add(tag));
    }
    if (product.category) {
      allCategories.add(product.category);
    }
  });

  // Score products based on aggregated data
  const productIds = new Set(products.map(p => p.id));
  const scoredProducts = allProducts
    .filter(p => !productIds.has(p.id))
    .map(p => ({
      ...p,
      score: calculateBatchScore(p, allTags, allCategories),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scoredProducts;
};

/**
 * Calculate score for batch recommendations
 */
const calculateBatchScore = (product, tags, categories) => {
  let score = 0;

  // Category match
  if (categories.has(product.category)) {
    score += 30;
  }

  // Tag matches
  if (product.tags) {
    product.tags.forEach(tag => {
      if (tags.has(tag)) {
        score += 10;
      }
    });
  }

  // Boost for high-rated products
  score += product.rating * 5;

  return score;
};


export const getRandomProducts = (allProducts, limit = 4) => {
  if (!allProducts || allProducts.length === 0) {
    return [];
  }

  // Prioritize high-rated products
  const sortedByRating = [...allProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, Math.min(20, allProducts.length)); // Top 20 rated products

  // Shuffle and return
  const shuffled = sortedByRating.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};


export const getTrendingProducts = (allProducts, limit = 8) => {
  if (!allProducts || allProducts.length === 0) {
    return [];
  }

  // Combine rating and low stock (simulating popularity)
  return [...allProducts]
    .sort((a, b) => {
      const scoreA = a.rating * 10 + (100 - a.stock) * 0.1;
      const scoreB = b.rating * 10 + (100 - b.stock) * 0.1;
      return scoreB - scoreA;
    })
    .slice(0, limit);
};


