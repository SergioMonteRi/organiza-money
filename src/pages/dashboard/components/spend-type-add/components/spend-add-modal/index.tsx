import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';

import './styles.css';

type SpendRequest = {
  name: string;
};

const SpendAddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpendRequest>();

  const onSubmit = (formData: SpendRequest) => {
    console.log(formData);
    Swal.close();
  };

  return (
    <div className="spend-modal-container">
      <h1>Cadastre um tipo de gasto</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="spend-modal-form-container">
          <input
            {...register('name', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className="spend-modal-form-field-input"
            placeholder="Inserir tipo de gasto"
            name="name"
          />
          <div className="invalid-feedback d-block">{errors.name?.message}</div>

          <div className="spend-modal-form-button-container">
            <button className="spend-modal-form-button">Cadastrar</button>
            <button
              className="spend-modal-form-button bg-danger"
              type="button"
              onClick={() => Swal.close()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SpendAddModal;
