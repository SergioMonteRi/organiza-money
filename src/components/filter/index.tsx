import FlatPicker from 'react-flatpickr';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

import 'flatpickr/dist/themes/dark.css';
import './styles.css';

flatpickrLib.localize(Portuguese);

const Filter = () => {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container dashboard-card">
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

      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="">Male</option>
        <option value="">Female</option>
        <option value="">Other</option>
      </select>
    </div>
  );
};

export default Filter;
