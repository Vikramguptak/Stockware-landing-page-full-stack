import React from 'react';
import { FaVrCardboard, FaStreetView, FaRuler } from 'react-icons/fa';

const VirtualTours: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">AR/VR Warehouse Tours</h2>
      <p className="mb-4">Explore warehouse spaces virtually with our cutting-edge AR/VR technology before making a booking.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaVrCardboard className="text-3xl text-purple-500 mr-4" />
          <div>
            <h3 className="font-semibold">Immersive Experience</h3>
            <p>360° warehouse views</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaStreetView className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Interactive Tours</h3>
            <p>Explore layouts remotely</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaRuler className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Space Planning</h3>
            <p>Visualize inventory placement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;