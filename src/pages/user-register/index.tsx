import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import { UserRegisterRequest } from 'utils/types/request-types';
import { requestBackendUserRegister } from 'utils/requests/login';

// ASSETS
import { ReactComponent as AppIcon } from 'assets/icons/app-icon.svg';
import FormFooter from 'components/form-footer';

const UserRegister = () => {
  const navigate = useNavigate();

  const [hasLoginError, setHasLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterRequest>();

  const onSubmit = (formData: UserRegisterRequest) => {
    requestBackendUserRegister(formData)
      .then(() => {
        navigate('/login');
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

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="login-form-field-container mb-3">
            <label className="login-form-field-label" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`login-form-field-input ${
                errors.email ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="email"
              autoComplete="false"
            />
            <div className="invalid-feedback d-block">
              {errors.email?.message}
            </div>
          </div>

          <div className="login-form-field-container mb-3">
            <label className="login-form-field-label" htmlFor="firstName">
              Primeiro nome
            </label>

            <input
              {...register('firstName', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`login-form-field-input  ${
                errors.firstName ? 'is-invalid' : ''
              }`}
              placeholder="Primeiro nome"
              name="firstName"
              autoComplete="false"
            />
            <div className="invalid-feedback d-block">
              {errors.firstName?.message}
            </div>
          </div>

          <div className="login-form-field-container mb-3">
            <label className="login-form-field-label" htmlFor="lastName">
              Último nome
            </label>

            <input
              {...register('lastName', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`login-form-field-input  ${
                errors.lastName ? 'is-invalid' : ''
              }`}
              placeholder="Último nome"
              name="lastName"
              autoComplete="false"
            />
            <div className="invalid-feedback d-block">
              {errors.lastName?.message}
            </div>
          </div>

          <div className="login-form-field-container mb-3">
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
              autoComplete="new-password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>

          <button className="login-form-button">Registrar-se</button>
        </form>

        <FormFooter
          textContent="Já tem uma conta? "
          textAction="Faça login aqui"
          redirectURL="/login"
        />
      </div>
    </div>
  );
};

export default UserRegister;
