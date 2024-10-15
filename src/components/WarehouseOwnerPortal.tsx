import React from 'react';
import { FaWarehouse, FaCalendarAlt, FaChartLine, FaCog } from 'react-icons/fa';

const WarehouseOwnerPortal: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Warehouse Owner Portal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaWarehouse className="text-5xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">List Your Space</h3>
            <p className="text-gray-600">Easily list and manage your warehouse spaces on our platform.</p>
          </div>
          <div className="text-center">
            <FaCalendarAlt className="text-5xl mb-4 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Manage Bookings</h3>
            <p className="text-gray-600">View and manage all your warehouse space bookings in one place.</p>
          </div>
          <div className="text-center">
            <FaChartLine className="text-5xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Revenue Tracking</h3>
            <p className="text-gray-600">Monitor your earnings and analyze revenue trends over time.</p>
          </div>
          <div className="text-center">
            <FaCog className="text-5xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Dynamic Pricing</h3>
            <p className="text-gray-600">Set and adjust prices based on demand and seasonality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseOwnerPortal;