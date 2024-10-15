import axios from 'axios';

const API_BASE_URL = 'https://api.stockware.com/logistics'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers like authentication tokens here
  },
});

export const fetchSchedule = async () => {
  const response = await api.get('/schedule');
  return response.data;
};

export const fetchJobs = async () => {
  const response = await api.get('/jobs');
  return response.data;
};

export const optimizeRoute = async (stops: string[]) => {
  const response = await api.post('/route/optimize', { stops });
  return response.data;
};

export const assignJob = async (driverId: string, job: string) => {
  const response = await api.post('/jobs/assign', { driverId, job });
  return response.data;
};

export const fetchPerformanceMetrics = async () => {
  const response = await api.get('/performance');
  return response.data;
};

export const fetchFleetLocations = async () => {
  const response = await api.get('/fleet/locations');
  return response.data;
};

export const fetchInvoices = async () => {
  const response = await api.get('/invoices');
  return response.data;
};

export const generateInvoice = async () => {
  const response = await api.post('/invoices/generate');
  return response.data;
};

export const fetchMaintenanceAlerts = async () => {
  const response = await api.get('/maintenance/alerts');
  return response.data;
};