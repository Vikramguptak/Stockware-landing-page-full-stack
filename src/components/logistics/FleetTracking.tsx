import React from 'react';
import { FaMapMarkedAlt, FaTruck } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const FleetTracking: React.FC = () => {
  const { fleetLocations, loading, error } = useLogistics();

  if (loading) return <div>Loading fleet tracking...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaMapMarkedAlt className="mr-2" /> Fleet Tracking
      </h2>
      <p className="mb-4">Active Vehicles: {fleetLocations.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fleetLocations.map((location, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <FaTruck className="text-2xl mb-2 text-blue-500" />
            <p>Vehicle ID: {location.id}</p>
            <p>Lat: {location.lat.toFixed(4)}</p>
            <p>Lng: {location.lng.toFixed(4)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetTracking;