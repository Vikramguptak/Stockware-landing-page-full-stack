import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">General</h3>
            <ul className="space-y-2">
              <li><Link to="/book-demo" className="hover:text-blue-400">Book a Demo</Link></li>
              <li><Link to="/for-shippers" className="hover:text-blue-400">For Shippers</Link></li>
              <li><Link to="/features" className="hover:text-blue-400">Features</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-centre" className="hover:text-blue-400">Help Centre</Link></li>
              <li><Link to="/newsroom" className="hover:text-blue-400">Newsroom</Link></li>
              <li><Link to="/new-features" className="hover:text-blue-400">New Features</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/careers" className="hover:text-blue-400">Careers</Link></li>
              <li><Link to="/investors" className="hover:text-blue-400">Investors</Link></li>
              <li><Link to="/emergency-stays" className="hover:text-blue-400">Emergency Stays</Link></li>
              <li><Link to="/list-property" className="hover:text-blue-400">List Your Property</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Stockware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;