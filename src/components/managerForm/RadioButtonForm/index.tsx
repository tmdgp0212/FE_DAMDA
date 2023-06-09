import React, { ChangeEvent, useState } from 'react';
import * as S from './style';

function RadioButtonForm({ dispatch }: any) {
  const mainJobChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true';
    dispatch({ type: 'MAIN_JOB', payload: { main_job: value } });
  };

  const driveChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true';
    dispatch({ type: 'DRIVE', payload: { drive: value } });
  };

  return (
    <>
      <S.RadioButtonFormContainer>
        <h3>정리수납 업무 외 본업이 있으신가요?</h3>

        <S.InputRadioGroup>
          <input type="radio" name="main_job" id="main_job_yes" value="true" onChange={mainJobChangeHandler} />
          <label htmlFor="main_job_yes">네, 있어요</label>

          <input type="radio" name="main_job" id="main_job_no" value="false" onChange={mainJobChangeHandler} />
          <label htmlFor="main_job_no">아뇨, 없어요</label>
        </S.InputRadioGroup>
      </S.RadioButtonFormContainer>

      <S.RadioButtonFormContainer>
        <h3>자차로 운전 가능하신가요?</h3>

        <S.InputRadioGroup>
          <input type="radio" name="drive" id="drive_yes" value="true" onChange={driveChangeHandler} />
          <label htmlFor="drive_yes">가능해요</label>

          <input type="radio" name="drive" id="drive_no" value="false" onChange={driveChangeHandler} />
          <label htmlFor="drive_no">불가능해요</label>
        </S.InputRadioGroup>
      </S.RadioButtonFormContainer>
    </>
  );
}

export default RadioButtonForm;
