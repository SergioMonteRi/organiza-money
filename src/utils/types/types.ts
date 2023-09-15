export type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
  googleUser?: boolean;
};

export type GoogleUserDataResponse = {
  email: string;
  email_verified: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
};

export type SpringPage<T> = {
  content: T[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty: boolean;
};

export type SpendByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type GenderData = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: GenderData;
};

export type SalesByStoreData = {
  storeName: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};
