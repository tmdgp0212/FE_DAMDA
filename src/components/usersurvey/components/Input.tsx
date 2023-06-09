import React from 'react';
import { UserSurveyFormInputWrapper } from '@/styles/survey.styled';
import { UserSurveyFormTitleProps } from '@/types/components/form';
import {
  convertQuestionIdentifierToKorean,
  convertQuestionIdentifierToPlaceholder,
  replaceStringsWithTags,
} from '@/utils';
import { UserSurveyForm } from '@/store/userSurvey';

function Input({ title, placeholder, questionNumber, handleUpdateFormValue }: UserSurveyFormTitleProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const currentData: UserSurveyForm = {
      questionNumber,
      answer: value,
      questionIdentifier: placeholder,
    };

    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  };

  return (
    <UserSurveyFormInputWrapper hasspan={!!title}>
      {title && <span dangerouslySetInnerHTML={replaceStringsWithTags(title)}></span>}
      <div className="input">
        {placeholder && <p>{convertQuestionIdentifierToKorean(placeholder)}</p>}
        <input
          type="text"
          placeholder={convertQuestionIdentifierToPlaceholder(placeholder)}
          onChange={onChangeHandler}
        />
      </div>
    </UserSurveyFormInputWrapper>
  );
}

export default Input;
