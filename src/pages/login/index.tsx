import { Link } from 'react-router-dom';

import GoogleIcon from 'assets/icons/google.png';

import './styles.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-header-text">O dinheiro foi para o espaço?</h1>
      <h1 className="login-header-text">Vamos atrás dele.</h1>

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
          <input className="login-form-field-input" type="text" name="" id="" />
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
          <button className="login-form-btn-login">Entrar</button>
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
  );
};

export default Login;
