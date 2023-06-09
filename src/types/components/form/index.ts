import { QuestionIdentifier } from '@/types/api/formTypes';
import { Category } from '@/types/constants/userSurvey';

export interface UserSurveyTitleProps {
  title: string;
}

export interface UserSurveyFormTitleProps {
  title?: string;
  placeholder: QuestionIdentifier;
}

export interface UserSurveyFormAddressProps {
  title: string;
}

export interface UserSurveyFormSelectProps {
  title: string;
  category: Category[];
  placeholder: QuestionIdentifier;
}
