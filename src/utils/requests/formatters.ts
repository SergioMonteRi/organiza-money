import { SalesByPaymentMethod, SpendByTypeData } from 'utils/types/types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString();
};

export const formatDateToServe = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};

export const buildSalesByStoreChart = (spends: SpendByTypeData[]) => {
  const labels = spends.map((spend) => spend.expenseType);
  const series = spends.map((spend) => spend.sum);

  return {
    labels,
    series,
  };
};

export const buildSalesByPaymentMethod = (spends: SalesByPaymentMethod[]) => {
  const labels = spends.map((spend) => spend.description);
  const series = spends.map((spend) => spend.sum);

  return {
    labels,
    series,
  };
};
