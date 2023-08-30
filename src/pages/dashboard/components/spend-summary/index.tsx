import SpendSummaryCard from './spend-summary-card';

import { ReactComponent as AverageIcon } from 'assets/icons/average.svg';
import { ReactComponent as MaxIcon } from 'assets/icons/max.svg';
import { ReactComponent as MinIcon } from 'assets/icons/min.svg';

import './styles.css';

const SpendSummary = () => {
  return (
    <div className="spend-summary-container">
      <SpendSummaryCard icon={<AverageIcon />} label="Média" value="1234,50" />
      <SpendSummaryCard icon={<MaxIcon />} label="Máximo" value="1234,50" />
      <SpendSummaryCard icon={<MinIcon />} label="Média" value="1234,50" />
    </div>
  );
};

export default SpendSummary;
