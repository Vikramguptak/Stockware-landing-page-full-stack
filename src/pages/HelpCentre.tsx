import React from 'react';
import { FaBook, FaUserCog, FaTools } from 'react-icons/fa';

const HelpCentre: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Help Centre</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaBook className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">How to Book a Warehouse</h2>
          <ul className="list-disc list-inside">
            <li>Search for available space</li>
            <li>Select your preferred warehouse</li>
            <li>Choose booking dates</li>
            <li>Confirm and pay</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaUserCog className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Account Management</h2>
          <ul className="list-disc list-inside">
            <li>Update profile information</li>
            <li>Change password</li>
            <li>Manage payment methods</li>
            <li>View booking history</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaTools className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Technical Troubleshooting</h2>
          <ul className="list-disc list-inside">
            <li>Login issues</li>
            <li>Payment problems</li>
            <li>App or website errors</li>
            <li>IoT sensor connectivity</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Popular Articles</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">How to get started with Stockware</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Understanding our pricing model</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Interpreting IoT sensor data</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Cancellation and refund policies</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Security measures for your inventory</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HelpCentre;