import { create } from 'zustand';

export type UserSurveyForm = {
  questionNumber: number;
  questionIdentify: string;
  answer: string;
};

export type UserSurveyStore = {
  userSurveyForm: UserSurveyForm[];
  price: number;
  perPerson: number;
};

type UserSurveyStoreActions = {
  setUserSurveyForm: (userSurveyForm: UserSurveyForm[]) => void;
  setPrice: (price: number) => void;
  setPerPerson: (perPerson: number) => void;
};

const useUserSurveyStore = create<UserSurveyStore & UserSurveyStoreActions>((set) => ({
  userSurveyForm: [],
  price: 0,
  perPerson: 0,
  setUserSurveyForm: (userSurveyForm) => set({ userSurveyForm }),
  setPrice: (price) => set({ price }),
  setPerPerson: (perPerson) => set({ perPerson }),
}));

export const useUserSurveyForm = () => useUserSurveyStore((state) => state);
