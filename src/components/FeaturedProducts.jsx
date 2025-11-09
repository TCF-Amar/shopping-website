import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function FeaturedProducts({productsData}) {
    const featuredProducts = useMemo(() => {
        return productsData.slice(0, 8);
    }, []);

  return (
      <section className="py-16">
          <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Featured Products
                  </h2>
                  <Link
                      to="/products"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                  >
                      View All →
                  </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
      </section>
  )
}

export default FeaturedProducts