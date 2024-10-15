import axios from 'axios';

const API_BASE_URL = 'https://api.stockware.com'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchWarehouses = async (params: { location: string, space: number, duration: string }) => {
  try {
    const response = await api.get('/warehouses', { params });
    // Ensure we're only returning cloneable data
    return response.data.map((warehouse: any) => ({
      id: warehouse.id,
      name: warehouse.name,
      location: warehouse.location,
      space: warehouse.space,
      price: warehouse.price,
    }));
  } catch (error) {
    console.error('Error searching warehouses:', error);
    throw new Error('Failed to search warehouses');
  }
};

export const bookWarehouse = async (bookingData: any) => {
  try {
    const response = await api.post('/bookings', bookingData);
    // Ensure we're only returning cloneable data
    return {
      success: response.data.success,
      bookingId: response.data.bookingId,
      message: response.data.message,
    };
  } catch (error) {
    console.error('Error booking warehouse:', error);
    throw new Error('Failed to book warehouse');
  }
};