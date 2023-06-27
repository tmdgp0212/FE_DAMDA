import { create } from 'zustand';
import { QuestionIdentifier } from '@/types/api/formTypes';

export type UserSurveyForm = {
  questionNumber: number;
  questionIdentify: QuestionIdentifier;
  answer: string;
};

export type UserSurveyStore = {
  userSurveyForm: UserSurveyForm[];
  price: number;
  perPerson: number;
  serviceDuration: number;
  isSale: boolean;
};

type UserSurveyStoreActions = {
  setUserSurveyForm: (userSurveyForm: UserSurveyForm[]) => void;
  setPrice: (price: number) => void;
  setPerPerson: (perPerson: number) => void;
  setServiceDuration: (serviceDuration: number) => void;
  setIsSale: (isSale: boolean) => void;
};

const useUserSurveyStore = create<UserSurveyStore & UserSurveyStoreActions>((set) => ({
  userSurveyForm: [],
  price: 0,
  perPerson: 0,
  serviceDuration: 0,
  isSale: false,
  setUserSurveyForm: (userSurveyForm) => set({ userSurveyForm }),
  setPrice: (price) => set({ price }),
  setPerPerson: (perPerson) => set({ perPerson }),
  setServiceDuration: (serviceDuration) => set({ serviceDuration }),
  setIsSale: (isSale) => set({ isSale }),
}));

export const useUserSurveyForm = () => useUserSurveyStore((state) => state);
