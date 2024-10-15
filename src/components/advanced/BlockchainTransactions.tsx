import React from 'react';
import { FaCubes, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const BlockchainTransactions: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Blockchain for Secure Transactions</h2>
      <p className="mb-4">Leverage blockchain technology for tamper-proof transactions and increased trust between all parties.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaCubes className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Immutable Ledger</h3>
            <p>Transparent transaction history</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaFileContract className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Smart Contracts</h3>
            <p>Automated agreement enforcement</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaShieldAlt className="text-3xl text-red-500 mr-4" />
          <div>
            <h3 className="font-semibold">Enhanced Security</h3>
            <p>Reduced fraud risk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainTransactions;