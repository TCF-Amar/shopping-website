import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from '../component/Item.jsx';
import { HiOutlineFunnel, HiOutlineXMark } from 'react-icons/hi2';

function Collections() {
  const products = useSelector((state) => state.products.products);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [filterShow, setFilterShow] = useState(false);
  const [genders, setGenders] = useState([]);
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allGenders, setAllGenders] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const searchQuery = searchTerm;
    
    setAllCategory([...new Set(products.flatMap((product) => [
      ...(product.category || []), 
      ...(product.tags || [])
    ].filter(Boolean)))]);
    
    setAllGenders([...new Set(products.map((product) => product.gender).filter(Boolean))]);
    
    if (searchQuery) {
      const searchResults = products.filter((product) => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          product.name?.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm) ||
          (product.category || []).some(cat => cat?.toLowerCase().includes(searchTerm)) ||
          (product.tags || []).some(tag => tag?.toLowerCase().includes(searchTerm))
        );
      });
      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts(products);
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [products, searchTerm]);

  const handleSetGenders = (e) => {
    const value = e.target.value;
    setGenders((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSetCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setGenders([]);
    setCategory([]);
    setFilterShow(false);
    setShowAllCategories(false);
    setFilteredProducts(products);
  };

  const applyFilter = () => {
    let filtered = [...products];
    const searchQuery = searchTerm;

    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filtered = filtered.filter((product) => {
        return (
          product.name?.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm) ||
          (product.category || []).some(cat => cat?.toLowerCase().includes(searchTerm)) ||
          (product.tags || []).some(tag => tag?.toLowerCase().includes(searchTerm))
        );
      });
    }

    if (genders.length > 0) {
      filtered = filtered.filter((product) =>
        product.gender && genders.some((element) => 
          product.gender.toLowerCase() === element.toLowerCase()
        )
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.some((cat) => 
          (product.category || []).includes(cat) || 
          (product.tags || []).includes(cat)
        )
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [genders, category, searchTerm]);

  return (
    <motion.div
      className="min-h-screen mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {searchTerm 
                ? `Search Results for "${searchTerm}"`
                : 'Collections'}
            </h1>
            <button
              onClick={() => setFilterShow(!filterShow)}
              className="md:hidden flex items-center gap-2 text-gray-600"
            >
              {filterShow ? <HiOutlineXMark size={20} /> : <HiOutlineFunnel size={20} />}
            </button>
          </div>
          {searchTerm && (
            <p className="text-gray-600">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8 ">
          <AnimatePresence>
            <motion.div
              className={`md:w-64 bg- h-fit rounded-lg shadow-sm p-4 ${filterShow ? 'absolute inset-0 top-34 backdrop-blur-xl z-50 md:relative' : 'hidden md:block'
                }`}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center  text-xl uppercase font-semibold  py-2" onClick={() => setFilterShow(!filterShow)}>
                <p>Filters</p>

              </div>

              <div className={`space-y-4 ${filterShow ? "block" : "hidden"} md:block z-10 bg- left-0 right-0 p-2 md:p-0`}>

                <div className="border border-gray-400  p-4 ">
                  <label className="uppercase text-sm font-semibold">Gender</label>
                  <div className="mt-2 space-y-2 px-2">
                    {allGenders.map((item) => (
                      <div key={item} className="flex items-center gap-2 capitalize">
                        <input
                          type="checkbox"
                          id={item}
                          value={item}
                          className="accent-blue-600"
                          onChange={handleSetGenders}
                          checked={genders.includes(item)}
                        />
                        <label htmlFor={item} className="text-gray-700">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-400 p-4 ">
                  <label className="uppercase text-sm font-semibold">Category</label>

                  <div className="mt-2 space-y-2 px-2">
                    {(showAllCategories ? allCategory : allCategory.slice(0, 5)).map((item) => (
                      <div key={item} className="flex items-center gap-2 capitalize">
                        <input
                          type="checkbox"
                          id={item}
                          value={item}
                          className="accent-blue-600"
                          onChange={handleSetCategory}
                          checked={category.includes(item)}
                        />

                        <label htmlFor={item} className="text-gray-700">{item}</label>
                      </div>
                    ))}
                  </div>

                  {allCategory.length > 5 && (
                    <button
                      onClick={() => setShowAllCategories((prev) => !prev)}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      {showAllCategories ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
                <div className='flex  items-center justify-between mt-4'>

                  <button className='border border-gray-400 py-1 px-2 capitalize rounded-2xl' onClick={clearAllFilters}>clear filters</button>

                  <button className='border md:hidden border-gray-400 py-1 px-2 capitalize rounded-2xl' onClick={() => setFilterShow(false)}>Apply Filter</button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
                  
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-blue-200 h-64 rounded-lg mb-2"></div>
                    <div className="bg-blue-200 h-4 w-3/4 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                  >
                    <Link to={`/product/${product.id}`}>
                      <Item product={product} />
                    </Link>
                  </motion.div>
                ))}
                  {
                    filteredProducts.length === 0 &&
                    <div className="col-span-4 text-center  text-gray-500">No products found</div>
                  }
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Collections;
