import React from 'react';
import { FaCreditCard, FaLock, FaFileInvoiceDollar } from 'react-icons/fa';

const SecurePayments: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Secure Payments & Billing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaCreditCard className="text-5xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
            <p className="text-gray-600">Support for credit cards, bank transfers, and digital wallets.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaLock className="text-5xl mb-4 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">State-of-the-art encryption and security measures for all payments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaFileInvoiceDollar className="text-5xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Automated Invoicing</h3>
            <p className="text-gray-600">Streamlined billing process with automated invoicing and payment tracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurePayments;