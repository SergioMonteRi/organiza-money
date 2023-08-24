import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

import './styles.css';

const initialData = [
  { x: '2020-01-05', y: 10 },
  { x: '2020-02-05', y: 20 },
  { x: '2020-03-05', y: 30 },
  { x: '2020-04-05', y: 40 },
];

const BarChart = () => {
  return (
    <div className="bar-chart-container">
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'Vendas', data: initialData }]}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default BarChart;
