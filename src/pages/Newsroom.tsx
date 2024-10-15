import React from 'react';

const newsItems = [
  {
    title: "Stockware Raises $50M in Series B Funding",
    date: "2023-05-20",
    excerpt: "Stockware, the AI-powered warehouse booking platform, has secured $50 million in Series B funding to expand its operations globally.",
  },
  {
    title: "New Partnership with Major Logistics Provider",
    date: "2023-05-15",
    excerpt: "Stockware announces a strategic partnership with XYZ Logistics, expanding our network of available warehouses across India.",
  },
  {
    title: "Stockware Wins 'Innovation in Logistics' Award",
    date: "2023-05-10",
    excerpt: "Our AI-driven platform has been recognized for its contribution to modernizing the logistics industry at the annual Tech Innovation Awards.",
  },
];

const Newsroom: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
      
      <div className="grid gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.date}</p>
            <p>{item.excerpt}</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read full story</a>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Press Kit</h2>
        <p className="mb-4">Download our press kit for company logos, executive bios, and product images.</p>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-600">Download Press Kit</a>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
        <p>For press inquiries, please contact:</p>
        <p className="font-semibold">John Doe, PR Manager</p>
        <p>Email: john.doe@stockware.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default Newsroom;