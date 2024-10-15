import React from 'react';
import { FaCubes, FaWeightHanging, FaRobot } from 'react-icons/fa';

const SmartShelving: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Smart Shelving Systems</h2>
      <div className="flex items-center mb-4">
        <FaCubes className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Shelf Utilization</p>
          <p>78%</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaWeightHanging className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">Weight Distribution</p>
          <p>Optimal</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaRobot className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Automated Adjustments</p>
          <p>15 in last hour</p>
        </div>
      </div>
    </div>
  );
};

export default SmartShelving;