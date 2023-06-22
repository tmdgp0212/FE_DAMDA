import { create } from 'zustand';

export type UserSurveyForm = {
  questionNumber: number;
  questionIdentify: string;
  answer: string;
};

export type UserSurveyStore = {
  userSurveyForm: UserSurveyForm[];
};

type UserSurveyStoreActions = {
  setUserSurveyForm: (userSurveyForm: UserSurveyForm[]) => void;
};

const useUserSurveyStore = create<UserSurveyStore & UserSurveyStoreActions>((set) => ({
  userSurveyForm: [],
  setUserSurveyForm: (userSurveyForm) => set({ userSurveyForm }),
}));

export const useUserSurveyForm = () => useUserSurveyStore((state) => state);
