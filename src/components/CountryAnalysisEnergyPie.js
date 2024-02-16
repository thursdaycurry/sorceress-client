import 'chart.js/auto';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const EnergySourcePieChart = ({ data }) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data.map((countryData, index) => {
        const { name, ...energySources } = countryData;

        const chartData = {
          labels: Object.keys(energySources),
          datasets: [
            {
              label: name,
              data: Object.values(energySources).map((value) =>
                parseFloat(value)
              ),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FF6384',
                '#C9CBCF',
                '#36A2EB',
              ],
              hoverOffset: 4,
            },
          ],
        };

        return (
          <div key={index} className='m-4' style={{ width: '300px' }}>
            <h3 className='text-center text-sm font-medium'>
              {name}'s Energy Sources
            </h3>
            <Pie data={chartData} />
          </div>
        );
      })}
    </div>
  );
};

export default EnergySourcePieChart;
