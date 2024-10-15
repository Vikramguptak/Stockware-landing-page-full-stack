import React from 'react';
import { FaWarehouse, FaTruck, FaChartBar, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaWarehouse className="text-4xl mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-2">Warehouse Utilization</h2>
          <p className="text-3xl font-bold">85%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaTruck className="text-4xl mb-4 text-green-500" />
          <h2 className="text-xl font-semibold mb-2">Active Shipments</h2>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaChartBar className="text-4xl mb-4 text-yellow-500" />
          <h2 className="text-xl font-semibold mb-2">Monthly Bookings</h2>
          <p className="text-3xl font-bold">152</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaMoneyBillWave className="text-4xl mb-4 text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$24,500</p>
        </div>
      </div>
      {/* Add more dashboard widgets and charts here */}
    </div>
  );
};

export default Dashboard;