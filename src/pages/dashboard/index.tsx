// COMPONENTS
import Filter from './components/filter';
import PieChart from './components/pie-chart';
import SpendTable from './components/spend-table';
import ProfileCard from './components/profile-card';
import SpendSummary from './components/spend-summary';
import NavigationBar from 'components/navigation-bar';
import SpendsByDate from './components/spends-by-date';
import SpendTypeAdd from './components/spend-type-add';

// ASSETS
import coin from 'assets/images/coin.png';

// STYLES
import './styles.css';
import Swal from 'sweetalert2';

const Dashboard = () => {
  return (
    <div className="dashobard-container">
      <div
        className="dashboard-add-spend"
        onClick={() =>
          Swal.fire({
            title: 'Adicionar gasto',
          })
        }
      >
        <img src={coin} alt="" />
      </div>

      <NavigationBar />
      <div className="dashboard-content">
        <ProfileCard />
        <SpendTypeAdd />
        <Filter />
        <SpendsByDate />
        <div className="spend-overview-container">
          <SpendSummary />
          <PieChart
            name="Gastos"
            labels={['Mercado', 'Farmácia', 'Escola']}
            series={[25, 50, 30]}
          />
        </div>
        <SpendTable />
      </div>
    </div>
  );
};

export default Dashboard;
