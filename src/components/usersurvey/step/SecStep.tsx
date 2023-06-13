import React, { useEffect, useState } from 'react';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import FormElements from '@/components/usersurvey/FormElements';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';

interface SecStepProps {
  userSurveyFormData: UserSurveyFormDataType[];
}
function SecStep({ userSurveyFormData }: SecStepProps) {
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
  return (
    <div className="form-container">
      {userSurveyFormData.map((data, index) => (
        <FormElements data={data} key={index} handleUpdateFormValue={setFormValue} />
      ))}
    </div>
  );
}

export default SecStep;
