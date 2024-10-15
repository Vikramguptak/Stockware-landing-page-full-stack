import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    company: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    taxId: '',
    warehouseCapacity: 0,
    fleetSize: 0,
    preferredPaymentMethod: ''
  });
  const { userRole, updateProfile } = useAuth();

  useEffect(() => {
    // Fetch user profile data here
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Profile</h2>
      <input
        type="text"
        name="company"
        value={profile.company}
        onChange={handleChange}
        placeholder="Company"
      />
      <input
        type="text"
        name="address"
        value={profile.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="city"
        value={profile.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="country"
        value={profile.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        type="text"
        name="zipCode"
        value={profile.zipCode}
        onChange={handleChange}
        placeholder="Zip Code"
      />
      <input
        type="text"
        name="taxId"
        value={profile.taxId}
        onChange={handleChange}
        placeholder="Tax ID"
      />
      {userRole === 'warehouse_owner' && (
        <input
          type="number"
          name="warehouseCapacity"
          value={profile.warehouseCapacity}
          onChange={handleChange}
          placeholder="Warehouse Capacity"
        />
      )}
      {userRole === 'logistics_provider' && (
        <input
          type="number"
          name="fleetSize"
          value={profile.fleetSize}
          onChange={handleChange}
          placeholder="Fleet Size"
        />
      )}
      <input
        type="text"
        name="preferredPaymentMethod"
        value={profile.preferredPaymentMethod}
        onChange={handleChange}
        placeholder="Preferred Payment Method"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;