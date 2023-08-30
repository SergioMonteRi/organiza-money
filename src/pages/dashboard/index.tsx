import { useContext, useEffect } from 'react';

// AUTH
import { AuthContext } from 'contex/AuthContex';

// UTILS
import { getAuthData } from 'utils/storage';
import { requestGoogleUserData } from 'utils/requests/user';
import { GoogleUserDataResponse } from 'utils/types/response-types';

// COMPONENTS
import Filter from './components/filter';
import PieChart from './components/pie-chart';
import SpendSummary from './components/spend-summary';
import SpendsByDate from './components/spends-by-date';

// STYLES
import './styles.css';

const Dashboard = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (getAuthData().googleUser) {
      requestGoogleUserData(getAuthData().access_token).then((response) => {
        const userData: GoogleUserDataResponse = response.data;

        setAuthContextData({
          authenticated: true,
          tokenData: {
            authorities: ['ROLE_OPERATOR'],
            user_name: userData?.given_name,
            exp: getAuthData().expires_in,
            name: userData.name,
            picture: userData.picture,
          },
        });
      });
    }
  }, [setAuthContextData]);

  return (
    <div className="dashobard-container">
      <div>
        {authContextData.tokenData?.user_name}
        <img src={authContextData.tokenData?.picture} alt={''} />
      </div>
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
    </div>
  );
};

export default Dashboard;
