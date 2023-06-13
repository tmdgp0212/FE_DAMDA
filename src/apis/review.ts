import { ReviewRes } from '@/types/review';
import { instance } from './instance';

export const getReviews = async () => {
  const res = await instance.get<ReviewRes[]>('/review');
  return res.data;
};

export const getBestReview = async () => {
  //경로 아직 모름 @.@
  const res = await instance.get<ReviewRes>('/review/best');
  return res.data;
};
