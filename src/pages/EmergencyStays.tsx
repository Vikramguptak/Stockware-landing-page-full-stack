import React, { useState } from 'react';
import { FaBolt, FaCalendarAlt, FaWarehouse } from 'react-icons/fa';

const EmergencyStays: React.FC = () => {
  const [location, setLocation] = useState('');
  const [space, setSpace] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Emergency stay requested:', { location, space, duration });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Emergency Stays</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
        <p className="font-bold">Emergency Service</p>
        <p>This service is for businesses in urgent need of temporary storage space.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaBolt className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Instant Availability</h2>
          <p>Find emergency warehouse space in real-time through our platform.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaCalendarAlt className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Flexible Solutions</h2>
          <p>Whether for a day or a month, Stockware offers flexible short-term storage solutions.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaWarehouse className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Speed & Convenience</h2>
          <p>Get rapid access to storage during peak periods or unexpected surges in demand.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Request Emergency Storage</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter city or area"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="space" className="block text-gray-700 text-sm font-bold mb-2">Space Needed (in sqft)</label>
          <input
            type="number"
            id="space"
            value={space}
            onChange={(e) => setSpace(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter required space"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">Duration (in days)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter duration"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Request Emergency Storage
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmergencyStays;