import React from 'react';

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Mumbai, India",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Bangalore, India",
  },
  {
    title: "Logistics Specialist",
    department: "Operations",
    location: "Delhi, India",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Hyderabad, India",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Careers at Stockware</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Work with Us</h2>
        <p className="mb-4">Stockware offers a dynamic, fast-paced environment where innovation thrives. We prioritize employee growth, creativity, and collaboration.</p>
        <ul className="list-disc list-inside">
          <li>Opportunity to work with cutting-edge AI and IoT technologies</li>
          <li>Flexible work arrangements</li>
          <li>Competitive salary and benefits package</li>
          <li>Professional development and learning opportunities</li>
          <li>Chance to make a real impact in the logistics industry</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
        <p>At Stockware, we believe in fostering a culture of innovation, inclusivity, and continuous learning. We value diversity and encourage our employees to bring their unique perspectives to the table.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <div className="grid gap-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.department} | {job.location}</p>
              <a href="#" className="text-blue-500 hover:underline">View Job Description</a>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">Don't see a position that fits your skills? We're always looking for talented individuals to join our team.</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded inline-block hover:bg-blue-600">Submit Your Resume</a>
      </div>
    </div>
  );
};

export default Careers;