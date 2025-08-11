import React from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaCheckCircle, FaTruck } from 'react-icons/fa';

const orders = [
  {
    id: 'ORDER-12345',
    date: '2023-10-26',
    status: 'Delivered',
    total: 250.00,
    items: [
      { name: 'Classic T-Shirt', quantity: 2 },
      { name: 'Slim Fit Jeans', quantity: 1 },
    ],
  },
  {
    id: 'ORDER-67890',
    date: '2023-10-20',
    status: 'Shipped',
    total: 150.00,
    items: [
      { name: 'Leather Belt', quantity: 1 },
    ],
  },
];

const Orders = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <FaCheckCircle className="text-green-500" />;
      case 'Shipped':
        return <FaTruck className="text-blue-500" />;
      default:
        return <FaBox className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{order.id}</h2>
                  <p className="text-gray-500">Placed on {order.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(order.status)}
                  <span className="font-semibold">{order.status}</span>
                </div>
              </div>
              <div>
                {order.items.map((item, index) => (
                  <p key={index} className="text-gray-700">{item.name} (x{item.quantity})</p>
                ))}
              </div>
              <div className="text-right mt-4">
                <p className="text-lg font-bold">Total: ₹{order.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Orders;
