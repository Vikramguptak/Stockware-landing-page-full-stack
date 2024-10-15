import React from 'react';
import { FaBolt, FaClock, FaRobot, FaChartLine } from 'react-icons/fa';

const SpeedEfficiency: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fast, Efficient, and On-Demand</h2>
        <p className="text-lg text-center mb-12">
          With Stockware, you can say goodbye to slow, manual processes. Our platform is designed to 
          save you time and boost productivity. Book storage instantly, optimize your space in real-time, 
          and use our AI features to streamline operations. Time is money, and Stockware saves both.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaBolt className="text-5xl mb-4 text-blue-500" />}
            title="Instant Bookings"
            description="Reserve space in seconds without delays."
          />
          <FeatureCard
            icon={<FaClock className="text-5xl mb-4 text-green-500" />}
            title="Time-Saving Automation"
            description="Automate routine tasks like booking and inventory tracking."
          />
          <FeatureCard
            icon={<FaRobot className="text-5xl mb-4 text-yellow-500" />}
            title="AI-Powered Efficiency"
            description="Let AI handle complex logistics and optimization tasks."
          />
          <FeatureCard
            icon={<FaChartLine className="text-5xl mb-4 text-red-500" />}
            title="Real-Time Performance Tracking"
            description="Monitor and improve your warehouse efficiency in real-time."
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

export default SpeedEfficiency;