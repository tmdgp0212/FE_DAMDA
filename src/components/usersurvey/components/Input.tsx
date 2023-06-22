import React, { useEffect, useRef } from 'react';
import { UserSurveyFormInputWrapper } from '@/styles/survey.styled';
import { UserSurveyFormTitleProps } from '@/types/components/form';
import {
  convertQuestionIdentifierToKorean,
  convertQuestionIdentifierToPlaceholder,
  replaceStringsWithTags,
} from '@/utils';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';

function Input({ handleUpdateFormValue, formData }: UserSurveyFormTitleProps) {
  const { userSurveyForm } = useUserSurveyForm();
  const { questionNumber, questionTitle, questionIdentify, placeHolder } = formData;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const currentData: UserSurveyForm = {
      questionNumber,
      answer: value,
      questionIdentify,
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

  useEffect(() => {
    if (!!userSurveyForm) {
      const currentData = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      console.log(currentData);
      if (currentData) {
        inputRef.current!.value = currentData.answer;
      }
    }
  }, []);

  return (
    <UserSurveyFormInputWrapper>
      {questionTitle && <span>{questionTitle}</span>}
      <div className="input">
        {questionIdentify && <p>{convertQuestionIdentifierToKorean(questionIdentify)}</p>}
        <input type="text" placeholder={placeHolder} onChange={onChangeHandler} ref={inputRef} />
      </div>
    </UserSurveyFormInputWrapper>
  );
}

export default Input;
