import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import { managerFormReducer } from '@/reducers/managerFormReducer';

import IntroductionForm from './introductionForm';
import DaySelectionForm from './DaySelectionForm';
import LocationSelectionForm from './LocationSelectionForm';
import CertificateForm from './CertificateForm';
import FieldExperienceForm from './FieldExperienceForm';
import RadioButtonForm from './RadioButtonForm';
import ServiceGuide from './ServiceGuide';

import { FiChevronLeft } from 'react-icons/fi';
import * as S from './style';

function ManagerForm() {
  const [state, dispatch] = useReducer(managerFormReducer, {
    manager_name: '',
    manager_phone: '',
    activity_day: [],
    activity_region: { seoul: [], gyeonggi: [] },
    manager_license: '',
    manager_license_etc: null,
    field_experience: '',
    main_job: null,
    manager_drive: null,
  });
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <S.ManagerFormContainer onSubmit={submitHandler}>
      <S.ManagerFormHeader>
        <button type="button" onClick={() => router.back()}>
          <FiChevronLeft />
        </button>
        <h1>열다 옷장정리 매니저 신청</h1>
      </S.ManagerFormHeader>

      <S.StyleWrapper large>
        <S.Headline>
          환영합니다, 매니저님!
          <br />
          매니저님에 대해 소개해주세요!
        </S.Headline>

        <S.StyleWrapper>
          <IntroductionForm state={state} dispatch={dispatch} />
        </S.StyleWrapper>

        <DaySelectionForm dispatch={dispatch} />
        <LocationSelectionForm state={state} dispatch={dispatch} />
      </S.StyleWrapper>

      <S.StyleWrapper large>
        <S.Headline>
          매니저님의 경력정보를
          <br />
          알려주세요.
        </S.Headline>

        <CertificateForm dispatch={dispatch} />
        <FieldExperienceForm dispatch={dispatch} />
        <RadioButtonForm dispatch={dispatch} />
      </S.StyleWrapper>

      <ServiceGuide />
      <S.ManagerSupportButton type="submit">지원하기</S.ManagerSupportButton>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
