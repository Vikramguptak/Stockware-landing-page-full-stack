import React from 'react';
import { FaComments, FaEnvelope, FaPhone } from 'react-icons/fa';

const Support: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaComments className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Chat Support</h2>
          <p>Get instant help through our live chat support.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Chat</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaEnvelope className="text-4xl text-green-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p>Send us an email and we'll respond within 24 hours.</p>
          <a href="mailto:support@stockware.com" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">Email Us</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaPhone className="text-4xl text-red-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
          <p>Call us directly for immediate assistance.</p>
          <a href="tel:+1234567890" className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded">Call Now</a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">How do I book a warehouse?</summary>
          <p className="mt-2">You can book a warehouse by using our real-time booking system. Simply enter your requirements, choose from available options, and confirm your booking.</p>
        </details>
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">What if I need to cancel my booking?</summary>
          <p className="mt-2">Cancellation policies vary depending on the warehouse and the timing of your cancellation. Please refer to our cancellation policy or contact support for specific details.</p>
        </details>
        <details>
          <summary className="font-semibold cursor-pointer">How does the IoT monitoring work?</summary>
          <p className="mt-2">Our IoT sensors are installed in partner warehouses to monitor conditions like temperature, humidity, and movement. You can access this data in real-time through your Stockware dashboard.</p>
        </details>
      </div>
    </div>
  );
};

export default Support;