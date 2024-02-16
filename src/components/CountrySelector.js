import React, { useEffect, useState } from 'react';

const CountrySelector = ({ onCountriesSelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    // 국가 코드를 불러오는 GET 요청
    fetch('http://localhost:3000/country')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleChange = (event) => {
    const value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCountries(value);
    // onCountriesSelect(value);
    console.log(value);
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
