import React from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';

const EnvironmentControl: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaTemperatureHigh className="mr-2" /> Environment Control
      </h2>
      <div className="space-y-2">
        <p>Temperature: 68°F</p>
        <p>Humidity: 45%</p>
        <p>Air Quality: Good</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Adjust Settings
      </button>
    </div>
  );
};

export default EnvironmentControl;