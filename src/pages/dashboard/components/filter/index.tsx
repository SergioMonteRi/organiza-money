import FlatPicker from 'react-flatpickr';
import Select from 'react-select';

import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

import 'flatpickr/dist/themes/material_green.css';
import './styles.css';

flatpickrLib.localize(Portuguese);

const Filter = () => {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  const options = [
    { value: 'chocolate', label: 'Mercado' },
    { value: 'strawberry', label: 'Farmácia' },
    { value: 'vanilla', label: 'Faculdade' },
  ];

  return (
    <div className="dashboard-card filter-container">
      <FlatPicker
        className="filter-input"
        placeholder="Selecione um período"
        onChange={onChangeDate}
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2,
        }}
      />

      <Select
        options={options}
        classNamePrefix="filter-input"
        placeholder="Selecione um tipo de gasto"
      />
    </div>
  );
};

export default Filter;
