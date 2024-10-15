import React from 'react';
import { FaWarehouse } from 'react-icons/fa';

const SpaceMonitoring: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaWarehouse className="mr-2" /> Space Monitoring
      </h2>
      <div className="space-y-2">
        <p>Total Space: 10,000 sqft</p>
        <p>Occupied: 7,500 sqft (75%)</p>
        <p>Available: 2,500 sqft (25%)</p>
      </div>
      <div className="mt-4 bg-gray-200 rounded-full h-4">
        <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
      </div>
    </div>
  );
};

export default SpaceMonitoring;