import { useState } from 'react';
import CountryAnalysisEnergy from './CountryAnalysisEnergy';
import CountrySelector from './CountrySelector';

const CountryAnalysis = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountriesSelect = (countries) => {
    setSelectedCountries(countries);
  };

  return (
    <div className='mx-10 my-10'>
      <h1 className='text-xl font-medium mt-7'>
        Electricity Generation Sources Analysis
      </h1>
      <div className='text-gray-400'>
        This page shows a country's energy portfolio of various resources such
        as fossil fuels, nuclear, solar, wind, hydroelectricity, tide and wave,
        geothermal, and biomass and waste.
      </div>

      <div className='my-5'>
        <ol>
          <li>1. Select one or more countries</li>
          <li>2. Click 'Get Report' Button</li>
          <li>3. Download CSV data</li>
        </ol>
      </div>
      <CountrySelector onCountriesSelect={handleCountriesSelect} />
      <CountryAnalysisEnergy selectedCountries={selectedCountries.join(',')} />
    </div>
  );
};
export default CountryAnalysis;
