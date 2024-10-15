import React, { useState, useEffect } from 'react';
import { FaWarehouse, FaSearch, FaFilter } from 'react-icons/fa';
import { useWarehouse } from '../context/WarehouseContext';
import { toast } from 'react-toastify';
import CitySelector from '../components/CitySelector';
import WarehouseCard from '../components/WarehouseCard';
import BookingModal from '../components/BookingModal';

const WarehouseListing: React.FC = () => {
  const { warehouses, loading, error, searchWarehouses } = useWarehouse();
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpace, setFilterSpace] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      handleSearch();
    }
  }, [selectedCity]);

  const handleSearch = async () => {
    try {
      await searchWarehouses({
        location: selectedCity,
        space: parseInt(filterSpace) || 0,
        duration: ''
      });
    } catch (err) {
      toast.error('Failed to search warehouses. Please try again.');
    }
  };

  const handleBookNow = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedWarehouse(null);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Warehouses</h1>
      <CitySelector onSelectCity={setSelectedCity} />
      <div className="mb-8 flex items-center">
        <input
          type="text"
          placeholder="Search warehouses..."
          className="flex-grow p-2 border rounded-l"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      <div className="mb-8 flex space-x-4">
        <input
          type="number"
          placeholder="Min space (sqft)"
          className="p-2 border rounded"
          value={filterSpace}
          onChange={(e) => setFilterSpace(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price (₹/sqft)"
          className="p-2 border rounded"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
        />
        <button
          className="bg-gray-200 p-2 rounded"
          onClick={handleSearch}
        >
          <FaFilter /> Filter
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map((warehouse) => (
          <WarehouseCard
            key={warehouse.id}
            warehouse={warehouse}
            onBookNow={handleBookNow}
          />
        ))}
      </div>
      {isBookingModalOpen && selectedWarehouse && (
        <BookingModal
          warehouse={selectedWarehouse}
          onClose={closeBookingModal}
        />
      )}
    </div>
  );
};

export default WarehouseListing;