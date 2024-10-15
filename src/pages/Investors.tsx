import React from 'react';
import { FaChartLine, FaHandshake, FaGlobe } from 'react-icons/fa';

const Investors: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Investor Relations</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Investment Opportunities</h2>
        <p>Learn how to become part of Stockware's mission to disrupt the logistics industry. We're revolutionizing warehouse management through AI and IoT technologies, creating unprecedented efficiencies in the supply chain.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaChartLine className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Financial Performance</h3>
          <p>Access our latest financial reports, market analyses, and revenue projections.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">View Reports</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHandshake className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
          <p>Discover our key partnerships and collaborations in the logistics and tech sectors.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Learn More</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaGlobe className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
          <p>Explore our plans for geographic expansion and market penetration.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">View Roadmap</a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
        <p>Our roadmap for expansion includes:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Developing new AI-driven features for predictive inventory management</li>
          <li>Expanding our network of IoT-enabled warehouses across South Asia</li>
          <li>Launching a blockchain-based system for secure, transparent transactions</li>
          <li>Integrating with major e-commerce platforms for seamless inventory management</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Investor Resources</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Annual Reports</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Quarterly Earnings</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">SEC Filings</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Corporate Governance</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Investor FAQs</a></li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">Interested in investing in Stockware? Contact our Investor Relations team for more information.</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded inline-block hover:bg-blue-600">Contact Investor Relations</a>
      </div>
    </div>
  );
};

export default Investors;