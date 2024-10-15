import React, { useState } from 'react';
import { FaTruck } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const JobAssignment: React.FC = () => {
  const { jobs, assignJob, loading, error } = useLogistics();
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const handleAssign = () => {
    if (selectedDriver && selectedJob) {
      assignJob(selectedDriver, selectedJob);
    }
  };

  if (loading) return <div>Loading job assignments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaTruck className="mr-2" /> Job Assignment
      </h2>
      <select
        className="w-full p-2 border rounded mb-2"
        value={selectedDriver}
        onChange={(e) => setSelectedDriver(e.target.value)}
      >
        <option value="">Select Driver</option>
        {jobs.map((job) => (
          <option key={job.driverId} value={job.driverId}>
            {job.driverName}
          </option>
        ))}
      </select>
      <select
        className="w-full p-2 border rounded mb-2"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="">Select Job</option>
        {jobs.map((job) => (
          <option key={job.id} value={job.id}>
            {job.description}
          </option>
        ))}
      </select>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={handleAssign}
      >
        Assign Job
      </button>
      <ul className="space-y-2 mt-4">
        {jobs.map((job) => (
          <li key={job.id}>
            {job.driverName}: {job.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobAssignment;