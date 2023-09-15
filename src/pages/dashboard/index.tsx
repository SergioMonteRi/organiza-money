import { useEffect, useMemo, useState } from 'react';

// 3RD PARTY
import Swal from 'sweetalert2';
import { AxiosRequestConfig } from 'axios';

// UTILS
import {
  FilterData,
  PieChartConfig,
  SalesByStoreData,
} from 'utils/types/types';
import { buildFilterParams, requestBackend } from 'utils/requests/request';
import { buildSalesByStoreChart } from 'utils/requests/formatters';

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

const Dashboard = () => {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();

  const requestParams = useMemo(
    () => buildFilterParams(filterData),
    [filterData]
  );

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/by-store',
      params: requestParams,
    };

    requestBackend(params).then((response) => {
      const spendsByDateResponse: SalesByStoreData[] = response.data;
      const newSpendsByType = buildSalesByStoreChart(spendsByDateResponse);
      setSalesByStore(newSpendsByType);
    });
  }, [requestParams]);

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
        <Filter onFilterChange={onFilterChange} />
        <SpendsByDate filterData={filterData} />
        <div className="spend-overview-container">
          <SpendSummary />
          <PieChart
            name="Gastos"
            labels={salesByStore?.labels}
            series={salesByStore?.series}
          />
        </div>
        <SpendTable filterData={filterData} />
      </div>
    </div>
  );
};

export default Dashboard;
