import React from 'react';
import { FaBolt, FaRobot, FaSatelliteDish, FaBoxes, FaShieldAlt } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaBolt className="text-4xl text-blue-500" />}
          title="Real-Time Booking"
          description="Find, book, and confirm warehouse space instantly through our platform, eliminating the long wait times of traditional logistics."
        />
        <FeatureCard
          icon={<FaRobot className="text-4xl text-green-500" />}
          title="AI-Powered Recommendations"
          description="Our AI algorithms assess your inventory needs and suggest optimal warehouse solutions, saving time and boosting efficiency."
        />
        <FeatureCard
          icon={<FaSatelliteDish className="text-4xl text-yellow-500" />}
          title="IoT Integration"
          description="Stay informed about your goods in storage through IoT-enabled monitoring, providing real-time data on conditions such as temperature and humidity."
        />
        <FeatureCard
          icon={<FaBoxes className="text-4xl text-red-500" />}
          title="Inventory Management"
          description="Stockware's platform integrates seamlessly with your existing systems, providing a unified dashboard to track stock levels, location, and shipping progress."
        />
        <FeatureCard
          icon={<FaShieldAlt className="text-4xl text-purple-500" />}
          title="Enhanced Security"
          description="We use advanced encryption and multi-layer authentication for account protection, while warehouses are equipped with 24/7 surveillance and security monitoring."
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-4">{title}</h2>
    </div>
    <p>{description}</p>
  </div>
);

export default Features;