import React from 'react';
import { FaBoxOpen, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';

const InventoryManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">IoT-Enhanced Inventory Management</h2>
      <div className="flex items-center mb-4">
        <FaBoxOpen className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Current Stock</p>
          <p>10,567 items</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaExclamationTriangle className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">Low Stock Alerts</p>
          <p>3 items</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaChartLine className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Inventory Turnover Rate</p>
          <p>4.5 times/year</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;