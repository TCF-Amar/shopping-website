import React from 'react'
import { Link } from 'react-router-dom';

function CategoriesSection() {
    const categories = [
        { name: 'Men', image: 'https://picsum.photos/seed/men/400/500', link: '/products?category=Men' },
        { name: 'Women', image: 'https://picsum.photos/seed/women/400/500', link: '/products?category=Women' },
        { name: 'Electronics', image: 'https://picsum.photos/seed/electronics/400/500', link: '/products?category=Electronics' },
        { name: 'Shoes', image: 'https://picsum.photos/seed/shoes/400/500', link: '/products?category=Shoes' },
    ];
  return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                  Shop by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {categories.map((category) => (
                      <Link
                          key={category.name}
                          to={category.link}
                          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                          <div className="aspect-[4/5] relative">
                              <img
                                  src={category.image}
                                  alt={category.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default CategoriesSection