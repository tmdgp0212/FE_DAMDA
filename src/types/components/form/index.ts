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
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
  questionNumber: number;
  placeholder: QuestionIdentifier;
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
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyDateProps {
  title: string;
  placeholder: QuestionIdentifier;
  questionNumber: number;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormAdditionalInputProps {
  title: string;
  placeholder: QuestionIdentifier;
  questionNumber: number;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}
