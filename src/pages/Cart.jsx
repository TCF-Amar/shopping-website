import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, clearCart } from '../features/cart/cartSlice';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/collections" className="text-blue-500 hover:underline mt-2 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-4">₹{item.price * item.quantity}</p>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h2>
            <button onClick={handleClearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
              Clear Cart
            </button>
          </div>
           <div className="flex justify-end mt-4">
                <Link to="/checkout" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">
                    Checkout
                </Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
