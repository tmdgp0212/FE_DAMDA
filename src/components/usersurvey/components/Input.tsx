import React, { useEffect, useRef } from 'react';
import { UserSurveyFormInputWrapper } from '@/styles/survey.styled';
import { UserSurveyFormStringProps } from '@/types/components/form';
import { convertQuestionIdentifierToKorean } from '@/utils';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';
import useAuthStore from '@/store/auth';

function Input({ handleUpdateFormValue, formData, children }: UserSurveyFormStringProps) {
  const { userSurveyForm } = useUserSurveyForm();
  const { user } = useAuthStore();
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

  const handleUserData = () => {
    if (!user.data) return;
    const { phoneNumber, username } = user.data;

    if (phoneNumber && questionIdentify === 'APPLICANTCONACTINFO') inputRef.current!.value = phoneNumber;
    if (username && questionIdentify === 'APPLICANTNAME') inputRef.current!.value = username;
  };

  useEffect(() => {
    if (!!userSurveyForm) {
      const currentData = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      if (currentData) {
        inputRef.current!.value = currentData.answer;
      }
    }
  }, []);

  useEffect(() => {
    handleUserData();
  }, [user]);

  return (
    <UserSurveyFormInputWrapper>
      {questionTitle && <span>{questionTitle}</span>}
      <div className="input">
        {questionIdentify && <p>{convertQuestionIdentifierToKorean(questionIdentify)}</p>}
        <input type="text" placeholder={placeHolder} onChange={onChangeHandler} ref={inputRef} />
      </div>
      {children && children}
    </UserSurveyFormInputWrapper>
  );
}

export default Input;
