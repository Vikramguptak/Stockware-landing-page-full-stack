import React from 'react';
import { FaThermometerHalf, FaTint, FaWind } from 'react-icons/fa';

const EnvironmentalMonitoring: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Environmental Monitoring</h2>
      <div className="flex items-center mb-4">
        <FaThermometerHalf className="text-3xl text-red-500 mr-4" />
        <div>
          <p className="font-semibold">Temperature</p>
          <p>22°C</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaTint className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Humidity</p>
          <p>45%</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaWind className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Air Quality</p>
          <p>Good</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalMonitoring;