import { useEffect, useState } from 'react';
import FlatPicker from 'react-flatpickr';
import Select, { SingleValue } from 'react-select';

// 3RD PARTY
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

// TYPES
import { FilterData, SpendType } from 'utils/types/types';

// STYLES
import 'flatpickr/dist/themes/material_green.css';
import './styles.css';

flatpickrLib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [dates, setDates] = useState<Date[]>([]);
  const [expenseType, setExpenseType] = useState<SpendType>();

  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, expenseType: expenseType?.id });
    }
  };

  const onChangeSpendType = (options: SingleValue<SpendType>) => {
    const spendTypeOption: SpendType = options as SpendType;
    setExpenseType(spendTypeOption);
    onFilterChange({ dates, expenseType: spendTypeOption?.id });
  };

  useEffect(() => {}, []);

  const options: SpendType[] = [
    { id: 1, name: 'Mercado' },
    { id: 2, name: 'Escola' },
    { id: 3, name: 'Faculdade' },
    { id: 4, name: 'LOL' },
    { id: 5, name: 'LOL1' },
    { id: 6, name: 'LOL2' },
    { id: 7, name: 'LOL3' },
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
        getOptionLabel={(spendType: SpendType) => spendType.name}
        getOptionValue={(spendType: SpendType) => String(spendType.id)}
        onChange={(options) => onChangeSpendType(options)}
      />
    </div>
  );
};

export default Filter;
