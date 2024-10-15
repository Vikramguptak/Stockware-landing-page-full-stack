import React from 'react';

const warehouses = [
  {
    id: 1,
    name: 'Highlands Warehouse',
    location: 'New Delhi',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    owner: { name: 'Envy Oliver', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' }
  },
  {
    id: 2,
    name: 'Woodland Warehouse',
    location: 'Bhopal, Madhya Pradesh',
    price: 45000000,
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    owner: { name: 'Cody Rhodes', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }
  },
  {
    id: 3,
    name: 'Fling Nation DLF',
    location: 'Pune, Maharashtra',
    price: 80000000,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    owner: { name: 'James Smith', avatar: 'https://randomuser.me/api/portraits/women/90.jpg' }
  },
  {
    id: 4,
    name: 'DLF Warehouse',
    location: 'Pune, Maharashtra',
    price: 72400000,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    owner: { name: 'Drake', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' }
  }
];

const FeaturedWarehouses: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Warehouses</h2>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Buy</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Rent</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {warehouses.map((warehouse) => (
            <div key={warehouse.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={warehouse.image} alt={warehouse.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{warehouse.name}</h3>
                <p className="text-gray-600 mb-2">Rs. {warehouse.price.toLocaleString()}</p>
                <div className="flex items-center">
                  <img src={warehouse.owner.avatar} alt={warehouse.owner.name} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <p className="font-semibold">{warehouse.owner.name}</p>
                    <p className="text-sm text-gray-600">{warehouse.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWarehouses;