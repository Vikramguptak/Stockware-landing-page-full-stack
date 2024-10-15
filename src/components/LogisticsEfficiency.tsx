import React from 'react';
import { FaEye, FaCog } from 'react-icons/fa';

const LogisticsEfficiency: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stop Paying for Logistics Inefficiencies</h2>
        <p className="text-center text-xl mb-12">
          Stockware removes freight blind spots to give shippers the transparency, speed, and visibility they deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EfficiencyCard
            title="Transparency"
            beforeText="Lack of Transparency"
            beforeDescription="Markups are inflated by 20-40%, with carrier rates rarely shown."
            afterText="Transparent Pricing"
            afterDescription="See our markup and actual carrier costs, saving you up to 40%."
            icon={<FaEye className="text-4xl text-blue-500" />}
          />
          <EfficiencyCard
            title="Efficiency"
            beforeText="Manual Processes"
            beforeDescription="Inefficient operations cost shippers billions in avoidable expenses each year."
            afterText="Automated Efficiency"
            afterDescription="AI handles routine tasks to save you money & time on every shipment."
            icon={<FaCog className="text-4xl text-green-500" />}
          />
        </div>
      </div>
    </div>
  );
};

const EfficiencyCard: React.FC<{
  title: string;
  beforeText: string;
  beforeDescription: string;
  afterText: string;
  afterDescription: string;
  icon: React.ReactNode;
}> = ({ title, beforeText, beforeDescription, afterText, afterDescription, icon }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-semibold ml-4">{title}</h3>
    </div>
    <div className="mb-4 bg-red-100 p-4 rounded-lg">
      <h4 className="font-semibold text-red-600 mb-2">BEFORE STOCKWARE</h4>
      <p className="font-semibold mb-1">{beforeText}</p>
      <p className="text-gray-700">{beforeDescription}</p>
    </div>
    <div className="bg-green-100 p-4 rounded-lg">
      <h4 className="font-semibold text-green-600 mb-2">WITH STOCKWARE</h4>
      <p className="font-semibold mb-1">{afterText}</p>
      <p className="text-gray-700">{afterDescription}</p>
    </div>
  </div>
);

export default LogisticsEfficiency;