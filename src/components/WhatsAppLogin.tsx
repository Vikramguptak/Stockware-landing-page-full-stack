import React, { useState } from 'react';

interface WhatsAppLoginProps {
  onLogin: (phoneNumber: string) => void;
}

const WhatsAppLogin: React.FC<WhatsAppLoginProps> = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');

  const handleSendOTP = () => {
    // Here you would typically call an API to send the OTP via WhatsApp
    console.log('Sending OTP to', phoneNumber);
    setShowOTP(true);
  };

  const handleVerifyOTP = () => {
    // Here you would typically verify the OTP with your backend
    console.log('Verifying OTP', otp);
    onLogin(phoneNumber);
  };

  return (
    <div>
      {!showOTP ? (
        <div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="WhatsApp number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSendOTP}
            className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Login with WhatsApp
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleVerifyOTP}
            className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppLogin;