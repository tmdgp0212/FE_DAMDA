import { instance } from '@/apis/instance';
import { UserSurveyRequest, getAddressListType, PostFormRequest, validCodeType } from '@/types/api/formTypes';

export const getFormList = async () => {
  const res = await instance.get<UserSurveyRequest>('/form/list');
  return res.data.data;
};

export const getAddressList = async () => {
  const res = await instance.get<getAddressListType>('/activity/locations');
  return res.data.data;
};

export const submitForm = async (data: PostFormRequest) => {
  const res = await instance.post('/user/form/submit', {
    ...data,
  });
  return res.data.data;
};

export const validateSaleCode = async (code: string) => {
  const res = await instance.get<validCodeType>(`/verify/code?code=${code}`);
  return res.data.data;
};
