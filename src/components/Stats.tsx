import React from 'react';

const stats = [
  { value: '30', label: 'second email replies to quote requests and track & trace updates' },
  { value: '50%', label: 'saved on broker markups with our transparent freight handling fees' },
  { value: '15+', label: 'years of expertise in logistics to handle unique needs & escalations' }
];

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Stockware turns warehouse challenges into wins</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2 text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;