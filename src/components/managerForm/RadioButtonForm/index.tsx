import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import * as I from '../introductionForm/style';
import * as S from './style';

function RadioButtonForm({ state, dispatch, setIsRadioValid }: any) {
  const { main_job, main_job_etc, manager_drive } = state;
  const [isMainJobExist, setIsMainJobExist] = useState(false);
  if (main_job === null || manager_drive === null) {
    setIsRadioValid(false);
  } else if (main_job && main_job_etc && manager_drive) {
    setIsRadioValid(true);
  } else if (main_job && main_job_etc && !manager_drive) {
    setIsRadioValid(true);
  } else if (!main_job && manager_drive) {
    setIsRadioValid(true);
  } else if (!main_job && !manager_drive) {
    setIsRadioValid(true);
  } else {
    setIsRadioValid(false);
  }

  const mainJobChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true';
    dispatch({ type: 'MAIN_JOB', payload: { main_job: value } });
  };

  const setMainJobHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'MAIN_JOB_ETC', payload: { main_job2: e.target.value } });
  };

  const driveChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true';
    dispatch({ type: 'DRIVE', payload: { drive: value } });
  };

  const etcClearHandler = () => {
    dispatch({ type: 'MAIN_JOB_ETC_CLEAR' });
  };

  return (
    <>
      <S.RadioButtonFormContainer>
        <h3>정리수납 업무 외 본업이 있으신가요?</h3>

        <S.InputRadioGroup isMainJobExist={isMainJobExist}>
          <input
            type="radio"
            name="main_job"
            id="main_job_yes"
            value="true"
            onChange={(e) => {
              mainJobChangeHandler(e);
              setIsMainJobExist(true);
            }}
          />
          <label htmlFor="main_job_yes">네, 있어요</label>

          <input
            type="radio"
            name="main_job"
            id="main_job_no"
            value="false"
            onChange={(e) => {
              mainJobChangeHandler(e);
              setIsMainJobExist(false);
            }}
          />
          <label htmlFor="main_job_no">아뇨, 없어요</label>
        </S.InputRadioGroup>

        {isMainJobExist && (
          <I.FormInput>
            <span>본업을 알려주세요.</span>

            <I.InputWrapper>
              <input type="text" value={main_job_etc} placeholder="본업" onChange={setMainJobHandler} />

              {main_job_etc && (
                <I.Icon type="button" style={{ cursor: 'pointer' }} onClick={etcClearHandler}>
                  <Image src="/icons/input-clear-icon.svg" alt="input-clear-icon" fill />
                </I.Icon>
              )}
            </I.InputWrapper>
          </I.FormInput>
        )}
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
