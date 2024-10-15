import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const RealTimeSchedule: React.FC = () => {
  const { schedule, loading, error } = useLogistics();

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FaCalendarAlt className="mr-2" /> Real-Time Pickup & Delivery Schedule
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FaCalendarAlt className="mr-2" /> Real-Time Pickup & Delivery Schedule
        </h2>
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaCalendarAlt className="mr-2" /> Real-Time Pickup & Delivery Schedule
      </h2>
      {schedule.length === 0 ? (
        <p>No scheduled pickups or deliveries.</p>
      ) : (
        <ul className="space-y-2">
          {schedule.map((item) => (
            <li key={item.id}>
              {item.type}: {item.location} - {item.time}
            </li>
          ))}
        </ul>
      )}
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Full Schedule
      </button>
    </div>
  );
};

export default RealTimeSchedule;