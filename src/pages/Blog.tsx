import React from 'react';

const blogPosts = [
  {
    title: "AI in Logistics: Revolutionizing Warehouse Management",
    excerpt: "Discover how AI is transforming the logistics industry and what businesses can expect in the future.",
    date: "2023-05-15",
  },
  {
    title: "Warehouse Optimization Strategies for High-Demand Times",
    excerpt: "Learn tips and tricks for making the most of your storage space, even during peak seasons.",
    date: "2023-05-10",
  },
  {
    title: "Security in Warehousing: Leveraging IoT and AI",
    excerpt: "A closer look at modern security threats and how IoT and AI can help mitigate risks in warehouse management.",
    date: "2023-05-05",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;