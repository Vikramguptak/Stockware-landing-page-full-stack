import React from 'react';
import { FaLock, FaVideo, FaUserSecret } from 'react-icons/fa';

const SmartSecurity: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">IoT-Enabled Smart Security</h2>
      <div className="flex items-center mb-4">
        <FaLock className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Access Points</p>
          <p>All Secure</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaVideo className="text-3xl text-blue-500 mr-4" />
        <div>
          <p className="font-semibold">Surveillance Cameras</p>
          <p>24/24 Online</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaUserSecret className="text-3xl text-red-500 mr-4" />
        <div>
          <p className="font-semibold">Unauthorized Access Attempts</p>
          <p>0 in last 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default SmartSecurity;