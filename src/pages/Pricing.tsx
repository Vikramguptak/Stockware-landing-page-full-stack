import React from 'react';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    features: [
      'Up to 1,000 sqft storage',
      'Basic inventory management',
      'Email support',
      '1 user account'
    ]
  },
  {
    name: 'Pro',
    price: '$299',
    features: [
      'Up to 5,000 sqft storage',
      'Advanced inventory management',
      'Priority email and phone support',
      '5 user accounts',
      'AI-powered analytics'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited storage',
      'Full-suite inventory management',
      '24/7 priority support',
      'Unlimited user accounts',
      'Custom AI solutions',
      'Dedicated account manager'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
            <ul className="mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;