import { Store } from '@/store/managerForm';
import { instance } from './instance';

export const postManagerForm = async (formData: Store) => {
  const response = await instance.post<boolean>('/manager/form/submit', formData);
  return response.data;
};
