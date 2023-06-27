import { Store } from '@/store/managerForm';
import { instance } from './instance';
import { managerAcceptanceType } from '@/types/constants/manager';

export const postManagerForm = async (formData: Store) => {
  const response = await instance.post<boolean>('/manager/form/submit', formData);
  return response.data;
};

export const postManagerAccept = async ({ id, accept }: { id: number; accept: 'YES' | 'NO' }) => {
  const response = await instance.post(`/matching/accept/${id}?status=${accept}&memberId=1`);
  return response.data;
};

export interface MatchingData {
  status: number;
  message: string;
  data: managerAcceptanceType;
}
