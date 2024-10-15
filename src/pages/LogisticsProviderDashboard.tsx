import React from 'react';
import { LogisticsProvider } from '../context/LogisticsContext';
import RealTimeSchedule from '../components/logistics/RealTimeSchedule';
import LiveRouteOptimization from '../components/logistics/LiveRouteOptimization';
import JobAssignment from '../components/logistics/JobAssignment';
import PerformanceAnalytics from '../components/logistics/PerformanceAnalytics';
import FleetTracking from '../components/logistics/FleetTracking';
import BillingInvoicing from '../components/logistics/BillingInvoicing';
import MaintenanceAlerts from '../components/logistics/MaintenanceAlerts';

const LogisticsProviderDashboard: React.FC = () => {
  return (
    <LogisticsProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Logistics Provider Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RealTimeSchedule />
          <LiveRouteOptimization />
          <JobAssignment />
          <PerformanceAnalytics />
          <FleetTracking />
          <BillingInvoicing />
          <MaintenanceAlerts />
        </div>
      </div>
    </LogisticsProvider>
  );
};

export default LogisticsProviderDashboard;