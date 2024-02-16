import { useState } from 'react';
import EnergySourcePieChart from './CountryAnalysisEnergyPie';
import CountryAnalysisEnergyTable from './CountryAnalysisEnergyTable';

const CountryAnalysisEnergy = ({ selectedCountries }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Ensure there's a check for selectedCountries to not be empty
    if (!selectedCountries) {
      console.log('No countries selected');
      setResponse('Please select at least one country.');
      return; // Early return if no countries are selected
    }

    const url = `${process.env.REACT_APP_API_URL}/energy/elecGenSource?countryCode=${selectedCountries}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (setResponse(data === null || Object.keys(data).length === 0)) {
          setResponse(null);
        } else {
          setResponse(data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponse('Failed to fetch data. Please try again.');
      });
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className='mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Get Report
      </button>
      {response && (
        <div className='mt-3 text-sm text-gray-600'>
          {response.length ? (
            <div>
              <CountryAnalysisEnergyTable data={response} />
              <EnergySourcePieChart data={response} />
            </div>
          ) : (
            <p>no data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryAnalysisEnergy;
