import { Store } from '@/store/managerForm';
import { instance } from './instance';

export const postManagerForm = async (formData: Store) => {
  const response = await instance.post<boolean>('/manager/form/submit', formData);
  return response.data;
};

export interface MatchingData {
  status: number;
  message: string;
  data: MatchingManagerData;
}

export interface MatchingManagerData {
  reservationId: number;
  serviceDate: string;
  servings: string;
  serviceAddress: string;
  serviceHours: string;
  managerName: string;
  data: MatchingManagerData;
}
