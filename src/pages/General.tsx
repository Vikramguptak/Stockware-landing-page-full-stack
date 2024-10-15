import React from 'react';

const General: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Stockware</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>Stockware is dedicated to simplifying warehouse logistics through AI-powered, real-time booking solutions. We aim to maximize warehouse utilization while making logistics easier for businesses of all sizes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Powered Platform</h2>
        <p>Our system is built on advanced machine learning algorithms, optimizing inventory space by matching demand with warehouse availability.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
        <p>From small e-commerce businesses to large-scale distributors, Stockware offers tailored solutions for every business type.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
        <p>Innovation, transparency, reliability, and efficiency are at the heart of everything we do.</p>
      </section>
    </div>
  );
};

export default General;