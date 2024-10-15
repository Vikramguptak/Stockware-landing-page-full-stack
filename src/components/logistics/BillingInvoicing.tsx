import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { useLogistics } from '../../context/LogisticsContext';

const BillingInvoicing: React.FC = () => {
  const { invoices, generateInvoice, loading, error } = useLogistics();

  if (loading) return <div>Loading billing and invoicing...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaFileInvoiceDollar className="mr-2" /> Billing & Invoicing
      </h2>
      <ul className="space-y-2">
        <li>Pending Invoices: {invoices.filter(inv => inv.status === 'pending').length}</li>
        <li>Total Amount Due: ${invoices.reduce((sum, inv) => sum + inv.amount, 0).toFixed(2)}</li>
        <li>Next Billing Cycle: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</li>
      </ul>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={generateInvoice}
      >
        Generate Invoice
      </button>
    </div>
  );
};

export default BillingInvoicing;