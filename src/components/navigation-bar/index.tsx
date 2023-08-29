import { Link, NavLink } from 'react-router-dom';

import { CgMenuGridO } from 'react-icons/cg';
import { ReactComponent as AppIcon } from 'assets/icons/app-icon.svg';

import 'bootstrap/js/src/collapse.js';
import './styles.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'contex/AuthContex';
// import { removeAuthData } from 'utils/storage';
import { isAuthenticated } from 'utils/auth';
import { getTokenData } from 'utils/token';

const NavigationBar = () => {
  const { setAuthContextData } = useContext(AuthContext);
  // const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  // const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault();
  //   removeAuthData();
  //   setAuthContextData({
  //     authenticated: false,
  //   });
  //   navigation('/');
  // };

  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid nav-data-container">
        <Link to="/" className="nav-logo-container">
          <AppIcon className="nav-logo-icon" />
          <h4 className="nav-logo-text">Organiza Money</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#easybill-navbar"
          aria-controls="easybill-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <CgMenuGridO className="nav-menu-icon" />
        </button>

        <div className="collapse navbar-collapse" id="easybill-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/">Sobre</NavLink>
            </li>

            <li>
              <NavLink to="/">Propósito</NavLink>
            </li>
            {/* 
            {authContextData.authenticated ? (
              <li>
                <a
                  href="#logout"
                  className="page-link"
                  onClick={handleLogoutClick}
                >
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <NavLink to="/login" className="page-link">
                  Login
                </NavLink>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
