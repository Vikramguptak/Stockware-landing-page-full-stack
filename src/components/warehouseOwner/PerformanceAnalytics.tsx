import React from 'react';
import { FaChartBar } from 'react-icons/fa';

const PerformanceAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaChartBar className="mr-2" /> Performance Analytics
      </h2>
      <div className="space-y-2">
        <p>Occupancy Rate: 85%</p>
        <p>Avg. Booking Duration: 45 days</p>
        <p>Customer Satisfaction: 4.8/5</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Detailed Report
      </button>
    </div>
  );
};

export default PerformanceAnalytics;