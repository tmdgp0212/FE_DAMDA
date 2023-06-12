import React from 'react';
import { UserSurveyFormInputWrapper } from '@/styles/survey.styled';
import { UserSurveyFormTitleProps } from '@/types/components/form';
import { convertQuestionIdentifierToKorean, convertQuestionIdentifierToPlaceholder } from '@/utils';

function Input({ title, placeholder }: UserSurveyFormTitleProps) {
  return (
    <UserSurveyFormInputWrapper hasspan={!!title}>
      {title && <span>{title}</span>}
      <div className="input">
        {placeholder && <p>{convertQuestionIdentifierToKorean(placeholder)}</p>}
        <input type="text" placeholder={convertQuestionIdentifierToPlaceholder(placeholder)} />
      </div>
    </UserSurveyFormInputWrapper>
  );
}

export default Input;
