import React from 'react';
import { FaBoxes, FaPallet, FaWarehouse } from 'react-icons/fa';

const AssetTracking: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Real-Time Asset Tracking</h2>
      <div className="flex items-center mb-4">
        <FaBoxes className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Tracked Items</p>
          <p>1,234 / 1,500</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaPallet className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Pallets in Transit</p>
          <p>45</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaWarehouse className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">Warehouse Utilization</p>
          <p>82%</p>
        </div>
      </div>
    </div>
  );
};

export default AssetTracking;