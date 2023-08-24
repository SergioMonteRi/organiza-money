import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as RocketImg } from 'assets/images/rocket.svg';

import './styles.css';
import { useForm } from 'react-hook-form';
import { LoginRequest } from 'utils/types/request-types';
import ButtonRegular from 'components/button-regular';
import { requestBackendLogin } from 'utils/requests/login';
import { useContext, useEffect, useState } from 'react';
import LoginPageAnimation from 'components/loading-page-animation';
import { saveAuthData } from 'utils/storage';
import { AuthContext } from 'contex/AuthContex';
import { getTokenData } from 'utils/token';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from 'assets/icons/google.png';
import { requestGoogleUserData } from 'utils/requests/user';
import { GoogleUserDataResponse } from 'utils/types/response-types';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAuthContextData } = useContext(AuthContext);
  const [googleLoginResponse, setGoogleLoginResponse] =
    useState<
      Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>
    >();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleLoginResponse(codeResponse),
  });

  const onSubmit = (formData: LoginRequest) => {
    navigate('/dashboard');

    setIsLoading(true);

    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        navigate('/dashboard');
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });

    navigate('/dashboard');
  };

  useEffect(() => {
    if (googleLoginResponse?.access_token) {
      setIsLoading(true);

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
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [googleLoginResponse, navigate, setAuthContextData]);

  return (
    <div className="page-container">
      {isLoading ? (
        <LoginPageAnimation />
      ) : (
        <>
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login-form-field-container">
                <input
                  {...register('username', {
                    // required: 'Campo obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                  type="text"
                  className={`login-form-field-input form-control base-input ${
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
                <input
                  {...register('password', {
                    // required: 'Campo obrigatório',
                  })}
                  type="password"
                  className={`login-form-field-input form-control base-input ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  placeholder="Senha"
                  name="password"
                />
                <div className="invalid-feedback d-block">
                  {errors.password?.message}
                </div>
              </div>

              <div className="login-form-btn-container">
                <ButtonRegular text="Entrar" />
              </div>
            </form>

            <button
              className="login-form-btn-google-login"
              onClick={() => googleLogin()}
            >
              <img
                className="login-form-btn-google-icon"
                src={GoogleIcon}
                alt="Google icon"
              />
              Login com Google
            </button>
          </div>
          <div className="login-img-container">
            <div className="login-img-animation">
              <RocketImg />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
