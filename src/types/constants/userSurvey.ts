import { QuestionIdentifier, QuestionType } from '@/types/api/formTypes';
import React from 'react';

export type UserSurveyFormDataType = {
  questionNumber: number;
  questionOrder: number;
  questionTitle: string;
  questionType: QuestionType;
  questionIdentify: QuestionIdentifier;
  required: boolean;
  categoryList?: Category[];
  Component?: React.ReactNode;
};

export type Category = {
  id: number;
  category: string;
  price: number;
};
