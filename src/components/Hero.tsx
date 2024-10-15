import React from 'react';
import { FaWarehouse, FaTruck, FaBoxes, FaCreditCard } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          AI-Driven Real-Time Warehouse Booking
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Intelligent Solutions for Instant Warehouse Space, Enhanced Security, and IoT Connectivity
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button icon={<FaWarehouse />} text="Warehouse Owners" />
          <Button icon={<FaTruck />} text="Logistics Providers" />
          <Button icon={<FaBoxes />} text="Shippers" />
          <Button icon={<FaCreditCard />} text="Payments" />
        </div>
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 mr-4 transition duration-300">
            Find AI-Powered Warehouses Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Get a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

const Button: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <button className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
    {icon}
    <span className="ml-2">{text}</span>
  </button>
);

export default Hero;