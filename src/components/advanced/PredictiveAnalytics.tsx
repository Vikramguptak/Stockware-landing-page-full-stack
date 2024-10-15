import React from 'react';
import { FaChartLine, FaCloudSun, FaGlobeAmericas } from 'react-icons/fa';

const PredictiveAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Advanced Predictive Analytics</h2>
      <p className="mb-4">Our cutting-edge predictive analytics go beyond simple demand forecasting. We integrate external data to provide comprehensive insights.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaChartLine className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Economic Indicators</h3>
            <p>Market trends analysis</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaCloudSun className="text-3xl text-yellow-500 mr-4" />
          <div>
            <h3 className="font-semibold">Weather Patterns</h3>
            <p>Impact on logistics</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaGlobeAmericas className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Global Events</h3>
            <p>Supply chain disruptions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;