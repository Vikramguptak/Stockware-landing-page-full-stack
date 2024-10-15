import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p>We collect information including personally identifiable information (PII), transactional data, and user preferences.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
        <p>We use the data to optimize warehouse recommendations, track booking patterns, and ensure a seamless user experience.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>Stockware utilizes advanced encryption protocols, secure server storage, and two-factor authentication to protect your data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Sharing</h2>
        <p>We do not sell or rent your data to any third-party vendors. However, we may share information with trusted service providers for analytics, marketing, or operational purposes under strict confidentiality agreements.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>You have the right to access, amend, or delete your data at any time, and you can also opt out of marketing communications.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;