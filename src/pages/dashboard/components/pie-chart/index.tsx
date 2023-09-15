import ReactApexChart from 'react-apexcharts';

// HELPERS
import { buildPieChartConfig } from './helpers';

// STYLES
import './styles.css';

type Props = {
  name: string;
  labels?: string[];
  series?: number[];
};

const PieChart = ({ labels = [], name, series = [] }: Props) => {
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
