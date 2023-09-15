import { useState } from 'react';
import FlatPicker from 'react-flatpickr';
import Select, { SingleValue } from 'react-select';

// 3RD PARTY
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

// TYPES
import { FilterData, GenderData } from 'utils/types/types';

// STYLES
import 'flatpickr/dist/themes/material_green.css';
import './styles.css';

flatpickrLib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

type Options = {
  value: string;
  label: string;
};

const Filter = ({ onFilterChange }: Props) => {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<GenderData>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (options: SingleValue<Options>) => {
    if (options?.value) {
      const selectedGender = options.value as GenderData;
      setGender(selectedGender);
      onFilterChange({ dates, gender: selectedGender });
    }
  };

  const options: Options[] = [
    { value: 'MALE', label: 'Masculino' },
    { value: 'FEMALE', label: 'Feminino' },
    { value: 'OTHER', label: 'Outros' },
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
        onChange={(options) => onChangeGender(options)}
      />
    </div>
  );
};

export default Filter;
