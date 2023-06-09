import React, { useState } from 'react';
import * as S from '@/styles/survey.styled';
import { IoIosArrowBack } from 'react-icons/io';
import FirstStep from '@/components/usersurvey/step/FirstStep';
import SecStep from '@/components/usersurvey/step/SecStep';

function Index() {
  const [steps, setSteps] = useState<0 | 1>(0);
  return (
    <S.UserSurveyWrapper>
      <S.ProgressBar />
      <IoIosArrowBack />
      <S.UserSurveyTitle>열다 옷장 정리 서비스 예약</S.UserSurveyTitle>
      <S.UserSurveyFormWrapper>
        {steps === 0 && <FirstStep />}
        {steps === 1 && <SecStep />}
      </S.UserSurveyFormWrapper>
    </S.UserSurveyWrapper>
  );
}

export default Index;
