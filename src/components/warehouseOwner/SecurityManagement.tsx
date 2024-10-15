import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const SecurityManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaShieldAlt className="mr-2" /> Security Management
      </h2>
      <div className="space-y-2">
        <p>Security Status: All Clear</p>
        <p>Active Cameras: 12/12</p>
        <p>Last Incident: None</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View Security Feeds
      </button>
    </div>
  );
};

export default SecurityManagement;