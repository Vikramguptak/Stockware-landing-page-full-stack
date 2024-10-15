import React, { useState } from 'react';

const ChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi, I'm the Stockware AI assistant. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Based on your query "${input}", we have several warehouses available. Would you like me to show you some options?`, 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience the future of warehouse booking</h2>
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

export default ChatbotDemo;