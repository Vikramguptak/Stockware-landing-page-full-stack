import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const InvoiceManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaFileInvoiceDollar className="mr-2" /> Invoice Management
      </h2>
      <div className="space-y-2">
        <p>Pending Invoices: 5</p>
        <p>Overdue Payments: 2</p>
        <p>Total Outstanding: $12,500</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Manage Invoices
      </button>
    </div>
  );
};

export default InvoiceManagement;