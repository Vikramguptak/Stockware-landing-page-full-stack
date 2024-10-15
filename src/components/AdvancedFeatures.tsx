import React from 'react';
import { FaChartLine, FaWarehouse, FaCubes, FaLeaf, FaGavel, FaVrCardboard, FaMicrophone, FaMapMarkedAlt } from 'react-icons/fa';

const AdvancedFeatures: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaChartLine className="text-4xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Advanced Predictive Analytics</h3>
            <p className="text-gray-600 text-center">Forecast demand with external data integration.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaWarehouse className="text-4xl mb-4 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Automated Layout Optimization</h3>
            <p className="text-gray-600 text-center">AI-driven warehouse layout suggestions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCubes className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Blockchain Transactions</h3>
            <p className="text-gray-600 text-center">Secure, tamper-proof logistics contracts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaLeaf className="text-4xl mb-4 text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Sustainability Insights</h3>
            <p className="text-gray-600 text-center">Reduce carbon footprint with AI suggestions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaGavel className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Real-Time Space Auctions</h3>
            <p className="text-gray-600 text-center">Bid on warehouse space during peak times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaVrCardboard className="text-4xl mb-4 text-purple-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">AR/VR Warehouse Tours</h3>
            <p className="text-gray-600 text-center">Explore spaces virtually before booking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaMicrophone className="text-4xl mb-4 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Voice-Activated Commands</h3>
            <p className="text-gray-600 text-center">Hands-free warehouse operations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkedAlt className="text-4xl mb-4 text-green-700 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Geofencing Access</h3>
            <p className="text-gray-600 text-center">Automated entry for approved personnel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;