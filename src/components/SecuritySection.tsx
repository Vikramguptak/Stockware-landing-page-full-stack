import React from 'react';
import { FaShieldAlt, FaUserShield, FaBell, FaLock } from 'react-icons/fa';

const SecuritySection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Next-Level Security & Safety</h2>
        <p className="text-lg text-center mb-12">
          Security is our top priority. Our AI-driven security systems, combined with IoT devices, 
          ensure 24/7 protection. From biometric access control to real-time monitoring and alert systems, 
          Stockware keeps your goods safe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaShieldAlt className="text-5xl mb-4 text-blue-500" />}
            title="AI-Powered Surveillance"
            description="Real-time video monitoring and facial recognition for enhanced security."
          />
          <FeatureCard
            icon={<FaUserShield className="text-5xl mb-4 text-green-500" />}
            title="Biometric Access Control"
            description="Secure entry and exit with advanced biometric authentication."
          />
          <FeatureCard
            icon={<FaBell className="text-5xl mb-4 text-yellow-500" />}
            title="Automated Alerts"
            description="Receive instant notifications for any security breaches or irregularities."
          />
          <FeatureCard
            icon={<FaLock className="text-5xl mb-4 text-red-500" />}
            title="Encrypted Data Protection"
            description="State-of-the-art encryption to safeguard your sensitive information."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default SecuritySection;