import React from 'react';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import FormElements from '@/components/usersurvey/FormElements';

interface SecStepProps {
  userSurveyFormData: UserSurveyFormDataType[];
}
function SecStep({ userSurveyFormData }: SecStepProps) {
  return (
    <div className="form-container">
      {userSurveyFormData.map((data, index) => (
        <FormElements data={data} key={index} />
      ))}
    </div>
  );
}

export default SecStep;
