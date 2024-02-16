import { useState } from 'react';
import CountryAnalysisEnergy from './CountryAnalysisEnergy';
import CountrySelector from './CountrySelector';

const CountryAnalysis = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountriesSelect = (countries) => {
    setSelectedCountries(countries);
  };

  return (
    <div>
      <CountrySelector onCountriesSelect={handleCountriesSelect} />
      <CountryAnalysisEnergy selectedCountries={selectedCountries.join(',')} />
    </div>
  );
};
export default CountryAnalysis;
