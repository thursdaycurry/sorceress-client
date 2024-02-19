import { useState } from 'react';
import CountryAnalysisEnergy from './CountryAnalysisEnergy';
import CountrySelector from './CountrySelector';

const CountryAnalysis = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountriesSelect = (countries) => {
    setSelectedCountries(countries);
  };

  return (
    <div className='mx-10'>
      <h1 className='text-xl font-medium my-7'>
        Electricity Generation Sources Analysis
      </h1>

      <div className='my-5'>
        <ol>
          <li>1. Select one or more countries</li>
          <li>2. Click 'Get Report' Button</li>
        </ol>
      </div>
      <CountrySelector onCountriesSelect={handleCountriesSelect} />
      <CountryAnalysisEnergy selectedCountries={selectedCountries.join(',')} />
    </div>
  );
};
export default CountryAnalysis;
