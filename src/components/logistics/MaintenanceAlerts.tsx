import React from 'react';
import { FaTools } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const MaintenanceAlerts: React.FC = () => {
  const { maintenanceAlerts, loading, error } = useLogistics();

  if (loading) return <div>Loading maintenance alerts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaTools className="mr-2" /> Maintenance Alerts
      </h2>
      <ul className="space-y-2">
        {maintenanceAlerts.map((alert, index) => (
          <li key={index} className={`text-${alert.severity === 'high' ? 'red' : alert.severity === 'medium' ? 'yellow' : 'green'}-500`}>
            {alert.vehicleId}: {alert.alert}
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Schedule Maintenance
      </button>
    </div>
  );
};

export default MaintenanceAlerts;