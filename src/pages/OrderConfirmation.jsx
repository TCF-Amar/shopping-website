import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{orderNumber}</p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            A confirmation email has been sent to your email address with order details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
            <Link to="/profile" className="btn-secondary">
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
