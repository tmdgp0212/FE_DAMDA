import { QuestionIdentifier, QuestionType } from '@/types/api/formTypes';
import React from 'react';
import { requirement } from '@/constants/requirement';

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

export interface AddressList {
  [key: string]: AdditionalInfo[];
}

export type AdditionalInfo = string;

export interface requirementType {
  id: number;
  title: string;
  additional?: string;
  list?: string[];
}
