import React, { useEffect, useState } from 'react';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import FormElements from '@/components/usersurvey/FormElements';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';
import { UserSurveyFormNextBox } from '@/styles/survey.styled';

interface FirstStepProps {
  handleNextStep: () => void;
  userSurveyFormData: UserSurveyFormDataType[];
}
function FirstStep({ handleNextStep, userSurveyFormData }: FirstStepProps) {
  const [formValue, setFormValue] = useState<UserSurveyForm[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const { setUserSurveyForm } = useUserSurveyForm();
  const checkRequiredQuestions = (formValue: UserSurveyForm[]) => {
    const requiredQuestionsIndex = userSurveyFormData
      .filter((data) => data.required)
      .map((data) => data.questionNumber);

    const isAllRequiredQuestionsAnswered = requiredQuestionsIndex.every((questionNumber) => {
      return formValue.some((data) => data.questionNumber === questionNumber);
    });

    setIsValid(isAllRequiredQuestionsAnswered);
  };

  useEffect(() => {
    checkRequiredQuestions(formValue);
  }, [formValue]);

  const handleGoNextStep = () => {
    setUserSurveyForm(formValue);
    handleNextStep();
  };

  return (
    <div className="form-container">
      {userSurveyFormData.map((data, index) => (
        <FormElements data={data} key={index} handleUpdateFormValue={setFormValue} />
      ))}
      <UserSurveyFormNextBox
        onClick={isValid ? handleGoNextStep : undefined}
        animate={isValid ? { backgroundColor: '#0061FF', color: '#fff' } : ''}
      >
        {isValid ? '날짜 예약하기' : '예약하기'}
      </UserSurveyFormNextBox>
    </div>
  );
}

export default FirstStep;
