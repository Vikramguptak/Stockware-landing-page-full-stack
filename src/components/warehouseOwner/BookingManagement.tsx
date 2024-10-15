import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const BookingManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaCalendarAlt className="mr-2" /> Booking Management
      </h2>
      <div className="space-y-2">
        <p>Upcoming Bookings: 5</p>
        <p>Pending Requests: 3</p>
        <p>Next Available Date: May 15, 2023</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Calendar
      </button>
    </div>
  );
};

export default BookingManagement;