import React, { useState } from 'react';
import { FaRoute } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const LiveRouteOptimization: React.FC = () => {
  const { route, optimizeRoute, loading, error } = useLogistics();
  const [stops, setStops] = useState<string[]>([]);

  const handleOptimize = () => {
    optimizeRoute(stops);
  };

  if (loading) return <div>Loading route optimization...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaRoute className="mr-2" /> Live Route Optimization
      </h2>
      <input
        type="text"
        placeholder="Add stop"
        className="w-full p-2 border rounded mb-2"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setStops([...stops, e.currentTarget.value]);
            e.currentTarget.value = '';
          }
        }}
      />
      <ul className="list-decimal list-inside mt-2">
        {stops.map((stop, index) => (
          <li key={index}>{stop}</li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={handleOptimize}
      >
        Optimize Route
      </button>
      {route && (
        <div className="mt-4">
          <p>Optimized Route:</p>
          <ol className="list-decimal list-inside">
            {route.optimizedStops.map((stop: string, index: number) => (
              <li key={index}>{stop}</li>
            ))}
          </ol>
          <p className="mt-2">Estimated time: {route.estimatedTime}</p>
        </div>
      )}
    </div>
  );
};

export default LiveRouteOptimization;