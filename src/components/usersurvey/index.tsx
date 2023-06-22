import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/survey.styled';
import { IoIosArrowBack } from 'react-icons/io';
import FirstStep from '@/components/usersurvey/step/FirstStep';
import SecStep from '@/components/usersurvey/step/SecStep';
import { useRouter } from 'next/router';
import { useUserSurveyForm } from '@/store/userSurvey';
import { useQuery } from '@tanstack/react-query';
import { getFormList } from '@/apis/form';
import { UserSurveyFormDataType } from '@/types/api/formTypes';

function Index() {
  const { data } = useQuery(['FormList'], getFormList);

  const router = useRouter();
  const UsersurveyRef = useRef<HTMLDivElement | null>(null);
  const [steps, setSteps] = useState<0 | 1>(0);
  const [userSurveyFormData, setUserSurveyFormData] = useState<UserSurveyFormDataType[]>([]);
  const [userSurveyFormDataSec, setUserSurveyFormDataSec] = useState<UserSurveyFormDataType[]>([]);

  const { userSurveyForm } = useUserSurveyForm();
  const handleNextStep = () => {
    setSteps(1);
  };

  const handlePrevStep = () => {
    setSteps(0);
  };

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (UsersurveyRef.current) {
      UsersurveyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (!data) return;

    const copiedData = data.sort((a, b) => a.questionOrder - b.questionOrder);
    const firstStep = copiedData.filter((data) => data.page === 1);
    const secStep = copiedData.filter((data) => data.page === 2);

    setUserSurveyFormData(firstStep);
    setUserSurveyFormDataSec(secStep);
  }, [data]);

  console.log(userSurveyFormData);

  return (
    <S.UserSurveyWrapper ref={UsersurveyRef}>
      <S.ProgressBar />
      <IoIosArrowBack onClick={steps === 0 ? goBack : handlePrevStep} />
      {steps === 0 && <S.UserSurveyTitle>열다 옷장 정리 서비스 예약</S.UserSurveyTitle>}
      <S.UserSurveyFormWrapper>
        {steps === 0 && <FirstStep handleNextStep={handleNextStep} userSurveyFormData={userSurveyFormData} />}
        {steps === 1 && <SecStep userSurveyFormData={userSurveyFormDataSec} />}
      </S.UserSurveyFormWrapper>
    </S.UserSurveyWrapper>
  );
}

export default Index;
