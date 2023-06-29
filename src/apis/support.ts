import { instance } from './instance';

export const getFAQs = async () => {
  const response = await instance.get('/member/qna');
  return response.data.data;
};
