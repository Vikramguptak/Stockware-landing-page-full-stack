import React from 'react';

const CustomerSuccess: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Global Logistics Inc.",
      quote: "Stockware's AI-driven insights have revolutionized our warehouse management. We've seen a 30% increase in efficiency and a 20% reduction in costs.",
    },
    {
      name: "Jane Smith",
      company: "Tech Innovations Co.",
      quote: "The IoT features have given us unprecedented visibility into our inventory. Real-time tracking and automated alerts have been game-changers for our operations.",
    },
    {
      name: "Mike Johnson",
      company: "Retail Giants Ltd.",
      quote: "The security features provided by Stockware have given us peace of mind. We can now focus on our core business knowing our inventory is safe and secure.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">AI-Enhanced Warehousing: Hear from Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;