import React from 'react';
import { useParams } from 'react-router-dom';

const featureDetails: { [key: string]: { title: string; description: string } } = {
  'real-time-availability': {
    title: 'Real-Time Warehouse Availability',
    description: 'Our advanced system provides up-to-the-minute information on warehouse space availability. Users can search, filter, and book warehouse spaces instantly, ensuring they always have access to the latest inventory information.'
  },
  'booking-scheduling': {
    title: 'Booking and Scheduling',
    description: 'Our intuitive booking system allows users to easily reserve warehouse spaces for their specific needs. With a user-friendly calendar interface, businesses can schedule their storage requirements efficiently, while warehouse owners can manage their space availability seamlessly.'
  },
  'secure-payments': {
    title: 'Secure Payments',
    description: 'We prioritize the security of all transactions on our platform. Our payment system supports multiple payment methods and employs state-of-the-art encryption to ensure that all financial data is protected. Users can make payments with confidence, knowing their information is safe.'
  },
  'customer-support': {
    title: '24/7 Customer Support',
    description: 'Our dedicated customer support team is available round the clock to assist with any queries or issues. Whether through chat, email, or phone, we ensure that help is always just a click or call away, providing peace of mind to all our users.'
  },
  'inventory-management': {
    title: 'Real-Time Inventory Management',
    description: 'Our advanced inventory management system allows businesses to track their stock levels across multiple warehouses in real-time. With automated updates and intelligent alerts, users can optimize their inventory, reduce waste, and ensure they always have the right products in stock.'
  },
  'notifications': {
    title: 'Automated Notifications',
    description: 'Stay informed with our smart notification system. Receive real-time alerts for bookings, payments, inventory updates, and more. Our AI-driven notifications ensure you never miss important updates about your warehouse operations.'
  },
  'analytics': {
    title: 'Analytics Dashboard',
    description: 'Gain valuable insights into your warehouse operations with our comprehensive analytics dashboard. Visualize key metrics, track performance trends, and make data-driven decisions to optimize your business operations.'
  },
  'dynamic-pricing': {
    title: 'Dynamic Pricing',
    description: 'Our AI-powered dynamic pricing model adjusts rates based on real-time demand, seasonality, and warehouse availability. This ensures competitive pricing for businesses while maximizing revenue for warehouse owners.'
  },
  'logistics-management': {
    title: 'Integrated Logistics Management',
    description: 'Streamline your entire supply chain with our integrated logistics management system. From transportation booking to delivery tracking, our platform provides end-to-end visibility and control over your logistics operations.'
  },
  'demand-forecasting': {
    title: 'Predictive Demand Forecasting',
    description: 'Leverage the power of AI to predict future inventory needs. Our advanced algorithms analyze historical data, market trends, and seasonal patterns to provide accurate demand forecasts, helping you optimize your inventory levels and reduce costs.'
  },
  'warehouse-optimization': {
    title: 'AI-Driven Warehouse Optimization',
    description: 'Maximize the efficiency of your warehouse space with our AI-driven optimization tools. Our system analyzes usage patterns and inventory flow to suggest optimal layouts, ensuring fast-moving items are easily accessible and space utilization is maximized.'
  },
  'automated-billing': {
    title: 'Automated Billing & Invoicing',
    description: 'Simplify your financial processes with our automated billing and invoicing system. Generate accurate invoices, process payments, and manage financial records effortlessly, saving time and reducing errors in your accounting processes.'
  },
  'route-optimization': {
    title: 'AI-Powered Route Optimization',
    description: 'Optimize your delivery routes with our AI-powered system. Taking into account factors like traffic, weather, and delivery windows, our platform suggests the most efficient routes, helping you reduce transportation costs and improve delivery times.'
  },
  'smart-maintenance': {
    title: 'Smart Maintenance',
    description: 'Keep your warehouse in top condition with our smart maintenance system. Using IoT sensors and predictive analytics, we monitor equipment health and environmental conditions, alerting you to potential issues before they become problems.'
  },
  'customer-personalization': {
    title: 'AI-Enhanced Customer Personalization',
    description: 'Provide a tailored experience for each user with our AI-enhanced personalization. From customized dashboard layouts to personalized inventory suggestions, our system learns from user behavior to deliver a unique, optimized experience for each customer.'
  }
};

const FeatureDetails: React.FC = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = featureId ? featureDetails[featureId] : null;

  if (!feature) {
    return <div className="container mx-auto px-4 py-8">Feature not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{feature.title}</h1>
      <p className="text-lg">{feature.description}</p>
    </div>
  );
};

export default FeatureDetails;