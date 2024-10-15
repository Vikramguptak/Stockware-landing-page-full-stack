import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Legal Information</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Agreements</h2>
        <p>This section explains the rules and regulations you agree to when using our platform. This includes acceptable use, prohibited activities, and more.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
        <p>Our formal process for resolving conflicts, including any mediation or arbitration procedures.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Liability & Indemnity</h2>
        <p>This section clarifies Stockware's responsibility in the event of data breaches, service interruptions, or other challenges.</p>
      </section>

      <p className="mt-8 text-gray-600">By using Stockware, you agree to these legal standards, ensuring a secure and fair experience for all users.</p>
    </div>
  );
};

export default Legal;