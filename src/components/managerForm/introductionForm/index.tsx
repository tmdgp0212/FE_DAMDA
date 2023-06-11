import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import Image from 'next/image';

interface IntroductionFormProps {
  state: any;
  dispatch: any;
}

function IntroductionForm({ state, dispatch }: IntroductionFormProps) {
  const { manager_name, manager_phone } = state;
  const [nameErrorMessage, setErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    if (newName.length > 50) {
      setErrorMessage('최대 50자 까지 입력 가능합니다.');
    } else {
      dispatch({ type: 'NAME', payload: { name: newName } });
      setErrorMessage('');
    }
  };

  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;

    if (newPhoneNumber.length > 10) {
      setPhoneErrorMessage('유효한 번호 양식이 아닙니다.');
    } else {
      dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: newPhoneNumber } });
      setPhoneErrorMessage('');
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
