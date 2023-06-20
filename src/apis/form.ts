import { instance } from '@/apis/instance';
import { UserSurveyRequest, getAddressListType } from '@/types/api/formTypes';

export const getFormList = async () => {
  const res = await instance.get<UserSurveyRequest>('/form/list');
  return res.data.data;
};

export const getAddressList = async () => {
  const res = await instance.get<getAddressListType>('/activity/locations');
  return res.data.data;
};
