import React from 'react';
import { FaGavel, FaWarehouse, FaChartLine } from 'react-icons/fa';

const SpaceAuctions: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Real-Time Warehouse Space Auctions</h2>
      <p className="mb-4">Bid on available warehouse spaces during high-demand periods with our dynamic auction system.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaGavel className="text-3xl text-red-500 mr-4" />
          <div>
            <h3 className="font-semibold">Live Bidding</h3>
            <p>Real-time space auctions</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaWarehouse className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Dynamic Pricing</h3>
            <p>Demand-based rates</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaChartLine className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">AI Insights</h3>
            <p>Optimal bidding strategies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceAuctions;