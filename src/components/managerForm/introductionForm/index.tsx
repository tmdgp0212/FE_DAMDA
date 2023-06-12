import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './style';

interface IntroductionFormProps {
  state: any;
  dispatch: any;
  setIsNameValid: (isNameValid: boolean) => void;
  setIsPhoneNumberValid: (isPhoneNumberValid: boolean) => void;
}

function IntroductionForm({ state, dispatch, setIsNameValid, setIsPhoneNumberValid }: IntroductionFormProps) {
  const { manager_name, manager_phone } = state;
  const [nameErrorMessage, setErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]+/g, '');

    if (newName.length > 50) {
      setErrorMessage('최대 50자 까지 입력 가능합니다.');
      setIsNameValid(false);
    } else if (!newName.length) {
      setIsNameValid(false);
    } else {
      dispatch({ type: 'NAME', payload: { name: newName } });
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
    dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: newPhoneNumber } });

    if (newPhoneNumber.length === 10 || newPhoneNumber.length === 11) {
      const formattedPhoneNumber = formatPhoneNumber(newPhoneNumber);
      dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: formattedPhoneNumber } });
      setIsPhoneNumberValid(true);
      setPhoneErrorMessage('');
    } else {
      dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: newPhoneNumber } });
      setIsPhoneNumberValid(false);
      setPhoneErrorMessage('유효한 번호 양식이 아닙니다.');
    }
  };

  const nameClearHandler = () => {
    dispatch({ type: 'NAME_CLEAR' });
  };

  const phoneNumberClearHandler = () => {
    dispatch({ type: 'PHONE_NUMBER_CLEAR' });
  };

  return (
    <>
      <S.FormInput>
        <span>이름</span>

        <S.InputWrapper isError={nameErrorMessage}>
          <input type="text" value={manager_name} placeholder="김열다" onChange={nameChangeHandler} />

          {manager_name && (
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
            value={manager_phone}
            maxLength={13}
            placeholder="010-0000-0000"
            onChange={phoneNumberChangeHandler}
          />

          {manager_phone && (
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
