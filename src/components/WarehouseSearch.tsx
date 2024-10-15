import React, { useState } from 'react';
import { FaWarehouse, FaCalendarAlt, FaBoxes } from 'react-icons/fa';

const WarehouseSearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [spaceNeeded, setSpaceNeeded] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the search logic
    console.log('Searching for warehouses:', { location, checkIn, checkOut, spaceNeeded });
  };

  return (
    <div className="bg-white py-8 shadow-md">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <div className="relative">
              <FaWarehouse className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Where"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                placeholder="Check In"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                placeholder="Check Out"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2">
            <div className="relative">
              <FaBoxes className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Space Needed (sqft)"
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                value={spaceNeeded}
                onChange={(e) => setSpaceNeeded(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Search Warehouses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WarehouseSearch;