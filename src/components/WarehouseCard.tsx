import React from 'react';
import { FaWarehouse } from 'react-icons/fa';

interface Warehouse {
  id: string;
  name: string;
  location: string;
  space: number;
  price: number;
}

interface WarehouseCardProps {
  warehouse: Warehouse;
  onBookNow: (warehouse: Warehouse) => void;
}

const WarehouseCard: React.FC<WarehouseCardProps> = ({ warehouse, onBookNow }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaWarehouse className="text-3xl text-blue-500 mr-4" />
        <h3 className="text-xl font-semibold">{warehouse.name}</h3>
      </div>
      <p className="text-gray-600 mb-2">{warehouse.location}</p>
      <p className="mb-2">Space: {warehouse.space} sqft</p>
      <p className="mb-4">Price: ₹{warehouse.price}/sqft/month</p>
      <button
        onClick={() => onBookNow(warehouse)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Book Now
      </button>
    </div>
  );
};

export default WarehouseCard;