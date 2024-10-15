import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert('Password reset email sent');
    } catch (error) {
      console.error('Error requesting password reset:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;