import { useEffect, useState } from 'react';

import { AxiosRequestConfig } from 'axios';

import { formatDate } from 'utils/requests/formatters';
import { SpringPage } from 'utils/types/response-types';
import { requestBackend } from 'utils/requests/request';

import Pagination from 'components/pagination';

import response from './response.json';

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

const SpendTable = () => {
  const [page, setPage] = useState<SpringPage<SaleData>>();

  const getSpends = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales',
      params: {
        page: pageNumber,
        size: 12,
      },
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  };

  useEffect(() => {
    getSpends(0);
  }, []);

  return (
    <div className="dashboard-card">
      <h4 className="spends-by-date-title">Registro dos gastos</h4>

      {response?.content ? (
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
                {response.content.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{formatDate(sale.date)}</td>
                    <td>Outros</td>
                    <td>{sale.categoryName}</td>
                    <td>{sale.storeName}</td>
                    <td>{sale.paymentMethod}</td>
                    <td>{sale.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row">
            <Pagination
              pageCount={page ? page.totalPages : 0}
              range={3}
              onChange={getSpends}
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
