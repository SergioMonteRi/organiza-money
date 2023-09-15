import { useCallback, useEffect, useMemo, useState } from 'react';

// 3RD PARTY
import { AxiosRequestConfig } from 'axios';

// UTILS
import { formatDate, formatGender } from 'utils/requests/formatters';
import { buildFilterParams, requestBackend } from 'utils/requests/request';

// TYPES
import { FilterData, SpringPage } from 'utils/types/types';

// COMPONENTS
import Pagination from 'components/pagination';

// STYLES
import './styles.css';

export type SaleData = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: GenderData;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};

export type SalesResponse = {
  content: SaleData[];
};

export type GenderData = 'MALE' | 'FEMALE' | 'OTHER';

type Props = {
  filterData?: FilterData;
};

const SpendTable = ({ filterData }: Props) => {
  const [page, setPage] = useState<SpringPage<SaleData>>();

  const requestParams = useMemo(
    () => buildFilterParams(filterData),
    [filterData]
  );

  const getSpends = useCallback(
    (pageNumber: number) => {
      const params: AxiosRequestConfig = {
        method: 'GET',
        url: '/sales',
        params: {
          ...requestParams,
          page: pageNumber,
          size: 12,
        },
      };

      requestBackend(params)
        .then((response) => {
          setPage(response.data);
        })
        .catch(() => {});
    },
    [requestParams]
  );

  useEffect(() => {
    getSpends(0);
  }, [getSpends]);

  return (
    <div className="dashboard-card">
      <h4 className="spends-by-date-title">Registro dos gastos</h4>

      {page?.content ? (
        <>
          <div className="spends-table-container">
            <table className="spends-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Gênero</th>
                  <th>Categoria</th>
                  <th>Loja</th>
                  <th>Forma de pagamento</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {page.content.map((spend) => (
                  <tr key={spend.id}>
                    <td>{spend.id}</td>
                    <td>{formatDate(spend.date)}</td>
                    <td>{formatGender(spend.gender)}</td>
                    <td>{spend.categoryName}</td>
                    <td>{spend.storeName}</td>
                    <td>{spend.paymentMethod}</td>
                    <td>{spend.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row">
            <Pagination
              pageCount={page ? page.totalPages : 0}
              range={3}
              onChange={(pageNumber) => getSpends(pageNumber)}
            />
          </div>
        </>
      ) : (
        <h4>Ainda não há registro</h4>
      )}
    </div>
  );
};

export default SpendTable;
