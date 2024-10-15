import React, { useState } from 'react';

const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book a Demo</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
        <p>During the demo, you'll see how our AI-driven system works in real-time, learn how to book warehouse space, and discover how our IoT integration keeps you informed about your inventory's status.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Helps</h2>
        <p>The demo showcases how Stockware saves time, reduces manual effort, and cuts storage costs.</p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Schedule Demo
        </button>
      </form>
    </div>
  );
};

export default BookDemo;