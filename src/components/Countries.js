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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.code}>
              <td>{country.name}</td>
              <td>{country.code}</td>
              <td>{country.region}</td>
              <td>{country.sub_region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Countries;
