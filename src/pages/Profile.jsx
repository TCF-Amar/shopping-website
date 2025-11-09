import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useStore();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const mockOrders = [
    {
      id: 'ORD-12345678',
      date: '2024-11-05',
      total: 299.99,
      status: 'Delivered',
      items: 3,
    },
    {
      id: 'ORD-87654321',
      date: '2024-11-01',
      total: 159.99,
      status: 'In Transit',
      items: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="btn-secondary w-full"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order History</h2>

                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{order.id}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 dark:text-gray-400">{order.items} items</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input type="text" value={user?.name} className="input-field" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input type="email" value={user?.email} className="input-field" readOnly />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a demo profile. In production, you can edit these fields and integrate with Firebase Auth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
