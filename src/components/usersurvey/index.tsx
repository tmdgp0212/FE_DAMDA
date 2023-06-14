import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/survey.styled';
import { IoIosArrowBack } from 'react-icons/io';
import FirstStep from '@/components/usersurvey/step/FirstStep';
import SecStep from '@/components/usersurvey/step/SecStep';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import { useRouter } from 'next/router';
import { useUserSurveyForm } from '@/store/userSurvey';

const userSurveyFormData: UserSurveyFormDataType[] = [
  {
    questionNumber: 1,
    questionOrder: 0,
    questionIdentify: 'TITLE',
    questionTitle: '옷장 정리 서비스를💁‍♀️ br 찾아주셔서 감사합니다',
    questionType: 'TITLE',
    required: false,
  },
  {
    questionNumber: 2,
    questionOrder: 1,
    questionIdentify: 'APPLICANTNAME',
    questionTitle: '서비스 받을 분을 알려주세요',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 3,
    questionOrder: 2,
    questionIdentify: 'APPLICANTCONACTINFO',
    questionTitle: '',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 4,
    questionOrder: 3,
    questionIdentify: 'ADDRESS',
    questionTitle: '서비스를 받을 지역과 주소를 입력해 주세요',
    questionType: 'SELECT',
    required: false,
  },
  {
    questionNumber: 5,
    questionOrder: 4,
    questionIdentify: 'AFEWSERVINGS',
    questionTitle: '정리가 필요한 옷이 몇 사람의 분량인가요?',
    questionType: 'SELECT',
    categoryList: [
      {
        id: 1,
        category: '1인분',
        price: 10000,
      },
      {
        id: 2,
        category: '2인분',
        price: 20000,
      },
      {
        id: 3,
        category: '3인분',
        price: 30000,
      },
      {
        id: 4,
        category: '4인 이상',
        price: 40000,
      },
    ],
    required: true,
  },
  {
    questionNumber: 6,
    questionOrder: 5,
    questionIdentify: 'SERVICEDURATION',
    questionTitle: '옷장 정리가 몇 시간 정도 필요하시가요?',
    questionType: 'RADIO',
    categoryList: [
      {
        id: 1,
        category: '3시간',
        price: 10000,
      },
      {
        id: 2,
        category: '4시간',
        price: 20000,
      },
      {
        id: 3,
        category: '5시간',
        price: 30000,
      },
    ],
    required: true,
  },
  {
    questionNumber: 6,
    questionOrder: 5,
    questionIdentify: 'RECOMMENDEDCODE',
    questionTitle: '할인 되는 코드가 있으신가요?',
    questionType: 'STRING',
    required: false,
  },
];

const userSurveyFormDataSec: UserSurveyFormDataType[] = [
  {
    questionNumber: 7,
    questionOrder: 0,
    questionIdentify: 'TITLE',
    questionTitle: '거의 다 됐어요!',
    questionType: 'TITLE',
    required: false,
  },
  {
    questionNumber: 8,
    questionOrder: 1,
    questionIdentify: 'SERVICEDATE',
    questionTitle: '서비스 받으실 날짜와 시간을 정해주세요',
    questionType: 'DATE',
    required: true,
  },
  {
    questionNumber: 9,
    questionOrder: 2,
    questionIdentify: 'PARKINGAVAILABLE',
    questionTitle: '서비스 받으실 곳에는 주차를 어디에 br 할 수 있나요?',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 10,
    questionOrder: 3,
    questionIdentify: 'RESERVATIONENTER',
    questionTitle: '열다 매니저가 출입할 수 있는 br 정보가 있다면 알려주세요!',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 11,
    questionOrder: 4,
    questionIdentify: 'RESERVATIONNOTE',
    questionTitle: '서비스를 받으시기 전에 br 매니저가 미리 알아야할 것이 있을까요?',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 12,
    questionOrder: 5,
    questionIdentify: 'RESERVATIONREQUEST',
    questionTitle: '열다에게 요청하실 것이나 br 더 궁금하신 내용이 있을까요?',
    questionType: 'STRING',
    required: true,
  },
  {
    questionNumber: 13,
    questionOrder: 6,
    questionIdentify: 'LEARNEDROUTE',
    questionTitle: '열다 서비스를 어떻게 알게 되셨나요?',
    questionType: 'SELECT',
    required: true,
    categoryList: [
      {
        id: 1,
        category: '인터넷으로 검색 했어요',
        price: 0,
      },
      {
        id: 2,
        category: '프로모션을 보고 왔어요',
        price: 0,
      },
      {
        id: 3,
        category: 'SNS에서 보고 왔어요',
        price: 0,
      },
      {
        id: 4,
        category: '열다 인스타계정을 보고 왔어요',
        price: 0,
      },
      {
        id: 5,
        category: '지인이 추천해줬어요',
        price: 0,
      },
    ],
  },
];

function Index() {
  const router = useRouter();
  const UsersurveyRef = useRef<HTMLDivElement | null>(null);
  const [steps, setSteps] = useState<0 | 1>(0);

  const { userSurveyForm } = useUserSurveyForm();
  console.log(userSurveyForm);
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
  console.log(steps);
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
