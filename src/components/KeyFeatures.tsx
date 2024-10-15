import React from 'react';
import { FaRobot, FaWarehouse, FaShieldAlt, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-4xl mb-4 text-blue-500" />,
    title: 'AI-Powered Insights',
    description: 'Maximize warehouse efficiency with intelligent forecasting and real-time analytics.'
  },
  {
    icon: <FaWarehouse className="text-4xl mb-4 text-green-500" />,
    title: 'IoT-Enabled Monitoring',
    description: 'Get real-time tracking of warehouse conditions through advanced IoT sensors.'
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-4 text-yellow-500" />,
    title: 'Enhanced Security',
    description: 'Cutting-edge AI security protocols with 24/7 monitoring and automated access control.'
  },
  {
    icon: <FaBolt className="text-4xl mb-4 text-red-500" />,
    title: 'Seamless Logistics',
    description: 'Integrate with IoT-enabled transportation partners for live shipment updates.'
  }
];

const KeyFeatures: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why AI and IoT Make Stockware the Best Choice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;