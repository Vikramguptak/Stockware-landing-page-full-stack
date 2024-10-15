import React from 'react';
import EnvironmentalMonitoring from '../components/IoT/EnvironmentalMonitoring';
import AssetTracking from '../components/IoT/AssetTracking';
import InventoryManagement from '../components/IoT/InventoryManagement';
import PredictiveMaintenance from '../components/IoT/PredictiveMaintenance';
import SmartSecurity from '../components/IoT/SmartSecurity';
import ClimateControl from '../components/IoT/ClimateControl';
import FleetManagement from '../components/IoT/FleetManagement';
import SmartShelving from '../components/IoT/SmartShelving';
import DataAnalytics from '../components/IoT/DataAnalytics';

const IoTFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">IoT-Powered Warehouse Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EnvironmentalMonitoring />
        <AssetTracking />
        <InventoryManagement />
        <PredictiveMaintenance />
        <SmartSecurity />
        <ClimateControl />
        <FleetManagement />
        <SmartShelving />
        <DataAnalytics />
      </div>
    </div>
  );
};

export default IoTFeatures;