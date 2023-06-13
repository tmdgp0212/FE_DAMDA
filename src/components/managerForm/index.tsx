import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useManagerFormStore from '@/store/managerForm';

import IntroductionForm from './introductionForm';
import DaySelectionForm from './DaySelectionForm';
import LocationSelectionForm from './LocationSelectionForm';
import CertificateForm from './CertificateForm';
import FieldExperienceForm from './FieldExperienceForm';
import RadioButtonForm from './RadioButtonForm';
import ServiceGuide from './ServiceGuide';

import { FiChevronLeft } from 'react-icons/fi';
import * as S from './style';

function ManagerForm({ setIsSubmitClicked }: any) {
  const formData = useManagerFormStore((state) => state);
  const activity_day = useManagerFormStore((state) => state.activity_day);

  // 유효성 검사 통과 여부
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isLocationValid, setIsLocationValid] = useState(false);
  const [isCertificateValid, setIsCertificateValid] = useState(false);
  const [isRadioValid, setIsRadioValid] = useState(false);
  const [isGuideAgree, setIsGuideAgree] = useState(false);
  const [isManagerFormValid, setIsManagerFormValid] = useState(false);

  useEffect(() => {
    const managerFormValid =
      isNameValid &&
      isPhoneNumberValid &&
      activity_day.some((day: boolean) => day === true) &&
      isLocationValid &&
      isCertificateValid &&
      isRadioValid &&
      isGuideAgree;
    setIsManagerFormValid(managerFormValid);
  }, [isNameValid, isPhoneNumberValid, activity_day, isLocationValid, isCertificateValid, isRadioValid, isGuideAgree]);

  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isManagerFormValid) {
      console.log(formData);
      setIsSubmitClicked(true);
    }
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
          <IntroductionForm setIsNameValid={setIsNameValid} setIsPhoneNumberValid={setIsPhoneNumberValid} />
        </S.StyleWrapper>

        <DaySelectionForm />
        <LocationSelectionForm setIsLocationValid={setIsLocationValid} />
      </S.StyleWrapper>

      <S.StyleWrapper large>
        <S.Headline>
          매니저님의 경력정보를
          <br />
          알려주세요.
        </S.Headline>

        <CertificateForm setIsCertificateValid={setIsCertificateValid} />
        <FieldExperienceForm />
        <RadioButtonForm setIsRadioValid={setIsRadioValid} />
      </S.StyleWrapper>

      <ServiceGuide setIsGuideAgree={setIsGuideAgree} />
      <S.ManagerSupportButton isValid={isManagerFormValid} type="submit" disabled={!isManagerFormValid}>
        지원하기
      </S.ManagerSupportButton>

      <S.NextButton type="button">다음</S.NextButton>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
