import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import useManagerFormStore from '@/store/managerForm';

import * as S from './style';

interface IntroductionFormProps {
  setIsNameValid: (isNameValid: boolean) => void;
  setIsPhoneNumberValid: (isPhoneNumberValid: boolean) => void;
}

function IntroductionForm({ setIsNameValid, setIsPhoneNumberValid }: IntroductionFormProps) {
  const { managerName, managerPhoneNumber, setManagerName, setPhoneNumber, clearManagerName, clearPhoneNumber } =
    useManagerFormStore((state) => state);

  const [nameErrorMessage, setErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  if (managerName !== '' && !nameErrorMessage) {
    setIsNameValid(true);
  } else {
    setIsNameValid(false);
  }

  if (managerPhoneNumber && !phoneErrorMessage) {
    setIsPhoneNumberValid(true);
  } else {
    setIsPhoneNumberValid(false);
  }

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]+/g, '');

    if (newName.length > 50) {
      setErrorMessage('최대 50자 까지 입력 가능합니다.');
      setIsNameValid(false);
    } else if (newName.length === 0) {
      setIsNameValid(false);
    } else {
      setManagerName(newName);
      setErrorMessage('');
      setIsNameValid(true);
    }
  };
  function formatPhoneNumber(phoneNumber: string) {
    let formattedNumber = phoneNumber;

    if (phoneNumber.length === 10) {
      formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else if (phoneNumber.length === 11) {
      formattedNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

    return formattedNumber;
  }

  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(newPhoneNumber);

    if (newPhoneNumber.length === 10 || newPhoneNumber.length === 11) {
      const formattedPhoneNumber = formatPhoneNumber(newPhoneNumber);
      setPhoneNumber(formattedPhoneNumber);
      setIsPhoneNumberValid(true);
      setPhoneErrorMessage('');
    } else {
      setPhoneNumber(newPhoneNumber);
      setIsPhoneNumberValid(false);
      setPhoneErrorMessage('유효한 번호 양식이 아닙니다.');
    }
  };

  const nameClearHandler = () => {
    clearManagerName();
  };

  const phoneNumberClearHandler = () => {
    clearPhoneNumber();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && managerName.length === 1) {
      console.log(managerName);
      setManagerName('');
    }
  };

  return (
    <>
      <S.FormInput>
        <span>이름</span>

        <S.InputWrapper isError={nameErrorMessage}>
          <input
            type="text"
            value={managerName}
            placeholder="김열다"
            onChange={nameChangeHandler}
            onKeyDown={keyDownHandler}
          />

          {managerName && (
            <S.Icon type="button" style={{ cursor: 'pointer' }} onClick={nameClearHandler}>
              <Image src="/icons/input-clear-icon.svg" alt="input-clear-icon" fill />
            </S.Icon>
          )}

          {nameErrorMessage && (
            <S.Icon type="button">
              <Image src="/icons/input-error-icon.svg" alt="input-error-icon" fill />
            </S.Icon>
          )}

          {nameErrorMessage && <S.ErrorMessage>{nameErrorMessage}</S.ErrorMessage>}
        </S.InputWrapper>
      </S.FormInput>

      <S.FormInput>
        <span>연락처</span>

        <S.InputWrapper isError={phoneErrorMessage}>
          <input
            type="text"
            value={managerPhoneNumber}
            maxLength={13}
            placeholder="010-0000-0000"
            onChange={phoneNumberChangeHandler}
          />

          {managerPhoneNumber && (
            <S.Icon type="button" style={{ cursor: 'pointer' }} onClick={phoneNumberClearHandler}>
              <Image src="/icons/input-clear-icon.svg" alt="input-clear-icon" fill />
            </S.Icon>
          )}

          {phoneErrorMessage && (
            <S.Icon type="button">
              <Image src="/icons/input-error-icon.svg" alt="input-error-icon" fill />
            </S.Icon>
          )}

          {phoneErrorMessage && <S.ErrorMessage>{phoneErrorMessage}</S.ErrorMessage>}
        </S.InputWrapper>
      </S.FormInput>
    </>
  );
}

export default IntroductionForm;
