import React, { ChangeEvent } from 'react';
import * as S from './style';

interface IntroductionFormProps {
  dispatch: any;
}

function IntroductionForm({ dispatch }: IntroductionFormProps) {
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'NAME', payload: { name: e.target.value } });
  };

  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'PHONE_NUMBER', payload: { phoneNumber: e.target.value } });
  };

  return (
    <>
      <S.FormInput>
        <span>이름</span>
        <input type="text" placeholder="김열다" onChange={nameChangeHandler} />
      </S.FormInput>

      <S.FormInput>
        <span>연락처</span>
        <input type="text" placeholder="010-0000-0000" onChange={phoneNumberChangeHandler} />
      </S.FormInput>
    </>
  );
}

export default IntroductionForm;
