import { instance } from './instance';

export const getDiscountCode = async (id: string) => {
  console.log(id);
  const res = await instance.get(`/kakao/discount/code/${id}`);
  return res.data.data;
};
