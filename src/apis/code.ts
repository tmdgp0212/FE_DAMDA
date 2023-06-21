import { instance } from './instance';

export const verifyCode = async (code: string) => {
  const res = await instance.get('');
  console.log(res);
  return res;
};
