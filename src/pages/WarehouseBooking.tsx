import React, { useState } from 'react';
import WarehouseSearch from '../components/WarehouseSearch';

const WarehouseBooking: React.FC = () => {
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: 'Warehouse A', location: 'Mumbai', space: 10000, price: 5000 },
    { id: 2, name: 'Warehouse B', location: 'Delhi', space: 15000, price: 7500 },
    { id: 3, name: 'Warehouse C', location: 'Bangalore', space: 8000, price: 4000 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book a Warehouse</h1>
      <WarehouseSearch />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Available Warehouses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warehouses.map((warehouse) => (
            <div key={warehouse.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{warehouse.name}</h3>
              <p className="text-gray-600 mb-2">Location: {warehouse.location}</p>
              <p className="text-gray-600 mb-2">Space: {warehouse.space} sqft</p>
              <p className="text-gray-600 mb-4">Price: ₹{warehouse.price}/month</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarehouseBooking;