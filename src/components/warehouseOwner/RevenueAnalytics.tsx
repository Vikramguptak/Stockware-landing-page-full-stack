import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const RevenueAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaChartLine className="mr-2" /> Revenue Analytics
      </h2>
      <div className="space-y-2">
        <p>Monthly Revenue: $25,000</p>
        <p>YTD Revenue: $150,000</p>
        <p>Projected Annual: $300,000</p>
      </div>
      {/* Add a simple chart or graph here */}
    </div>
  );
};

export default RevenueAnalytics;