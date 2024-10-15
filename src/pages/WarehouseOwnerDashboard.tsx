import React from 'react';
import SpaceMonitoring from '../components/warehouseOwner/SpaceMonitoring';
import RevenueAnalytics from '../components/warehouseOwner/RevenueAnalytics';
import DynamicPricing from '../components/warehouseOwner/DynamicPricing';
import BookingManagement from '../components/warehouseOwner/BookingManagement';
import SpaceOptimization from '../components/warehouseOwner/SpaceOptimization';
import MaintenanceAlerts from '../components/warehouseOwner/MaintenanceAlerts';
import InvoiceManagement from '../components/warehouseOwner/InvoiceManagement';
import SecurityManagement from '../components/warehouseOwner/SecurityManagement';
import PerformanceAnalytics from '../components/warehouseOwner/PerformanceAnalytics';
import EnvironmentControl from '../components/warehouseOwner/EnvironmentControl';

const WarehouseOwnerDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Warehouse Owner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpaceMonitoring />
        <RevenueAnalytics />
        <DynamicPricing />
        <BookingManagement />
        <SpaceOptimization />
        <MaintenanceAlerts />
        <InvoiceManagement />
        <SecurityManagement />
        <PerformanceAnalytics />
        <EnvironmentControl />
      </div>
    </div>
  );
};

export default WarehouseOwnerDashboard;