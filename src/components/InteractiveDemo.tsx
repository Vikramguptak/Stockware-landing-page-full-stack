import React, { useState } from 'react';
import { FaWarehouse, FaSearch, FaCheck } from 'react-icons/fa';

const InteractiveDemo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [space, setSpace] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience Stockware in Action</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-4">Find Your Perfect Warehouse Space</h3>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter city or pin code"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="space" className="block text-gray-700 mb-2">Space Needed (sqft)</label>
                <input
                  type="number"
                  id="space"
                  value={space}
                  onChange={(e) => setSpace(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter space needed"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="duration" className="block text-gray-700 mb-2">Duration (months)</label>
                <input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter duration in months"
                  required
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                <FaSearch className="inline mr-2" /> Search Warehouses
              </button>
            </form>
          )}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Results</h3>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <FaCheck className="inline text-green-600 mr-2" /> We've found 3 warehouses matching your criteria!
              </div>
              <div className="space-y-4">
                <WarehouseResult
                  name="Optimal Storage Solutions"
                  location="Mumbai, Maharashtra"
                  space={parseInt(space)}
                  price={2.5}
                />
                <WarehouseResult
                  name="SecureSpace Warehousing"
                  location="Delhi, NCR"
                  space={parseInt(space)}
                  price={2.3}
                />
                <WarehouseResult
                  name="SmartStock Facilities"
                  location="Bangalore, Karnataka"
                  space={parseInt(space)}
                  price={2.1}
                />
              </div>
              <button
                onClick={() => setStep(1)}
                className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Back to Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WarehouseResult: React.FC<{ name: string; location: string; space: number; price: number }> = ({ name, location, space, price }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h4 className="font-semibold">{name}</h4>
    <p className="text-gray-600">{location}</p>
    <p>Space: {space} sqft</p>
    <p>Price: ₹{price.toFixed(2)}/sqft/month</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
      <FaWarehouse className="inline mr-2" /> Book Now
    </button>
  </div>
);

export default InteractiveDemo;