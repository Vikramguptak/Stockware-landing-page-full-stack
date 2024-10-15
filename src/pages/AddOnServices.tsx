import React from 'react';
import { FaShieldAlt, FaTruck, FaBox, FaChartLine, FaCogs } from 'react-icons/fa';

const AddOnServices: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Enhance Your Logistics with Stockware's Value-Added Services</h1>
      
      <p className="text-lg mb-8 text-center">
        At Stockware, we don't just provide warehouse space; we offer a suite of value-added services designed to streamline your logistics, safeguard your inventory, and optimize your operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ServiceCard
          icon={<FaShieldAlt className="text-5xl mb-4 text-blue-500" />}
          title="Insurance Services"
          description="Protect your inventory with our custom-tailored insurance plans that cover a range of potential risks."
          benefits={[
            "Inventory Coverage",
            "Transport Protection",
            "Flexible Policies"
          ]}
          pricing="Starting at X% of your inventory value"
        />

        <ServiceCard
          icon={<FaTruck className="text-5xl mb-4 text-green-500" />}
          title="Transportation Services"
          description="Leverage our network of trusted logistics partners to move your inventory quickly and efficiently."
          benefits={[
            "On-Demand Transport",
            "Real-Time Tracking",
            "Optimized Routes"
          ]}
          pricing="Competitive rates based on distance, size, and urgency"
        />

        <ServiceCard
          icon={<FaBox className="text-5xl mb-4 text-yellow-500" />}
          title="Packaging Solutions"
          description="Our packaging solutions ensure that your goods arrive safely and securely."
          benefits={[
            "Secure Packaging",
            "Custom Solutions",
            "Sustainability Options"
          ]}
          pricing="Starting at $X per item/package"
        />

        <ServiceCard
          icon={<FaChartLine className="text-5xl mb-4 text-red-500" />}
          title="Real-Time Tracking & Analytics"
          description="Stay in control of your inventory and shipments with our real-time tracking and analytics tools."
          benefits={[
            "Real-Time Updates",
            "AI-Driven Analytics",
            "Custom Alerts"
          ]}
          pricing="Advanced analytics packages start at $X per month"
        />
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaCogs className="mr-2" /> Customization Options
        </h2>
        <p className="mb-4">
          Every business has unique logistics needs, which is why we offer customizable solutions for insurance, transportation, and packaging. Whether you need special handling or additional security measures, we've got you covered.
        </p>
        <h3 className="text-xl font-semibold mb-2">How It Works:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Customize your value-added services directly within your booking dashboard.</li>
          <li>Modify services as your needs evolve, with flexibility to upgrade or downgrade packages.</li>
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Logistics?</h2>
        <p className="mb-6">Explore our value-added services and add them to your booking today for a seamless, stress-free logistics experience.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition duration-300">
            Contact Us for Custom Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  pricing: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, pricing }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <h3 className="font-semibold mb-2">Benefits:</h3>
      <ul className="list-disc list-inside mb-4">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <p className="font-semibold">Pricing: {pricing}</p>
    </div>
  );
};

export default AddOnServices;