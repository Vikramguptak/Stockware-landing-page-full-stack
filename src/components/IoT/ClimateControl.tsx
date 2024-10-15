import React from 'react';
import { FaTemperatureHigh, FaFan, FaSun } from 'react-icons/fa';

const ClimateControl: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Automated Climate Control</h2>
      <div className="flex items-center mb-4">
        <FaTemperatureHigh className="text-3xl text-red-500 mr-4" />
        <div>
          <p className="font-semibold">Temperature</p>
          <p>21°C (Set: 22°C)</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaFan className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Humidity</p>
          <p>45% (Set: 50%)</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaSun className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">Energy Savings</p>
          <p>15% this month</p>
        </div>
      </div>
    </div>
  );
};

export default ClimateControl;