import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const DynamicPricing: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaDollarSign className="mr-2" /> Dynamic Pricing
      </h2>
      <div className="space-y-2">
        <p>Current Rate: $2.50/sqft</p>
        <p>Suggested Rate: $2.75/sqft</p>
        <p>Peak Season Adjustment: +10%</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Adjust Pricing
      </button>
    </div>
  );
};

export default DynamicPricing;