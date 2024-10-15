import React from 'react';
import { FaWarehouse, FaBoxes, FaUsers } from 'react-icons/fa';

const LayoutOptimization: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Automated Warehouse Layout Optimization</h2>
      <p className="mb-4">Our AI continuously analyzes warehouse activity to suggest optimal layouts, improving efficiency and reducing costs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaWarehouse className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Space Utilization</h3>
            <p>Maximize storage capacity</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaBoxes className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Inventory Flow</h3>
            <p>Optimize item placement</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaUsers className="text-3xl text-yellow-500 mr-4" />
          <div>
            <h3 className="font-semibold">Labor Efficiency</h3>
            <p>Reduce walking time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutOptimization;