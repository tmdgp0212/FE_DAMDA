import React from 'react';
import { useRouter } from 'next/router';

import IntroductionForm from './introductionForm';
import DaySelectionForm from './DaySelectionForm';
import CertificateForm from './CertificateForm';
import FieldExperienceForm from './FieldExperienceForm';
import RadioButtonForm from './RadioButtonForm';
import ServiceGuide from './ServiceGuide';

import { FiChevronLeft } from 'react-icons/fi';
import * as S from './style';

function ManagerForm() {
  const router = useRouter();

  return (
    <S.ManagerFormContainer>
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
          <IntroductionForm info="이름" placeholder="김열다" />
          <IntroductionForm info="연락처" placeholder="010-0000-0000" />
        </S.StyleWrapper>

        <DaySelectionForm />
      </S.StyleWrapper>

      <S.StyleWrapper large>
        <S.Headline>
          매니저님의 경력정보를
          <br />
          알려주세요.
        </S.Headline>

        <CertificateForm />
        <FieldExperienceForm />
        <RadioButtonForm />
      </S.StyleWrapper>

      <ServiceGuide />
      <S.ManagerSupportButton type="button">지원하기</S.ManagerSupportButton>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
