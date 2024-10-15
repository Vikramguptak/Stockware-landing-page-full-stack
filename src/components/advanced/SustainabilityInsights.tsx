import React from 'react';
import { FaLeaf, FaBolt, FaTruck } from 'react-icons/fa';

const SustainabilityInsights: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">AI-Driven Sustainability Insights</h2>
      <p className="mb-4">Analyze and reduce the carbon footprint of warehouse operations with AI-powered suggestions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaLeaf className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Carbon Footprint</h3>
            <p>Track and reduce emissions</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaBolt className="text-3xl text-yellow-500 mr-4" />
          <div>
            <h3 className="font-semibold">Energy Optimization</h3>
            <p>Improve energy efficiency</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaTruck className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Eco-friendly Logistics</h3>
            <p>Optimize delivery routes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityInsights;