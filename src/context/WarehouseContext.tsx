import React, { createContext, useContext, useState } from 'react';
import { searchWarehouses, bookWarehouse as apiBookWarehouse } from '../api/warehouseApi';

interface Warehouse {
  id: string;
  name: string;
  location: string;
  space: number;
  price: number;
}

interface WarehouseContextType {
  warehouses: Warehouse[];
  loading: boolean;
  error: string | null;
  searchWarehouses: (params: { location: string; space: number; duration: string }) => Promise<void>;
  bookWarehouse: (bookingData: any) => Promise<void>;
}

const WarehouseContext = createContext<WarehouseContextType | undefined>(undefined);

export const useWarehouse = () => {
  const context = useContext(WarehouseContext);
  if (!context) {
    throw new Error('useWarehouse must be used within a WarehouseProvider');
  }
  return context;
};

export const WarehouseProvider: React.FC = ({ children }) => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchWarehousesHandler = async (params: { location: string; space: number; duration: string }) => {
    setLoading(true);
    setError(null);
    try {
      const result = await searchWarehouses(params);
      setWarehouses(result);
    } catch (err) {
      setError('Failed to search warehouses');
    } finally {
      setLoading(false);
    }
  };

  const bookWarehouseHandler = async (bookingData: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiBookWarehouse(bookingData);
      console.log('Booking successful:', result);
      return result;
    } catch (err) {
      setError('Failed to book warehouse');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <WarehouseContext.Provider
      value={{
        warehouses,
        loading,
        error,
        searchWarehouses: searchWarehousesHandler,
        bookWarehouse: bookWarehouseHandler,
      }}
    >
      {children}
    </WarehouseContext.Provider>
  );
};