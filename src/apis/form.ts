import { instance } from '@/apis/instance';
import { UserSurveyRequest } from '@/types/api/formTypes';

export const getFormList = async () => {
  const res = await instance.get<UserSurveyRequest>('/form/list');
  return res.data.data;
};
