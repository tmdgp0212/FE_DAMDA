import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import useManagerFormStore from '@/store/managerForm';

import * as I from '../introductionForm/style';
import * as S from './style';

function RadioButtonForm() {
  const {
    mainJobStatus,
    mainJobStatusEtc,
    vehicle,
    setMainJob,
    setMainJobEtc,
    setMainJobEtcNull,
    clearMainJobEtc,
    setManagerDrive,
  } = useManagerFormStore((state) => state);

  const mainJobChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === 'no') {
      setMainJobEtcNull();
      setMainJob(false);
    } else {
      setMainJob(true);
    }
  };

  const setMainJobHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMainJobEtc(e.target.value);
  };

  const driveChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const data = value === 'no' ? false : true;
    setManagerDrive(data);
  };

  const etcClearHandler = () => {
    clearMainJobEtc();
  };

  return (
    <>
      <S.RadioButtonFormContainer>
        <h3>정리수납 업무 외 본업이 있으신가요?</h3>

        <S.InputRadioGroup isMainJobExist={mainJobStatus}>
          <input
            type="radio"
            name="main_job"
            id="main_job_yes"
            value="yes"
            onChange={(e) => {
              mainJobChangeHandler(e);
            }}
            checked={mainJobStatus === true}
          />
          <label htmlFor="main_job_yes">네, 있어요</label>

          <input
            type="radio"
            name="main_job"
            id="main_job_no"
            value="no"
            onChange={(e) => {
              mainJobChangeHandler(e);
            }}
            checked={mainJobStatus === false}
          />
          <label htmlFor="main_job_no">아뇨, 없어요</label>
        </S.InputRadioGroup>

        {mainJobStatus && (
          <I.FormInput>
            <span>본업을 알려주세요.</span>

            <I.InputWrapper>
              <input type="text" value={mainJobStatusEtc} placeholder="본업" onChange={setMainJobHandler} />

              {mainJobStatusEtc && (
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
          <input
            type="radio"
            name="drive"
            id="drive_yes"
            value="yes"
            onChange={driveChangeHandler}
            checked={vehicle === true}
          />
          <label htmlFor="drive_yes">가능해요</label>

          <input
            type="radio"
            name="drive"
            id="drive_no"
            value="no"
            onChange={driveChangeHandler}
            checked={vehicle === false}
          />
          <label htmlFor="drive_no">불가능해요</label>
        </S.InputRadioGroup>
      </S.RadioButtonFormContainer>
    </>
  );
}

export default RadioButtonForm;
