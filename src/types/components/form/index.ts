import { Category, UserSurveyFormDataType } from '@/types/api/formTypes';
import { Dispatch, SetStateAction } from 'react';
import { UserSurveyForm } from '@/store/userSurvey';

export interface UserSurveyTitleProps {
  title: string;
}

export interface UserSurveyFormTitleProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormAddressProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormSelectProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormRadioProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface FormElementsProps {
  data: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyDateProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormAdditionalInputProps {
  formData: UserSurveyFormDataType;
  handleUpdateFormValue: Dispatch<SetStateAction<UserSurveyForm[]>>;
}

export interface UserSurveyFormRequirementProps {
  handleAgree: (bool: boolean) => void;
}
