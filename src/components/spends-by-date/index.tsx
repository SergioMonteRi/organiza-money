import './styles.css';

import BarChart from 'components/bar-chart';

const SpendsByDate = () => {
  return (
    <div className="spends-by-date-container dashboard-card">
      <div className="spends-by-date-information">
        <div>
          <h4 className="spends-by-date-title">Evolução dos gastos</h4>
          <span className="spends-by-date-period">01/01/2017 a 31/01/2017</span>
        </div>

        <div className="spends-by-date-quantity-container">
          <h2 className="spends-by-date-quantity">R$ 464,789.00</h2>
          <span className="spends-by-date-quantity-label">
            Gastos no período
          </span>
        </div>
      </div>

      <BarChart />
    </div>
  );
};

export default SpendsByDate;
