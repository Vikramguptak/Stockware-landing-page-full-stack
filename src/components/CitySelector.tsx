import React from 'react';

const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
  'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 
  'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 
  'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 
  'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 
  'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 
  'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 
  'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 
  'Kota', 'Guwahati', 'Chandigarh', 'Solapur', 'Hubli-Dharwad'
];

interface CitySelectorProps {
  onSelectCity: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onSelectCity }) => {
  return (
    <div className="mb-8">
      <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select a city
      </label>
      <select
        id="city-select"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        onChange={(e) => onSelectCity(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select a city</option>
        {indianCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;