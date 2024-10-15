import React from 'react';
import { FaRobot, FaSatelliteDish, FaShieldAlt } from 'react-icons/fa';

const NewFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaRobot className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Enhanced AI Algorithms</h2>
          <p>Our AI is now faster and more accurate in predicting warehouse needs and availability.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaSatelliteDish className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expanded IoT Integration</h2>
          <p>We've added more sensor types for detailed monitoring of warehouse conditions.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaShieldAlt className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security Upgrades</h2>
          <p>New security features include advanced encryption protocols and warehouse verification processes.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Mobile App Redesign</h3>
            <p>We've completely revamped our mobile app for a smoother, more intuitive user experience.</p>
          </li>
          <li>
            <h3 className="font-semibold">Multi-Language Support</h3>
            <p>Stockware is now available in 10 different languages to better serve our global user base.</p>
          </li>
          <li>
            <h3 className="font-semibold">Advanced Analytics Dashboard</h3>
            <p>Get deeper insights into your warehouse usage with our new analytics tools.</p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p className="mb-4">We're always working on new features to improve your experience. Here's a sneak peek at what's coming:</p>
        <ul className="list-disc list-inside">
          <li>Blockchain-based smart contracts for secure transactions</li>
          <li>AI-powered inventory optimization suggestions</li>
          <li>Virtual reality warehouse tours</li>
        </ul>
      </div>
    </div>
  );
};

export default NewFeatures;