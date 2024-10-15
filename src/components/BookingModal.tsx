import React, { useState } from 'react';
import { Warehouse } from '../types/warehouse';
import { useWarehouse } from '../context/WarehouseContext';
import DocumentUpload from './DocumentUpload';
import PaymentForm from './PaymentForm';

interface BookingModalProps {
  warehouse: Warehouse;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ warehouse, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    startDate: '',
    endDate: '',
    spaceRequired: '',
  });
  const [documents, setDocuments] = useState<File[]>([]);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const { bookWarehouse } = useWarehouse();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleDocumentUpload = (files: File[]) => {
    setDocuments(files);
  };

  const handlePaymentDetailsChange = (details: any) => {
    setPaymentDetails(details);
  };

  const handleSubmit = async () => {
    try {
      await bookWarehouse({
        warehouseId: warehouse.id,
        ...bookingDetails,
        documents,
        paymentDetails,
      });
      setStep(4); // Move to confirmation step
    } catch (error) {
      console.error('Booking failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Book Warehouse: {warehouse.name}</h2>
        
        {step === 1 && (
          <div>
            <h3 className="text-xl mb-4">Step 1: Booking Details</h3>
            <input
              type="date"
              name="startDate"
              value={bookingDetails.startDate}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              placeholder="Start Date"
            />
            <input
              type="date"
              name="endDate"
              value={bookingDetails.endDate}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              placeholder="End Date"
            />
            <input
              type="number"
              name="spaceRequired"
              value={bookingDetails.spaceRequired}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
              placeholder="Space Required (sqft)"
            />
            <button onClick={() => setStep(2)} className="bg-blue-500 text-white p-2 rounded">Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl mb-4">Step 2: Document Upload</h3>
            <DocumentUpload onUpload={handleDocumentUpload} />
            <button onClick={() => setStep(3)} className="bg-blue-500 text-white p-2 rounded mt-4">Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl mb-4">Step 3: Payment</h3>
            <PaymentForm onChange={handlePaymentDetailsChange} />
            <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded mt-4">Confirm Booking</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-xl mb-4">Booking Confirmed!</h3>
            <p>Your warehouse booking has been successfully completed.</p>
            <button onClick={onClose} className="bg-blue-500 text-white p-2 rounded mt-4">Close</button>
          </div>
        )}

        <button onClick={onClose} className="mt-4 text-gray-500">Cancel</button>
      </div>
    </div>
  );
};

export default BookingModal;