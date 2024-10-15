import React from 'react';
import { FaMapMarkedAlt, FaTruck, FaUserCheck } from 'react-icons/fa';

const GeofencingAccess: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Geofencing for Automated Warehouse Access</h2>
      <p className="mb-4">Enhance security and streamline entry processes with our advanced geofencing technology.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaMapMarkedAlt className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Geofence Zones</h3>
            <p>Customizable entry areas</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaTruck className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Automated Entry</h3>
            <p>Touchless vehicle access</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaUserCheck className="text-3xl text-red-500 mr-4" />
          <div>
            <h3 className="font-semibold">Personnel Tracking</h3>
            <p>Enhanced security measures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeofencingAccess;