import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaPaperPlane } from 'react-icons/fa';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi, I'm the Stockware AI assistant. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'bot' }]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowercaseInput = userInput.toLowerCase();
    if (lowercaseInput.includes('warehouse') && lowercaseInput.includes('book')) {
      return "To book a warehouse, please provide me with your desired location, the amount of space you need, and how long you need it for. For example: 'I need a warehouse in Mumbai, 5000 sqft, for 6 months'";
    }
    if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost')) {
      return "Our pricing varies depending on location, size, and duration. For a specific quote, please provide more details about your requirements.";
    }
    if (lowercaseInput.includes('locations') || lowercaseInput.includes('cities')) {
      return "We have warehouses available in major cities across India, including Mumbai, Delhi, Bangalore, Chennai, Kolkata, and Hyderabad. Which city are you interested in?";
    }
    return "I'm here to help with any questions about warehouse booking, pricing, or availability. Could you please provide more specific information about what you're looking for?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaComments className="text-2xl" />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Stockware AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              &times;
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;