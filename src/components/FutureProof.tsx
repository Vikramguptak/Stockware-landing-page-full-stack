import React from 'react';
import { FaMicrochip, FaCloudUploadAlt, FaCogs, FaRocket } from 'react-icons/fa';

const FutureProof: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Future-Proof Your Operations with AI & IoT</h2>
        <p className="text-lg text-center mb-12">
          Our platform is built with scalability in mind. With our integrated AI and IoT technologies, 
          your warehouse operations will remain cutting-edge, ensuring that you stay competitive in an 
          ever-changing market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaMicrochip className="text-5xl mb-4 text-blue-500" />}
            title="Advanced IoT Sensors"
            description="Monitor environmental factors in real-time with cutting-edge sensors."
          />
          <FeatureCard
            icon={<FaCloudUploadAlt className="text-5xl mb-4 text-green-500" />}
            title="Cloud-Based Infrastructure"
            description="Access your data and controls from anywhere, anytime."
          />
          <FeatureCard
            icon={<FaCogs className="text-5xl mb-4 text-yellow-500" />}
            title="AI-Driven Automation"
            description="Automated systems for predictive maintenance and optimized operations."
          />
          <FeatureCard
            icon={<FaRocket className="text-5xl mb-4 text-red-500" />}
            title="Scalable Solutions"
            description="Our platform grows with your business, adapting to your changing needs."
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

export default FutureProof;