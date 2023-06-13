import React, { useState } from 'react';
import { UserSurveyFormAdditionalInputWrapper, UserSurveyFormTextBox } from '@/styles/survey.styled';
import { UserSurveyFormAdditionalInputProps } from '@/types/components/form';
import {
  convertQuestionIdentifierToKorean,
  convertQuestionIdentifierToPlaceholder,
  replaceStringsWithTags,
} from '@/utils';
import { QuestionIdentifier } from '@/types/api/formTypes';
import { UserSurveyForm } from '@/store/userSurvey';

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

function AdditionalInput({
  title,
  placeholder,
  questionNumber,
  handleUpdateFormValue,
}: UserSurveyFormAdditionalInputProps) {
  const [length, setLength] = React.useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handlerValue = (currentData: UserSurveyForm) => {
    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  };

  const maxLength = 150;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLength(e.target.value.length);
    setInputValue(e.target.value);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: e.target.value,
      questionIdentifier: placeholder,
    };

    handlerValue(currentData);
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: e.target.value,
      questionIdentifier: placeholder,
    };

    handlerValue(currentData);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: e.target.checked ? 'none' : inputValue,
      questionIdentifier: placeholder,
    };

    handlerValue(currentData);
  };

  switch (placeholder) {
    case 'RESERVATIONREQUEST':
      return (
        <UserSurveyFormTextBox>
          <span dangerouslySetInnerHTML={replaceStringsWithTags(title)}></span>
          <div className="input-container">
            <textarea placeholder={convertQuestionIdentifierToPlaceholder(placeholder)} onChange={handleInput} />
          </div>
          <div>{length + '/' + maxLength}</div>
        </UserSurveyFormTextBox>
      );
    default:
      return (
        <UserSurveyFormAdditionalInputWrapper>
          {title && <span dangerouslySetInnerHTML={replaceStringsWithTags(title)}></span>}
          <div className="input">
            {placeholder && <p>{convertQuestionIdentifierToKorean(placeholder)}</p>}
            <input
              type="text"
              placeholder={convertQuestionIdentifierToPlaceholder(placeholder)}
              onChange={handleUpdate}
              disabled={isChecked}
              value={isChecked ? ' ' : inputValue}
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id={placeholder} onChange={handleCheckbox} />
            <label htmlFor={placeholder}>{placeholder && <span>{makeLabel(placeholder)}</span>}</label>
          </div>
        </UserSurveyFormAdditionalInputWrapper>
      );
  }
}

export default AdditionalInput;
