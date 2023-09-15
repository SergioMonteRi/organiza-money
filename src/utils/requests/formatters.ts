import { GenderData } from 'pages/dashboard/components/spend-table';
import { SalesByPaymentMethod, SalesByStoreData } from 'utils/types/types';

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

export const formatGender = (gender: GenderData) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros',
  };

  return textByGender[gender];
};

export const buildSalesByStoreChart = (sales: SalesByStoreData[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};
