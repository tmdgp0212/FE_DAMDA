import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import useManagerFormStore from '@/store/managerForm';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import * as I from '../introductionForm/style';
import * as G from '../style';
import * as S from './style';

function CertificateForm() {
  const {
    manager_license,
    manager_license_etc,
    setManagerLicense,
    setManagerLicenseEtc,
    clearManagerLicenseEtc,
    nullManagerLicenseEtc,
  } = useManagerFormStore((state) => state);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('자격증 선택하기');

  // if (manager_license && manager_license !== '기타') {
  //   setIsCertificateValid(true);
  // } else if (manager_license === '기타' && manager_license_etc) {
  //   setIsCertificateValid(true);
  // } else {
  //   setIsCertificateValid(false);
  // }

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
        <S.SelectButton type="button" onClick={() => setIsOptionsOpen(!isOptionsOpen)} isEtcClicked={!!manager_license}>
          {manager_license ? manager_license : selectedOption}
          {isOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
        </S.SelectButton>

        {isOptionsOpen && (
          <ul>
            <li>
              <S.OptionButton
                type="button"
                onClick={(e) => {
                  setIsOptionsOpen(false);
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
                  setIsOptionsOpen(false);
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
                  setIsOptionsOpen(false);
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
                  setIsOptionsOpen(false);
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
                  setIsOptionsOpen(false);
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
                  setIsOptionsOpen(false);
                  selectOptionHandler('기타');
                }}
              >
                기타
              </S.OptionButton>
            </li>
          </ul>
        )}
      </div>

      {manager_license && manager_license === '기타' && (
        <I.FormInput>
          <span>위 리스트에 없는 자격증을 입력해주세요.</span>

          <I.InputWrapper>
            <input type="text" value={manager_license_etc} placeholder="자격증 이름" onChange={inputChangeHandler} />

            {manager_license_etc && (
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
