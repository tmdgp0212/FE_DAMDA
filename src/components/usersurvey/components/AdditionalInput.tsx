import React, { useState } from 'react';
import { UserSurveyFormAdditionalInputWrapper, UserSurveyFormTextBox } from '@/styles/survey.styled';
import { UserSurveyFormAdditionalInputProps } from '@/types/components/form';
import { convertQuestionIdentifierToKorean } from '@/utils';
import { QuestionIdentifier } from '@/types/api/formTypes';
import { UserSurveyForm } from '@/store/userSurvey';

const makeLabel = (placeHolder: QuestionIdentifier) => {
  switch (placeHolder) {
    case 'PARKINGAVAILABLE':
      return '주차장 없음';
    case 'RESERVATIONENTER':
      return '공동현관 / 비밀번호 없음';
    case 'RESERVATIONNOTE':
      return '요청 없음';
  }
};

function AdditionalInput({ formData, handleUpdateFormValue }: UserSurveyFormAdditionalInputProps) {
  const { questionNumber, questionTitle, placeHolder, questionIdentify } = formData;

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
      questionIdentify,
    };

    handlerValue(currentData);
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: e.target.value,
      questionIdentify,
    };

    handlerValue(currentData);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: e.target.checked ? '없음' : inputValue,
      questionIdentify,
    };

    handlerValue(currentData);
  };

  switch (questionIdentify) {
    case 'RESERVATIONREQUEST':
      return (
        <UserSurveyFormTextBox>
          <span>{questionTitle}</span>
          <div className="input-container">
            <textarea placeholder={placeHolder} onChange={handleInput} />
          </div>
          <div>{length + '/' + maxLength}</div>
        </UserSurveyFormTextBox>
      );
    default:
      return (
        <UserSurveyFormAdditionalInputWrapper>
          {questionTitle && <span>{questionTitle}</span>}
          <div className="input">
            {formData.questionIdentify && <p>{convertQuestionIdentifierToKorean(questionIdentify)}</p>}
            <input
              type="text"
              placeholder={placeHolder}
              onChange={handleUpdate}
              disabled={isChecked}
              value={isChecked ? ' ' : inputValue}
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id={placeHolder} onChange={handleCheckbox} />
            <label htmlFor={placeHolder}>{placeHolder && <span>{makeLabel(questionIdentify)}</span>}</label>
          </div>
        </UserSurveyFormAdditionalInputWrapper>
      );
  }
}

export default AdditionalInput;
