import React, { useEffect, useState } from 'react';
import useManagerFormStore from '@/store/managerForm';

import IntroductionForm from './introductionForm';
import DaySelectionForm from './DaySelectionForm';
import LocationSelectionForm from './LocationSelectionForm';
import CertificateForm from './CertificateForm';
import FieldExperienceForm from './FieldExperienceForm';
import RadioButtonForm from './RadioButtonForm';
import ServiceGuide from './ServiceGuide';
import UnCompleteModal from './Modal/UnCompleteModal';

import { FiChevronLeft } from 'react-icons/fi';
import * as S from './style';

interface ManagerFormProps {
  setIsSubmitClicked: (isSubmitClicked: boolean) => void;
}

function ManagerForm({ setIsSubmitClicked }: ManagerFormProps) {
  const formData = useManagerFormStore((state) => state);
  const activity_day = useManagerFormStore((state) => state.activity_day);
  const [isVisible, setIsVisible] = useState(false);
  const [isCertificateOptionsOpen, setIsCertificateOptionsOpen] = useState(false);
  const [isLocationOptionsOpen, setIsLocationOptionsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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
  useEffect(() => {
    if (formData.manager_license && formData.manager_license !== 'ETC') {
      setIsCertificateValid(true);
    } else if (formData.manager_license === 'ETC' && formData.manager_license_etc) {
      setIsCertificateValid(true);
    } else {
      setIsCertificateValid(false);
    }
  }, [formData.manager_license, formData.manager_license_etc]);
  useEffect(() => {
    if (formData.activity_region.activity_district.length !== 0) {
      setIsLocationValid(true);
    } else {
      setIsLocationValid(false);
    }
  }, [formData.manager_license, formData.manager_license_etc, formData.activity_region.activity_district.length]);
  useEffect(() => {
    if (!formData.main_job && formData.manager_drive) {
      setIsRadioValid(true);
    } else if (!formData.main_job && !formData.manager_drive) {
      setIsRadioValid(true);
    } else if (formData.main_job && formData.main_job_etc && formData.manager_drive) {
      setIsRadioValid(true);
    } else if (formData.main_job && formData.main_job_etc && !formData.manager_drive) {
      setIsRadioValid(true);
    } else {
      setIsRadioValid(false);
    }
  }, [formData.main_job, formData.main_job_etc, formData.manager_drive]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isManagerFormValid) {
      console.log(formData);
      setIsSubmitClicked(true);
    }
  };

  const outsideClickHandler = () => {
    setIsCertificateOptionsOpen(false);
  };

  return (
    <>
      {mounted && (
        <S.ManagerFormContainer onSubmit={submitHandler} onClick={outsideClickHandler}>
          <S.ManagerFormHeader>
            <button type="button" onClick={() => setIsVisible(true)}>
              <FiChevronLeft />
            </button>
            {isVisible && <UnCompleteModal setIsVisible={setIsVisible} />}
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
            <LocationSelectionForm
              isLocationOptionsOpen={isLocationOptionsOpen}
              setIsLocationOptionsOpen={setIsLocationOptionsOpen}
            />
          </S.StyleWrapper>

          <S.StyleWrapper large>
            <S.Headline>
              매니저님의 경력정보를
              <br />
              알려주세요.
            </S.Headline>

            <CertificateForm
              isCertificateOptionsOpen={isCertificateOptionsOpen}
              setIsCertificateOptionsOpen={setIsCertificateOptionsOpen}
            />
            <FieldExperienceForm />
            <RadioButtonForm />
          </S.StyleWrapper>

          <ServiceGuide setIsGuideAgree={setIsGuideAgree} />
          <S.ManagerSupportButton isValid={isManagerFormValid} type="submit" disabled={!isManagerFormValid}>
            지원하기
          </S.ManagerSupportButton>

          {/* <S.NextButton type="button">다음</S.NextButton> */}
        </S.ManagerFormContainer>
      )}
    </>
  );
}

export default ManagerForm;
