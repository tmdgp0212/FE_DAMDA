import React from 'react';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import Title from '@/components/usersurvey/components/Title';
import Input from '@/components/usersurvey/components/Input';
import Select from '@/components/usersurvey/components/Select';
import AddressSelect from '@/components/usersurvey/components/AddressSelect';

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
    required: true,
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
    questionIdentify: 'CODE',
    questionTitle: '할인 되는 코드가 있으신가요?',
    questionType: 'STRING',
    required: false,
  },
];
function FirstStep() {
  return (
    <div className="form-container">
      <input type="date" name="" id="" />
      {userSurveyFormData.map((data) => {
        switch (data.questionType) {
          case 'TITLE':
            return <Title title={data.questionTitle} />;
          case 'STRING':
            return <Input title={data.questionTitle} placeholder={data.questionIdentify} />;
          case 'SELECT':
            return data.questionIdentify === 'ADDRESS' ? (
              <AddressSelect title={data.questionTitle} />
            ) : (
              <Select category={data.categoryList!} placeholder={data.questionIdentify} title={data.questionTitle} />
            );
          default:
            return <div>default</div>;
        }
      })}
    </div>
  );
}

export default FirstStep;
