import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import useManagerFormStore from '@/store/managerForm';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import * as I from '../introductionForm/style';
import * as G from '../style';
import * as S from './style';

interface CertificateFormProps {
  isCertificateOptionsOpen: boolean;
  setIsCertificateOptionsOpen: (isOpen: boolean) => void;
}

function CertificateForm({ isCertificateOptionsOpen, setIsCertificateOptionsOpen }: CertificateFormProps) {
  const {
    certificateStatus,
    certificateStatusEtc,
    setManagerLicense,
    setManagerLicenseEtc,
    clearManagerLicenseEtc,
    nullManagerLicenseEtc,
  } = useManagerFormStore((state) => state);
  const [selectedOption, setSelectedOption] = useState('자격증 선택하기');

  let certificate;
  switch (certificateStatus) {
    case 'FIRST_RATE_OFF':
      certificate = '1급 (오프라인 취득)';
      break;

    case 'SECOND_RATE_OFF':
      certificate = '2급 (오프라인 취득)';
      break;

    case 'FIRST_RATE_ON':
      certificate = '1급 (온라인 취득)';
      break;

    case 'SECOND_RATE_ON':
      certificate = '2급 (온라인 취득)';
      break;

    case 'NONE':
      certificate = '없음';
      break;

    case 'ETC':
      certificate = '기타';
      break;

    default:
      break;
  }

  const selectOptionHandler = (option: string) => {
    setManagerLicense(option);
    setSelectedOption(option);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setManagerLicenseEtc(e.target.value);
  };

  const etcClearHandler = () => {
    clearManagerLicenseEtc();
  };

  return (
    <S.CertificateForm>
      <G.SubTitle>
        보유하고 계신 <br />
        정리수납전문가 자격증을 선택해주세요.
      </G.SubTitle>

      <span>(1개만 선택가능)</span>

      <div style={{ position: 'relative' }}>
        <S.SelectButton
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsCertificateOptionsOpen(!isCertificateOptionsOpen);
          }}
          isEtcClicked={!!certificateStatus}
        >
          {certificate ? certificate : selectedOption}
          {isCertificateOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
        </S.SelectButton>

        {isCertificateOptionsOpen && (
          <ul>
            <li>
              <S.OptionButton
                type="button"
                onClick={(e) => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('1급 (오프라인 취득)');
                  nullManagerLicenseEtc();
                }}
              >
                1급 (오프라인 취득)
              </S.OptionButton>
            </li>

            <li>
              <S.OptionButton
                type="button"
                onClick={() => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('2급 (오프라인 취득)');
                  nullManagerLicenseEtc();
                }}
              >
                2급 (오프라인 취득)
              </S.OptionButton>
            </li>

            <li>
              <S.OptionButton
                type="button"
                onClick={() => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('1급 (온라인 취득)');
                  nullManagerLicenseEtc();
                }}
              >
                1급 (온라인 취득)
              </S.OptionButton>
            </li>

            <li>
              <S.OptionButton
                type="button"
                onClick={() => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('2급 (온라인 취득)');
                  nullManagerLicenseEtc();
                }}
              >
                2급 (온라인 취득)
              </S.OptionButton>
            </li>

            <li>
              <S.OptionButton
                type="button"
                onClick={() => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('없음');
                  nullManagerLicenseEtc();
                }}
              >
                없음
              </S.OptionButton>
            </li>

            <li>
              <S.OptionButton
                type="button"
                onClick={(e) => {
                  setIsCertificateOptionsOpen(false);
                  selectOptionHandler('기타');
                }}
              >
                기타
              </S.OptionButton>
            </li>
          </ul>
        )}
      </div>

      {certificateStatus && certificateStatus === 'ETC' && (
        <I.FormInput>
          <span>위 리스트에 없는 자격증을 입력해주세요.</span>

          <I.InputWrapper>
            <input type="text" value={certificateStatusEtc} placeholder="자격증 이름" onChange={inputChangeHandler} />

            {certificateStatusEtc && (
              <I.Icon type="button" style={{ cursor: 'pointer' }} onClick={etcClearHandler}>
                <Image src="/icons/input-clear-icon.svg" alt="input-clear-icon" fill />
              </I.Icon>
            )}
          </I.InputWrapper>
        </I.FormInput>
      )}
    </S.CertificateForm>
  );
}

export default CertificateForm;
