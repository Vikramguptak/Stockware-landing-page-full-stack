import React from 'react';
import { FaClock, FaChartLine, FaMoneyBillWave, FaSatelliteDish } from 'react-icons/fa';

const ForShippers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">For Shippers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaClock className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Real-Time Access to Storage</h2>
          <p>Whether you need temporary overflow space or a long-term solution, Stockware provides instant access to available storage facilities.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaChartLine className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Speed & Efficiency</h2>
          <p>Our AI system quickly identifies the most suitable storage locations based on your needs, ensuring fast booking and minimal downtime.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaMoneyBillWave className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Cost-Effective Solutions</h2>
          <p>Compare different warehouse facilities, assess costs upfront, and choose the best option based on your budget.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaSatelliteDish className="text-4xl text-red-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Advanced IoT Monitoring</h2>
          <p>Keep an eye on your inventory through real-time sensors tracking everything from temperature control to movement alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default ForShippers;