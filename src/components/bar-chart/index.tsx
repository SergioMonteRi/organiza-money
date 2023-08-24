import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

import './styles.css';

const initialData = [
  {
    x: '2023-01-01',
    y: 45,
  },
  {
    x: '2023-02-01',
    y: 39,
  },
  {
    x: '2023-03-01',
    y: 25,
  },
  {
    x: '2023-04-01',
    y: 35,
  },
  {
    x: '2023-05-01',
    y: 20,
  },
  {
    x: '2023-06-01',
    y: 50,
  },
  {
    x: '2023-07-01',
    y: 30,
  },
];

const BarChart = () => {
  return (
    <div className="bar-chart-container">
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'Mercado', data: initialData }]}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default BarChart;
