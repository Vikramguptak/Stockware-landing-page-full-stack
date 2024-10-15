import React, { useState } from 'react';
import { FaWarehouse, FaTruck, FaBoxes, FaCreditCard } from 'react-icons/fa';

const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi, I'm the Stockware AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = "Based on your request, we have several warehouses available that match your needs. Would you like to see some options?";
      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiResponse }]);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience the future, without changing how you work</h2>
        <p className="text-center text-xl mb-8">
          We simplify warehouse management by blending human expertise with AI automation—so you enjoy the benefits without changing how you work.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <FaWarehouse className="mr-2" /> Warehouse Owners
          </button>
          <button className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <FaTruck className="mr-2" /> Logistics Providers
          </button>
          <button className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <FaBoxes className="mr-2" /> Shippers
          </button>
          <button className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <FaCreditCard className="mr-2" /> Payments
          </button>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about warehouse availability..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIDemo;