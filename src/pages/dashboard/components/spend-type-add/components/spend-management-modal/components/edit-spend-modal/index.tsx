import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';

import Swal from 'sweetalert2';

import './styles.css';
import { useState } from 'react';

type Props = {
  name: string;
  id: number;
};

type EditSpend = {
  name: string;
};

const EditSpendModal = (props: Props) => {
  const [newSpendName, setNewSpendName] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditSpend>();

  const onSubmit = (formData: EditSpend) => {
    console.log(formData);
    Swal.close();
  };

  return (
    <div className="spend-modal-container">
      <h1>Edição de tipo de gasto</h1>
      <div className="edit-spend-modal-name-change">
        <h2>{props.name}</h2>
        <BsArrowRight />
        <h2>{newSpendName}</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="spend-modal-form-container">
          <input
            {...register('name', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className="spend-modal-form-field-input"
            placeholder="Inserir novo nome para seu gasto"
            name="name"
            onChange={(e) => setNewSpendName(e.target.value)}
            maxLength={20}
          />
          <div className="invalid-feedback d-block">{errors.name?.message}</div>

          <div className="spend-modal-form-button-container">
            <button className="spend-modal-form-button">Concluir</button>
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

export default EditSpendModal;
