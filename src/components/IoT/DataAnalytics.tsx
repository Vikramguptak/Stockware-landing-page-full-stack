import React from 'react';
import { FaChartBar, FaLightbulb, FaClipboardCheck } from 'react-icons/fa';

const DataAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enhanced Data Analytics</h2>
      <div className="flex items-center mb-4">
        <FaChartBar className="text-3xl text-purple-500 mr-4" />
        <div>
          <p className="font-semibold">Data Points Collected</p>
          <p>1.2M today</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaLightbulb className="text-3xl text-yellow-500 mr-4" />
        <div>
          <p className="font-semibold">AI Insights Generated</p>
          <p>37 new insights</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaClipboardCheck className="text-3xl text-green-500 mr-4" />
        <div>
          <p className="font-semibold">Optimization Suggestions</p>
          <p>5 high-priority actions</p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;