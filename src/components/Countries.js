import { useEffect, useState } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/country`);

        console.log(response);
        if (!response.ok) {
          throw new Error(`fail to fetch`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('test');

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p> Error: {error}</p>}

      <table className='min-w-full table-auto border-collapse border-top border-red-200 mt-10'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='border border-gray-300 px-4 text-gray-600'>Name</th>
            <th className='border border-gray-300 px-4 text-gray-600'>Code</th>
            <th className='border border-gray-300 px-4 text-gray-600'>
              Region
            </th>
            <th className='border border-gray-300 px-4 text-gray-600'>
              Population
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.code} className='bg-gray-100'>
              <td className='border border-gray-200 px-2 py-2 text-xs'>
                {country.name}
              </td>
              <td className='border border-gray-200 px-2 py-2 text-xs'>
                <a
                  href={`https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#${country.code}`}
                >
                  {country.code} 🔗
                </a>
              </td>

              <td className='border border-gray-200 px-2 py-2 text-xs'>
                {country.region}
              </td>
              <td className='border border-gray-200 px-2 py-2 text-xs'>
                {country.sub_region}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Countries;
