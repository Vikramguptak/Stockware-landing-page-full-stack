import React, { createContext, useContext, useState, useEffect } from 'react';
import * as api from '../api/logisticsApi';

interface LogisticsContextType {
  schedule: any[];
  route: any;
  jobs: any[];
  performanceMetrics: any;
  fleetLocations: any[];
  invoices: any[];
  maintenanceAlerts: any[];
  loading: boolean;
  error: string | null;
  fetchData: () => void;
  assignJob: (driverId: string, job: string) => Promise<void>;
  optimizeRoute: (stops: string[]) => Promise<void>;
  generateInvoice: () => Promise<void>;
}

const LogisticsContext = createContext<LogisticsContextType | undefined>(undefined);

export const useLogistics = () => {
  const context = useContext(LogisticsContext);
  if (!context) {
    throw new Error('useLogistics must be used within a LogisticsProvider');
  }
  return context;
};

export const LogisticsProvider: React.FC = ({ children }) => {
  const [schedule, setSchedule] = useState([]);
  const [route, setRoute] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [fleetLocations, setFleetLocations] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [maintenanceAlerts, setMaintenanceAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [
        scheduleData,
        jobsData,
        metricsData,
        locationsData,
        invoicesData,
        alertsData
      ] = await Promise.all([
        api.fetchSchedule(),
        api.fetchJobs(),
        api.fetchPerformanceMetrics(),
        api.fetchFleetLocations(),
        api.fetchInvoices(),
        api.fetchMaintenanceAlerts()
      ]);

      setSchedule(scheduleData);
      setJobs(jobsData);
      setPerformanceMetrics(metricsData);
      setFleetLocations(locationsData);
      setInvoices(invoicesData);
      setMaintenanceAlerts(alertsData);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const assignJob = async (driverId: string, job: string) => {
    try {
      await api.assignJob(driverId, job);
      fetchData(); // Refresh data after assigning job
    } catch (err) {
      setError('Failed to assign job');
    }
  };

  const optimizeRoute = async (stops: string[]) => {
    try {
      const optimizedRoute = await api.optimizeRoute(stops);
      setRoute(optimizedRoute);
    } catch (err) {
      setError('Failed to optimize route');
    }
  };

  const generateInvoice = async () => {
    try {
      const newInvoice = await api.generateInvoice();
      setInvoices([...invoices, newInvoice]);
    } catch (err) {
      setError('Failed to generate invoice');
    }
  };

  return (
    <LogisticsContext.Provider
      value={{
        schedule,
        route,
        jobs,
        performanceMetrics,
        fleetLocations,
        invoices,
        maintenanceAlerts,
        loading,
        error,
        fetchData,
        assignJob,
        optimizeRoute,
        generateInvoice
      }}
    >
      {children}
    </LogisticsContext.Provider>
  );
};