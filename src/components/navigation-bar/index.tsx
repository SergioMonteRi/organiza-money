import { Link, NavLink } from 'react-router-dom';
import { CgEnter } from 'react-icons/cg';
import { TfiWallet } from 'react-icons/tfi';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

import 'bootstrap/js/src/collapse.js';
import './styles.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid nav-data-container">
        <Link to="/" className="nav-logo-container">
          <TfiWallet className="nav-logo-icon page-link" />
          <h4 className="nav-logo-text page-link">Organiza Money</h4>
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
          <MenuIcon />
        </button>

        <div className="collapse navbar-collapse" id="easybill-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" className="page-link">
                Sobre
              </NavLink>
            </li>
            <li className="navbar-login-link">
              <NavLink to="/login" className="page-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-login-logout">
          <a href="#logout" className="page-link">
            Log in
          </a>
          <CgEnter className="page-link" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
