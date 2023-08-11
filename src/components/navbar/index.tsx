import { Link, NavLink } from "react-router-dom";
import { CgEnter } from "react-icons/cg";

import { ReactComponent as Logo } from "assets/icons/logo.svg";

import "bootstrap/js/src/collapse.js";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-container">
          <Logo className="nav-logo-icon" />
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="easybill-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/">Recursos</NavLink>
            </li>
            <li className="nav-logout">
              <NavLink to="/">Sair</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-login-logout">
          <a href="#logout">Entar</a>
          <CgEnter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
