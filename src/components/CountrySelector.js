import React, { useEffect, useState } from 'react';

const CountrySelector = ({ onCountriesSelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const url = `${process.env.REACT_APP_HOST}/country`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (event) => {
    const value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCountries(value);
    // Uncomment the next line to use the callback when countries are selected
    // onCountriesSelect(value);
  };

  return (
    <div className='mb-4'>
      <h2>
        <label
          htmlFor='country-selector'
          className='block text-sm font-medium text-gray-700'
        >
          국가 선택
        </label>
      </h2>

      <select
        id='country-selector'
        multiple={true}
        value={selectedCountries}
        onChange={handleChange}
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        style={{ height: '200px' }}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
