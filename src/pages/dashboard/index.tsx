import { AuthContext } from 'contex/AuthContex';
import { useContext, useEffect } from 'react';
import { requestGoogleUserData } from 'utils/requests/user';
import { getAuthData } from 'utils/storage';
import { GoogleUserDataResponse } from 'utils/types/response-types';

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
    <div>
      {authContextData.tokenData?.user_name}
      <img src={authContextData.tokenData?.picture} alt={''} />
    </div>
  );
};

export default Dashboard;
