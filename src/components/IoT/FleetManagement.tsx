import React from 'react';
import { FaTruck, FaRoute, FaGasPump } from 'react-icons/fa';

const FleetManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">IoT-Driven Fleet Management</h2>
      <div className="flex items-center mb-4">
        <FaTruck className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Active Vehicles</p>
          <p>18 / 25</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaRoute className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Optimized Routes</p>
          <p>12 routes updated</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaGasPump className="text-3xl text-red-500 mr-4" />
        <div>
          <p className="font-semibold">Fuel Efficiency</p>
          <p>+8% this week</p>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;