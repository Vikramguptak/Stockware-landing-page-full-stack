import React from 'react';
import { FaCog, FaTools, FaExclamationCircle } from 'react-icons/fa';

const PredictiveMaintenance: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Predictive Maintenance</h2>
      <div className="flex items-center mb-4">
        <FaCog className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Equipment Status</p>
          <p>92% Operational</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaTools className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">Scheduled Maintenance</p>
          <p>2 items in next 7 days</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaExclamationCircle className="text-3xl text-red-500 mr-4" />
        <div>
          <p className="font-semibold">Urgent Repairs Needed</p>
          <p>1 item</p>
        </div>
      </div>
    </div>
  );
};

export default PredictiveMaintenance;