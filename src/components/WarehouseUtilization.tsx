import React from 'react';
import { FaChartBar, FaCubes, FaChartPie, FaArrowsAlt } from 'react-icons/fa';

const WarehouseUtilization: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Maximize Space & Minimize Costs</h2>
        <p className="text-lg text-center mb-12">
          Using AI-driven analytics, Stockware helps businesses maximize their warehouse utilization 
          by identifying underutilized space and recommending optimization strategies. Our platform 
          ensures that you only pay for the space you need, while increasing operational efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaChartBar className="text-5xl mb-4 text-blue-500" />}
            title="Automated Space Allocation"
            description="AI helps manage warehouse layouts and space optimization."
          />
          <FeatureCard
            icon={<FaCubes className="text-5xl mb-4 text-green-500" />}
            title="Warehouse Utilization Reports"
            description="Get real-time analytics on how well your storage is being used."
          />
          <FeatureCard
            icon={<FaChartPie className="text-5xl mb-4 text-yellow-500" />}
            title="Predictive Space Needs"
            description="AI forecasts your storage demands, preventing under or over-booking."
          />
          <FeatureCard
            icon={<FaArrowsAlt className="text-5xl mb-4 text-red-500" />}
            title="Dynamic Space Reallocation"
            description="Automatically adjust storage allocation based on real-time needs."
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

export default WarehouseUtilization;