import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

const PieChart = (props: Props) => {
  const { labels, name, series } = props;

  return (
    <div className="pie-chart-container dashboard-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        series={series}
      />
    </div>
  );
};

export default PieChart;
