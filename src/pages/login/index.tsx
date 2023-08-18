import { Link } from 'react-router-dom';

import GoogleIcon from 'assets/icons/google.png';
import { ReactComponent as RocketImg } from 'assets/images/rocket.svg';

import './styles.css';
import ButtonLink from 'components/button-link';

const Login = () => {
  return (
    <div className="page-container">
      <div className="page-content-container ">
        <h1 className="page-main-text">
          Embarque conosco em sua jornada para organização financeira.
        </h1>

        <div className="login-create-account-container">
          <p className="login-create-account-text">Novo por aqui?</p>
          <Link
            className="login-create-account-text login-create-account-link"
            to={'/'}
          >
            Crie uma conta.
          </Link>
        </div>

        <form action="">
          <div className="login-form-field-container">
            <label className="login-form-field-label" htmlFor="">
              Email
            </label>
            <input
              className="login-form-field-input"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="login-form-field-container">
            <label className="login-form-field-label" htmlFor="">
              Senha
            </label>
            <input
              className="login-form-field-input"
              type="password"
              name=""
              id=""
            />
          </div>

          <div className="login-form-btn-container">
            <ButtonLink url="/" text="Entrar" />
            <button className="login-form-btn-google-login">
              <img
                className="login-form-btn-google-icon"
                src={GoogleIcon}
                alt="Google icon"
              />
              Login com Google
            </button>
          </div>
        </form>
      </div>
      <div className="login-img-container">
        <div className="login-img-animation">
          <RocketImg />
        </div>
      </div>
    </div>
  );
};

export default Login;
