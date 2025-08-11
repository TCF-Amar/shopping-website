import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlistItem } from '../features/wishlist/wishlistSlice';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your wishlist is empty.</p>
          <Link to="/collections" className="text-blue-500 hover:underline mt-2 inline-block">Explore products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <Link to={`/product/${item.id}`} className="block">
                <img src={item.images[0]} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{item.title}</h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-800 font-bold">₹{item.finalPrice}</p>
                  <button onClick={() => dispatch(toggleWishlistItem(item))} className="text-red-500">
                    <FaHeart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
