const CountryAnalysisEnergyTable = ({ data }) => {
  const headers = [
    'Name',
    'Fossil Fuels',
    'Nuclear',
    'Solar',
    'Wind',
    'Hydroelectricity',
    'Tide and Wave',
    'Geothermal',
    'Biomass and Waste',
  ];

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200 shadow-md'>
        <thead className='bg-gray-50'>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, valueIndex) => (
                <td
                  key={valueIndex}
                  className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountryAnalysisEnergyTable;
