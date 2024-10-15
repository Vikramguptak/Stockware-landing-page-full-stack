import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import WhatsAppLogin from '../components/WhatsAppLogin';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Email and password are required');
      return;
    }

    try {
      await login(email, password, role);
      navigateToDashboard();
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      // Here you would typically send the credential to your backend
      console.log('Google login success:', credentialResponse);
      // For now, we'll just navigate to the dashboard
      navigateToDashboard();
    } catch (error) {
      setError('Google login failed');
    }
  };

  const handleGoogleError = () => {
    setError('Google login failed');
  };

  const handleWhatsAppLogin = async (phoneNumber: string) => {
    try {
      // Implement WhatsApp login logic here
      console.log('WhatsApp login:', phoneNumber);
      navigateToDashboard();
    } catch (error) {
      setError('WhatsApp login failed');
    }
  };

  const navigateToDashboard = () => {
    switch (role) {
      case 'warehouse_owner':
        navigate('/warehouse-owner/dashboard');
        break;
      case 'logistics_provider':
        navigate('/logistics-provider/dashboard');
        break;
      default:
        navigate('/customer/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Stockware
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please select your role and sign in
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div>
            <label htmlFor="role" className="sr-only">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="customer">Customer</option>
              <option value="warehouse_owner">Warehouse Owner</option>
              <option value="logistics_provider">Logistics Provider</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
            <WhatsAppLogin onLogin={handleWhatsAppLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;