import React from 'react';
import AdvancedFeatures from '../components/AdvancedFeatures';
import PredictiveAnalytics from '../components/advanced/PredictiveAnalytics';
import LayoutOptimization from '../components/advanced/LayoutOptimization';
import BlockchainTransactions from '../components/advanced/BlockchainTransactions';
import SustainabilityInsights from '../components/advanced/SustainabilityInsights';
import SpaceAuctions from '../components/advanced/SpaceAuctions';
import VirtualTours from '../components/advanced/VirtualTours';
import VoiceCommands from '../components/advanced/VoiceCommands';
import GeofencingAccess from '../components/advanced/GeofencingAccess';

const AdvancedFeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Advanced Features</h1>
      <AdvancedFeatures />
      <div className="mt-16">
        <PredictiveAnalytics />
        <LayoutOptimization />
        <BlockchainTransactions />
        <SustainabilityInsights />
        <SpaceAuctions />
        <VirtualTours />
        <VoiceCommands />
        <GeofencingAccess />
      </div>
    </div>
  );
};

export default AdvancedFeaturesPage;