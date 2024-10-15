import React from 'react';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';
import LogisticsEfficiency from '../components/LogisticsEfficiency';
import InteractiveDemo from '../components/InteractiveDemo';
import CustomerSuccess from '../components/CustomerSuccess';
import ContactDemo from '../components/ContactDemo';
import Chatbot from '../components/Chatbot';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      <LogisticsEfficiency />
      <InteractiveDemo />
      <CustomerSuccess />
      <ContactDemo />
      <Chatbot />
    </div>
  );
};

export default Home;