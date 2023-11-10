import { useEffect, useMemo, useState } from 'react';

import { AxiosRequestConfig } from 'axios';

import SpendSummaryCard from './spend-summary-card';

import { buildFilterParams, requestBackend } from 'utils/requests/request';
import { FilterData, SpendSummaryData } from 'utils/types/types';

import { ReactComponent as MaxIcon } from 'assets/icons/max.svg';
import { ReactComponent as MinIcon } from 'assets/icons/min.svg';
import { ReactComponent as AverageIcon } from 'assets/icons/average.svg';

import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary: SpendSummaryData = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0,
  sum: 0,
};

const SpendSummary = ({ filterData }: Props) => {
  const [summary, setSummary] = useState<SpendSummaryData>(initialSummary);
  const requestParams = useMemo(
    () => buildFilterParams(filterData),
    [filterData]
  );

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/expense/summary?',
      params: requestParams,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setSummary(response.data[0]);
    });
  }, [requestParams]);

  return (
    <div className="spend-summary-container">
      <SpendSummaryCard
        icon={<AverageIcon />}
        label="Média"
        value={summary?.avg?.toFixed(2)}
      />
      <SpendSummaryCard
        icon={<MaxIcon />}
        label="Máximo"
        value={summary?.max}
      />
      <SpendSummaryCard
        icon={<MinIcon />}
        label="Mínimo"
        value={summary?.min}
      />
      <SpendSummaryCard
        icon={<MinIcon />}
        label="Quantidade de Cadastros"
        value={summary?.count}
      />
    </div>
  );
};

export default SpendSummary;
