import { QuestionIdentifier } from '@/types/api/formTypes';
import { Category, UserSurveyFormDataType } from '@/types/constants/userSurvey';
import { Dispatch, SetStateAction } from 'react';
import { UserSurveyForm } from '@/store/userSurvey';

export interface UserSurveyTitleProps {
  title: string;
}

export interface UserSurveyFormTitleProps {
  title?: string;
  questionNumber: number;
  placeholder: QuestionIdentifier;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormAddressProps {
  title: string;
}

export interface UserSurveyFormSelectProps {
  title: string;
  category: Category[];
  placeholder: QuestionIdentifier;
  questionNumber: number;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormRadioProps {
  title: string;
  category: Category[];
  placeholder: QuestionIdentifier;
  questionNumber: number;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface FormElementsProps {
  data: UserSurveyFormDataType;
  handleUpdateFormValue?: Dispatch<SetStateAction<UserSurveyForm[]>>;
}
