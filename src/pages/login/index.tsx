import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';

// UTILS
import { getTokenData } from 'utils/token';
import { saveAuthData } from 'utils/storage';
import { LoginRequest } from 'utils/types/request-types';
import { requestBackendLogin } from 'utils/requests/login';
import { requestGoogleUserData } from 'utils/requests/user';
import { GoogleUserDataResponse } from 'utils/types/response-types';

// AUTH
import { AuthContext } from 'contex/AuthContex';

// COMPONENTS

// ASSETS
import GoogleIcon from 'assets/icons/google.png';
import { ReactComponent as AppIcon } from 'assets/icons/app-icon.svg';
import FinancialGrowth from 'assets/images/financial-growth.png';

import './styles.css';

const Login = () => {
  const navigate = useNavigate();
  const { setAuthContextData } = useContext(AuthContext);
  const [googleLoginResponse, setGoogleLoginResponse] =
    useState<
      Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>
    >();
  const [hasLoginError, setHasLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleLoginResponse(codeResponse),
  });

  const onSubmit = (formData: LoginRequest) => {
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

  useEffect(() => {
    if (googleLoginResponse?.access_token) {
      requestGoogleUserData(googleLoginResponse.access_token)
        .then((response) => {
          const userData: GoogleUserDataResponse = response.data;

          saveAuthData({
            access_token: googleLoginResponse.access_token,
            expires_in: googleLoginResponse.expires_in,
            scope: googleLoginResponse.scope,
            token_type: googleLoginResponse.token_type,
            userFirstName: userData.given_name,
            userId: 1,
            googleUser: true,
          });

          setAuthContextData({
            authenticated: true,
            tokenData: {
              authorities: ['ROLE_OPERATOR'],
              user_name: userData?.given_name,
              exp: googleLoginResponse.expires_in,
              name: userData.name,
              picture: userData.picture,
            },
          });

          navigate('/dashboard');
        })
        .finally(() => {});
    }
  }, [googleLoginResponse, navigate, setAuthContextData]);

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
                required: 'Campo obrigatório',
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
                required: 'Campo obrigatório',
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

        <button
          className="login-form-google-button"
          onClick={() => googleLogin()}
        >
          <img
            className="login-form-google-icon"
            src={GoogleIcon}
            alt="Google icon"
          />
          <span>Entrar com Google</span>
        </button>
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
