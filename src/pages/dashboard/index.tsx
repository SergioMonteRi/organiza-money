// COMPONENTS
import Filter from './components/filter';
import PieChart from './components/pie-chart';
import SpendSummary from './components/spend-summary';
import NavigationBar from 'components/navigation-bar';
import SpendsByDate from './components/spends-by-date';
import SpendTypeAdd from './components/spend-type-add';
import ProfileCard from './components/profile-card';
import SpendTable from './components/spend-table';

// STYLES
import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashobard-container">
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
