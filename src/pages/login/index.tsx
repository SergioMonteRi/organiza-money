import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// UTILS
import { getTokenData } from 'utils/token';
import { saveAuthData } from 'utils/storage';
import { LoginRequest } from 'utils/types/request-types';
import { requestBackendLogin } from 'utils/requests/login';

// AUTH
import { AuthContext } from 'contex/AuthContex';

// COMPONENTS

// ASSETS
import { ReactComponent as AppIcon } from 'assets/icons/app-icon.svg';
import FinancialGrowth from 'assets/images/financial-growth.png';

import './styles.css';

const Login = () => {
  const navigate = useNavigate();

  const { setAuthContextData } = useContext(AuthContext);

  const [hasLoginError, setHasLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit = (formData: LoginRequest) => {
    navigate('/dashboard');

    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        navigate('/dashboard');
      })
      .catch(() => {
        setHasLoginError(true);
      })
      .finally(() => {});
  };

  return (
    <div className="login-container">
      <div className="login-content-container">
        <Link className="login-icon-container" to={'/'}>
          <AppIcon className="nav-logo-icon" />
          <h4 className="nav-logo-text">Organiza Money</h4>
        </Link>

        {hasLoginError && (
          <div className="alert alert-danger">Erro ao tentar efetuar login</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-field-container">
            <label className="login-form-field-label" htmlFor="username">
              Email
            </label>
            <input
              {...register('username', {
                // required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`login-form-field-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>

          <div className="login-form-field-container">
            <label className="login-form-field-label" htmlFor="username">
              Senha
            </label>

            <input
              {...register('password', {
                // required: 'Campo obrigatório',
              })}
              type="password"
              className={`login-form-field-input  ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>

          <button className="login-form-button">Entrar</button>
        </form>

        <div className="login-separator-container">
          <hr />
          <span>OU</span>
          <hr />
        </div>

        <div className="login-create-account-container">
          <p>Não tem uma conta?</p>
          <Link to={'/'}>Registre-se aqui</Link>
        </div>
      </div>

      <div className="login-img-container">
        <div className="login-img-background bg-green-1">
          <div className="login-img-background bg-green-2">
            <div className="login-img-background bg-secondary">
              <img
                className="login-img"
                src={FinancialGrowth}
                alt="Crescimento financeiro"
              />
              <p>É hora de se organizar, visualizar e poupar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
