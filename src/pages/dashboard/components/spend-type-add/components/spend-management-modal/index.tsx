import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import EditSpendModal from './components/edit-spend-modal';

import mock from './mock.json';

import './styles.css';

type SpendType = {
  name: string;
  id: number;
};

const SpendManagementModal = () => {
  const MySwal = withReactContent(Swal);

  const onClickManagementSpend = (spend: SpendType) => {
    MySwal.fire({
      html: <EditSpendModal name={spend.name} id={spend.id} />,
      showConfirmButton: false,
    });
  };

  const onClickDeleteSpend = (spend: SpendType) => {
    Swal.fire({
      title: `Deseja excluir: ${spend.name} ?`,
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      confirmButtonColor: '#29e589',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d35c5c',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deletado com sucesso',
          timer: 4000,
          icon: 'success',
          confirmButtonColor: '#29e589',
        });
      }
    });
  };

  return (
    <div className="spend-management-modal-container">
      <h1>Gerencie seus tipos de gastos</h1>

      {mock.map((spend) => (
        <div key={spend.id} className="spend-management-modal-item-container">
          <p>{spend.name}</p>
          <div className="spend-management-modal-icons-container">
            <AiOutlineEdit
              className="spend-management-modal-icons-edit"
              onClick={() => onClickManagementSpend(spend)}
            />
            <AiOutlineDelete
              className="spend-management-modal-icons-delete"
              onClick={() => onClickDeleteSpend(spend)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpendManagementModal;
