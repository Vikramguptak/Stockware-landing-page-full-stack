import React from 'react';
import { FaWarehouse, FaTruck, FaChartLine, FaRobot, FaEye, FaNetworkWired } from 'react-icons/fa';

const features = [
  {
    icon: <FaWarehouse className="text-4xl mb-4 text-blue-500" />,
    title: 'Transparent Pricing',
    description: 'Cost-plus pricing with clear markups, ensuring fair, predictable rates below industry averages.'
  },
  {
    icon: <FaTruck className="text-4xl mb-4 text-green-500" />,
    title: 'Human Partnerships',
    description: 'AI handles repetitive tasks so our team can focus on servicing your business with care.'
  },
  {
    icon: <FaRobot className="text-4xl mb-4 text-yellow-500" />,
    title: 'AI Innovation',
    description: 'Benefit from future technology without navigating it alone.'
  },
  {
    icon: <FaEye className="text-4xl mb-4 text-purple-500" />,
    title: 'Consignee Visibility',
    description: 'Real-time tracking and status updates to delight customers.'
  },
  {
    icon: <FaNetworkWired className="text-4xl mb-4 text-red-500" />,
    title: 'Carrier Network',
    description: '40,000+ North American carriers vetted for performance, not price.'
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-indigo-500" />,
    title: 'Efficiency Boost',
    description: 'AI handles routine tasks to save you money & time on every shipment.'
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shippers choose Stockware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;