import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to a payment gateway
    alert('Checkout functionality is not implemented yet.');
  };

  return (
    <div className="min-h-screen  p-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shipping Details Form */}
          <div className=" rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleCheckout}>
              <div className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Full Name" className="p-2 border rounded" required />
                <input type="email" placeholder="Email" className="p-2 border rounded" required />
                <input type="text" placeholder="Address" className="p-2 border rounded" required />
                <input type="text" placeholder="City" className="p-2 border rounded" required />
                <input type="text" placeholder="Postal Code" className="p-2 border rounded" required />
                <input type="text" placeholder="Country" className="p-2 border rounded" required />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className=" rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 hover:bg-green-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
