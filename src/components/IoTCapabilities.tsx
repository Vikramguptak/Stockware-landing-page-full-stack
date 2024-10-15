import React from 'react';
import { FaSatelliteDish, FaThermometerHalf, FaBoxes, FaNetworkWired } from 'react-icons/fa';

const IoTCapabilities: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">IoT-Connected Warehousing</h2>
        <p className="text-lg text-center mb-12">
          Experience the power of IoT in warehouse management. Our platform integrates cutting-edge IoT devices 
          to provide real-time monitoring and control of your warehouse conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaSatelliteDish className="text-5xl mb-4 text-blue-500" />}
            title="Real-Time Monitoring"
            description="Get instant updates on warehouse conditions and inventory levels."
          />
          <FeatureCard
            icon={<FaThermometerHalf className="text-5xl mb-4 text-green-500" />}
            title="Environmental Control"
            description="Monitor and adjust temperature, humidity, and other environmental factors."
          />
          <FeatureCard
            icon={<FaBoxes className="text-5xl mb-4 text-yellow-500" />}
            title="Automated Inventory Tracking"
            description="Use IoT sensors for real-time inventory management and tracking."
          />
          <FeatureCard
            icon={<FaNetworkWired className="text-5xl mb-4 text-red-500" />}
            title="Connected Logistics"
            description="Seamlessly integrate with IoT-enabled transportation and logistics systems."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default IoTCapabilities;