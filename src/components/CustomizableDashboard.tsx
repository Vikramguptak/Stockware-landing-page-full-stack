import React from 'react';
import { FaChartBar, FaWarehouse, FaTruck, FaMoneyBillWave } from 'react-icons/fa';

const CustomizableDashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customizable Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaChartBar className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
            <p className="text-gray-600">Track key metrics and visualize your business performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaWarehouse className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Warehouse Utilization</h3>
            <p className="text-gray-600">Monitor space usage and optimize your warehouse capacity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaTruck className="text-4xl mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Logistics Overview</h3>
            <p className="text-gray-600">Get real-time updates on shipments and deliveries.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaMoneyBillWave className="text-4xl mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Financial Insights</h3>
            <p className="text-gray-600">Track revenue, expenses, and financial performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableDashboard;