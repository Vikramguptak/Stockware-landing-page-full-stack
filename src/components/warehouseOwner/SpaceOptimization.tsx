import React from 'react';
import { FaCubes } from 'react-icons/fa';

const SpaceOptimization: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaCubes className="mr-2" /> Space Optimization
      </h2>
      <div className="space-y-2">
        <p>Optimization Score: 85%</p>
        <p>Suggested Improvements: 3</p>
        <p>Potential Space Gain: 500 sqft</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Suggestions
      </button>
    </div>
  );
};

export default SpaceOptimization;