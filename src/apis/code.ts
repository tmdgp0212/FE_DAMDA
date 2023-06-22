import { instance } from './instance';

export const getDiscountCode = async (id: string) => {
  const res = await instance.get(`/kakao/discount/code/${id}`);
  console.log(res);
  return res;
};
