import React from 'react';
import { UserSurveyFormAdditionalInputWrapper, UserSurveyFormTextBox } from '@/styles/survey.styled';
import { UserSurveyFormAdditionalInputProps } from '@/types/components/form';
import {
  convertQuestionIdentifierToKorean,
  convertQuestionIdentifierToPlaceholder,
  replaceStringsWithTags,
} from '@/utils';
import { QuestionIdentifier } from '@/types/api/formTypes';

const makeLabel = (placeholder: QuestionIdentifier) => {
  switch (placeholder) {
    case 'PARKINGAVAILABLE':
      return '주차장 없음';
    case 'RESERVATIONENTER':
      return '공동현관 / 비밀번호 없음';
    case 'RESERVATIONNOTE':
      return '요청 없음';
  }
};

function AdditionalInput({ title, placeholder }: UserSurveyFormAdditionalInputProps) {
  switch (placeholder) {
    case 'RESERVATIONREQUEST':
      return (
        <UserSurveyFormTextBox>
          <span dangerouslySetInnerHTML={replaceStringsWithTags(title)}></span>
          <div className="input-container">
            <textarea placeholder={convertQuestionIdentifierToPlaceholder(placeholder)} />
          </div>
          <div>10/150</div>
        </UserSurveyFormTextBox>
      );
    default:
      return (
        <UserSurveyFormAdditionalInputWrapper>
          {title && <span dangerouslySetInnerHTML={replaceStringsWithTags(title)}></span>}
          <div className="input">
            {placeholder && <p>{convertQuestionIdentifierToKorean(placeholder)}</p>}
            <input type="text" placeholder={convertQuestionIdentifierToPlaceholder(placeholder)} />
          </div>
          <div className="checkbox">
            <input type="checkbox" id={placeholder} />
            <label htmlFor={placeholder}>{placeholder && <span>{makeLabel(placeholder)}</span>}</label>
          </div>
        </UserSurveyFormAdditionalInputWrapper>
      );
  }
}

export default AdditionalInput;
