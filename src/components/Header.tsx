import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Stockware</Link>
        <div className="space-x-4">
          <Link to="/warehouses" className="text-gray-600 hover:text-blue-600">Warehouses</Link>
          {/* ... other navigation links ... */}
          <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Dashboard
          </Link>
          <Link to="/logistics-provider/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Logistics Provider Login
          </Link>
          <Link to="/warehouse-owner/login" className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
            Warehouse Owner Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;