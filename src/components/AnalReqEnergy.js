import { useState } from 'react';

const AnalReqEnergy = ({ selectedCountries }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      'http://localhost:3000/energy/elecGenSource?countryCode=JP,kr,us,gb',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ countries: selectedCountries }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data.message);
      })
      .catch((error) => console.error('Error: ', error));
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className='mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Get report
      </button>
      {response && <div className='mt-3 text-sm text-gray-600'>John</div>}
    </div>
  );
};

export default AnalReqEnergy;
