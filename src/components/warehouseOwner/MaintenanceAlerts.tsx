import React from 'react';
import { FaTools } from 'react-icons/fa';

const MaintenanceAlerts: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaTools className="mr-2" /> Maintenance Alerts
      </h2>
      <div className="space-y-2">
        <p>Active Alerts: 2</p>
        <p>Upcoming Maintenance: 1</p>
        <p>Last Inspection: April 1, 2023</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Alerts
      </button>
    </div>
  );
};

export default MaintenanceAlerts;