import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const TwoFactorAuth: React.FC = () => {
  const [secret, setSecret] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [token, setToken] = useState('');
  const { enable2FA, verify2FA } = useAuth();

  const handleEnable2FA = async () => {
    try {
      const result = await enable2FA();
      setSecret(result.secret);
      setQrCodeUrl(result.qrCodeUrl);
    } catch (error) {
      console.error('Error enabling 2FA:', error);
    }
  };

  const handleVerify2FA = async () => {
    try {
      await verify2FA(token);
      alert('2FA enabled successfully');
    } catch (error) {
      console.error('Error verifying 2FA:', error);
    }
  };

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      {!secret && (
        <button onClick={handleEnable2FA}>Enable 2FA</button>
      )}
      {secret && (
        <div>
          <p>Scan this QR code with your authenticator app:</p>
          <img src={qrCodeUrl} alt="2FA QR Code" />
          <p>Or enter this secret manually: {secret}</p>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter token"
          />
          <button onClick={handleVerify2FA}>Verify</button>
        </div>
      )}
    </div>
  );
};

export default TwoFactorAuth;