import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './style';

interface IntroductionFormProps {
  state: any;
  dispatch: any;
  setIsIntroductionValid: (isIntroductionValid: boolean) => void;
}

function IntroductionForm({ state, dispatch, setIsIntroductionValid }: IntroductionFormProps) {
  const { manager_name, manager_phone } = state;
  const [nameErrorMessage, setErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  if (manager_name && !nameErrorMessage) {
    setIsIntroductionValid(true);
  } else if ((manager_phone && manager_phone.length !== 10) || manager_phone.length !== 11) {
    setIsIntroductionValid(true);
  } else {
    setIsIntroductionValid(false);
  }

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]+/g, '');

    if (newName.length > 50) {
      setErrorMessage('최대 50자 까지 입력 가능합니다.');
    } else {
      dispatch({ type: 'NAME', payload: { name: newName } });
      setErrorMessage('');
    }
  };

  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value.replace(/[^0-9]/g, '');
    dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: newPhoneNumber } });

    // if (newPhoneNumber.length > 10 && newPhoneNumber.length !== 10) {
    //   // setPhoneErrorMessage('유효한 번호 양식이 아닙니다.');
    // } else if (newPhoneNumber.length > 10 && newPhoneNumber.length !== 11) {
    //   // setPhoneErrorMessage('유효한 번호 양식이 아닙니다.');
    // } else {
    //   dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: newPhoneNumber } });
    //   setErrorMessage('');
    // }
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
          <input type="text" value={manager_phone} placeholder="010-0000-0000" onChange={phoneNumberChangeHandler} />

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
