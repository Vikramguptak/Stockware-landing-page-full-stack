import React, { useState } from 'react';

interface PaymentFormProps {
  onChange: (details: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onChange }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedDetails = { ...paymentDetails, [e.target.name]: e.target.value };
    setPaymentDetails(updatedDetails);
    onChange(updatedDetails);
  };

  return (
    <div>
      <input
        type="text"
        name="cardNumber"
        value={paymentDetails.cardNumber}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
        placeholder="Card Number"
      />
      <input
        type="text"
        name="expiryDate"
        value={paymentDetails.expiryDate}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
        placeholder="Expiry Date (MM/YY)"
      />
      <input
        type="text"
        name="cvv"
        value={paymentDetails.cvv}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
        placeholder="CVV"
      />
    </div>
  );
};

export default PaymentForm;