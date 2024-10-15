import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const PerformanceAnalytics: React.FC = () => {
  const { performanceMetrics, loading, error } = useLogistics();

  if (loading) return <div>Loading performance analytics...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaChartLine className="mr-2" /> Performance Analytics
      </h2>
      {performanceMetrics && (
        <ul className="space-y-2">
          <li>On-Time Deliveries: {performanceMetrics.onTimeDeliveries}</li>
          <li>Average Delivery Time: {performanceMetrics.averageDeliveryTime}</li>
          <li>Fuel Efficiency: {performanceMetrics.fuelEfficiency}</li>
        </ul>
      )}
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Detailed Report
      </button>
    </div>
  );
};

export default PerformanceAnalytics;