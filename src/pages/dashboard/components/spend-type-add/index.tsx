import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './styles.css';
import SpendAddModal from './components/spend-add-modal';

const SpendTypeAdd = () => {
  const MySwal = withReactContent(Swal);

  const onClickAddSpend = () => {
    MySwal.fire({
      html: <SpendAddModal />,
      showConfirmButton: false,
    });
  };

  return (
    <div className="spend-type-add-container dashboard-card">
      <button className="spend-type-add-button" onClick={onClickAddSpend}>
        Adicionar tipos de gastos
      </button>
      <button className="spend-type-add-button" onClick={onClickAddSpend}>
        Gerenciar tipos de gastos
      </button>
    </div>
  );
};

export default SpendTypeAdd;
