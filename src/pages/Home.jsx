import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { getTrendingProducts } from '../utils/recommendations';
import useStore from '../store/useStore';
import { useMemo } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  const { recentlyViewed } = useStore();






  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Categories Section */}

      <CategoriesSection />
      {/* Featured Products */}
     
      <FeaturedProducts productsData={productsData} />

      {/* Trending Products */}
     <TrendingProducts productsData={productsData} />
      {/* Benefits Section */}
      <BenefitsSection />
    </div>
  );
};

export default Home;
