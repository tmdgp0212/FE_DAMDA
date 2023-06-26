import { Store } from '@/store/managerForm';
import { instance } from './instance';

export const postManagerForm = async (formData: Store) => {
  const response = await instance.post<boolean>('/manager/form/submit', formData);
  return response.data;
};

export const getManagerAccept = async (id: number) => {
  const response = await instance.get<boolean>(`/manager/form/accept/${id}`);
  return response.data;
};
