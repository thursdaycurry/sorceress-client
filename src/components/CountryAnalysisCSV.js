import { useState } from 'react';

const CountryAnalysisCSV = (selectedCountries) => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestUrl = `${process.env.REACT_APP_API_URL}/energy/elecGenSourceCSV?countryCode=${selectedCountries.selectedCountries}`;

    try {
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/zip',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data. Please try again.');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `analysis_country_energy_${selectedCountries.selectedCountries}.zip`; // Set the desired filename
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error:', error.message);
      setResponse('Failed to fetch data. Please try again.');
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className='mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
    >
      Download CSV
    </button>
  );
};

export default CountryAnalysisCSV;
