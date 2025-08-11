import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBoxOpen, FaHeart, FaCog } from 'react-icons/fa';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  };

  const stats = [
    { icon: <FaBoxOpen />, label: 'Orders', value: 12 },
    { icon: <FaHeart />, label: 'Wishlist', value: 5 },
    { icon: <FaCog />, label: 'Settings', value: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex items-center space-x-6 mb-6">
          <img src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600 flex items-center gap-2 mt-1"><FaEnvelope /> {user.email}</p>
            <p className="text-gray-600 flex items-center gap-2"><FaMapMarkerAlt /> {user.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center border-t pt-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="text-3xl text-blue-500 mx-auto mb-2">{stat.icon}</div>
              <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
