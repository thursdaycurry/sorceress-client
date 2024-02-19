import React, { useEffect, useState } from 'react';

const CountrySelector = ({ onCountriesSelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/country`;
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

  const toggleCountrySelection = (code) => {
    const index = selectedCountries.indexOf(code);
    const newSelectedCountries = [...selectedCountries];
    if (index === -1) {
      newSelectedCountries.push(code);
    } else {
      newSelectedCountries.splice(index, 1);
    }
    setSelectedCountries(newSelectedCountries);
    onCountriesSelect(newSelectedCountries);
  };

  return (
    <div>
      <ul className='flex flex-wrap justify-start items-center'>
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => toggleCountrySelection(country.code)}
            className={`cursor-pointer rounded-full border px-2 py-1 m-1 text-sm transition-colors duration-300 text-xs ${
              selectedCountries.includes(country.code)
                ? 'bg-blue-500 text-white border-blue-700'
                : 'bg-sky-50 border-sky-100 text-sky-700 hover:bg-sky-200'
            }`}
            title={country.name}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelector;
