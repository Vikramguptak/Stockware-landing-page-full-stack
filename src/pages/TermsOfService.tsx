import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Platform Usage</h2>
        <p>Guidelines on the lawful use of Stockware's services. Users are prohibited from engaging in illegal activities or attempting to hack the system.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Booking Policy</h2>
        <p>Explains how users can reserve warehouse space, including information about cancellations, no-show policies, and penalties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
        <p>Stockware aims for 99.9% uptime, but we're not responsible for downtime caused by external factors such as internet outages or third-party service interruptions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Refunds & Payments</h2>
        <p>Users can view details on how payments are processed, refunds for cancellations, and fees that may apply for special services.</p>
      </section>
    </div>
  );
};

export default TermsOfService;