import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';
import { Role } from './types/role-types';

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
  name?: string;
  picture?: string;
};

export const getTokenData = (): TokenData | undefined => {
  console.log('test ', getAuthData().access_token);
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};
