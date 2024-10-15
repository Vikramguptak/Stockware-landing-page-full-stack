import React, { useState } from 'react';
import { FaWarehouse, FaRulerCombined, FaMoneyBillWave, FaCog } from 'react-icons/fa';

const ListProperty: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    size: '',
    price: '',
    features: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Property listing submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List Your Property</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why List with Stockware?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaWarehouse className="text-blue-500 mr-2" />
              Reach thousands of businesses looking for warehouse space
            </li>
            <li className="flex items-center">
              <FaRulerCombined className="text-green-500 mr-2" />
              Maximize your utilization rates
            </li>
            <li className="flex items-center">
              <FaMoneyBillWave className="text-yellow-500 mr-2" />
              Earn more from your unused space
            </li>
            <li className="flex items-center">
              <FaCog className="text-red-500 mr-2" />
              Use our easy-to-use platform for seamless management
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">List Your Warehouse</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Warehouse Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size (in sqft)</label>
              <input
                type="number"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (per sqft/month)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
              <textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="e.g., Climate control, 24/7 access, Security cameras"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              List Your Warehouse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;