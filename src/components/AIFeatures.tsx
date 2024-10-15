import React from 'react';
import { FaRobot, FaChartLine, FaWarehouse, FaTruck } from 'react-icons/fa';

const AIFeatures: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Warehousing in Real Time</h2>
        <p className="text-lg text-center mb-12">
          At Stockware, AI is at the core of our real-time warehouse booking platform. Our AI system predicts your 
          storage needs and optimizes space to prevent underutilization, ensuring optimal inventory management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaRobot className="text-5xl mb-4 text-blue-500" />}
            title="AI-driven Demand Forecasting"
            description="Predict future storage needs with advanced machine learning algorithms."
          />
          <FeatureCard
            icon={<FaChartLine className="text-5xl mb-4 text-green-500" />}
            title="Automated Inventory Management"
            description="Let AI handle your inventory tracking and optimization."
          />
          <FeatureCard
            icon={<FaWarehouse className="text-5xl mb-4 text-yellow-500" />}
            title="Predictive Maintenance"
            description="AI-powered systems predict and prevent equipment failures."
          />
          <FeatureCard
            icon={<FaTruck className="text-5xl mb-4 text-red-500" />}
            title="Optimized Operations"
            description="Streamline your logistics with AI-driven insights and automation."
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

export default AIFeatures;