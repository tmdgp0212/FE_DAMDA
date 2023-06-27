import { ReservationData } from '@/types/completed';
import { instance, multiPartInstance } from './instance';

export const getService = async (serviceId: string | string[]) => {
  const res = await instance.get<ReservationData>(`/service/complete/${serviceId}`);
  console.log(res);
  return res.data;
};

export const postImg = async (reservationId: string | string[], formData: FormData) => {
  const res = await multiPartInstance.post(`/service/complete/${reservationId}`, formData);
  return res.data;
};
